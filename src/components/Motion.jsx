import { useEffect, useRef, useState } from 'react';

/** Shared observer factory - one pattern, SSR-safe, reduced-motion aware. */
function useInView(options = {}) {
  const ref = useRef(null);
  const [hydrated, setHydrated] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Before hydration everything renders in its final state, so crawlers and
  // no-JS visitors never see hidden content.
  return { ref, active: !hydrated || inView, hydrated };
}




export function useParallax(strength = 0.14) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(progress * strength * 100).toFixed(2)}px, 0)`;
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
  }, [strength]);
  return ref;
}

/** Counts up once, when scrolled into view. */
export function Counter({ to, suffix = '', prefix = '', duration = 1600 }) {
  const { ref, active } = useInView({ threshold: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to);
      return;
    }
    // No "already started" ref here: React StrictMode mounts effects twice in
    // development, and a ref guard would let the first pass claim the run and
    // the second pass bail out, freezing the number at zero.
    const t0 = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      // expo-out, matching the CSS easing so numbers settle like everything else
      setN(Math.round(to * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      setN(to);
    };
  }, [active, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

/** Thin gradient bar showing read progress. */
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${h > 0 ? Math.min(window.scrollY / h, 1) : 0})`;
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
    };
  }, []);
  return <div className="progress" ref={ref} style={{ width: '100%', transform: 'scaleX(0)' }} />;
}

/** Right-edge back-to-top control with a vertical read-progress bar. */
export function BackToTop() {
  const fillRef = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
      fill.style.transform = `scaleY(${p})`;
      setOn(window.scrollY > 240);
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
  }, []);

  return (
    <button
      type="button"
      className={`gotop${on ? ' is-on' : ''}`}
      aria-label="Go back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="gotop__mark" aria-hidden="true" />
      <span className="gotop__label">GO BACK TOP</span>
      <span className="gotop__track" aria-hidden="true">
        <span className="gotop__fill" ref={fillRef} />
      </span>
    </button>
  );
}

