import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { biz, googleReviews } from '../data/site.js';

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
  return (
    <article className="grev__card">
      <div className="grev__who">
        {review.photo ? (
          <img src={review.photo} alt="" width="64" height="64" />
        ) : (
          <span className="grev__initials" aria-hidden="true">
            {review.initials}
          </span>
        )}
        <div>
          <h3>{review.name}</h3>
          <p>{review.role}</p>
        </div>
        <QuoteMark />
      </div>
      <p className="grev__text">{review.text}</p>
      <Stars value={review.rating} />
    </article>
  );
}

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const reviews = googleReviews.filter((review) => review.rating >= 5);
  const total = reviews.length;
  const visible = total
    ? [reviews[index], ...(total > 1 ? [reviews[(index + 1) % total]] : [])]
    : [];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="section grev" id="reviews" aria-labelledby="grev-title">
      <div className="wrap">
        <Reveal className="grev__panel">
          <div className="grev__head">
            <p className="grev__kicker">Google reviews</p>
            <div className="grev__title">
              <h2 id="grev-title">
                Keeping Your Door <span>Strong</span>
              </h2>
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
              5 star reviews on Google
            </a>
          </div>

          <div className="grev__grid">
            {visible.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
