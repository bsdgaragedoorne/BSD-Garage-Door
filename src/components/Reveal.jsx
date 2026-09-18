import { useEffect, useRef, useState } from 'react';

/**
 * Reveals children on scroll. SSR-safe: renders visible markup on the server
 * and only hides/animates once JavaScript takes over, so content is never
 * invisible to crawlers or to users with JS disabled.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style, ...rest }) {
  const ref = useRef(null);
  const [hydrated, setHydrated] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [hydrated ? 'reveal' : '', shown || !hydrated ? 'is-in' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={cls}
      // Merge rather than replace - callers pass their own style (grid spans,
      // for example) and the delay must not clobber it.
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
