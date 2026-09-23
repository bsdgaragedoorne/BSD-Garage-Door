import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { biz, processSteps } from '../data/site.js';
import { Clock, Gear, IconAward, IconToolbox, Phone, Arrow, ShieldPlain } from './Icons.jsx';
import Reveal from './Reveal.jsx';

const talkStats = [
  { icon: Gear, value: '24hr', label: 'Emergency hours' },
  { icon: IconAward, value: '10+', label: 'Years of experience' },
  { icon: Clock, value: 'Same-day', label: 'Typical response' },
  { icon: ShieldPlain, value: 'Licensed', label: '& insured' },
];

export function NumberTalks() {
  const phoneNice = biz.phone.replace(/^(\d{3})-(\d{3})-(\d{4})$/, '($1) $2-$3');

  return (
    <section className="section numtalk" id="number-talks" aria-labelledby="numtalk-title">
      <div className="wrap">
        <Reveal className="numtalk__card">
          <div className="numtalk__top">
            <div className="numtalk__copy">
              <p className="numtalk__kicker">Number talks</p>
              <h2 id="numtalk-title">
                Car stuck inside?
                <br />
                Door won&rsquo;t <span>close?</span>
                <br />
                We&rsquo;ll get it fixed.
              </h2>
              <p className="numtalk__body">
                Broken spring, jammed door, off-track rollers or an opener that suddenly stopped
                working? Get fast garage door service in Franklin and MetroWest and get your door
                &mdash; and your day &mdash; back on track.
              </p>
              <a href={biz.phoneHref} className="numtalk__phone">
                <span className="numtalk__dial" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <span className="numtalk__phone-txt">
                  <small>Need help?</small>
                  {phoneNice}
                </span>
              </a>
            </div>

            <div className="numtalk__stats">
              {talkStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div className="numtalk__stat" key={s.label}>
                    <span className="numtalk__stat-icon">
                      <Icon size={28} />
                    </span>
                    <span>
                      <b>{s.value}</b>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="numtalk__cta">
            <div className="numtalk__cta-copy">
              <span className="numtalk__box" aria-hidden="true">
                <IconToolbox size={28} />
              </span>
              <p>
                Raising the Standard
                <br />
                One Door at a Time
              </p>
            </div>

            <div className="numtalk__photo">
              <img
                src="/img/logo-440.webp"
                srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
                sizes="(max-width: 899px) 140px, 220px"
                alt="BSD Garage Door"
                title="BSD Garage Door"
                width="440"
                height="304"
                loading="lazy"
                decoding="async"
              />
            </div>

            <Link to="/contact" className="numtalk__go">
              Get Service
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessBar() {
  const total = processSteps.length;
  const [upto, setUpto] = useState(total);
  const rootRef = useRef(null);
  const desktopRef = useRef(false);
  const fill = total <= 1 ? '100%' : `${((upto - 1) / (total - 1)) * 100}%`;

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    desktopRef.current = desktop.matches;

    if (desktop.matches || reduce.matches) {
      setUpto(total);
      const sync = () => {
        desktopRef.current = desktop.matches;
        if (desktop.matches || reduce.matches) setUpto(total);
      };
      desktop.addEventListener?.('change', sync);
      return () => desktop.removeEventListener?.('change', sync);
    }

    setUpto(1);
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.82;
      const end = vh * 0.2;
      const progress = (start - r.top) / Math.max(1, r.height + start - end);
      const n = Math.min(total, Math.max(1, Math.round(progress * total)));
      setUpto(n);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [total]);

  return (
    <Reveal className="pbar" style={{ '--pbar-fill': fill }}>
      <div ref={rootRef}>
        <div className="pbar__track" aria-hidden="true">
          <span className="pbar__fill" />
        </div>
        <ol className="pbar__list">
          {processSteps.map((s, i) => {
            const n = i + 1;
            return (
              <li
                key={s.title}
                className={`pbar__step${n <= upto ? ' is-on' : ''}`}
                style={{ '--i': i }}
                onMouseEnter={() => {
                  if (desktopRef.current) setUpto(n);
                }}
                onMouseLeave={() => {
                  if (desktopRef.current) setUpto(total);
                }}
              >
                <span className="pbar__dot">{String(n).padStart(2, '0')}</span>
                <div className="pbar__copy">
                  <div className="pbar__title">{s.title}</div>
                  <p>{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}

export function HowACall() {
  return (
    <section className="section section--dark processbar" id="how-a-call-goes">
      <div className="wrap">
        <Reveal className="sechead">
          <div className="eyebrow">How a call goes</div>
          <h2>No mystery, no pressure</h2>
        </Reveal>
        <ProcessBar />
      </div>
    </section>
  );
}

export function CtaBand({
  // Array of strings renders one line each, so the copy breaks where it was
  // written rather than wherever the column happens to run out.
  lines = ['One door at a time'],
  body = 'Garage door repair, maintenance and new installs for homes and businesses across Franklin and MetroWest.',
}) {
  return (
    <section className="ctaband ctaband--banner">
      <div className="wrap">
        <div className="ctaband__card">
          <img
            className="ctaband__bg"
            src="/img/pagehead-1600.webp"
            srcSet="/img/pagehead-760.webp 760w, /img/pagehead-1100.webp 1100w, /img/pagehead-1600.webp 1600w"
            sizes="(min-width: 1100px) 1100px, 92vw"
            alt=""
            width="1024"
            height="682"
            loading="lazy"
            decoding="async"
          />
          <div className="ctaband__copy">
            <div className="ctaband__title">
              {lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <p>{body}</p>
            <Link to="/contact" className="btn btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, title = 'Questions we get asked every week', eyebrow = 'FAQ' }) {
  return (
    <>
      <div className="sechead">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <div className="faq">
        {items.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>
              <span>{f.q}</span>
            </summary>
            <div className="faq__body">{f.a}</div>
          </details>
        ))}
      </div>
    </>
  );
}

export function Crumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map((t, i) => (
        <span key={t.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === trail.length - 1 ? (
            <span aria-current="page">{t.name}</span>
          ) : (
            <Link to={t.path}>{t.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function LinkGrid({ items, cols = 3 }) {
  return (
    <div className={`linkgrid linkgrid--${cols}`}>
      {items.map((i) => (
        <Link key={i.to} to={i.to}>
          {i.label}
          <Arrow size={16} />
        </Link>
      ))}
    </div>
  );
}
