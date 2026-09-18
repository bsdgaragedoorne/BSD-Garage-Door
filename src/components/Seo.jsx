import { useEffect } from 'react';
import { SITE_URL, biz } from '../data/site.js';

// During the prerender pass we collect head data into this module-level store.
// The render is synchronous and single-threaded, so this is safe.
export const headStore = { current: null };

const isServer = typeof window === 'undefined';

function buildTags({ title, description, path, image, noindex, schema, breadcrumbs }) {
  const canonical = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));
  const img = SITE_URL + (image || '/img/og-image.jpg');
  const tags = [
    { name: 'description', content: description },
    { rel: 'canonical', href: canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: img },
    { property: 'og:site_name', content: biz.name },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image:alt', content: `${biz.name} - garage door repair in ${biz.city}, ${biz.state}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: img },
    { name: 'author', content: biz.name },
    { name: 'geo.region', content: 'US-MA' },
    { name: 'geo.placename', content: `${biz.city}, ${biz.state}` },
    { name: 'geo.position', content: `${biz.latitude};${biz.longitude}` },
    { name: 'ICBM', content: `${biz.latitude}, ${biz.longitude}` },
  ];
  if (noindex) tags.push({ name: 'robots', content: 'noindex, follow' });
  else tags.push({ name: 'robots', content: 'index, follow, max-image-preview:large' });
  return { canonical, tags, schema, breadcrumbs, title };
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function renderHeadToString(head) {
  if (!head) return '';
  const parts = [`<title>${esc(head.title)}</title>`];
  for (const t of head.tags) {
    if (t.rel) parts.push(`<link rel="${t.rel}" href="${esc(t.href)}" />`);
    else if (t.property) parts.push(`<meta property="${t.property}" content="${esc(t.content)}" />`);
    else parts.push(`<meta name="${t.name}" content="${esc(t.content)}" />`);
  }
  const blocks = [head.schema, head.breadcrumbs].filter(Boolean);
  for (const b of blocks) {
    parts.push(
      `<script type="application/ld+json">${JSON.stringify(b).replace(/</g, '\\u003c')}</script>`
    );
  }
  return parts.join('\n    ');
}

function applyToDocument(head) {
  document.title = head.title;
  document.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  const frag = document.createDocumentFragment();
  for (const t of head.tags) {
    let el;
    if (t.rel) {
      el = document.createElement('link');
      el.setAttribute('rel', t.rel);
      el.setAttribute('href', t.href);
    } else {
      el = document.createElement('meta');
      if (t.property) el.setAttribute('property', t.property);
      else el.setAttribute('name', t.name);
      el.setAttribute('content', t.content);
    }
    el.setAttribute('data-seo', '');
    frag.appendChild(el);
  }
  for (const b of [head.schema, head.breadcrumbs].filter(Boolean)) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(b);
    s.setAttribute('data-seo', '');
    frag.appendChild(s);
  }
  document.head.appendChild(frag);
}

export default function Seo(props) {
  const head = buildTags(props);
  if (isServer) headStore.current = head;
  useEffect(() => {
    applyToDocument(head);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.path, props.title]);
  return null;
}
