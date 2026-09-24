/**
 * Turns the SPA into real static HTML — one file per route — so search engines
 * and social scrapers get fully-formed pages with correct titles, meta tags and
 * JSON-LD instead of an empty <div id="root">. React hydrates on top.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const { render, allRoutes } = await import(path.join(root, 'dist-ssr/entry-server.js'));
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

/**
 * Inline the stylesheet rather than linking it.
 *
 * The bundle is ~17KB gzipped, and as an external <link> it is render-blocking:
 * the browser cannot paint until a second round trip completes. On a mobile
 * connection that round trip costs more than the bytes do. Inlining removes it
 * and was the main thing holding First Contentful Paint back.
 */
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (cssLink) {
  const cssPath = path.join(dist, cssLink[1].replace(/^\//, ''));
  if (fs.existsSync(cssPath)) {
    const css = fs.readFileSync(cssPath, 'utf8');
    template = template.replace(cssLink[0], `<style>${css}</style>`);
    console.log(`  Inlined ${(css.length / 1024).toFixed(0)}KB of CSS (removed a render-blocking request)`);
  }
}

const SITE_URL = process.env.SITE_URL || 'https://bsdgaragedoorservices.com';

let count = 0;
for (const url of allRoutes) {
  const { html, head } = render(url);
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);

  const outDir = url === '/' ? dist : path.join(dist, url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  count += 1;
}

// Netlify serves this for any unmatched path (see public/_redirects)
fs.copyFileSync(path.join(dist, '404/index.html'), path.join(dist, '404.html'));

// --- sitemap.xml -----------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const priority = (u) => {
  if (u === '/') return '1.0';
  if (u === '/services' || u === '/service-areas' || u === '/contact') return '0.9';
  if (u.startsWith('/services/') || u.startsWith('/service-areas/')) return '0.8';
  return '0.5';
};

const urls = allRoutes
  .filter((u) => u !== '/404' && u !== '/privacy-policy' && u !== '/terms-and-conditions')
  .map(
    (u) =>
      `  <url>\n    <loc>${SITE_URL}${u === '/' ? '/' : `${u}/`}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority(u)}</priority>\n  </url>`
  )
  .join('\n');

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /privacy-policy\nDisallow: /terms-and-conditions\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`\n  Prerendered ${count} pages · sitemap.xml + robots.txt written for ${SITE_URL}\n`);
