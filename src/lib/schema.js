import { SITE_URL, biz, areas, googleRating, googleReviews } from '../data/site.js';

const ID = `${SITE_URL}/#business`;

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: biz.street,
  addressLocality: biz.city,
  addressRegion: biz.state,
  postalCode: biz.zip,
  addressCountry: 'US',
};

/** Real trading hours. Google cross-checks these against the Business
 *  Profile, so they must match it exactly. */
export const openingHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '00:00',
    closes: '23:59',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '00:00',
    closes: '00:00',
  },
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'HomeAndConstructionBusiness', 'LocalBusiness'],
        '@id': ID,
        name: biz.name,
        legalName: biz.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo.png`,
        image: `${SITE_URL}/img/og-image.jpg`,
        telephone: biz.phoneRaw,
        email: biz.email,
        address: postalAddress,
        hasMap: biz.mapUrl,
        geo: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
        openingHoursSpecification: openingHours,
        priceRange: biz.priceRange,
        slogan: 'Garage door repair that shows up.',
        description:
          'Licensed garage door repair, spring replacement, opener service and new door installation in Franklin, Massachusetts and surrounding MetroWest communities. 24-hour service Sunday through Thursday.',
        areaServed: areas.map((a) => ({
          '@type': 'City',
          name: a.name,
          address: { '@type': 'PostalAddress', addressRegion: 'MA', addressCountry: 'US' },
        })),
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
          geoRadius: '32186',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: biz.phoneRaw,
          contactType: 'customer service',
          areaServed: 'US-MA',
          availableLanguage: ['English'],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(googleRating.value),
          reviewCount: String(googleRating.count),
          bestRating: '5',
          worstRating: '1',
        },
        review: googleReviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(r.rating),
            bestRating: '5',
            worstRating: '1',
          },
          reviewBody: r.text,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: biz.name,
        publisher: { '@id': ID },
        inLanguage: 'en-US',
      },
    ],
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: `${service.name} in ${biz.city}, ${biz.state}`,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': ID,
      name: biz.name,
      telephone: biz.phoneRaw,
      address: postalAddress,
    },
    areaServed: areas.map((a) => ({ '@type': 'City', name: `${a.name}, MA` })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export function areaSchema(area) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/service-areas/${area.slug}#business`,
    name: `${biz.name} - ${area.name}`,
    parentOrganization: { '@id': ID },
    url: `${SITE_URL}/service-areas/${area.slug}`,
    telephone: biz.phoneRaw,
    email: biz.email,
    image: `${SITE_URL}/img/og-image.jpg`,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: biz.latitude, longitude: biz.longitude },
    openingHoursSpecification: openingHours,
    priceRange: biz.priceRange,
    areaServed: { '@type': 'City', name: `${area.name}, Massachusetts` },
    description: `Garage door repair, spring replacement, opener service and new door installation in ${area.name}, MA. Licensed, insured, 24-hour service Sunday through Thursday.`,
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: SITE_URL + t.path,
    })),
  };
}

export function combine(...schemas) {
  return { '@context': 'https://schema.org', '@graph': schemas.filter(Boolean).map(({ '@context': _c, ...rest }) => rest) };
}
