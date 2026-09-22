import { Link } from 'react-router-dom';
import { biz, services } from '../data/site.js';
import { Phone, Mail, Pin, ArrowUpRight } from './Icons.jsx';

const featuredSlugs = [
  'springs-replacement',
  'opener-repair',
  'new-door-installation',
  'off-track-repair',
  'emergency-services',
];

const featuredServices = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__head">
          <h2 className="footer__title">
            Get In <span>Touch</span>
          </h2>
          <Link to="/contact" className="footer__go" aria-label="Go to contact page">
            <ArrowUpRight size={22} />
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" aria-label={`${biz.name} - home`}>
              <img
                src="/img/logo-440.webp"
                srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
                sizes="180px"
                alt={biz.name}
                title={biz.name}
                width="440"
                height="304"
                loading="lazy"
              />
            </Link>
            <p>
              Licensed garage door repair and installation across Franklin and MetroWest. Most jobs
              finished on the first visit.
            </p>
            <div className="footer__social">
              <a href={biz.phoneHref} aria-label={`Call ${biz.phone}`}>
                <Phone size={15} />
              </a>
              <a href={biz.emailHref} aria-label={`Email ${biz.email}`}>
                <Mail size={15} />
              </a>
              <a href={biz.mapUrl} target="_blank" rel="noreferrer" aria-label="Open shop location on the map">
                <Pin size={15} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__h">
              <Link to="/services">Services</Link>
            </p>
            <ul className="footer__links">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__h">Contact</p>
            <address className="footer__nap">
              <span className="footer__nap-row">
                <Mail size={15} />
                <a href={biz.emailHref}>{biz.email}</a>
              </span>
              <span className="footer__nap-row">
                <Pin size={15} />
                <a href={biz.mapUrl} target="_blank" rel="noreferrer">
                  {biz.street}
                  <br />
                  {biz.city}, {biz.state} {biz.zip}
                </a>
              </span>
              <span className="footer__nap-row">
                <Phone size={15} />
                <a href={biz.phoneHref}>{biz.phone}</a>
              </span>
            </address>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {year} {biz.name} | All Rights Reserved
          </span>
          <nav aria-label="Legal">
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
