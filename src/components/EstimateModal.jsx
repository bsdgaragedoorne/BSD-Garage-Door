import { useCallback, useEffect, useRef, useState } from 'react';
import LeadForm from './LeadForm.jsx';
import { Bolt, FileText, Phone, ShieldPlain, Wrench } from './Icons.jsx';
import { biz } from '../data/site.js';

const KEY = 'tlgd_estimate_shown';

const POINTS = [
  {
    icon: FileText,
    title: 'Free written estimate,',
    detail: 'no obligation',
  },
  {
    icon: Wrench,
    title: 'Diagnostic fee waived',
    detail: 'when you approve the repair',
  },
  {
    icon: ShieldPlain,
    title: 'Licensed, insured and bonded',
    detail: 'for your peace of mind',
  },
  {
    icon: Bolt,
    title: 'Same-day service',
    detail: 'across the Franklin area',
  },
];

/**
 * Fires on: exit intent (pointer leaving the top of the viewport), reaching
 * ~88% scroll depth, or after 50 seconds on mobile where exit intent has no
 * equivalent. Shows once per browser session.
 */
export default function EstimateModal({ armed = true }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  const show = useCallback(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch (e) {
      /* private mode - show anyway, once per page load */
    }
    lastFocus.current = document.activeElement;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  }, []);

  useEffect(() => {
    if (!armed) return;
    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      show();
    };

    const onLeave = (e) => {
      if (e.clientY <= 4 && !e.relatedTarget) fire();
    };
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.88) fire();
    };

    document.addEventListener('mouseout', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    const isTouch = window.matchMedia('(hover: none)').matches;
    const timer = isTouch ? setTimeout(fire, 50000) : null;

    return () => {
      document.removeEventListener('mouseout', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [armed, show]);

  // Lock scroll, trap focus, close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('is-locked');
    const node = dialogRef.current;
    const focusables = () =>
      node.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
    const first = focusables()[0];
    if (first) first.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = focusables();
      if (!list.length) return;
      const a = list[0];
      const z = list[list.length - 1];
      if (e.shiftKey && document.activeElement === a) {
        e.preventDefault();
        z.focus();
      } else if (!e.shiftKey && document.activeElement === z) {
        e.preventDefault();
        a.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="modal-root">
      <div className="modal-root__scrim" onClick={close} />
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-title"
        ref={dialogRef}
      >
        <button type="button" className="modal__close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <aside className="modal__aside">
          <img
            className="modal__photo"
            src="/img/book-dark-760.webp"
            srcSet="/img/book-dark-520.webp 520w, /img/book-dark-760.webp 760w, /img/book-dark-1100.webp 1100w"
            sizes="(min-width: 880px) 42vw, 100vw"
            alt=""
            width="760"
            height="520"
          />
          <div className="modal__shade" />
          <div className="modal__aside-copy">
            <div>
              <div className="modal__kicker modal__kicker--line">Before you go</div>
              <p className="modal__lead">
                A More Reliable
                <br />
                Garage Door
                <br />
                <span>Starts Here.</span>
              </p>
              <ul className="modal__ul">
                {POINTS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.title}>
                      <span className="modal__ico">
                        <Icon size={16} />
                      </span>
                      <span>
                        <strong>{p.title}</strong> {p.detail}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="modal__brand">
              <img
                src="/img/logo-440.webp"
                srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
                sizes="168px"
                alt=""
                width="440"
                height="304"
              />
              <p className="modal__tag">Local service. Lasting trust.</p>
              <a className="modal__call" href={biz.phoneHref}>
                <span className="modal__call-ico">
                  <Phone size={16} />
                </span>
                <span>
                  <small>Call us anytime</small>
                  {biz.phone}
                </span>
              </a>
            </div>
          </div>
        </aside>

        <div className="modal__body">
          <p className="modal__eyebrow">Fast · Local · Trusted</p>
          <h2 id="estimate-title">
            Get Your Free <span>Estimate</span> Today
          </h2>
          <p className="modal__sub">
            Two minutes now saves a week of a door that will not close. Tell us what is happening and we
            will call you back with a real number.
          </p>
          <LeadForm formName="free-estimate" compact />
        </div>
      </div>
    </div>
  );
}
