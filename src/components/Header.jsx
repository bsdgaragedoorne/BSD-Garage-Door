import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { biz, services, areas } from '../data/site.js';
import { Phone, Clock, Chevron, Pin, Shield } from './Icons.jsx';

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  {
    to: '/services',
    label: 'Services',
    overview: 'All services',
    children: services.map((s) => ({ to: `/services/${s.slug}`, label: s.name })),
  },
  {
    to: '/service-areas',
    label: 'Locations',
    overview: 'All locations',
    children: areas.map((a) => ({ to: `/service-areas/${a.slug}`, label: a.name })),
  },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ item, open, onOpen, onClose }) {
  const hasKids = Boolean(item.children?.length);

  if (!hasKids) {
    return (
      <NavLink
        to={item.to}
        end={item.end}
        className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      className={`nav__item${open ? ' is-open' : ''}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
    >
      <NavLink
        to={item.to}
        className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={onOpen}
      >
        {item.label}
        <Chevron size={13} />
      </NavLink>
      <div className="nav__drop" role="list" hidden={!open}>
        <NavLink to={item.to} role="listitem" end className="nav__drop-all">
          {item.overview}
        </NavLink>
        {item.children.map((child) => (
          <NavLink key={child.to} to={child.to} role="listitem">
            {child.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function DrawerGroup({ item, open, onToggle, menuOpen }) {
  const panelId = `drawer-${item.label.toLowerCase()}`;

  return (
    <div className={`drawer__group${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="drawer__parent"
        aria-expanded={open}
        aria-controls={panelId}
        tabIndex={menuOpen ? 0 : -1}
        onClick={onToggle}
      >
        {item.label}
        <Chevron size={18} />
      </button>
      <div id={panelId} className="drawer__sub" hidden={!open}>
        <Link to={item.to} tabIndex={menuOpen && open ? 0 : -1}>
          {item.overview}
        </Link>
        {item.children.map((child) => (
          <Link key={child.to} to={child.to} tabIndex={menuOpen && open ? 0 : -1}>
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [stuck, setStuck] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [callout, setCallout] = useState(false);
  const { pathname } = useLocation();
  const timers = useRef([]);

  useEffect(() => {
    setOpenMenu(false);
    setOpenDrop(null);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', openMenu);
    return () => document.body.classList.remove('is-locked');
  }, [openMenu]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    let cancelled = false;
    const wait = (ms) =>
      new Promise((resolve) => {
        const id = window.setTimeout(resolve, ms);
        timers.current.push(id);
      });
    const shake = (ms = 700) => {
      setPulse(true);
      const id = window.setTimeout(() => setPulse(false), ms);
      timers.current.push(id);
    };

    // Shake → CALL NOW slides out → hold 30s → slide back → wait 30s → loop
    const run = async () => {
      await wait(1800);
      while (!cancelled) {
        shake();
        await wait(480);
        if (cancelled) return;
        setCallout(true);
        await wait(30000);
        if (cancelled) return;
        setCallout(false);
        await wait(700);
        if (cancelled) return;
        await wait(30000);
      }
    };

    run();
    return () => {
      cancelled = true;
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
      setPulse(false);
      setCallout(false);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap header__inner">
          <Link to="/" className="brand" aria-label={`${biz.name} - home`}>
            <img
              src="/img/logo-440.webp"
              srcSet="/img/logo-240.webp 240w, /img/logo-440.webp 440w"
              sizes="(max-width: 1099px) 200px, 260px"
              alt={biz.name}
              title={biz.name}
              width="440"
              height="304"
              fetchpriority="high"
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <NavItem
                key={item.to}
                item={item}
                open={openDrop === item.to}
                onOpen={() => setOpenDrop(item.to)}
                onClose={() => setOpenDrop((cur) => (cur === item.to ? null : cur))}
              />
            ))}
          </nav>

          <div className="header__cta">
            <a
              href={biz.phoneHref}
              className={`header__phone${pulse ? ' is-shake' : ''}${callout ? ' is-call' : ''}`}
              aria-label={`Call ${biz.phone}`}
            >
              <span className="header__callnow" aria-hidden="true">
                <span>CALL NOW</span>
              </span>
              <span className="header__icon">
                <Phone size={34} />
              </span>
            </a>
            <button
              className="burger"
              aria-expanded={openMenu}
              aria-controls="mobile-drawer"
              aria-label={openMenu ? 'Close menu' : 'Open menu'}
              onClick={() => setOpenMenu((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-drawer" className={`drawer${openMenu ? ' is-open' : ''}`} aria-hidden={!openMenu}>
        <nav aria-label="Mobile">
          {nav.map((item) =>
            item.children ? (
              <DrawerGroup
                key={item.to}
                item={item}
                open={openSection === item.to}
                menuOpen={openMenu}
                onToggle={() => setOpenSection((cur) => (cur === item.to ? null : item.to))}
              />
            ) : (
              <Link key={item.to} to={item.to} tabIndex={openMenu ? 0 : -1}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="drawer__foot">
          <Link to="/contact" className="btn btn--volt btn--block" tabIndex={openMenu ? 0 : -1}>
            Get a free estimate
          </Link>
          <div className="drawer__meta">
            <p className="drawer__meta-line">
              <Clock size={16} />
              <span>{biz.hours}</span>
            </p>
            <p className="drawer__meta-line">
              <Pin size={16} />
              <span>{biz.city}, {biz.state}</span>
            </p>
            <p className="drawer__meta-line">
              <Shield size={16} />
              <span>Licensed &amp; insured</span>
            </p>
          </div>
        </div>
      </div>

      <div className="callbar">
        <a href={biz.phoneHref}>
          <Phone size={15} /> Call now
        </a>
        <Link to="/contact">Free estimate</Link>
      </div>
    </>
  );
}
