import { useRef } from 'react';
import Reveal from './Reveal.jsx';
import { homeFaqs } from '../data/site.js';

export default function FaqSection() {
  const listRef = useRef(null);

  // <details name="..."> would do this natively, but support is still recent
  // enough that handling it here is the safer option.
  const closeSiblings = (e) => {
    if (!e.target.open || !listRef.current) return;
    listRef.current.querySelectorAll('details[open]').forEach((d) => {
      if (d !== e.target) d.open = false;
    });
  };

  return (
    <section className="section faqsec" id="faq">
      <div className="wrap faqsec__grid">
        <Reveal className="faqsec__body">
          <div className="why__eyebrow">
            <i />
            Common questions
            <i />
          </div>

          <h2>
            Find answers to the most common <span className="accent">customer queries</span>
          </h2>

          <div className="faqcards" ref={listRef}>
            {homeFaqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 4) * 70}>
                <details open={i === 0} onToggle={closeSiblings}>
                  <summary>
                    <span>{f.q}</span>
                    <i aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </i>
                  </summary>
                  <div className="faqcards__body">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
