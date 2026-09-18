import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { icons } from './Icons.jsx';
import { services } from '../data/site.js';

export function ServiceCard({ s, i, dragging, eager = false }) {
  const Icon = icons[i % icons.length];
  const to = `/services/${s.slug}`;

  return (
    <Reveal as="article" className="svslide" delay={Math.min(i, 5) * 70}>
      <Link
        className="svslide__media"
        to={to}
        tabIndex={dragging ? -1 : 0}
        draggable={false}
        onClick={(e) => {
          if (dragging) e.preventDefault();
        }}
      >
        <span className="svslide__photo">
          <img
            src={`/img/${s.img}-720.webp`}
            srcSet={`/img/${s.img}-440.webp 440w, /img/${s.img}-720.webp 720w`}
            sizes="(min-width: 1000px) 30vw, (min-width: 760px) 45vw, 86vw"
            alt={s.alt}
            width="720"
            height="540"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        </span>
        <span className="svtile__icon">
          <Icon size={24} />
        </span>
        <h3>{s.name}</h3>
      </Link>
      <Link
        to={to}
        className="btn btn--ghost btn--card"
        tabIndex={dragging ? -1 : 0}
        onClick={(e) => {
          if (dragging) e.preventDefault();
        }}
      >
        Read More
      </Link>
    </Reveal>
  );
}

function useSlider(ref) {
  const [bar, setBar] = useState({ width: 33, left: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ active: false, moved: false, x: 0, scroll: 0 });
  const pauseUntil = useRef(0);

  const measure = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1;
    const width = Math.min(100, Math.max(18, ratio * 100));
    const left = max > 0 ? (el.scrollLeft / max) * (100 - width) : 0;
    setBar({ width, left });

    const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
    el.querySelectorAll('.svslide').forEach((slide) => {
      const r = slide.getBoundingClientRect();
      slide.classList.toggle('is-focus', Math.abs(r.left + r.width / 2 - mid) < r.width * 0.48);
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const onScroll = () => measure();
    const onResize = () => measure();
    measure();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      // Native touch scroll handles finger pans; still capture pen / mouse drag
      if (e.pointerType === 'touch') return;
      dragRef.current = { active: true, moved: false, x: e.clientX, scroll: el.scrollLeft };
      el.classList.add('is-dragging');
      el.setPointerCapture(e.pointerId);
      pauseUntil.current = Date.now() + 8000;
    };
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.x;
      if (Math.abs(dx) > 6) {
        dragRef.current.moved = true;
        setDragging(true);
      }
      el.scrollLeft = dragRef.current.scroll - dx;
    };
    const onUp = () => {
      dragRef.current.active = false;
      el.classList.remove('is-dragging');
      window.setTimeout(() => setDragging(false), 40);
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
    };
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const tick = () => {
      if (Date.now() < pauseUntil.current) return;
      if (dragRef.current.active) return;
      const first = el.querySelector('.svslide');
      const second = el.querySelector('.svslide + .svslide');
      if (!first) return;
      const step = second
        ? second.offsetLeft - first.offsetLeft
        : first.getBoundingClientRect().width;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + step;
      if (next >= max - 8) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: step, behavior: 'smooth' });
    };

    const id = window.setInterval(tick, 4200);
    return () => window.clearInterval(id);
  }, [ref]);

  const onBarPointer = (e) => {
    const el = ref.current;
    const track = e.currentTarget;
    if (!el || !track) return;

    const scrub = (clientX) => {
      const rect = track.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const max = el.scrollWidth - el.clientWidth;
      el.scrollLeft = ratio * max;
      pauseUntil.current = Date.now() + 8000;
    };

    scrub(e.clientX);
    track.setPointerCapture?.(e.pointerId);
    const onMove = (ev) => scrub(ev.clientX);
    const onUp = () => {
      track.removeEventListener('pointermove', onMove);
      track.removeEventListener('pointerup', onUp);
      track.removeEventListener('pointercancel', onUp);
    };
    track.addEventListener('pointermove', onMove);
    track.addEventListener('pointerup', onUp);
    track.addEventListener('pointercancel', onUp);
  };

  return { bar, dragging, onBarPointer };
}

export function ServicesShowcase({ featured = false }) {
  const items = featured ? services.slice(0, 9) : services;

  return (
    <div className="svgrid">
      {items.map((s, i) => (
        <ServiceCard key={s.slug} s={s} i={i} />
      ))}
    </div>
  );
}

export default function ServiceRail() {
  const scrollerRef = useRef(null);
  const { bar, dragging, onBarPointer } = useSlider(scrollerRef);

  return (
    <section className="section svsection" id="services">
      <div className="wrap">
        <Reveal className="svhead svhead--caps">
          <h2>Our services</h2>
        </Reveal>

        <div
          className={`svslider${dragging ? ' is-dragging' : ''}`}
          ref={scrollerRef}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} dragging={dragging} eager />
          ))}
        </div>

        <div
          className="svbar"
          role="scrollbar"
          aria-controls="services"
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(bar.left)}
          onPointerDown={onBarPointer}
        >
          <span className="svbar__thumb" style={{ width: `${bar.width}%`, left: `${bar.left}%` }} />
        </div>

        <Reveal className="svmore">
          <Link to="/services" className="btn btn--ghost btn--svall">
            View all services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
