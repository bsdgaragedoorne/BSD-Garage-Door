import { biz } from '../data/site.js';
import LeadForm from './LeadForm.jsx';
import { Check, Shield, Clock, Pin } from './Icons.jsx';

const TRUST = [
  { icon: Clock, label: '24 hr Sun-Thu' },
  { icon: Check, label: 'Licensed & insured' },
  { icon: Shield, label: 'Same-day when we can' },
  { icon: Pin, label: 'Franklin MetroWest' },
];

/**
 * Still poster hero. Video is omitted so the first paint is the photograph.
 */
export default function HeroSlider() {
  return (
    <section className="chero chero--fx chero--video">
      <div className="fxbg">
        <img
          className="fxposter is-on"
          src="/img/hero-day-1280.webp"
          srcSet="/img/hero-day-560.webp 560w, /img/hero-day-860.webp 860w, /img/hero-day-1280.webp 1280w"
          sizes="100vw"
          alt="White raised-panel garage door on a Franklin-area home in daylight"
          width="1280"
          height="720"
          fetchpriority="high"
          decoding="async"
        />
      </div>
      <div className="chero__scrim" />

      <div className="wrap chero__inner">
        <div className="chero__copy">
          <div className="fxeyebrow">Franklin garage door specialists</div>
          <h1 className="lines is-in">
            <span className="line">
              <span>Garage door down?</span>
            </span>
            <span className="line">
              <span className="accent">We&rsquo;re on it.</span>
            </span>
          </h1>
          <p className="chero__sub">
            Fast, professional garage door repair throughout Franklin and MetroWest. From broken
            springs and faulty openers to off-track doors, we get your garage door working safely again -
            often the same night.
          </p>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone}
            </a>
            <a href="#book" className="btn btn--ghost btn--ghost-light">
              Request a quote
            </a>
          </div>
        </div>

        <div className="chero__form" id="book">
          <div className="fxeyebrow">Book online</div>
          <h2>Need your door checked today?</h2>
          <LeadForm formName="contact" bare />
        </div>

        <div className="chero__trust">
          {TRUST.map((t) => {
            const Icon = t.icon;
            return (
              <span key={t.label}>
                <Icon size={22} />
                {t.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
