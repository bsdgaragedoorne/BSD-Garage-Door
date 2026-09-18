import { Component, useEffect, useRef, useState } from 'react';

/**
 * Client-only shell for the 3D door.
 *
 * The site is prerendered to static HTML, so the WebGL canvas must never run
 * during SSR and must not exist on the first client render either, or hydration
 * would mismatch. Three.js is also ~150KB gzipped: pulling it in with a dynamic
 * import keeps it out of the initial bundle and off the critical path.
 */

class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Fallback() {
  return (
    <img
      className="gd3d__fallback"
      src="/img/door-1000.webp"
      alt="White sectional garage door with overhead track and opener"
      width="1000"
      height="1000"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function GarageDoor3D({ className = '' }) {
  const host = useRef(null);
  const [Scene, setScene] = useState(null);
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);

  // Load the scene once the section is anywhere near the viewport.
  useEffect(() => {
    const el = host.current;
    if (!el) return undefined;

    let cancelled = false;
    const load = () => {
      import('./GarageDoor3D.jsx').then((m) => {
        if (cancelled) return;
        setScene(() => m.default);
        // Some in-app browsers (webviews) skip the first ResizeObserver
        // callback, which leaves the canvas at its 300x150 default and renders
        // nothing. One synthetic resize makes it measure the container.
        requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          load();
          // keep observing - visibility drives the render loop from here on
        }
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <div
      ref={host}
      className={`gd3d__canvas ${className}`.trim()}
      role="img"
      aria-label="Interactive 3D model of a white sectional garage door with its tracks, overhead rails and opener. Drag to rotate."
    >
      {Scene ? (
        <Boundary fallback={<Fallback />}>
          <Scene frameloop={visible ? 'always' : 'never'} compact={compact} />
        </Boundary>
      ) : (
        <span className="gd3d__loader" aria-hidden="true" />
      )}
      <span className="gd3d__hint" aria-hidden="true">
        Drag to rotate
      </span>
    </div>
  );
}
