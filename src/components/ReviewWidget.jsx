import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { biz } from '../data/site.js';

/**
 * "Leave Us A Review" widget for the homepage testimonials section.
 *
 * Faithful React port of the Review Link Generator widget: a site-styled trigger
 * button opens a popup that asks for a star rating, routes 4–5 star raters to the
 * Google review page and low raters to a private feedback form (posted to the
 * business's own review tool). The popup is portaled to <body> so its fixed
 * overlay is not trapped by the testimonials panel's transform.
 */

const REVIEW_LINK = `https://search.google.com/local/writereview?placeid=${biz.placeId}`;
const BUSINESS_NAME = biz.name;
const BUSINESS_EMAIL = biz.email;
const PLATFORM = 'google';
const MIN_RATING = 4;
const FEEDBACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/send-feedback';
const TRACK_ENDPOINT = 'https://reviewtool.gsmarketingroup.com/api/track-event';
const PLATFORM_HASH = '#review';

export default function ReviewWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [view, setView] = useState('rate'); // 'rate' | 'feedback' | 'thanks'
  const [feedback, setFeedback] = useState('');
  const lastRatingRef = useRef(0);

  const trackEvent = useCallback((eventType, extra) => {
    if (!TRACK_ENDPOINT) return;
    const payload = {
      businessEmail: BUSINESS_EMAIL,
      businessName: BUSINESS_NAME,
      platform: PLATFORM,
      eventType,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer || '',
      reviewLink: REVIEW_LINK,
      widgetUrl: window.location.origin + window.location.pathname + (window.location.hash || ''),
      ...(extra || {}),
    };
    try {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: 'application/json' }));
        return;
      }
      fetch(TRACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* ignore tracking errors */
    }
  }, []);

  const openPopup = useCallback(
    (source) => {
      setRating(0);
      setView('rate');
      setFeedback('');
      setOpen(true);
      trackEvent('widget_open', { source: source || 'button' });
    },
    [trackEvent]
  );

  const closePopup = useCallback(() => setOpen(false), []);

  // Lock body scroll while the popup is open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close, and support opening from a #review hash.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const normalize = (h) => (h || '').toLowerCase().split('?')[0];
    const maybeOpenFromHash = () => {
      if (normalize(window.location.hash) === PLATFORM_HASH) openPopup('hash');
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('hashchange', maybeOpenFromHash);
    maybeOpenFromHash();
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', maybeOpenFromHash);
    };
  }, [openPopup]);

  const submitReview = () => {
    if (!rating) {
      window.alert('Please select a rating before submitting.');
      return;
    }
    lastRatingRef.current = rating;
    if (rating >= MIN_RATING) {
      trackEvent('review_redirect', { rating });
      window.location.href = REVIEW_LINK;
    } else {
      setView('feedback');
    }
  };

  const submitFeedback = () => {
    if (feedback.trim() === '') {
      window.alert('Please enter your feedback before submitting.');
      return;
    }
    const payload = {
      businessName: BUSINESS_NAME,
      businessEmail: BUSINESS_EMAIL,
      customerRating: lastRatingRef.current || 0,
      customerFeedback: feedback,
      platform: PLATFORM,
      timestamp: new Date().toISOString(),
    };
    fetch(FEEDBACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send feedback');
        return res.json().catch(() => ({}));
      })
      .then(() => {
        trackEvent('feedback_submit', { rating: lastRatingRef.current || 0 });
        setView('thanks');
      })
      .catch(() => {
        window.alert('Sorry, there was a problem sending your feedback. Please try again.');
      });
  };

  const popup = (
    <div
      className="rlg-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Leave a review for ${BUSINESS_NAME}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="rlg-popup-content">
        <span
          className="rlg-close"
          role="button"
          tabIndex={0}
          aria-label="Close"
          onClick={closePopup}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') closePopup();
          }}
        >
          &times;
        </span>
        <div className="rlg-review-container">
          <h3>{BUSINESS_NAME}</h3>
          <p>We value your feedback! Please rate our service.</p>

          {view === 'rate' && (
            <div className="rlg-star-rating-wrapper">
              <div className="rlg-star-rating">
                {[5, 4, 3, 2, 1].map((n) => (
                  <Fragment key={n}>
                    <input
                      type="radio"
                      id={`rlgStar${n}`}
                      name="rlgRating"
                      value={n}
                      checked={rating === n}
                      onChange={() => setRating(n)}
                    />
                    <label htmlFor={`rlgStar${n}`} title={`${n} star${n > 1 ? 's' : ''}`}>
                      ★
                    </label>
                  </Fragment>
                ))}
              </div>
              <button type="button" className="rlg-submit-btn" onClick={submitReview}>
                Submit Review
              </button>
            </div>
          )}

          {view === 'feedback' && (
            <div className="rlg-feedback-form">
              <h3>Your Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Please let us know how we can improve our service..."
              />
              <button type="button" className="rlg-submit-btn" onClick={submitFeedback}>
                Submit Feedback
              </button>
            </div>
          )}

          {view === 'thanks' && (
            <div className="rlg-thank-you">
              <p>✓</p>
              <p>Thank you for your feedback!</p>
            </div>
          )}

          {view === 'rate' && (
            <div className="rlg-positive-reviews">
              <h3>Our most recent online review:</h3>
              <div className="rlg-review">
                <div className="rlg-review-avatar rlg-review-avatar-fallback">
                  <span>J</span>
                  <img
                    className="rlg-review-avatar-img"
                    src="https://cdn.jsdelivr.net/gh/yamos28/ReviewWidget26@main/public/reviewer-images/7.jpg"
                    alt="Jamie Fox"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentNode.classList.add('rlg-avatar-fallback');
                    }}
                  />
                </div>
                <div className="rlg-review-content">
                  <strong>Jamie Fox</strong>
                  <div className="rlg-stars">★★★★</div>
                  <span className="rlg-time">1 month ago</span>
                  <p>
                    Fast turnaround and great results. BSD Garage Door are definitily in my top
                    recommendations from now on.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grev__review-cta">
        <button type="button" className="btn btn--fx" onClick={() => openPopup('button')}>
          Leave Us A Review
        </button>
      </div>
      {open && typeof document !== 'undefined' && createPortal(popup, document.body)}
    </>
  );
}
