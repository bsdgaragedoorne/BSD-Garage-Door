// Custom JSON-LD for the /services/springs-replacement/ page only. Attached to
// that service's `page.jsonLd` in site.js and rendered as a standalone
// <script type="application/ld+json"> by ServiceTemplate. No other page emits
// schema (the old auto-generated schema was removed).
export const springsServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://bsdgaragedoorservices.com/services/springs-replacement/#service',
      name: 'Garage Door Spring Replacement',
      description:
        'Professional replacement of worn or broken garage door springs to restore safe, balanced, and reliable door operation.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'BSD Garage Door',
        url: 'https://bsdgaragedoorservices.com/',
        telephone: '+18432793345',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '275 Washington St Unit A8',
          addressLocality: 'Franklin',
          addressRegion: 'MA',
          postalCode: '02038',
          addressCountry: 'US',
        },
      },
      image: 'https://bsdgaragedoorservices.com/img/sv-springs-replacement-720.webp',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://bsdgaragedoorservices.com/services/springs-replacement/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I tell if my garage door spring needs replacement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include a visibly broken spring, a door that suddenly feels heavy, uneven movement, difficulty opening, or a door that will not remain open properly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you replace a spring if my garage door is stuck closed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A broken spring can prevent normal door operation. The system should be assessed first so the door can be handled safely and the appropriate replacement completed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my garage door feel unusually heavy after a spring problem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Springs counterbalance much of the door’s weight. When a spring breaks or loses tension, the opener may struggle and the door can become noticeably heavier to move.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will replacing the spring improve an uneven or jerky garage door?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If worn or improperly tensioned springs are contributing to the problem, proper replacement and adjustment can restore better balance and smoother door movement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you know which spring replacement my garage door needs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We evaluate the existing garage door system, including its spring configuration and operating requirements, before selecting and installing the appropriate replacement.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bsdgaragedoorservices.com/services/springs-replacement/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bsdgaragedoorservices.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://bsdgaragedoorservices.com/services/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Garage Door Spring Replacement',
          item: 'https://bsdgaragedoorservices.com/services/springs-replacement/',
        },
      ],
    },
  ],
};
