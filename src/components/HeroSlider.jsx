import { biz } from '../data/site.js';
import LeadForm from './LeadForm.jsx';
import { Check, Shield, Clock, Pin } from './Icons.jsx';

const TRUST = [
  { icon: Clock, label: 'Open 24/7' },
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
          title="Garage Door Repair in Franklin, MA"
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
              <span>Garage Door Repair</span>
            </span>
            <span className="line">
              <span className="accent">in Franklin</span>
            </span>
          </h1>
          <p className="chero__sub">
            Get fast, professional Garage Door Repair in Franklin, from broken springs and faulty
            openers to off-track doors, often fixed the same night.
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
          <div className="chero__form-title">Need your door checked today?</div>
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
