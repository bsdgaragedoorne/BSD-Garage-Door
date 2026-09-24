// Reusable builder for per-service JSON-LD, reproducing the approved reference
// implementation on /services/springs-replacement/ (src/lib/springsSchema.js):
// a @graph of Service + FAQPage + BreadcrumbList. springs-replacement keeps its
// own approved literal object (page.jsonLd); every other service is generated
// from its data here so there is exactly one Service entity per page.
//
// The production domain is hard-coded to match the approved reference exactly
// (the springs schema hard-codes it too). This keeps every service schema on a
// single, consistent domain and is independent of the SITE_URL config, which is
// still being confirmed separately.
const DOMAIN = 'https://bsdgaragedoorservices.com';

// Provider block — identical values to the approved reference and the site's
// business data (name, phone, address). Shared so every service schema carries
// the same LocalBusiness provider.
const PROVIDER = {
  '@type': 'LocalBusiness',
  name: 'BSD Garage Door',
  url: `${DOMAIN}/`,
  telephone: '+18432793345',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '275 Washington St Unit A8',
    addressLocality: 'Franklin',
    addressRegion: 'MA',
    postalCode: '02038',
    addressCountry: 'US',
  },
};

// Canonical service name + description per slug, taken verbatim from the
// approved homepage LocalBusiness `makesOffer` catalogue (src/lib/homeSchema.js)
// so the per-page Service entity matches the site-wide service list. No values
// are invented here. springs-replacement is intentionally absent — it uses its
// own approved literal (page.jsonLd) and must remain unchanged.
export const SERVICE_SCHEMA_INFO = {
  'opener-repair': {
    name: 'Garage Door Opener Repair',
    description:
      'Repair of malfunctioning garage door openers to restore reliable and responsive automatic door operation.',
  },
  'opener-installation': {
    name: 'Garage Door Opener Installation',
    description:
      'Installation of new garage door opener systems with proper setup, safety testing, and reliable operation.',
  },
  'off-track-repair': {
    name: 'Garage Door Off-Track Repair',
    description:
      'Professional repair for garage doors that have shifted or come off their tracks to restore smooth and safe movement.',
  },
  'rollers-replacement': {
    name: 'Garage Door Roller Replacement',
    description:
      'Replacement of worn or damaged garage door rollers to reduce noise and improve smooth door movement.',
  },
  'hinges-replacement': {
    name: 'Garage Door Hinge Replacement',
    description:
      'Replacement of damaged garage door hinges to maintain proper panel alignment and safe door operation.',
  },
  'tracks-replacement': {
    name: 'Garage Door Track Replacement',
    description:
      'Replacement of damaged or misaligned garage door tracks to restore proper alignment and reliable door movement.',
  },
  'weather-strip-replacement': {
    name: 'Garage Door Weather Strip Replacement',
    description:
      'Replacement of worn garage door weather stripping to help block drafts, moisture, debris, and outdoor elements.',
  },
  'panels-repair': {
    name: 'Garage Door Panel Repair',
    description:
      'Repair of damaged garage door panels to restore appearance, alignment, and functional door operation.',
  },
  'panels-replacement': {
    name: 'Garage Door Panel Replacement',
    description:
      'Replacement of damaged garage door panels to restore the door’s structural integrity, appearance, and operation.',
  },
  'new-door-installation': {
    name: 'New Garage Door Installation',
    description:
      'Professional installation of new residential garage doors with proper fitting, hardware setup, and safety testing.',
  },
  'emergency-services': {
    name: 'Emergency Garage Door Services',
    description:
      'Emergency garage door service for urgent problems that affect safe access, security, or normal door operation.',
  },
  'service-and-maintenance': {
    name: 'Garage Door Service and Maintenance',
    description:
      'Routine garage door inspection, adjustment, lubrication, and maintenance to support reliable and safe operation.',
  },
  'garage-door-fix': {
    name: 'Garage Door Fix',
    description:
      'General garage door repair for common operating problems, damaged components, and doors that are not functioning properly.',
  },
  'garage-door-sensor-repair': {
    name: 'Garage Door Sensor Repair',
    description:
      'Repair and adjustment of garage door safety sensors to help restore proper detection and safe automatic door operation.',
  },
  'garage-door-keypad-installation': {
    name: 'Garage Door Keypad Installation',
    description:
      'Installation of garage door keypads for convenient keyless entry and secure access to residential properties.',
  },
  'garage-door-remote-replacement': {
    name: 'Garage Door Remote Replacement',
    description:
      'Replacement and setup of compatible garage door remotes for convenient and reliable opener access.',
  },
  'commercial-garage-door-repair': {
    name: 'Commercial Garage Door Repair',
    description:
      'Professional repair services for commercial garage doors to help businesses maintain safe, secure, and dependable access.',
  },
};

/**
 * Build the @graph (Service + FAQPage + BreadcrumbList) for one service,
 * mirroring the approved springs-replacement structure. Returns null when the
 * slug has no mapped service info (so no schema is emitted for it).
 */
export function buildServiceGraph(service, page = {}) {
  const info = SERVICE_SCHEMA_INFO[service.slug];
  if (!info) return null;

  const url = `${DOMAIN}/services/${service.slug}/`;
  const imageBase = page.introImage || service.img;

  const graph = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: info.name,
      description: info.description,
      provider: PROVIDER,
      image: `${DOMAIN}/img/${imageBase}-720.webp`,
    },
  ];

  const faqs = page.faqs || [];
  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${DOMAIN}/services/` },
      { '@type': 'ListItem', position: 3, name: info.name, item: url },
    ],
  });

  return { '@context': 'https://schema.org', '@graph': graph };
}
