import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { Check, Clock, Gear, IconDoor, People, ShieldPlain } from './Icons.jsx';

const aboutTabs = [
  {
    id: 'repair',
    label: 'Repair',
    body: 'Springs, openers, cables and off-track doors diagnosed on the truck. Most jobs finish in one visit because the common parts ride with us.',
  },
  {
    id: 'install',
    label: 'Install',
    body: 'New insulated doors and openers measured on site, priced in writing, and fitted to manufacturer spec - not a generic kit from a box store.',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    body: 'Door stuck open or a car trapped inside? We take those calls around the clock, seven days a week, and tell you plainly whether it is urgent.',
  },
];

const aboutTicks = [
  'Licensed, insured & bonded',
  'Priced in writing before we start',
  'Same-visit repairs on stocked trucks',
  'Our technicians - never subcontracted',
];

export function AboutIntro() {
  const [tab, setTab] = useState('repair');
  const current = aboutTabs.find((t) => t.id === tab) || aboutTabs[0];

  return (
    <section className="section about3d" id="about-us">
      <div className="wrap about3d__grid">
        <Reveal className="about3d__stage">
          <svg className="about3d__geo" viewBox="0 0 420 480" aria-hidden="true" focusable="false">
            <polygon points="86,28 390,96 318,458 28,372" fill="#fdeeee" />
            <polygon points="72,16 402,84 328,470 16,368" fill="none" stroke="#e30613" strokeWidth="2.2" />
            <polygon points="148,58 408,38 372,438 108,468" fill="none" stroke="#111111" strokeWidth="2.2" />
          </svg>

          <div className="about3d__model">
            <img
              src="/img/van-clean-780.webp"
              srcSet="/img/van-clean-520.webp 520w, /img/van-clean-780.webp 780w, /img/van-clean-1040.webp 1040w"
              sizes="(min-width: 1000px) 38vw, 86vw"
              alt="BSD Garage Door service van signed with the company logo and phone number 843-279-3345"
              title="BSD Garage Door service van in Franklin, MA"
              width="1040"
              height="607"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about3d__badge">
            <strong>Franklin, MA</strong>
            <span>Licensed &amp; insured local repair</span>
          </div>
        </Reveal>

        <Reveal className="about3d__copy" delay={80}>
          <p className="about3d__kicker">About us</p>
          <h2>
            Trust the <span>experts</span> for your garage door
          </h2>

          <div className="about3d__tabs" role="tablist" aria-label="About BSD Garage Door">
            {aboutTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`about-tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`about-panel-${t.id}`}
                className={tab === t.id ? 'is-on' : undefined}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="about3d__lede" id={`about-panel-${current.id}`} role="tabpanel" aria-labelledby={`about-tab-${current.id}`}>
            {current.body}
          </p>

          <ul className="about3d__ticks">
            {aboutTicks.map((item) => (
              <li key={item}>
                <span>
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn btn--ghost">
            Read More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const marqueeItems = [
  'Garage Door Repair',
  'Same-Day Service',
  'Spring Replacement',
  'Licensed & Insured',
  'New Door Installation',
  'Local & Trusted',
  '24/7 Emergency Service',
];

export function TrustMarquee() {
  return (
    <div className="tmarq">
      <div className="tmarq__track">
        {[0, 1].map((copy) => (
          <div className="tmarq__group" key={copy} aria-hidden={copy === 1 || undefined}>
            {marqueeItems.map((item) => (
              <span className="tmarq__item" key={item}>
                <span className="tmarq__text">{item}</span>
                <span className="tmarq__icon" aria-hidden="true">
                  <IconDoor size={24} />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const aboutDefaultCards = [
  {
    icon: ShieldPlain,
    title: 'Licensed & Insured',
    body: 'Your property is in safe hands with our fully licensed and insured team.',
  },
  {
    icon: Clock,
    title: '24-Hour Service',
    body: "We're here when you need us, with fast response times day or night.",
  },
  {
    icon: Gear,
    title: 'Expert Workmanship',
    body: 'High-quality repairs and installations built to last.',
  },
  {
    icon: People,
    title: 'Local & Trusted',
    body: 'A locally owned business proudly serving our community with honest, reliable service.',
  },
];

/**
 * Homepage "Why Choose Us" band ("The difference"). Called with no arguments it
 * renders the homepage content verbatim; passing `kicker`/`heading`/`lede`/`cards`
 * lets a service page reuse the same design with its own content (see
 * ServiceTemplate). `cards` items are `{ icon, title, body }` with `icon` already
 * resolved to a component.
 */
export function AboutBlock({ id = 'about', kicker, heading, lede, cards } = {}) {
  const items = cards || aboutDefaultCards;
  // A custom heading can be far longer than the homepage's short "Why Choose Us"
  // (which is pinned to one line); flag it so the stylesheet lets it wrap.
  const wrapHeading = Boolean(heading);

  return (
    <section className={`section why why--diff${wrapHeading ? ' why--wrap' : ''}`} id={id}>
      <div className="why__side why__side--left" aria-hidden="true">
        <img
          src="/img/hero-day-1280.webp"
          srcSet="/img/hero-day-560.webp 560w, /img/hero-day-860.webp 860w, /img/hero-day-1280.webp 1280w"
          sizes="32vw"
          alt=""
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="why__side why__side--right" aria-hidden="true">
        <img
          src="/img/faq-door-760.webp"
          srcSet="/img/faq-door-460.webp 460w, /img/faq-door-760.webp 760w"
          sizes="32vw"
          alt=""
          width="760"
          height="760"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="wrap why__inner">
        <Reveal className="whyhead">
          <p className="whyhead__kicker">{kicker || 'The difference'}</p>
          <h2>
            {heading || (
              <>
                Why <span>Choose Us</span>
              </>
            )}
          </h2>
          <p className="whyhead__lede">
            {lede ||
              'We combine expert service, quality workmanship, and a customer-first approach to keep your garage door running safely and smoothly.'}
          </p>
        </Reveal>

        <div className="whygrid">
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal className="whycard" key={c.title}>
                <span className="whycard__icon">
                  <Icon size={30} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
