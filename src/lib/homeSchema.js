// Custom LocalBusiness JSON-LD for the homepage only. Rendered as a standalone
// <script type="application/ld+json"> by Home.jsx. This is intentionally the
// one and only structured-data block on the site (the old auto-generated schema
// was removed); other pages emit no schema.
export const homeLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bsdgaragedoorservices.com/#localbusiness',
  name: 'BSD Garage Door',
  url: 'https://bsdgaragedoorservices.com/',
  telephone: '+18432793345',
  email: 'bsdgaragedoorne@gmail.com',
  description:
    'BSD Garage Door provides garage door services in Franklin, MA, including garage door repair, garage door fix, and garage door installation. Services include garage door opener repair, LiftMaster garage door repair, garage door spring replacement, garage door sensor repair, garage door roller replacement, and garage door weather seal replacement. The company also provides garage door keypad installation, garage door remote replacement, commercial garage door repair, and emergency garage door repair for residential and commercial properties in Franklin and surrounding areas.',
  image: 'https://bsdgaragedoorservices.com/img/van-clean-780.webp',
  logo: 'https://bsdgaragedoorservices.com/img/logo-440.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '275 Washington St Unit A8',
    addressLocality: 'Franklin',
    addressRegion: 'MA',
    postalCode: '02038',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.0688002,
    longitude: -71.414276,
  },
  hasMap: 'https://maps.app.goo.gl/dA7LLmLrqNsD9oiH7',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 42.0688002,
        longitude: -71.414276,
      },
      geoRadius: '30 mi',
    },
    { '@type': 'AdministrativeArea', name: 'Bellingham, MA' },
    { '@type': 'AdministrativeArea', name: 'Medway, MA' },
    { '@type': 'AdministrativeArea', name: 'Wrentham, MA' },
    { '@type': 'AdministrativeArea', name: 'Norfolk, MA' },
    { '@type': 'AdministrativeArea', name: 'Millis, MA' },
    { '@type': 'AdministrativeArea', name: 'Foxborough, MA' },
    { '@type': 'AdministrativeArea', name: 'Milford, MA' },
    { '@type': 'AdministrativeArea', name: 'Plainville, MA' },
    { '@type': 'AdministrativeArea', name: 'Hopedale, MA' },
    { '@type': 'AdministrativeArea', name: 'Walpole, MA' },
    { '@type': 'AdministrativeArea', name: 'Attleboro, MA' },
    { '@type': 'AdministrativeArea', name: 'Mansfield, MA' },
  ],
  knowsAbout: [
    'Garage door repair',
    'Garage door installation',
    'Garage door opener systems',
    'Residential and commercial garage doors',
    'Garage door maintenance and emergency repair',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Spring Replacement',
        description:
          'Professional replacement of worn or broken garage door springs to restore safe and balanced door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Opener Repair',
        description:
          'Repair of malfunctioning garage door openers to restore reliable and responsive automatic door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Opener Installation',
        description:
          'Installation of new garage door opener systems with proper setup, safety testing, and reliable operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Off-Track Repair',
        description:
          'Professional repair for garage doors that have shifted or come off their tracks to restore smooth and safe movement.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Roller Replacement',
        description:
          'Replacement of worn or damaged garage door rollers to reduce noise and improve smooth door movement.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Hinge Replacement',
        description:
          'Replacement of damaged garage door hinges to maintain proper panel alignment and safe door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Track Replacement',
        description:
          'Replacement of damaged or misaligned garage door tracks to restore proper alignment and reliable door movement.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Weather Strip Replacement',
        description:
          'Replacement of worn garage door weather stripping to help block drafts, moisture, debris, and outdoor elements.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Panel Repair',
        description:
          'Repair of damaged garage door panels to restore appearance, alignment, and functional door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Panel Replacement',
        description:
          'Replacement of damaged garage door panels to restore the door’s structural integrity, appearance, and operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'New Garage Door Installation',
        description:
          'Professional installation of new residential garage doors with proper fitting, hardware setup, and safety testing.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Emergency Garage Door Services',
        description:
          'Emergency garage door service for urgent problems that affect safe access, security, or normal door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Service and Maintenance',
        description:
          'Routine garage door inspection, adjustment, lubrication, and maintenance to support reliable and safe operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Fix',
        description:
          'General garage door repair for common operating problems, damaged components, and doors that are not functioning properly.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Sensor Repair',
        description:
          'Repair and adjustment of garage door safety sensors to help restore proper detection and safe automatic door operation.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Keypad Installation',
        description:
          'Installation of garage door keypads for convenient keyless entry and secure access to residential properties.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Garage Door Remote Replacement',
        description:
          'Replacement and setup of compatible garage door remotes for convenient and reliable opener access.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Commercial Garage Door Repair',
        description:
          'Professional repair services for commercial garage doors to help businesses maintain safe, secure, and dependable access.',
      },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '7',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Adi Avraham' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'I called them because my garage door suddenly stopped working properly. The technician came out, figured out what was causing the problem, and was able to fix it during the same visit. He explained everything clearly and didn’t try to push anything I didn’t need. The door has been working great since. Very happy with the service and would definitely use them again.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rick Almeida' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'My garage door came off the track and I couldn’t get it to close properly. I called for service and they were able to send someone out quickly. The technician got the door back on track, adjusted everything, and tested it several times before leaving. It’s been working perfectly since. Fast, professional service and a very smooth experience overall.',
    },
  ],
};
