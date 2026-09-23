import { Link } from 'react-router-dom';
import { areas } from '../data/site.js';

function project(items) {
  const pad = 0.045;
  const lats = items.map((a) => a.lat);
  const lngs = items.map((a) => a.lng);
  const minLat = Math.min(...lats) - pad;
  const maxLat = Math.max(...lats) + pad;
  const minLng = Math.min(...lngs) - pad;
  const maxLng = Math.max(...lngs) + pad;
  const toXY = (lat, lng) => ({
    x: ((lng - minLng) / (maxLng - minLng)) * 100,
    y: ((maxLat - lat) / (maxLat - minLat)) * 100,
  });
  return { toXY, minLat, maxLat, minLng, maxLng };
}

const corridors = [
  ['hopedale', 'milford', 'bellingham', 'wrentham', 'foxborough', 'mansfield'],
  ['milford', 'medway', 'millis', 'norfolk', 'walpole'],
  ['bellingham', 'norfolk'],
  ['plainville', 'wrentham', 'foxborough'],
  ['attleboro', 'plainville', 'mansfield'],
];

function lineFor(slugs, bySlug, toXY) {
  return slugs
    .map((slug) => {
      const a = bySlug.get(slug);
      if (!a) return null;
      const { x, y } = toXY(a.lat, a.lng);
      return `${x},${y}`;
    })
    .filter(Boolean)
    .join(' ');
}

export default function AreaMap() {
  const { toXY } = project(areas);
  const bySlug = new Map(areas.map((a) => [a.slug, a]));
  const pins = areas.map((a) => ({ ...a, ...toXY(a.lat, a.lng) }));

  return (
    <div className="areamap" role="img" aria-label="Map of BSD Garage Door service towns around Franklin, Massachusetts">
      <svg className="areamap__geo" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="areamap-land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3f1eb" />
            <stop offset="100%" stopColor="#e8e6df" />
          </linearGradient>
          <radialGradient id="areamap-home-glow" cx="48%" cy="46%" r="18%">
            <stop offset="0%" stopColor="rgba(227,6,19,0.22)" />
            <stop offset="70%" stopColor="rgba(227,6,19,0.05)" />
            <stop offset="100%" stopColor="rgba(227,6,19,0)" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#areamap-land)" />
        <path
          d="M8 18 C22 8, 40 12, 58 9 C74 6, 90 14, 96 28 V92 H6 Z"
          fill="#d7e4dc"
          opacity="0.38"
        />
        <ellipse cx="64" cy="50" rx="7.2" ry="4.4" fill="#c5d4e0" opacity="0.88" />
        <ellipse cx="27" cy="40" rx="5.8" ry="3.3" fill="#c5d4e0" opacity="0.72" />
        <ellipse cx="78" cy="72" rx="6.4" ry="3.6" fill="#c5d4e0" opacity="0.55" />
        <ellipse cx="18" cy="68" rx="4.8" ry="2.8" fill="#d7e4dc" opacity="0.7" />
        {corridors.map((slugs, i) => (
          <polyline
            key={slugs.join('-')}
            points={lineFor(slugs, bySlug, toXY)}
            fill="none"
            stroke={i === 0 ? '#ffffff' : 'rgba(255,255,255,0.78)'}
            strokeWidth={i === 0 ? 2.6 : 1.4}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {corridors.map((slugs, i) => (
          <polyline
            key={`core-${slugs.join('-')}`}
            points={lineFor(slugs, bySlug, toXY)}
            fill="none"
            stroke={i === 0 ? 'rgba(227,6,19,0.18)' : 'rgba(17,17,17,0.07)'}
            strokeWidth={i === 0 ? 0.9 : 0.45}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <rect width="100" height="100" fill="url(#areamap-home-glow)" />
      </svg>

      <span className="areamap__hwy areamap__hwy--495">I-495</span>
      <span className="areamap__hwy areamap__hwy--95">I-95</span>

      <span className="areamap__compass" aria-hidden="true">
        <svg viewBox="0 0 32 36" width="28" height="32">
          <polygon points="16,2 19.4,14 16,12.2 12.6,14" fill="#111" />
          <polygon points="16,34 12.6,22 16,23.8 19.4,22" fill="#c8c4bc" />
        </svg>
        <b>N</b>
      </span>

      {pins.map((a) => (
        <Link
          key={a.slug}
          className="areamap__pin"
          to={`/service-areas/${a.slug}`}
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
          aria-label={`${a.name} garage door service${a.distance ? `, ${a.distance}` : ''}`}
        >
          <span className="areamap__marker">
            <span className="areamap__head" />
          </span>
          <span className="areamap__label">
            <strong>{a.name}</strong>
          </span>
        </Link>
      ))}
    </div>
  );
}
