import { useEffect, useRef } from 'react';

/**
 * Custom cursor - an outer ring that lags behind and an inner dot that tracks
 * exactly. Only mounts on devices with a real pointer, so touch users are
 * unaffected and the native cursor is never hidden from someone who needs it.
 *
 * Positions are written straight to the DOM inside a rAF loop rather than
 * through React state: a cursor updates on every mouse move, and re-rendering
 * a component at that rate would be visibly janky.
 */
export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.body.classList.add('has-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    };

    const onOver = (e) => {
      const t = e.target.closest('a, button, summary, input, select, textarea, [role="button"]');
      ring.classList.toggle('is-active', !!t);
    };

    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');
    const onLeave = () => {
      visible = false;
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      // Critically damped follow: the ring eases toward the pointer, which is
      // what makes it read as a deliberate object rather than a laggy cursor.
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    loop();

    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
