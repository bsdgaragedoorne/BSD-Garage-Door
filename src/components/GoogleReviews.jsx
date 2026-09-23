import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import ReviewWidget from './ReviewWidget.jsx';
import { biz, googleReviews, googleRating } from '../data/site.js';

// Fallback dataset: the existing hardcoded testimonials, filtered exactly as
// before. Rendered on the server/prerender so the section is never empty, and
// kept as the fallback if the live Google fetch fails.
const FALLBACK_REVIEWS = googleReviews.filter((review) => review.rating >= 5);

/** First letters of the first two words of a name, e.g. "Rick Almeida" -> "RA". */
function initialsFrom(name) {
  return (name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

function QuoteMark() {
  return (
    <span className="grev__quote" aria-hidden="true">
      ““
    </span>
  );
}

function Stars({ value }) {
  return (
    <span className="grev__stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={i < value ? 'is-on' : undefined}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2.8 14.7 8.6l6.4.9-4.6 4.5 1.1 6.3L12 17.4 6.4 20.3l1.1-6.3L2.9 9.5l6.4-.9Z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  // Per-review Google link for attribution; fall back to the business listing.
  const sourceUrl = review.googleMapsUri || biz.mapUrl;
  return (
    <article className="grev__card">
      <div className="grev__who">
        {review.photo ? (
          <img src={review.photo} alt="" width="64" height="64" loading="lazy" decoding="async" />
        ) : (
          <span className="grev__initials" aria-hidden="true">
            {review.initials}
          </span>
        )}
        <div>
          <div className="grev__name">{review.name}</div>
          <p>{review.role}</p>
        </div>
        <QuoteMark />
      </div>
      <p className="grev__text">{review.text}</p>
      <Stars value={review.rating} />
      <a className="grev__source" href={sourceUrl} target="_blank" rel="noreferrer">
        View on Google
      </a>
    </article>
  );
}

export default function GoogleReviews() {
  // Start from the hardcoded fallback so prerendered HTML is populated.
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);
  const [rating, setRating] = useState(googleRating.value);
  const [count, setCount] = useState(googleRating.count);
  const [index, setIndex] = useState(0);

  // After hydration, try to load live Google reviews. Any failure keeps the
  // existing fallback data on screen.
  useEffect(() => {
    let cancelled = false;
    fetch('/.netlify/functions/reviews')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('reviews fetch failed'))))
      .then((data) => {
        if (cancelled || !data) return;

        const live = Array.isArray(data.reviews)
          ? data.reviews
              .filter((review) => (review.rating ?? 0) >= 5)
              .map((review) => ({
                name: review.name,
                photo: review.photo,
                initials: initialsFrom(review.name),
                rating: review.rating,
                text: review.text,
                // Relative publish time ("2 months ago") occupies the existing
                // role/date slot. We never invent a service/job type.
                role: review.date,
                googleMapsUri: review.googleMapsUri,
              }))
          : [];

        if (live.length > 0) {
          setReviews(live);
          setIndex(0);
        }
        if (typeof data.rating === 'number') setRating(data.rating);
        if (typeof data.userRatingCount === 'number') setCount(data.userRatingCount);
      })
      .catch(() => {
        /* Keep the fallback reviews already on screen. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const total = reviews.length;
  const visible = total
    ? [reviews[index % total], ...(total > 1 ? [reviews[(index + 1) % total]] : [])]
    : [];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const scoreText = `${Number(rating).toFixed(1)} ★ · ${count} reviews on Google`;

  return (
    <section className="section grev" id="reviews" aria-labelledby="grev-title">
      <div className="wrap">
        <Reveal className="grev__panel">
          <div className="grev__head">
            <p className="grev__kicker">Google reviews</p>
            <div className="grev__title">
              <div id="grev-title" className="grev__heading">
                Keeping Your Door <span>Strong</span>
              </div>
              <div className="grev__nav">
                <button type="button" className="grev__arrow" onClick={prev} aria-label="Previous reviews">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 5.5 8.5 12 15 18.5" />
                  </svg>
                </button>
                <button type="button" className="grev__arrow grev__arrow--next" onClick={next} aria-label="Next reviews">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5.5 15.5 12 9 18.5" />
                  </svg>
                </button>
              </div>
            </div>
            <a className="grev__score" href={biz.mapUrl} target="_blank" rel="noreferrer">
              {scoreText}
            </a>
          </div>

          <div className="grev__grid">
            {visible.map((review, i) => (
              <ReviewCard key={`${i}-${review.name}`} review={review} />
            ))}
          </div>

          <ReviewWidget />
        </Reveal>
      </div>
    </section>
  );
}
