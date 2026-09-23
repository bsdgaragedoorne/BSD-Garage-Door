// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for business info (NAP), services and service areas.
// ---------------------------------------------------------------------------

import { springsServiceSchema } from '../lib/springsSchema.js';

export const SITE_URL = 'https://bsdgaragedoorllc.com';

export const biz = {
  name: 'BSD Garage Door',
  legalName: 'BSD Garage Door',
  phone: '843-279-3345',
  phoneHref: 'tel:+18432793345',
  phoneRaw: '+18432793345',
  email: 'bsdgaragedoorne@gmail.com',
  emailHref: 'mailto:bsdgaragedoorne@gmail.com',
  street: '275 Washington St Unit A8',
  city: 'Franklin',
  state: 'MA',
  stateFull: 'Massachusetts',
  zip: '02038',
  country: 'United States',
  latitude: 42.0687962,
  longitude: -71.4117011,
  mapUrl: 'https://maps.app.goo.gl/WuUEzftgNbdVZ3mC8',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11800!2d-71.4117011!3d42.0687962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door!5e0!3m2!1sen!2sus!4v1710000000000',
  // Google Business Profile Place ID (Places API New). Drives the live reviews
  // fetched server-side by netlify/functions/reviews.js.
  placeId: 'ChIJb5IBMepv5IkRP8foasQrKQc',
  hours: 'Sun-Thu 24 hours · Fri 7am-5pm · Sat closed',
  hoursShort: '24hrs Sun-Thu · Fri 7am-5pm',
  hoursList: [
    { days: 'Sunday - Thursday', time: 'Open 24 hours' },
    { days: 'Friday', time: '7:00 AM - 5:00 PM' },
    { days: 'Saturday', time: 'Closed' },
  ],
  priceRange: '$$',
  radiusMiles: 20,
};

export const addressOneLine = `${biz.street}, ${biz.city}, ${biz.state} ${biz.zip}, ${biz.country}`;
export const addressShort = `${biz.city}, ${biz.state}`;

export const services = [
  {
    slug: 'springs-replacement',
    name: 'Springs Replacement',
    short: 'Torsion and extension springs replaced in matched pairs, sized to your door.',
    img: 'sv-springs-replacement',
    alt: 'Black torsion spring on the winding bar above a garage door, with the winding cone and lift cables visible',
    about: [
      'Garage door springs carry the full weight of the door. When one snaps, the remaining spring is overloaded and the door becomes dangerous to lift by hand. We replace torsion and extension springs in matched pairs, sized to your door\u2019s weight and height \u2014 not a generic pair off the shelf.',
      'Most spring jobs finish in one visit because the common sizes ride on the truck. We wind to spec, test the balance, and leave you with a door that stays put at waist height.',
    ],
    points: [
      'Matched pairs only \u2014 never a single spring',
      'Sized to your door, not a generic kit',
      'Common sizes stocked on the truck',
      'Balance tested before we leave',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Garage Door Spring Replacement',
      metaTitle: 'Garage Door Spring Replacement - BSD Garage Door',
      metaDescription:
        'BSD Garage Door provides Garage Door Spring Replacement for broken springs, worn springs, and urgent spring repairs, restoring safe operation. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/springs-replacement/',
      jsonLd: springsServiceSchema,
      heroKicker: 'Franklin & MetroWest spring specialists',
      heroImage: 'sv-springs-replacement-441.webp',
      introImage: 'sv-springs-replacement',
      heroSub:
        'Restore smooth, balanced, and dependable garage door operation with professional spring replacement designed for safe, reliable performance.',

      intro: {
        heading: 'Restore Smooth Garage Door Operation With Proper Spring Replacement',
        body: [
          'Garage door spring replacement is one of the most common repairs we handle across Franklin and MetroWest \u2014 and one of the few a homeowner should never attempt alone. The springs carry the full weight of the door, so when one snaps the other is overloaded and the door becomes dangerous to lift by hand.',
          'We fit torsion and extension springs in matched pairs, sized to your door\u2019s weight and height rather than a generic pair off the shelf. Most jobs finish in one visit because the common sizes ride on the truck \u2014 we wind to spec, test the balance, and leave you with a door that stays put at waist height.',
        ],
        // `points` still fall back to the record\u2019s top-level `points`
      },

      whyChooseUs: {
        heading: 'Why Choose Us for Reliable Garage Door Spring Replacement',
        intro:
          'We provide careful spring replacement focused on safety, proper door balance, dependable operation, and long-term performance.',
        items: [
          {
            icon: 'Wrench',
            title: 'Experienced Spring Replacement',
            text: 'Our technicians identify worn or broken springs and replace them with precision for dependable garage door operation.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Service',
            text: 'We follow careful procedures when handling high-tension springs to help protect your door, property, and household.',
          },
          {
            icon: 'Gear',
            title: 'Accurate Door Balancing',
            text: 'Proper spring tension helps your garage door open and close smoothly without placing unnecessary strain on other parts.',
          },
          {
            icon: 'Check',
            title: 'Reliable Workmanship',
            text: 'We focus on precise installation and thorough testing so your replacement spring performs consistently after service.',
          },
        ],
      },

      offerings: {
        kicker: 'What we replace',
        heading: 'Get The Right Spring Replacement For Your Garage Door',
        intro:
          'Every door hangs its full weight on one or two springs. Here is the garage door spring replacement work we handle on a typical visit.',
        items: [
          {
            icon: 'Gear',
            title: 'Torsion spring replacement',
            text: 'The springs mounted on the bar above the door. We wind in a matched pair sized to your door\u2019s weight and height, not a generic kit off the shelf.',
          },
          {
            icon: 'IconTrack',
            title: 'Extension spring replacement',
            text: 'The springs that stretch along the horizontal tracks on lighter doors. We renew them as a set and check the safety cables that contain them.',
          },
          {
            icon: 'Bolt',
            title: 'Broken or snapped springs',
            text: 'The loud bang and a door that suddenly will not lift. We replace the failed spring and its matching pair so the door is balanced again.',
          },
          {
            icon: 'Shield',
            title: 'Balance & safety check',
            text: 'After winding to spec we test that the door holds at waist height and cycles cleanly, so the opener is not straining against a door it cannot lift.',
          },
        ],
      },

      sections: [
        {
          id: 'signs',
          kicker: 'Know the signs',
          heading: 'Solve Broken And Worn Spring Problems Before They Worsen',
          body: [
            'Springs wear a little with every open and close, and most give clear warning before they let go completely. Catching them early keeps a routine replacement from turning into a door stuck shut.',
            'If you notice any of the following on your Franklin-area door, it is worth having the springs checked before you rely on the door again.',
          ],
          list: [
            'A loud bang from the garage, often mistaken for something falling',
            'The door will not open, or lifts a few inches and stops',
            'The door feels far heavier than usual to raise by hand',
            'A visible gap in the coil of the torsion spring above the door',
            'The door drops fast or slams instead of lowering under control',
            'The opener strains, or reverses, trying to lift the door',
          ],
        },
        {
          id: 'why-professional',
          kicker: 'Why it matters',
          heading: 'Improve Safety And Dependability With Professional Spring Service',
          body: [
            'A garage door spring is under enormous tension \u2014 enough stored energy to cause serious injury if a winding bar slips or a spring lets go. It is the repair we most often warn homeowners away from.',
            'We replace torsion and extension springs in matched pairs, wound to your door\u2019s weight and height, then test the balance so the door stays put at waist height. Sizing the springs to the door, rather than fitting a generic pair, is what keeps the new set from wearing out early.',
          ],
          link: { to: '/services/off-track-repair', label: 'See off-track repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'How can I tell if my garage door spring needs replacement?',
          a: 'Common signs include a visibly broken spring, a door that suddenly feels heavy, uneven movement, difficulty opening, or a door that will not remain open properly.',
        },
        {
          q: 'Can you replace a spring if my garage door is stuck closed?',
          a: 'Yes. A broken spring can prevent normal door operation. The system should be assessed first so the door can be handled safely and the appropriate replacement completed.',
        },
        {
          q: 'Why does my garage door feel unusually heavy after a spring problem?',
          a: 'Springs counterbalance much of the door\u2019s weight. When a spring breaks or loses tension, the opener may struggle and the door can become noticeably heavier to move.',
        },
        {
          q: 'Will replacing the spring improve an uneven or jerky garage door?',
          a: 'If worn or improperly tensioned springs are contributing to the problem, proper replacement and adjustment can restore better balance and smoother door movement.',
        },
        {
          q: 'How do you know which spring replacement my garage door needs?',
          a: 'We evaluate the existing garage door system, including its spring configuration and operating requirements, before selecting and installing the appropriate replacement.',
        },
      ],

      related: ['off-track-repair', 'opener-repair', 'new-door-installation'],
    },
  },
  {
    slug: 'opener-repair',
    name: 'Opener Repair',
    short: 'Gears, sprockets, trolleys, safety eyes and travel limits put right.',
    img: 'sv-opener-repair',
    alt: 'LiftMaster garage door opener mounted to the ceiling with chain rail and emergency release cord',
    about: [
      'An opener that clicks, crawls or stops mid-cycle is usually a gear, sprocket, trolley or safety-eye issue \u2014 not a whole new machine. We diagnose on site and repair what is actually broken.',
      'If the unit is beyond a sensible repair, we will say so and quote a replacement before anything comes down. You see the price in writing either way.',
    ],
    points: [
      'Gears, sprockets, trolleys and travel limits',
      'Safety eyes aligned and tested',
      'Repair first when it is cheaper than replace',
      'Remotes and wall controls checked',
    ],

    // -----------------------------------------------------------------------
    // REUSABLE SERVICE-PAGE TEMPLATE CONTENT
    // Consumed by <ServiceTemplate>. Any service that omits `page` still
    // renders (hero + intro + default Why/Process/Areas/CTA); services that
    // provide it get the full long-form layout. Only opener-repair is
    // populated for now. Icons are referenced by name (see Icons.jsx).
    // -----------------------------------------------------------------------
    page: {
      h1: 'Garage Door Opener Repair',
      metaTitle: 'Garage Door Opener Repair - BSD Garage Door',
      metaDescription:
        'Need Garage Door Opener Repair? BSD Garage Door handles opener faults, intermittent operation, and stopping issues. Get dependable repair service today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/opener-repair/',
      heroKicker: 'Franklin & MetroWest opener specialists',
      heroImage: 'sv-garage-door-opener-repair-440.webp',
      heroAlt:
        'A ceiling-mounted garage door opener with its rail, mounting bracket and orange emergency-release cord above a garage door',
      heroTitle: 'Garage door opener repair in Franklin, MA',
      heroWidth: 1600,
      heroHeight: 1066,
      heroSub:
        'Restore dependable garage access with expert opener repairs that address operating problems, improve reliability, and keep daily routines moving smoothly.',

      intro: {
        heading: 'Restore Reliable Operation With Professional Opener Repair Solutions',
        body: [
          'A garage door opener that hesitates, reverses, or stops mid-cycle turns the simplest part of the day into a frustration. Professional garage door opener repair restores that reliability by targeting the real fault \u2014 a worn gear, a misaligned safety eye, or a limit that has drifted out of range \u2014 instead of guessing at the symptom.',
          'We diagnose the opener on site, explain what we find, and repair what is genuinely broken. Common opener parts ride on the truck, so most repairs are finished the same visit, with the full price confirmed in writing before any work begins.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Dependable Garage Door Opener Repair',
        intro:
          'Get practical repair solutions, clear communication, and careful service focused on restoring reliable opener performance.',
        items: [
          {
            icon: 'Gear',
            title: 'Fast, Accurate Diagnosis',
            text: 'We identify opener faults carefully, helping pinpoint the cause before recommending the right repair.',
          },
          {
            icon: 'Wrench',
            title: 'Practical Repair Solutions',
            text: 'Our technicians focus on practical repairs that restore opener performance without unnecessary work.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Service',
            text: 'We check operation and safety-related functions to help your opener perform reliably during everyday use.',
          },
          {
            icon: 'Phone',
            title: 'Clear, Honest Communication',
            text: 'You receive straightforward guidance about the issue, repair options, and what to expect before work begins.',
          },
        ],
      },

      offerings: {
        kicker: 'Repair features',
        heading: 'Repair Features Designed For Consistent Opener Performance',
        intro:
          'Consistent opener performance comes down to a few components working together. These are the repairs we concentrate on to keep the door moving predictably.',
        items: [
          {
            icon: 'Gear',
            title: 'Worn gears & sprockets',
            text: 'A stripped drive gear or worn sprocket is the usual reason a motor hums while the door stays put. We fit a new gear set and re-test the drive.',
          },
          {
            icon: 'IconTrack',
            title: 'Trolley & rail faults',
            text: 'A cracked trolley or a chain that has jumped the rail leaves the door disconnected from the motor. We reset or replace the trolley and re-tension the drive.',
          },
          {
            icon: 'Bolt',
            title: 'Travel & force limits',
            text: 'Doors that stop short, slam down or bounce back need the travel and force limits reset to the opening. We set them to spec and confirm the safety reverse.',
          },
          {
            icon: 'Shield',
            title: 'Safety eyes (photo-eyes)',
            text: 'When the door will not close and the light flashes, the photo-eyes are misaligned or blocked. We realign and test them so the door closes on command.',
          },
        ],
      },

      sections: [
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Solve Common Opener Problems With Practical Repair Expertise Today',
          body: [
            'Most opener faults trace back to a small number of causes, and each has a practical repair once the real problem is identified. Repeatedly forcing a struggling opener tends to turn a minor fix into a larger one, so the right first step is an accurate diagnosis.',
            'We work through the drive components, safety sensors, travel settings and controls to find what is actually stopping the opener from completing its cycle, then carry out the repair and test the door through a full open and close.',
          ],
          list: [
            'The motor hums or the light comes on, but the door does not move',
            'The door starts to close, then stops and reverses',
            'Loud grinding, rattling or straining from the unit',
            'The remote or keypad works intermittently, or not at all',
            'The door reverses before it reaches the floor, or stops short at the top',
          ],
        },
      ],

      process: [
        {
          title: 'Call or send the form',
          body: 'Tell us what the opener is doing. We diagnose a surprising amount over the phone and say plainly whether it is urgent.',
        },
        {
          title: 'On-site diagnosis',
          body: 'A technician traces the fault to the actual part \u2014 gear, trolley, limits, photo-eyes or controls \u2014 with common opener parts already on the truck.',
        },
        {
          title: 'Written price first',
          body: 'You get the full cost before any work starts. Approve it, decline it, or ask us to quote a replacement instead.',
        },
        {
          title: 'Repair & test',
          body: 'We complete the repair, reset the travel and force limits, and run the door through a full cycle to confirm the safety reverse.',
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Why does my garage door opener work sometimes but not other times?',
          a: 'Intermittent operation can result from an underlying opener fault or an issue affecting how the system responds. A proper diagnosis helps identify the specific cause before repair work is recommended.',
        },
        {
          q: 'What should I do if my garage door opener stops halfway?',
          a: 'Avoid repeatedly forcing the opener to continue operating. The stopping behavior should be assessed to determine what is preventing the system from completing its normal cycle.',
        },
        {
          q: 'Can you repair an opener that makes noise but does not operate correctly?',
          a: 'Yes. Unusual noise combined with poor operation can indicate an internal operating problem. The opener can be assessed to determine the appropriate repair approach.',
        },
        {
          q: 'How can I tell whether my opener needs professional repair?',
          a: 'Repeated stopping, delayed response, inconsistent operation, unusual behavior, or failure to complete normal cycles are signs that professional diagnosis may be appropriate.',
        },
        {
          q: 'How long does a garage door opener repair take?',
          a: 'Repair time depends on the specific fault and how accessible the affected area is. After diagnosing the problem, the technician can explain the expected repair process and timing.',
        },
      ],

      related: ['opener-installation', 'springs-replacement', 'emergency-services'],
    },
  },
  {
    slug: 'opener-installation',
    name: 'Opener Installation',
    short: 'Chain, belt and wall-mount openers fitted and programmed.',
    img: 'sv-opener-installation',
    alt: 'Garage door opener mounted to the ceiling with the rail fitted',
    about: [
      'Chain, belt and wall-mount openers fitted to the door you have, programmed to the remotes you keep, and set with travel limits that actually match the opening.',
      'We spec the operator to the door weight and how often you use it. A belt-drive is quieter if you live above the garage; a wall-mount frees the ceiling. You get the option that fits the house.',
    ],
    points: [
      'Chain, belt and wall-mount units',
      'Travel limits and force set on site',
      'Remotes, keypads and wifi programmed',
      'Photo-eyes aligned to code',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Opener Installation',
      metaTitle: 'Opener Installation - BSD Garage Door',
      metaDescription:
        'BSD Garage Door offers Opener Installation, garage opener setup, new opener installation, and professional opener replacement. Call today for service.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/opener-installation/',
      heroImage: 'opener-installation-hero.webp',
      heroKicker: 'Franklin & MetroWest opener specialists',
      introImage: 'sv-opener-installation',
      heroSub:
        'Get dependable Opener Installation with proper setup, precise adjustments, and thorough testing for smooth, convenient garage door operation.',

      intro: {
        heading: 'Enjoy Convenient Garage Door Access With Professional Opener Installation',
        body: [
          'A garage door opener should make daily access effortless — a single button, keypad or app command that raises and lowers the door smoothly every time. Professional opener installation delivers that convenience by matching the operator to your door and setting it up for reliable, predictable operation.',
          'We fit chain, belt and wall-mount openers to the door you have, program the remotes and controls you keep, and set the travel limits so the door meets the opening exactly. The operator is specced to the door’s weight and how often you use it, so you get the option that fits the house.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us for Professional Opener Installation',
        intro:
          'We focus on precise installation, safe operation, proper alignment, and dependable performance for your garage door opener.',
        items: [
          {
            icon: 'Gear',
            title: 'Precise Opener Setup',
            text: 'We install and configure your opener carefully, helping ensure smooth movement, reliable operation, and proper system response.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Installation',
            text: 'Our installation process accounts for safe operation, proper controls, and reliable stopping performance throughout everyday use.',
          },
          {
            icon: 'Wrench',
            title: 'Proper System Alignment',
            text: 'We carefully configure the opener with your garage door to support balanced movement and consistent performance.',
          },
          {
            icon: 'Check',
            title: 'Thorough Performance Testing',
            text: 'After installation, we test operation and settings to ensure the opener responds properly through repeated cycles.',
          },
        ],
      },

      offerings: {
        kicker: 'What we install',
        heading: 'Upgrade Your Garage Door With A Properly Installed Opener System',
        intro:
          'A dependable opener comes down to the right unit, correctly programmed and adjusted to the door. These are the parts of the installation we concentrate on.',
        items: [
          {
            icon: 'Gear',
            title: 'Chain, belt & wall-mount units',
            text: 'We fit chain, belt and wall-mount openers and spec the operator to the door’s weight and how often you use it — a belt-drive is quieter above a living space, a wall-mount frees the ceiling.',
          },
          {
            icon: 'IconTrack',
            title: 'Travel & force limits set',
            text: 'We set the travel and force limits on site so the door stops in the right place at the top and bottom and reverses correctly when it should.',
          },
          {
            icon: 'Phone',
            title: 'Remotes, keypads & wifi',
            text: 'We program the remotes and keypads you keep and set up wifi control where the opener supports it, so the door answers the way you expect.',
          },
          {
            icon: 'Shield',
            title: 'Photo-eyes aligned to code',
            text: 'We align and test the safety photo-eyes to code so the door reverses if something crosses its path while closing.',
          },
        ],
      },

      sections: [
        {
          id: 'convenience',
          kicker: 'Everyday convenience',
          heading: 'Improve Door Convenience With Smooth And Reliable Opener Operation',
          body: [
            'A well-installed opener turns the garage door into the most convenient entrance to the home. The difference between an opener that simply runs and one that operates reliably comes down to how carefully it is set up for your specific door.',
            'We match the operator to the door, program the controls you use day to day, and set the travel so the door opens and closes the same smooth way on every cycle — without straining against limits that do not match the opening.',
          ],
          list: [
            'A single button, keypad or app command instead of a manual lift',
            'Quiet belt-drive operation where the garage sits below living space',
            'Wall-mount options that free up the ceiling for storage',
            'Remotes, keypads and wifi programmed to the way you use the door',
          ],
        },
        {
          id: 'testing',
          kicker: 'Set up and tested',
          heading: 'Ensure Proper Opener Performance With Careful Installation And Testing',
          img: 'opener-installation-detail',
          imgAlt:
            'Two technicians installing a garage door opener and rail on a garage ceiling',
          body: [
            'Careful installation is only complete once the opener has been tested against the door it will move. We position and secure the unit, configure its operation, and adjust the travel and force so the door stops and starts where it should.',
            'Before we finish, we run the door through repeated cycles and confirm the safety reverse, so you are left with an opener that responds consistently and stops reliably during everyday use.',
          ],
          link: { to: '/services/opener-repair', label: 'See opener repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'When should I consider professional Opener Installation?',
          a: 'Professional installation is useful when adding an opener to an existing garage door, replacing an outdated setup, or upgrading for more convenient operation.',
        },
        {
          q: 'Can an opener be installed on my existing garage door?',
          a: 'In many cases, yes. The garage door and its operating setup should be evaluated first to confirm compatibility and ensure the opener can operate the door properly.',
        },
        {
          q: 'What happens during an Opener Installation service?',
          a: 'The installation includes positioning and securing the opener, configuring its operation, making necessary adjustments, and testing the system through multiple door cycles.',
        },
        {
          q: 'Why does proper opener adjustment matter after installation?',
          a: 'Correct adjustment helps the opener work smoothly with the door. Poor setup can contribute to inconsistent movement, unnecessary strain, or unreliable stopping and starting.',
        },
        {
          q: 'How do I know if my newly installed opener is working correctly?',
          a: 'The door should move smoothly and respond consistently to its controls. Proper testing checks operation, stopping behavior, movement, and overall system response.',
        },
      ],

      related: ['opener-repair', 'new-door-installation', 'emergency-services'],
    },
  },
  {
    slug: 'off-track-repair',
    name: 'Off-Track Repair',
    short: 'Doors off the rail reset safely, with the track checked for damage.',
    img: 'sv-off-track-repair',
    alt: 'Sectional garage door hanging off the track inside a garage',
    about: [
      'A door off the rail is not something to force back on. Bent track, a jumped roller or a broken cable can turn a reset into a panel that drops. We reset the door safely, inspect the track and hardware, and repair whatever threw it off.',
      'Most off-track calls finish the same visit. If the track is bent beyond reuse, we quote a replacement before we start cutting.',
    ],
    points: [
      'Door reset without forcing panels',
      'Track checked for bends and gaps',
      'Rollers, cables and hinges inspected',
      'Same-visit repair when parts are on the truck',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Off-Track Repair',
      metaTitle: 'Off-Track Repair - BSD Garage Door',
      metaDescription:
        'BSD Garage Door provides Off-Track Repair for crooked, stuck, and misaligned garage doors, including track realignment. Get reliable repair today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/off-track-repair/',
      heroKicker: 'Franklin & MetroWest off-track specialists',
      introImage: 'sv-off-track-repair',
      heroSub:
        'Restore safe, smooth garage door movement with professional Off-Track Repair for doors that have shifted, tilted, or become misaligned.',

      intro: {
        heading: 'Restore Proper Garage Door Alignment After Unexpected Track Problems',
        body: [
          'A door off the rail is not something to force back on. Bent track, a jumped roller or a broken cable can turn a reset into a panel that drops, so an off-track door is best left down until it can be assessed. Professional off-track repair restores safe, even movement by correcting what actually threw the door out of line.',
          'We reset the door safely, inspect the track and hardware, and repair whatever caused it to come off. Most off-track calls finish the same visit — and if the track is bent beyond reuse, we quote a replacement before we start cutting.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us for Professional Off-Track Repair',
        intro:
          'We provide careful assessments and precise repairs to restore proper alignment, smooth movement, and dependable garage door operation.',
        items: [
          {
            icon: 'Gear',
            title: 'Careful Door Assessment',
            text: 'We assess the door’s position and movement to identify alignment problems before completing the necessary repairs.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Repairs',
            text: 'Our technicians use careful procedures when correcting misaligned doors to help protect your door and property.',
          },
          {
            icon: 'IconTrack',
            title: 'Precise Track Alignment',
            text: 'We focus on correcting alignment issues so your garage door can move more evenly through its operating cycle.',
          },
          {
            icon: 'Check',
            title: 'Thorough Repair Testing',
            text: 'We test the door through multiple cycles after repair to confirm proper movement, alignment, and overall operation.',
          },
        ],
      },

      offerings: {
        kicker: 'What we check',
        heading: 'Get Smooth Door Movement With Precise Track Correction',
        intro:
          'A door leaves the track when one part of the system fails or takes a knock. These are the areas we inspect and correct to get the door running evenly again.',
        items: [
          {
            icon: 'IconTrack',
            title: 'Track checked for bends & gaps',
            text: 'We inspect the vertical and horizontal track for bends, gaps and loose mounts, and straighten or replace sections that no longer guide the door cleanly.',
          },
          {
            icon: 'Gear',
            title: 'Rollers, cables & hinges',
            text: 'A jumped roller, frayed cable or broken hinge often causes the door to shift. We inspect these components and renew whatever contributed to the door coming off.',
          },
          {
            icon: 'Wrench',
            title: 'Door reset without forcing',
            text: 'We reset the door onto the track without forcing panels, so a misaligned door is not turned into a bent or dropped section during the repair.',
          },
          {
            icon: 'Bolt',
            title: 'Same-visit repair',
            text: 'Most off-track calls finish the same visit because common parts ride on the truck. When a track is bent beyond reuse, we quote the replacement before any cutting begins.',
          },
        ],
      },

      sections: [
        {
          id: 'crooked-stuck',
          kicker: 'Know the signs',
          heading: 'Address Crooked And Stuck Garage Doors Before Further Damage',
          body: [
            'When a door shifts out of its intended path, one side can sit higher or lower than the other, and the door may bind or stop partway. Repeatedly operating a crooked or stuck door tends to turn a straightforward reset into bent track or damaged panels.',
            'The safest first step is to leave the door where it is and have the alignment checked. We identify what pulled the door out of line, correct it, and restore controlled movement before the problem spreads to other hardware.',
          ],
          list: [
            'One side of the door sitting higher or lower than the other',
            'The door binding, grinding or stopping partway through its travel',
            'A roller sitting outside the track, or a visible gap in the rail',
            'A loose, frayed or hanging lift cable beside the door',
            'The door leaning or looking twisted in the opening',
          ],
        },
        {
          id: 'prevent-recurring',
          kicker: 'Keep it on track',
          heading: 'Prevent Recurring Alignment Problems With Proper Off-Track Repair',
          body: [
            'Correcting the off-track condition is only part of the job — the door stays on the rail when the underlying cause is addressed rather than the symptom. We check the track, rollers, cables and hinges together so a single worn part does not pull the door out of line again soon after.',
            'After the repair we run the door through multiple cycles to confirm alignment, movement and overall response, so you are left with a door that opens and closes evenly and safely.',
          ],
          link: { to: '/services/rollers-replacement', label: 'See rollers replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What causes a garage door to come off its tracks?',
          a: 'An off-track door can result from impact, uneven movement, alignment problems, worn components, or excessive strain during operation. The underlying cause should be assessed before the door is repositioned.',
        },
        {
          q: 'Can I open my garage door if it has come off track?',
          a: 'It is generally safer to avoid forcing or repeatedly operating an off-track door. A misaligned door can be heavy and unpredictable, so professional assessment is recommended before further use.',
        },
        {
          q: 'Why is my garage door crooked after coming off track?',
          a: 'When the door shifts out of its intended path, one side may sit higher or lower than the other. Proper alignment helps restore a more even position and controlled movement.',
        },
        {
          q: 'Will Off-Track Repair fix a garage door that is stuck halfway?',
          a: 'If the door is stuck because it has moved out of alignment, correcting the off-track condition can restore movement. The door should first be inspected to determine the cause of the obstruction.',
        },
        {
          q: 'How do you check whether an off-track door is safe to operate again?',
          a: 'After completing the repair, the door is operated through multiple cycles to check alignment, movement, and overall response before returning it to normal use.',
        },
      ],

      related: ['rollers-replacement', 'panels-repair', 'emergency-services'],
    },
  },
  {
    slug: 'rollers-replacement',
    name: 'Rollers Replacement',
    short: 'Sealed nylon rollers that run quieter and outlast steel by years.',
    img: 'sv-rollers-replacement',
    alt: 'Steel garage door rollers with stems and sealed bearings laid out on a white surface',
    about: [
      'Steel rollers that rumble and flake are wearing the track as they go. Sealed nylon rollers run quieter and last years longer. We replace the full set so the door does not drag on mixed hardware.',
      'While the rollers are out we wipe the track, check the hinges and rebalance the door so the new wheels are not fighting a door that is already out of spec.',
    ],
    points: [
      'Full set, not one noisy roller',
      'Sealed nylon as standard',
      'Track wiped and checked while we are there',
      'Door rebalanced after the swap',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Garage Door Roller Replacement',
      metaTitle: 'Garage Door Roller Replacement - BSD Garage Door',
      metaDescription:
        'BSD Garage Door provides Garage Door Roller Replacement for worn, noisy, sticking, or uneven rollers. Restore smooth door movement and call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/rollers-replacement/',
      heroKicker: 'Franklin & MetroWest roller specialists',
      introImage: 'sv-rollers-replacement',
      heroSub:
        'Restore smoother, quieter garage door movement with professional roller replacement designed to address worn, damaged, and rough-running rollers.',

      intro: {
        heading: 'Restore Smooth Door Movement With Proper Roller Replacement Solutions',
        body: [
          'Steel rollers that rumble and flake are wearing the track as they go, and the rough movement works other hardware loose over time. Professional roller replacement restores smooth, quiet travel by swapping worn wheels for sealed nylon rollers sized to your door.',
          'We replace the full set rather than one noisy roller, so the door does not drag on mixed hardware. While the rollers are out we wipe the track, check the hinges, and rebalance the door so the new wheels are not fighting a door that is already out of spec.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Roller Replacement',
        intro:
          'We provide careful roller replacement focused on smoother movement, dependable operation, and practical solutions for worn garage door rollers.',
        items: [
          {
            icon: 'Gear',
            title: 'Careful Roller Assessment',
            text: 'We inspect roller condition and door movement to identify wear, damage, and signs of uneven operation.',
          },
          {
            icon: 'Wrench',
            title: 'Precise Replacement Work',
            text: 'Our replacement approach is focused on proper fit and alignment for smoother, more consistent garage door travel.',
          },
          {
            icon: 'IconTrack',
            title: 'Smooth Door Operation',
            text: 'Replacing worn rollers can reduce rough movement and help your garage door travel more evenly through each cycle.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain the condition of your rollers and the recommended replacement approach before moving forward with service.',
          },
        ],
      },

      offerings: {
        kicker: 'What we replace',
        heading: 'Improve Garage Door Performance By Replacing Damaged Rollers',
        intro:
          'A door only runs as smoothly as its rollers. These are the parts of a roller replacement we concentrate on to get the door travelling quietly and evenly again.',
        items: [
          {
            icon: 'Gear',
            title: 'Full set, not one roller',
            text: 'We replace the full set rather than a single noisy roller, so the door does not drag on mixed hardware wearing at different rates.',
          },
          {
            icon: 'IconTrack',
            title: 'Sealed nylon rollers',
            text: 'Sealed nylon rollers run quieter and outlast steel, so the door travels smoothly instead of rumbling and flaking along the track.',
          },
          {
            icon: 'Wrench',
            title: 'Track wiped & checked',
            text: 'While the rollers are out we wipe the track and check the hinges, so the new wheels are not running through grit or past worn hardware.',
          },
          {
            icon: 'Bolt',
            title: 'Door rebalanced',
            text: 'We rebalance the door after the swap so the new rollers are not fighting a door that is already out of spec.',
          },
        ],
      },

      sections: [
        {
          id: 'worn-rollers',
          kicker: 'Know the signs',
          heading: 'Replace Worn Rollers Before They Disrupt Everyday Garage Door Operation',
          body: [
            'Rollers wear a little with every cycle, and worn or damaged wheels tend to make themselves known before they fail completely. Catching them early keeps a routine roller swap from turning into a door that binds or jumps the track.',
            'If you notice any of the following on your Franklin-area door, it is worth having the rollers checked before the wear spreads to the track and hinges.',
          ],
          list: [
            'Grinding, rumbling or squealing as the door moves',
            'The door shakes or judders along the tracks',
            'Rough or uneven travel through the door’s cycle',
            'A roller that sticks, drags or sits unevenly in the track',
            'Visible flaking, flat spots or play in the roller wheels',
          ],
        },
        {
          id: 'noisy-uneven',
          kicker: 'Quieter, smoother travel',
          heading: 'Address Noisy And Uneven Garage Door Travel With Expert Service',
          body: [
            'Noise and uneven movement are the most common signs that rollers are past their best. Steel rollers that rumble and flake wear the track as they go, and the vibration works other hardware loose over time.',
            'We replace the full set with sealed nylon rollers, wipe and check the track, and rebalance the door so it travels quietly and evenly again — then run it through a full cycle to confirm smooth operation.',
          ],
          link: { to: '/services/hinges-replacement', label: 'See hinges replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'How do I know if my garage door rollers need replacement?',
          a: 'Grinding sounds, visible wear, rough travel, shaking, sticking, or uneven movement can indicate that the rollers are no longer operating properly and may need replacement.',
        },
        {
          q: 'Can worn rollers make my garage door harder to open?',
          a: 'Yes. Worn or damaged rollers can create additional friction and resistance, making the door move less smoothly and potentially affecting its overall operation.',
        },
        {
          q: 'Should rollers be replaced if only one looks damaged?',
          a: 'It depends on the condition and wear pattern of the rollers. A proper inspection can determine whether one roller or multiple rollers require replacement.',
        },
        {
          q: 'Why does my garage door shake while moving along the tracks?',
          a: 'Excessive shaking can be associated with worn rollers or uneven movement. The rollers and their interaction with the door system should be inspected to identify the cause.',
        },
        {
          q: 'Will replacing the rollers make my garage door quieter?',
          a: 'Replacing worn rollers can reduce noise caused by rough or inconsistent movement, helping the door travel more smoothly when the underlying issue is roller-related.',
        },
      ],

      related: ['hinges-replacement', 'tracks-replacement', 'off-track-repair'],
    },
  },
  {
    slug: 'hinges-replacement',
    name: 'Hinges Replacement',
    short: 'Worn or cracked hinges swapped before they pull the section out of line.',
    img: 'sv-hinges-replacement',
    alt: 'Galvanised garage door hinge bolted to a white door section with the roller in the track',
    about: [
      'Hinges take the load at every cycle. A cracked or elongated hinge pulls the section out of line and can throw the door off the track. We swap worn hinges before they take a panel with them.',
      'Hinges are numbered to the section they sit on. We match that numbering, replace in sets where the wear is shared, and verify alignment before we pack up.',
    ],
    points: [
      'Numbered hinges matched to the section',
      'Worn or cracked leaves replaced in sets',
      'Rollers checked at the same time',
      'Door alignment verified after',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Hinges Replacement',
      metaTitle: 'Hinges Replacement - BSD Garage Door',
      metaDescription:
        'Need Hinges Replacement? BSD Garage Door handles worn hinge replacement, damaged hinge repair, and uneven door movement. Restore smooth operation today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/hinges-replacement/',
      heroKicker: 'Franklin & MetroWest hinge specialists',
      introImage: 'sv-hinges-replacement',
      heroSub:
        'Restore smoother, more balanced garage door movement with properly fitted hinge replacements for worn, damaged, or stressed door sections.',

      intro: {
        heading: 'Restore Balanced Door Operation With Properly Fitted Replacement Hinges',
        body: [
          'Hinges take the load at every cycle, tying the door’s panels together so they bend over the curve as one. A cracked or elongated hinge pulls its section out of line and can throw the door off the track, so worn hinges are best replaced before they take a panel with them.',
          'We fit replacement hinges matched to the numbering of each section, replace worn leaves in sets where the wear is shared, and verify alignment so the door moves smoothly and squarely again — checking the rollers that sit in the hinges at the same time.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Hinges Replacement',
        intro:
          'We provide precise hinge replacement focused on proper door movement, dependable operation, and careful attention to existing wear.',
        items: [
          {
            icon: 'Gear',
            title: 'Careful Hinge Inspection',
            text: 'We assess hinge condition and door movement to identify worn, damaged, loose, or stressed hinge points.',
          },
          {
            icon: 'Wrench',
            title: 'Proper Replacement Fit',
            text: 'Each replacement is selected and positioned carefully to support balanced movement and consistent door operation.',
          },
          {
            icon: 'Bolt',
            title: 'Focused Repair Solutions',
            text: 'We address hinge-related problems at their source instead of overlooking wear that can affect the door’s movement.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Recommendations',
            text: 'You receive straightforward guidance about hinge condition and the replacement work needed for dependable performance.',
          },
        ],
      },

      offerings: {
        kicker: 'What we replace',
        heading: 'Improve Garage Door Reliability By Replacing Stressed Hinges',
        intro:
          'Hinges hold the panels in line through every cycle, so the details of the swap matter. These are the parts of a hinge replacement we concentrate on to keep the door moving as one balanced unit.',
        items: [
          {
            icon: 'Gear',
            title: 'Numbered hinges matched',
            text: 'Hinges are numbered to the section they sit on. We match that numbering so each replacement carries the load exactly where it should.',
          },
          {
            icon: 'Wrench',
            title: 'Worn leaves replaced in sets',
            text: 'Where wear is shared across a run, we replace the leaves in sets so one fresh hinge is not working against several tired ones.',
          },
          {
            icon: 'IconTrack',
            title: 'Rollers checked together',
            text: 'With the hinges off we check the rollers that sit in them, so a worn wheel is not left to pull a new hinge out of line.',
          },
          {
            icon: 'Bolt',
            title: 'Alignment verified after',
            text: 'We verify the section alignment after the swap, so the door tracks straight and the panels sit square before we pack up.',
          },
        ],
      },

      sections: [
        {
          id: 'worn-hinges',
          kicker: 'Know the signs',
          heading: 'Replace Worn Hinges Before They Affect Your Garage Door’s Smooth Movement',
          body: [
            'Hinges wear a little with every open and close, and a cracked or elongated hinge pulls its section out of line before it fails outright. Catching worn hinges early keeps a straightforward swap from turning into a panel that drops or a door that jumps the track.',
            'If you notice any of the following on your Franklin-area door, it is worth having the hinges checked before the wear spreads to the rollers and track.',
          ],
          list: [
            'Visible cracks or bending in the hinge leaves',
            'A section sitting out of line with the panels above or below',
            'Squealing, popping or grinding as the door bends over the curve',
            'Loose, elongated or missing hinge fasteners',
            'Uneven or jerky travel as the door opens and closes',
          ],
        },
        {
          id: 'uneven-strained',
          kicker: 'Balanced, even travel',
          heading: 'Address Damaged Hinges Causing Uneven Or Strained Door Movement',
          body: [
            'A damaged hinge does not only affect its own section — because the hinges tie the panels together, one worn leaf can create uneven travel and place extra strain on the rollers, track and neighbouring hinges.',
            'We replace worn hinges before they take a panel with them, match the numbering to each section, and verify alignment so the door moves as one balanced unit again.',
          ],
          link: { to: '/services/rollers-replacement', label: 'See rollers replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'How can I tell if my garage door hinges need replacement?',
          a: 'Visible cracks, bending, excessive wear, loose connections, or unusual movement around the door sections can indicate that hinges need attention.',
        },
        {
          q: 'What happens when a garage door hinge becomes worn?',
          a: 'A worn hinge can affect how door sections move together, potentially creating uneven travel, added strain, or noticeable movement during operation.',
        },
        {
          q: 'Can one damaged hinge affect the rest of the garage door?',
          a: 'Yes. Because hinges help sections move together, a damaged hinge can contribute to uneven movement and place additional stress on connected parts.',
        },
        {
          q: 'Should damaged hinges be replaced immediately?',
          a: 'If a hinge is visibly damaged, severely worn, or affecting door movement, timely replacement can help prevent the problem from contributing to further operating issues.',
        },
        {
          q: 'How do you determine which garage door hinges need replacement?',
          a: 'The condition of the hinges and the way the door sections move are assessed together to identify damaged or excessively worn hinge points requiring replacement.',
        },
      ],

      related: ['rollers-replacement', 'off-track-repair', 'panels-repair'],
    },
  },
  {
    slug: 'tracks-replacement',
    name: 'Tracks Replacement',
    short: 'Bent or corroded track replaced and realigned to manufacturer spec.',
    img: 'sv-tracks-replacement',
    alt: 'Curved galvanised garage door tracks with mounting bracket and cable drum',
    about: [
      'Bent, corroded or poorly installed track makes every other part work harder. We replace vertical and horizontal track, realign it to manufacturer spec, and make sure the door runs without scraping.',
      'Flag brackets, mounts and the gap to the jamb get reset at the same time. A new track on an old twist in the opening is just another door that binds.',
    ],
    points: [
      'Vertical and horizontal track',
      'Flag brackets and mounts reset',
      'Gap and plumb checked',
      'Door cycled and adjusted',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Tracks Replacement',
      metaTitle: 'Tracks Replacement - BSD Garage Door',
      metaDescription:
        'Need Tracks Replacement? BSD Garage Door handles bent track replacement, damaged track issues, and uneven door travel. Restore smooth movement today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/tracks-replacement/',
      heroKicker: 'Franklin & MetroWest track specialists',
      introImage: 'sv-tracks-replacement',
      heroSub:
        'Restore smooth, controlled garage door movement with properly fitted track replacements for bent, damaged, worn, or misaligned tracks.',

      intro: {
        heading: 'Replace Damaged Tracks To Restore Smooth Garage Door Movement',
        body: [
          'Bent, corroded or poorly installed track makes every other part of the door work harder, and once the rail is out of true the door starts to bind, scrape or wander. Professional track replacement restores smooth, controlled travel by fitting new track aligned to the opening rather than to where the damaged rail sat.',
          'We replace the vertical and horizontal track, realign it to manufacturer spec, and reset the flag brackets, mounts and the gap to the jamb at the same time — because a new track on an old twist in the opening is just another door that binds.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Tracks Replacement',
        intro:
          'We provide careful track replacement focused on proper alignment, stable door movement, and dependable everyday garage door operation.',
        items: [
          {
            icon: 'Gear',
            title: 'Accurate Track Assessment',
            text: 'We inspect track condition and door movement to identify bending, damage, wear, or alignment-related problems.',
          },
          {
            icon: 'Wrench',
            title: 'Precise Track Installation',
            text: 'Replacement tracks are positioned carefully to support proper alignment and consistent garage door movement during operation.',
          },
          {
            icon: 'Bolt',
            title: 'Focused Repair Solutions',
            text: 'We address track-related problems at the source to help reduce uneven travel, binding, and unnecessary door strain.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain the condition of your tracks and recommend practical replacement solutions based on the door’s needs.',
          },
        ],
      },

      offerings: {
        kicker: 'What we replace',
        heading: 'Improve Garage Door Travel With Properly Installed Replacement Tracks',
        intro:
          'A door only runs as straight as its track. These are the parts of a track replacement we concentrate on to get the door travelling smoothly and squarely again.',
        items: [
          {
            icon: 'IconTrack',
            title: 'Vertical & horizontal track',
            text: 'We replace both the vertical and horizontal track and realign it to manufacturer spec, so the door runs the full travel without scraping.',
          },
          {
            icon: 'Wrench',
            title: 'Flag brackets & mounts reset',
            text: 'Flag brackets, mounts and the gap to the jamb are reset at the same time, so the new track sits true to the opening rather than to the old damage.',
          },
          {
            icon: 'Gear',
            title: 'Gap & plumb checked',
            text: 'We check the gap and plumb so the track lines up with the door, not just bolted back where the bent one was.',
          },
          {
            icon: 'Bolt',
            title: 'Door cycled & adjusted',
            text: 'We cycle the door and adjust after fitting, so it travels smoothly and evenly through a full open and close before we pack up.',
          },
        ],
      },

      sections: [
        {
          id: 'bent-worn',
          kicker: 'Know the signs',
          heading: 'Address Bent Or Worn Tracks Before They Disrupt Daily Use',
          body: [
            'Track takes a knock from a bumper, rusts at the base, or works loose over years of cycles, and once it is bent or twisted every other part of the door works harder. Catching a damaged track early keeps a straightforward replacement from turning into a door that jumps the rail.',
            'If you notice any of the following on your Franklin-area door, it is worth having the track checked before the door starts to bind or scrape.',
          ],
          list: [
            'Visible bends, kinks or crushed sections in the rail',
            'The door scraping, sticking or catching at the same spot',
            'Gaps opening up between the rollers and the track as the door moves',
            'Rust or corrosion eating into the track near the floor',
            'Loose flag brackets or mounts letting the track shift',
          ],
        },
        {
          id: 'alignment',
          kicker: 'Straight, consistent travel',
          heading: 'Correct Track Alignment Issues For More Consistent Door Operation',
          body: [
            'A track that is out of alignment lets the door wander, bind or scrape even when the rest of the hardware is sound, and the extra friction wears the rollers and hinges faster. Correcting the alignment is what returns the door to controlled, even movement.',
            'We replace the vertical and horizontal track, realign it to manufacturer spec, and reset the flag brackets, mounts and the gap to the jamb — then cycle the door so it travels straight and consistently again.',
          ],
          link: { to: '/services/off-track-repair', label: 'See off-track repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'How can I tell if my garage door tracks need replacement?',
          a: 'Bent sections, visible damage, severe wear, unusual gaps, scraping, or inconsistent door movement can indicate that the tracks need replacement.',
        },
        {
          q: 'Can a bent track affect the way my garage door opens?',
          a: 'Yes. A damaged track can interfere with the door’s normal travel, causing sticking, uneven movement, scraping, or increased operating strain.',
        },
        {
          q: 'Can you replace tracks that have become misaligned?',
          a: 'If the existing tracks are damaged or their condition prevents reliable alignment, replacement may be appropriate. The track condition and door movement should be assessed first.',
        },
        {
          q: 'Why does my garage door rub against the track while moving?',
          a: 'Rubbing can occur when the track is bent, damaged, or no longer positioned correctly relative to the door. An inspection can identify the underlying issue.',
        },
        {
          q: 'Is replacing a damaged track better than continuing to use it?',
          a: 'Continuing to operate a door with significantly damaged tracks can contribute to further operating problems. Replacing unsuitable tracks can help restore controlled movement.',
        },
      ],

      related: ['off-track-repair', 'rollers-replacement', 'hinges-replacement'],
    },
  },
  {
    slug: 'weather-strip-replacement',
    name: 'Bottom Weather Strip Replacement',
    short: 'New bottom seal to keep water, draughts and pests out of the garage.',
    img: 'sv-weather-strip-replacement',
    alt: 'New black bottom weather seal fitted along the base of a white garage door',
    about: [
      'The bottom seal is what keeps rain, leaves, draughts and pests out of the garage. A torn or flattened bulb lets water under the door. We fit a new astragal sized to your panel, not a universal strip that peels off in a season.',
      'If the threshold or side seals are shot too, we will show you and quote them. No point sealing the bottom and leaving a gap at the jamb.',
    ],
    points: [
      'New bottom seal fitted to the panel',
      'Threshold checked for gaps',
      'Side seals quoted if they are worn',
      'Garage left weathertight',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Garage Door Weather Seal Replacement',
      metaTitle: 'Garage Door Weather Seal Replacement - BSD Garage Door',
      metaDescription:
        'BSD Garage Door offers Garage Door Weather Seal Replacement for worn seals, draft gaps, moisture entry, and damaged seals. Restore coverage today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/weather-strip-replacement/',
      heroImage: 'weather-strip-replacement-hero.webp',
      heroKicker: 'Franklin & MetroWest weatherproofing specialists',
      introImage: 'sv-weather-strip-replacement',
      heroSub:
        'Protect your garage from drafts, moisture, debris, and outdoor elements with properly fitted weather seal replacement for dependable coverage.',

      intro: {
        heading: 'Replace Damaged Weather Seals To Protect Your Garage From Outdoor Elements',
        body: [
          'The weather seal is what keeps rain, leaves, draughts and pests out of the garage, and a torn or flattened bulb lets the outdoors straight in. Professional weather seal replacement restores dependable coverage by fitting a seal sized to your door rather than a universal strip that peels off in a season.',
          'We fit a new astragal sized to your panel, check the threshold for gaps, and look over the side seals at the same time — because sealing the bottom and leaving a gap at the jamb still lets water and draughts through.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Weather Seal Replacement',
        intro:
          'We provide precise seal replacement focused on better coverage, reduced exposure, and dependable protection around your garage door.',
        items: [
          {
            icon: 'Gear',
            title: 'Careful Seal Assessment',
            text: 'We inspect the existing seal for cracks, gaps, compression loss, and damage affecting protection around the door.',
          },
          {
            icon: 'Wrench',
            title: 'Precise Replacement Fit',
            text: 'We install replacement seals carefully to create consistent coverage along the areas where the door meets the opening.',
          },
          {
            icon: 'Shield',
            title: 'Improved Garage Protection',
            text: 'A properly fitted seal helps limit drafts, moisture, dust, and outdoor debris from entering around the garage door.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain the seal’s condition and recommend a practical replacement approach based on the door’s needs.',
          },
        ],
      },

      offerings: {
        kicker: 'What we seal',
        heading: 'Improve Garage Protection With A Properly Fitted Replacement Weather Seal',
        intro:
          'Good coverage comes down to sealing the whole opening, not just one edge. These are the areas we address on a weather seal replacement to leave the garage weathertight.',
        items: [
          {
            icon: 'Shield',
            title: 'New bottom seal fitted',
            text: 'We fit a new astragal sized to your panel, not a universal strip, so the bottom of the door seals against water, leaves and draughts.',
          },
          {
            icon: 'Wrench',
            title: 'Threshold checked for gaps',
            text: 'We check the threshold, because a fresh bottom seal over an uneven floor can still let water track under the door.',
          },
          {
            icon: 'Gear',
            title: 'Side seals checked',
            text: 'If the side seals or jamb weatherstrip are worn too, we show you and quote them — no point sealing the bottom and leaving a gap at the jamb.',
          },
          {
            icon: 'Check',
            title: 'Garage left weathertight',
            text: 'We fit the seal so the garage is left weathertight, with consistent coverage where the door meets the opening.',
          },
        ],
      },

      sections: [
        {
          id: 'drafts-moisture',
          kicker: 'Know the signs',
          heading: 'Reduce Drafts And Moisture Entry Through Worn Or Deteriorated Door Seals',
          body: [
            'A weather seal takes the weather head-on, and rubber that has cracked, shrunk or flattened stops sealing long before it falls apart. A torn or flattened bulb lets water, draughts and pests under the door, so a worn seal is worth replacing before the next storm.',
            'If you notice any of the following on your Franklin-area door, the seal is likely past its best and letting the outdoors in.',
          ],
          list: [
            'Daylight visible around the door when it is closed',
            'Water tracking under the door after rain',
            'A draught you can feel along the bottom or sides',
            'Cracked, split, hardened or shrunken rubber',
            'Leaves, dust or pests getting into the garage',
          ],
        },
        {
          id: 'coverage',
          kicker: 'Full-opening coverage',
          heading: 'Restore Better Coverage Around Your Garage Door Opening With Proper Sealing',
          img: 'weather-strip-replacement-detail',
          imgAlt:
            'A new black bottom weather seal fitted along the base of a white garage door',
          body: [
            'Good coverage means sealing the whole opening, not just the bottom edge. A fresh astragal on the panel handles the floor, but the threshold and side seals matter just as much where the door meets the jamb.',
            'We fit a new bottom seal sized to your panel, check the threshold for gaps, and quote the side seals if they are worn — so the garage is left weathertight with consistent coverage around the opening.',
          ],
          link: { to: '/services/service-and-maintenance', label: 'See service and maintenance' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'How can I tell if my garage door weather seal needs replacement?',
          a: 'Cracking, splitting, shrinking, gaps, hardened material, or visible daylight around the closed door can indicate the seal is no longer providing proper coverage.',
        },
        {
          q: 'Can a worn weather seal let rainwater enter the garage?',
          a: 'Yes. A deteriorated or poorly fitting seal can leave gaps around the door, allowing moisture to enter when weather conditions expose those areas.',
        },
        {
          q: 'Why can I feel air coming through around my closed garage door?',
          a: 'Drafts can occur when the existing seal has compressed, cracked, shrunk, or developed gaps that allow outside air to pass through.',
        },
        {
          q: 'Does replacing the weather seal help keep debris out?',
          a: 'A properly fitted replacement seal can improve coverage around the garage door opening and help reduce the amount of dust and outdoor debris entering through gaps.',
        },
        {
          q: 'How do you know which weather seal replacement is suitable for my garage door?',
          a: 'The existing seal, door configuration, opening, and areas requiring coverage are assessed to determine an appropriate replacement solution and proper fit.',
        },
      ],

      related: ['service-and-maintenance', 'new-door-installation', 'panels-repair'],
    },
  },
  {
    slug: 'panels-repair',
    name: 'Panels Repair',
    short: 'Dented or damaged sections repaired where a full replacement is not needed.',
    img: 'sv-panels-repair',
    alt: 'Technician fastening a garage door hinge to a white panel with a cordless drill',
    about: [
      'A dented or cracked section does not always mean a new door. We repair panels where the skin and insulation can be saved, and we will tell you when a replacement section is cheaper than chasing another patch.',
      'Hardware only holds if it is going back into solid material. If the panel is too far gone, we stop and quote a section swap instead of billing you for a repair that will not last.',
    ],
    points: [
      'Dents, cracks and skin damage assessed on site',
      'Hardware reattached to solid material',
      'Colour-matched when a section must be swapped',
      'Honest call on repair versus replace',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Panels Repair',
      metaTitle: 'Panels Repair - BSD Garage Door',
      metaDescription:
        'Need Panels Repair? BSD Garage Door handles dented panels, cracked sections, impact damage, and bent garage door panels. Restore yours today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/panels-repair/',
      heroKicker: 'Franklin & MetroWest panel specialists',
      introImage: 'sv-panels-repair',
      heroSub:
        'Restore the appearance and function of your garage door with targeted panel repairs for dents, cracks, bends, and surface damage.',

      intro: {
        heading: 'Restore Panel Appearance And Function With Targeted Repair Solutions',
        body: [
          'A dented or cracked section does not always mean a new door. Targeted panel repair restores both the look and the function of the door by working on the affected area — where the skin and insulation can be saved — instead of replacing more than the damage calls for.',
          'We assess the dents, cracks and skin damage on site and refasten hardware to solid material, because hinges and brackets only hold in sound panel. When a section is too far gone, we tell you plainly and quote a colour-matched replacement rather than chasing another patch.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Panels Repair',
        intro:
          'We provide careful panel repair solutions focused on restoring appearance, maintaining door function, and addressing damage with practical expertise.',
        items: [
          {
            icon: 'Gear',
            title: 'Detailed Panel Assessment',
            text: 'We inspect damaged sections carefully to understand the severity of dents, cracks, bends, and other visible panel issues.',
          },
          {
            icon: 'Wrench',
            title: 'Targeted Repair Solutions',
            text: 'Our approach focuses on the affected panel area while considering how the damage impacts overall door operation.',
          },
          {
            icon: 'Check',
            title: 'Appearance And Function',
            text: 'We work to improve damaged panels while helping the garage door maintain smooth, balanced everyday operation.',
          },
          {
            icon: 'Phone',
            title: 'Clear Repair Guidance',
            text: 'We explain the panel condition and available repair approach clearly, helping you understand what the service addresses.',
          },
        ],
      },

      offerings: {
        kicker: 'What we repair',
        heading: 'Address Dents, Cracks, And Bends Affecting Your Garage Door Panels',
        intro:
          'Panel damage ranges from a cosmetic dent to a section that no longer holds hardware. These are the areas we work through to decide the right fix and carry it out.',
        items: [
          {
            icon: 'Wrench',
            title: 'Dents, cracks & skin damage',
            text: 'We assess dents, cracks and skin damage on site and repair the section where the skin and insulation can still be saved.',
          },
          {
            icon: 'Gear',
            title: 'Hardware back into solid material',
            text: 'Hardware only holds in sound panel, so we make sure hinges and brackets are refastened to solid material rather than a patched skin.',
          },
          {
            icon: 'Shield',
            title: 'Colour-matched section swaps',
            text: 'When a section is too far gone, we quote a colour-matched replacement panel so the door looks right rather than billing for a repair that will not last.',
          },
          {
            icon: 'Check',
            title: 'Honest repair-versus-replace call',
            text: 'We give an honest call on repair versus replace and tell you when a new section is cheaper than chasing another patch.',
          },
        ],
      },

      sections: [
        {
          id: 'damaged-panels',
          kicker: 'Know the signs',
          heading: 'Repair Damaged Garage Door Panels Before Problems Affect Daily Operation',
          body: [
            'A dent or crack can look cosmetic and still change how the door works — a distorted section binds against its neighbours and puts uneven strain on the hinges and rollers. Repairing damaged panels early keeps a small fix from spreading into the surrounding hardware.',
            'If you notice any of the following on your Franklin-area door, it is worth having the panel assessed before the damage starts to affect daily operation.',
          ],
          list: [
            'Visible dents, creases or cracks in a door section',
            'A panel that has bowed, bulged or pulled out of line',
            'Hinges or brackets working loose from a damaged skin',
            'The door binding or catching where a section is distorted',
            'Impact damage after a bump from a vehicle or equipment',
          ],
        },
        {
          id: 'performance',
          kicker: 'Balanced, even travel',
          heading: 'Improve Garage Door Performance By Correcting Damaged Panel Sections',
          body: [
            'Because the sections move together, one distorted panel can affect how the whole door travels — creating uneven movement and extra strain on adjacent sections. Correcting the damaged section is what restores balanced, smooth operation.',
            'We repair panels where the skin and insulation can be saved and refasten the hardware to solid material; where a section is beyond a lasting repair, we quote a colour-matched swap so the door looks right and runs right.',
          ],
          link: { to: '/services/panels-replacement', label: 'See panels replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What types of garage door panel damage can be repaired?',
          a: 'Depending on the severity, panels with dents, bends, cracks, impact damage, or other localized issues may be suitable for repair.',
        },
        {
          q: 'Can a dented garage door panel affect how the door operates?',
          a: 'Yes. Significant panel damage can interfere with movement or place uneven strain on the door. The damaged area should be assessed to determine its effect.',
        },
        {
          q: 'Is panel repair possible after a vehicle accidentally hits the garage door?',
          a: 'It can be, depending on the extent and location of the impact. The panel and surrounding door structure should be inspected to determine whether repair is appropriate.',
        },
        {
          q: 'Can one damaged panel cause problems with other door sections?',
          a: 'Yes. A severely damaged or distorted panel can affect how adjacent sections move together, potentially causing uneven operation or additional strain.',
        },
        {
          q: 'How do you determine whether a damaged panel can be repaired?',
          a: 'The damage, panel condition, door movement, and surrounding sections are evaluated to determine whether targeted repair can restore proper function.',
        },
      ],

      related: ['panels-replacement', 'new-door-installation', 'off-track-repair'],
    },
  },
  {
    slug: 'panels-replacement',
    name: 'Panels Replacement',
    short: 'Individual sections replaced and colour-matched to the existing door.',
    img: 'sv-panels-replacement',
    alt: 'White raised-panel garage door with sunburst windows and crumpled lower sections that need replacing',
    about: [
      'Individual sections replaced and colour-matched to the existing door, so you are not buying a whole door for one crushed bottom panel. We pull the damaged section, fit the new one, and reset hinges, rollers and weather seal.',
      'After a section swap the door has to be rebalanced \u2014 a new panel rarely weighs exactly what the crushed one did. We wind and test before we leave.',
    ],
    points: [
      'Single-section replacement',
      'Colour and profile matched',
      'Hardware transferred or renewed',
      'Door rebalanced after the swap',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Panels Replacement',
      metaTitle: 'Panels Replacement - BSD Garage Door',
      metaDescription:
        'Need Panels Replacement? BSD Garage Door replaces damaged, bent, or impact-damaged garage door panels for proper fit and smooth operation. Call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/panels-replacement/',
      heroKicker: 'Franklin & MetroWest panel specialists',
      introImage: 'sv-panels-replacement',
      heroSub:
        'Replace severely damaged garage door sections with properly fitted panels that restore appearance, structure, and dependable everyday operation.',

      intro: {
        heading: 'Replace Severely Damaged Panels To Restore Your Garage Door’s Appearance',
        body: [
          'When a section is beyond a lasting repair, replacing it restores both the look and the structure of the door. We replace individual sections and colour-match them to the existing door, so you are not buying a whole door for one crushed bottom panel.',
          'We pull the damaged section, fit the new one, and reset the hinges, rollers and weather seal. Because a new panel rarely weighs exactly what the crushed one did, we rebalance the door and test it before we leave.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Panels Replacement',
        intro:
          'We provide careful panel replacement focused on proper fit, balanced operation, lasting performance, and a clean finished appearance.',
        items: [
          {
            icon: 'Gear',
            title: 'Careful Damage Assessment',
            text: 'We assess the damaged section and surrounding door to determine the appropriate replacement approach.',
          },
          {
            icon: 'Wrench',
            title: 'Proper Panel Fit',
            text: 'Replacement panels are matched and positioned carefully to support consistent alignment with the existing door.',
          },
          {
            icon: 'Bolt',
            title: 'Balanced Door Operation',
            text: 'We consider the complete door system to help the new panel work smoothly with the surrounding sections.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain the replacement requirements clearly so you understand the work needed before service begins.',
          },
        ],
      },

      offerings: {
        kicker: 'What we replace',
        heading: 'Restore Structural Appearance With Properly Fitted Replacement Panels',
        intro:
          'A section swap has to fit, match and balance to hold up. These are the parts of a panel replacement we concentrate on to leave the door looking and running right.',
        items: [
          {
            icon: 'Wrench',
            title: 'Single-section replacement',
            text: 'We replace the damaged section on its own, so you are not buying a whole door for one crushed or impacted panel.',
          },
          {
            icon: 'Shield',
            title: 'Colour & profile matched',
            text: 'The new panel is colour and profile matched to the existing door, so the replacement blends in rather than standing out.',
          },
          {
            icon: 'Gear',
            title: 'Hardware transferred or renewed',
            text: 'We reset the hinges, rollers and weather seal as the section goes in, transferring or renewing hardware where it is needed.',
          },
          {
            icon: 'Bolt',
            title: 'Door rebalanced & tested',
            text: 'A new panel rarely weighs exactly what the old one did, so we rebalance the door and test it through a full cycle before we leave.',
          },
        ],
      },

      sections: [
        {
          id: 'impact-damage',
          kicker: 'When repair is not enough',
          heading: 'Address Impact Damage When Garage Door Panels Cannot Be Repaired',
          body: [
            'Some damage is past a lasting repair. When a panel has taken a hard impact — a bumper, severe bending or structural distortion — patching the skin will not restore the strength the section needs, and a replacement is the sounder fix.',
            'If any of the following describe your Franklin-area door, a section replacement is usually the better call than another repair.',
          ],
          list: [
            'Extensive impact damage after a vehicle bump',
            'Severe bending or a section folded out of shape',
            'Structural distortion that stops the panel holding hardware',
            'A crushed bottom section that no longer meets the floor',
            'Damage too widespread for a localized skin repair',
          ],
        },
        {
          id: 'matched-fit',
          kicker: 'Aligned, even travel',
          heading: 'Match Replacement Panels For Consistent Alignment And Smooth Operation',
          body: [
            'A replacement section has to fit the door it joins — matched to the existing configuration and profile so it aligns cleanly with the panels above and below. A section that does not sit true throws off the alignment and the way the door travels.',
            'We match the colour and profile, fit the new section, reset the hinges, rollers and weather seal, and rebalance the door so the new panel works smoothly with the surrounding sections — winding and testing before we leave.',
          ],
          link: { to: '/services/panels-repair', label: 'See panels repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'When does a garage door panel need replacement instead of repair?',
          a: 'Replacement may be appropriate when a panel has extensive impact damage, severe bending, major structural distortion, or damage that cannot be effectively restored through localized repair.',
        },
        {
          q: 'Can I replace just one damaged garage door panel?',
          a: 'In many situations, a single damaged section can be replaced while keeping the surrounding panels. The existing door should be assessed to determine compatibility and proper fit.',
        },
        {
          q: 'Will a replacement panel match my existing garage door?',
          a: 'The replacement is selected based on the existing door’s configuration and panel characteristics to support a consistent appearance and proper integration with surrounding sections.',
        },
        {
          q: 'Can a damaged panel affect the rest of my garage door?',
          a: 'Yes. A severely distorted panel can affect alignment and movement between sections. Replacing the damaged section can help restore more consistent door operation.',
        },
        {
          q: 'What should I do if my garage door panel is badly damaged after an impact?',
          a: 'Avoid forcing the door through repeated cycles if movement appears abnormal. An inspection can determine whether panel replacement is appropriate and what work is required.',
        },
      ],

      related: ['panels-repair', 'new-door-installation', 'weather-strip-replacement'],
    },
  },
  {
    slug: 'new-door-installation',
    name: 'New Door Installation',
    short: 'Insulated steel, carriage house and full-view glass, measured on site.',
    img: 'sv-new-door-installation',
    alt: 'Newly installed brown carriage-style garage door with window inserts and decorative hardware',
    about: [
      'Insulated steel, carriage house and full-view glass \u2014 measured on site, priced in writing, and fitted to manufacturer spec. We remove the old door, set new track and springs, and hang an opener if you want one.',
      'A catalogue size is a guess. We measure the opening, the headroom and the backroom so the door you approve is the door that actually fits.',
    ],
    points: [
      'Measured on site, not a catalogue guess',
      'Insulated steel, carriage house and glass',
      'Old door hauled away',
      'Springs, track and weather seal included',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Garage Door Installation',
      metaTitle: 'Garage Door Installation - BSD Garage Door',
      metaDescription:
        'Need Garage Door Installation? BSD Garage Door provides new door installation, replacement setup, and precise fitting for smooth operation. Call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/new-door-installation/',
      heroImage: 'new-door-installation-hero.webp',
      heroKicker: 'Franklin & MetroWest installation specialists',
      introImage: 'sv-new-door-installation',
      heroSub:
        'Get a professionally installed garage door designed for dependable operation, proper alignment, everyday convenience, and a clean finished appearance.',

      intro: {
        heading: 'Professional Installation Helps Create Smooth, Reliable Garage Door Operation',
        body: [
          'A new garage door should make the whole property work better — a door that opens smoothly, seals against the weather, and adds to the look of the house. Professional installation is what turns the right door into dependable, everyday operation.',
          'We measure the opening on site, price the work in writing, and fit the door to manufacturer spec — removing the old door, setting new track and springs, and hanging an opener if you want one. A catalogue size is a guess; the door you approve is the door that actually fits.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Professional Garage Door Installation',
        intro:
          'We focus on precise installation, dependable operation, careful fitting, and clear guidance for a garage door built around your needs.',
        items: [
          {
            icon: 'Gear',
            title: 'Precise Installation Work',
            text: 'We carefully position and install the door system to support smooth movement and dependable everyday operation.',
          },
          {
            icon: 'IconTrack',
            title: 'Proper Door Alignment',
            text: 'Accurate alignment helps the new garage door travel consistently while reducing unnecessary strain during regular operation.',
          },
          {
            icon: 'Wrench',
            title: 'Careful System Setup',
            text: 'We pay attention to the complete installation so the door and its operating components work together properly.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain the installation process and important considerations clearly, helping you understand what to expect.',
          },
        ],
      },

      offerings: {
        kicker: 'What we fit',
        heading: 'Choose The Right Garage Door Setup For Your Property And Everyday Needs',
        intro:
          'The right door starts with the right choices, measured to your opening. These are the parts of a new door installation we handle so the finished door fits and works properly.',
        items: [
          {
            icon: 'Shield',
            title: 'Insulated steel, carriage house & glass',
            text: 'We fit insulated steel, carriage house and full-view glass doors, so you can choose the style and insulation that suit the house and how the garage is used.',
          },
          {
            icon: 'Wrench',
            title: 'Measured on site',
            text: 'A catalogue size is a guess. We measure the opening, headroom and backroom so the door you approve is the door that actually fits.',
          },
          {
            icon: 'Gear',
            title: 'Springs, track & weather seal',
            text: 'We set new track and springs and include the weather seal, fitting the door to manufacturer spec — and hang an opener if you want one.',
          },
          {
            icon: 'Bolt',
            title: 'Old door hauled away',
            text: 'We remove and haul away the old door, priced in writing, so you are left with a clean opening and a new door ready to use.',
          },
        ],
      },

      sections: [
        {
          id: 'built-for-reliability',
          kicker: 'Set up to last',
          heading: 'Upgrade Your Garage With A Carefully Installed Door Built For Reliability',
          body: [
            'A new door is only as good as the installation behind it. We remove the old door, set new track and springs, fit the weather seal, and hang an opener if you want one — everything fitted to manufacturer spec so the door runs reliably from day one.',
            'Because every part is set up together, the door opens smoothly, sits square in the opening, and is balanced against its springs rather than fighting them.',
          ],
          list: [
            'Measured on site — the opening, headroom and backroom',
            'Old door removed and hauled away',
            'New springs, track and weather seal included',
            'Opener fitted and set up if you want one',
            'Priced in writing before the work begins',
          ],
        },
        {
          id: 'fit-function-convenience',
          kicker: 'Better fit, better function',
          heading: 'Properly Installed Doors Provide Better Fit, Function, And Everyday Convenience',
          img: 'new-door-installation-detail',
          imgAlt:
            'Newly installed dark modern garage doors with window inserts on a tan-sided home',
          body: [
            'A door measured and fitted to the opening does more than look right — it seals better against the weather, travels smoothly, and puts the least strain on the hardware and opener over the years of use ahead.',
            'We fit the door square to the opening and balance it against its springs, so the everyday convenience of a garage door that just works is backed by an installation set up to last.',
          ],
          link: { to: '/services/opener-installation', label: 'See opener installation' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What should I consider before scheduling a new garage door installation?',
          a: 'Important considerations include the garage opening, door configuration, intended use, available space, and the operating setup needed for reliable everyday use.',
        },
        {
          q: 'How do you make sure a new garage door fits the existing opening?',
          a: 'The opening and surrounding installation area are assessed before installation so the door can be positioned and fitted appropriately for the existing structure.',
        },
        {
          q: 'Can a new garage door be installed when the old door is being replaced?',
          a: 'Yes. A replacement installation involves removing the existing setup as needed and fitting the new door system to the garage opening.',
        },
        {
          q: 'Why is proper garage door alignment important during installation?',
          a: 'Correct alignment helps the door travel smoothly and consistently, while poor alignment can contribute to uneven movement, excess strain, or operating problems.',
        },
        {
          q: 'How do I know if my garage is ready for a new door installation?',
          a: 'The existing opening, surrounding structure, available clearance, and installation conditions should be assessed to identify any factors that could affect the new door setup.',
        },
      ],

      related: ['opener-installation', 'panels-replacement', 'weather-strip-replacement'],
    },
  },
  {
    slug: 'emergency-services',
    name: 'Emergency Services',
    short: 'Door stuck open or car trapped inside? You go to the front of the queue.',
    img: 'sv-emergency-services',
    alt: 'Black sedan crashed through a garage door, with the door panels torn from the opening',
    about: [
      'Door stuck open, car trapped, spring snapped at night \u2014 those calls go to the front of the queue. We run 24-hour service Sunday through Thursday and will tell you on the phone whether it is urgent or it can wait until morning.',
      'Common emergency parts ride on the truck: springs, cables, rollers and opener bits. If we can make the door safe the same visit, we will. If it needs a section or a new operator, you get that price before we start.',
    ],
    points: [
      '24-hour service Sunday through Thursday',
      'Car trapped or door stuck open goes first',
      'Common emergency parts on the truck',
      'Written price before work starts',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Emergency Garage Door Repair',
      metaTitle: 'Emergency Garage Door Repair - BSD Garage Door',
      metaDescription:
        'Need Emergency Garage Door Repair? BSD Garage Door handles stuck doors, sudden failures, and urgent garage door problems. Get prompt help today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/emergency-services/',
      heroImage: 'emergency-services-hero.webp',
      heroKicker: 'Franklin & MetroWest emergency service',
      introImage: 'sv-emergency-services',
      heroSub:
        'Get urgent garage door problems addressed quickly with focused repair solutions designed to restore safe, dependable access when you need it.',

      intro: {
        heading: 'Get Urgent Garage Door Problems Addressed Before They Disrupt Your Day',
        body: [
          'A garage door that fails without warning can bring the day to a halt — a car trapped inside, a door stuck open, or a spring snapped at night. Focused emergency repair gets urgent problems addressed quickly so you have safe, dependable access back.',
          'We run 24-hour service Sunday through Thursday and will tell you on the phone whether the problem is urgent or it can wait until morning. Common emergency parts ride on the truck, so many calls are made safe or fully repaired the same visit, with any larger fix priced in writing first.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Dependable Emergency Garage Door Repair',
        intro:
          'We respond to urgent door problems with focused troubleshooting, practical repairs, and clear guidance aimed at restoring dependable operation.',
        items: [
          {
            icon: 'Gear',
            title: 'Fast Problem Assessment',
            text: 'We quickly evaluate the door’s condition to identify the issue and determine the appropriate repair approach.',
          },
          {
            icon: 'Wrench',
            title: 'Practical Emergency Solutions',
            text: 'Our service focuses on addressing urgent operating problems so your garage door can return to dependable use.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Conscious Repairs',
            text: 'We consider the door’s condition and operating behavior to help address problems without overlooking important safety concerns.',
          },
          {
            icon: 'Phone',
            title: 'Clear Repair Guidance',
            text: 'We explain the identified issue and recommended repair clearly, helping you understand the necessary next steps.',
          },
        ],
      },

      offerings: {
        kicker: 'How we help',
        heading: 'Get Focused Garage Door Solutions When Immediate Service Is Needed',
        intro:
          'When a door cannot wait, a few things make the difference between a long wait and access restored. This is how we handle an emergency call.',
        items: [
          {
            icon: 'Phone',
            title: '24-hour service Sun–Thu',
            text: 'We run 24-hour service Sunday through Thursday and will tell you on the phone whether the problem is urgent or it can wait until morning.',
          },
          {
            icon: 'Bolt',
            title: 'Urgent calls go first',
            text: 'A car trapped inside or a door stuck open goes to the front of the queue, so the calls that cannot wait are seen first.',
          },
          {
            icon: 'Wrench',
            title: 'Common parts on the truck',
            text: 'Common emergency parts ride on the truck — springs, cables, rollers and opener bits — so we can often make the door safe the same visit.',
          },
          {
            icon: 'Check',
            title: 'Written price before work',
            text: 'If the door needs a new section or operator, you get that price in writing before we start — nothing goes ahead until you approve it.',
          },
        ],
      },

      sections: [
        {
          id: 'urgent-situations',
          kicker: 'When it cannot wait',
          heading: 'Address Stuck, Damaged, Or Unresponsive Doors With Urgent Repair',
          body: [
            'Some door problems cannot wait for a scheduled visit — a door stuck open leaves the garage exposed, a car can be trapped inside, and a door that has taken damage may be unsafe to move. Forcing an abnormal door tends to make the problem worse.',
            'These are the situations we treat as urgent on your Franklin-area door. If you are not sure whether it can wait, call and we will tell you plainly.',
          ],
          list: [
            'A door stuck open, leaving the garage exposed',
            'A car trapped inside behind a door that will not lift',
            'A spring, cable or roller that has failed suddenly',
            'A door off the track or damaged after an impact',
            'A door that has stopped responding or moves abnormally',
          ],
        },
        {
          id: 'restore-access',
          kicker: 'Access restored safely',
          heading: 'Restore Garage Door Access When Sudden Operating Problems Occur',
          img: 'emergency-services-detail',
          imgAlt:
            'A white sectional garage door on a shingled home after an emergency repair',
          body: [
            'When a door fails without warning, the priority is getting safe access back. We assess the door quickly, identify what has actually gone wrong, and carry out the repair that returns dependable operation — or make the door safe if a full fix needs a part we will quote first.',
            'Common emergency parts ride on the truck, so many urgent problems are resolved the same visit, with the price confirmed in writing before any work beyond making the door safe.',
          ],
          link: { to: '/services/springs-replacement', label: 'See springs replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What garage door problems may require emergency repair?',
          a: 'Situations such as a door becoming stuck, failing to operate, suffering sudden damage, or remaining in an unsafe position may require prompt professional attention.',
        },
        {
          q: 'What should I do if my garage door suddenly stops working?',
          a: 'Avoid repeatedly forcing the door to operate. If the door is stuck or behaving abnormally, professional assessment can help identify the problem and determine the safest repair approach.',
        },
        {
          q: 'Can you help if my garage door is stuck open?',
          a: 'Yes. A door that remains open can leave the garage exposed and may require prompt assessment to determine why it cannot complete its normal operation.',
        },
        {
          q: 'What if my garage door suddenly becomes difficult to move?',
          a: 'Sudden resistance or unusual movement can indicate an operating problem that should be assessed rather than forced. A professional inspection can identify the underlying issue.',
        },
        {
          q: 'How quickly can an emergency garage door problem be diagnosed?',
          a: 'The initial assessment focuses on identifying the immediate operating issue and determining the repair needed. Timing can vary depending on the problem and door condition.',
        },
      ],

      related: ['springs-replacement', 'off-track-repair', 'opener-repair'],
    },
  },
  {
    slug: 'service-and-maintenance',
    name: 'Service and Maintenance',
    short: 'Annual tune-ups that catch worn parts before they strand you.',
    img: 'sv-service-and-maintenance',
    alt: 'Technician lubricating a garage door hinge and roller during a maintenance visit',
    about: [
      'An annual tune-up catches worn rollers, dry hinges and weakening springs before they strand you. We lube the moving parts, test the balance and safety reverse, and give you a written list of what should be replaced next \u2014 not a surprise on the driveway.',
      'A fall visit in MetroWest usually pays for itself before the first ice storm. Springs and weather seals take the winter hardest; catching them early is cheaper than a 2am call.',
    ],
    points: [
      'Full cycle test and balance check',
      'Springs, rollers, hinges and cables inspected',
      'Safety reverse and photo-eyes tested',
      'Written notes on what can wait',
    ],

    // Reusable service-page template content (see <ServiceTemplate>). Same
    // opt-in shape as opener-repair; icons referenced by name (Icons.jsx).
    page: {
      h1: 'Service and Maintenance',
      metaTitle: 'Service and Maintenance - BSD Garage Door',
      metaDescription:
        'BSD Garage Door provides Service and Maintenance for garage door upkeep, performance checks, wear detection, and operating issues. Schedule service today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/service-and-maintenance/',
      heroKicker: 'Franklin & MetroWest maintenance specialists',
      introImage: 'sv-service-and-maintenance',
      heroSub:
        'Keep your garage door dependable with professional service and maintenance designed to identify wear, improve operation, and prevent avoidable issues.',

      intro: {
        heading: 'Keep Your Garage Door Operating Smoothly Through Consistent Professional Care',
        body: [
          'Consistent professional care is what keeps a garage door dependable year after year. An annual tune-up catches worn rollers, dry hinges and weakening springs before they strand you, so small wear is handled on a scheduled visit rather than a breakdown.',
          'We lube the moving parts, test the balance and safety reverse, and give you a written list of what should be replaced next — not a surprise on the driveway. It is the low-cost habit that keeps the door running smoothly and safely.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Service And Maintenance',
        intro:
          'We provide attentive garage door care focused on dependable operation, early issue detection, and practical maintenance solutions.',
        items: [
          {
            icon: 'Gear',
            title: 'Thorough System Inspection',
            text: 'We examine key operating areas to identify wear, unusual movement, and developing problems before they worsen.',
          },
          {
            icon: 'Shield',
            title: 'Preventive Care Approach',
            text: 'Regular service helps address developing concerns early and supports smoother, more dependable garage door operation.',
          },
          {
            icon: 'Wrench',
            title: 'Practical Maintenance Solutions',
            text: 'We focus on necessary service based on the door’s condition rather than recommending unnecessary work.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Recommendations',
            text: 'We explain observed conditions and recommended maintenance clearly so you understand what your garage door needs.',
          },
        ],
      },

      offerings: {
        kicker: 'What a tune-up covers',
        heading: 'Maintain Reliable Door Performance With Careful Inspection And Service',
        intro:
          'A good tune-up works through the whole door, not just the part that squeaks. These are the areas we check and service on a maintenance visit.',
        items: [
          {
            icon: 'Gear',
            title: 'Full cycle test & balance check',
            text: 'We run the door through a full cycle and check the balance, so it is not straining against springs that are losing their tension.',
          },
          {
            icon: 'Wrench',
            title: 'Springs, rollers, hinges & cables',
            text: 'We inspect the springs, rollers, hinges and cables for wear and lube the moving parts, so the door runs smoothly and quietly.',
          },
          {
            icon: 'Shield',
            title: 'Safety reverse & photo-eyes tested',
            text: 'We test the safety reverse and photo-eyes, so the door stops and reverses the way it should if something is in its path.',
          },
          {
            icon: 'Check',
            title: 'Written notes on what can wait',
            text: 'You get a written list of what should be replaced next and what can wait — no surprises on the driveway.',
          },
        ],
      },

      sections: [
        {
          id: 'catch-early',
          kicker: 'Caught early',
          heading: 'Identify Developing Garage Door Problems Before They Cause Major Disruptions',
          body: [
            'A door can run normally right up until a worn part gives out. An annual tune-up catches worn rollers, dry hinges and weakening springs before they strand you, turning a would-be emergency into a planned, low-cost fix.',
            'On your Franklin-area door, regular service tends to surface the following before they become a breakdown.',
          ],
          list: [
            'Rollers and hinges wearing or running dry',
            'Springs losing tension before they snap',
            'Cables fraying at the drum or the bottom bracket',
            'A safety reverse or photo-eye drifting out of adjustment',
            'Balance slipping so the opener works harder than it should',
          ],
        },
        {
          id: 'proactive-care',
          kicker: 'Dependable everyday access',
          heading: 'Protect Everyday Garage Access Through Proactive Maintenance And Expert Attention',
          body: [
            'Proactive maintenance keeps the door you rely on every day dependable. A fall visit in MetroWest usually pays for itself before the first ice storm — springs and weather seals take the winter hardest, and catching them early is cheaper than a 2am call.',
            'We lube the moving parts, test the balance and safety reverse, and hand over written notes on what can wait, so you can plan any replacement rather than be caught out by it.',
          ],
          link: { to: '/services/springs-replacement', label: 'See springs replacement' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What does garage door service and maintenance typically include?',
          a: 'Service focuses on assessing the door’s operating condition, identifying developing concerns, checking movement, and addressing issues that could affect reliable performance.',
        },
        {
          q: 'How often should my garage door receive professional maintenance?',
          a: 'The appropriate frequency depends on usage, door condition, age, and operating environment. A professional assessment can help determine a suitable service interval.',
        },
        {
          q: 'Can maintenance identify problems before my garage door stops working?',
          a: 'Regular inspections can reveal signs of wear, unusual movement, or developing operating concerns before they become more disruptive problems.',
        },
        {
          q: 'Is service and maintenance useful for a garage door that still works normally?',
          a: 'Yes. A door can appear to operate normally while developing wear or other concerns. Preventive attention can help identify these issues earlier.',
        },
        {
          q: 'What signs indicate that my garage door may need professional service?',
          a: 'Increasing noise, slower movement, uneven operation, unusual behavior, or changes in how the door opens and closes can indicate that professional attention is warranted.',
        },
      ],

      related: ['springs-replacement', 'rollers-replacement', 'weather-strip-replacement'],
    },
  },

  // ---------------------------------------------------------------------------
  // NEW SERVICE PAGES (draft copy — pending optimized content from the client).
  // Each reuses an existing WebP for its image (no dedicated assets yet); alt
  // text matches the image actually shown. Built on the reusable template.
  // ---------------------------------------------------------------------------
  {
    slug: 'garage-door-fix',
    name: 'Garage Door Fix',
    short: 'Fast diagnosis and practical repairs for doors that stick, stall or stop working.',
    img: 'sv-service-and-maintenance',
    alt: 'Technician lubricating a garage door hinge and roller during a maintenance visit',
    about: [
      'When a garage door starts sticking, stalling or refusing to move, the fix starts with finding the real cause rather than guessing at the symptom. We diagnose the door on site and repair what is actually wrong.',
      'From worn hardware to a door that has drifted out of balance, we work through the system methodically and confirm the door runs smoothly before we leave.',
    ],
    points: [
      'On-site diagnosis before any work',
      'Practical repairs, not guesswork',
      'Common parts carried on the truck',
      'Door tested through a full cycle',
    ],

    page: {
      h1: 'Garage Door Fix',
      metaTitle: 'Garage Door Fix - BSD Garage Door',
      metaDescription:
        'Need a Garage Door Fix? BSD Garage Door diagnoses and repairs sticking, stalling, and unresponsive garage doors across Franklin and MetroWest. Call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/garage-door-fix/',
      heroKicker: 'Franklin & MetroWest garage door repair',
      heroSub:
        'Get everyday garage door problems fixed with practical, on-site repairs that target the real cause and restore smooth, dependable operation.',

      intro: {
        heading: 'Fix Everyday Garage Door Problems With Practical, On-Site Repair',
        body: [
          'A garage door that sticks, stalls or will not respond turns a simple part of the day into a frustration. A dependable fix starts with an accurate diagnosis — identifying whether the problem sits with the springs, rollers, tracks, opener or the balance of the door itself.',
          'We diagnose the door on site, explain what we find, and carry out the repair that resolves it. Common parts ride on the truck, so many everyday problems are put right the same visit.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For A Reliable Garage Door Fix',
        intro:
          'We focus on accurate diagnosis, practical repairs, and clear guidance so your garage door is fixed properly the first time.',
        items: [
          {
            icon: 'Gear',
            title: 'Accurate Diagnosis',
            text: 'We identify the real cause of the problem before recommending a fix, so the repair addresses the issue rather than the symptom.',
          },
          {
            icon: 'Wrench',
            title: 'Practical Repairs',
            text: 'Our technicians focus on practical repairs that restore dependable operation without unnecessary work.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Service',
            text: 'We check operation and safety-related functions so the door works reliably during everyday use.',
          },
          {
            icon: 'Phone',
            title: 'Clear Communication',
            text: 'You receive straightforward guidance about the problem, the fix, and what to expect before work begins.',
          },
        ],
      },

      offerings: {
        kicker: 'What we fix',
        heading: 'Get Common Garage Door Problems Fixed With Focused Repair Expertise',
        intro:
          'Most garage door faults trace back to a handful of causes. These are the everyday problems we most often put right.',
        items: [
          {
            icon: 'Gear',
            title: 'Doors that stick or bind',
            text: 'A door catching or binding at the same spot usually points to a roller, track or alignment issue. We find the cause and free the door to run smoothly.',
          },
          {
            icon: 'Bolt',
            title: 'Doors that stall or reverse',
            text: 'A door that stops partway or reverses can come down to the opener, the travel limits or the balance. We trace it to the part and put it right.',
          },
          {
            icon: 'IconTrack',
            title: 'Noisy or rough operation',
            text: 'Grinding, rattling or shaking often means worn rollers, hinges or track. We service or replace what is causing the noise.',
          },
          {
            icon: 'Shield',
            title: 'Doors that will not respond',
            text: 'When the door will not move on command, we check the opener, controls and safety sensors to get it responding again.',
          },
        ],
      },

      sections: [
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Address Sticking, Stalling, And Unresponsive Doors Before They Worsen',
          body: [
            'Small faults tend to grow when a door is forced to keep working around them — a sticking roller wears the track, a slipping balance strains the opener. Catching the problem early keeps a quick fix from turning into a larger repair.',
            'If you notice any of the following on your Franklin-area door, it is worth having it looked at before the problem spreads.',
          ],
          list: [
            'The door sticking, catching or binding as it moves',
            'The door stalling partway or reversing on its own',
            'Grinding, rattling or shaking during operation',
            'The door not responding to the remote, keypad or wall control',
            'The door feeling heavier or more uneven than usual',
          ],
        },
        {
          id: 'lasting-fix',
          kicker: 'Fixed properly',
          heading: 'Restore Smooth Operation With A Fix That Lasts',
          body: [
            'A lasting fix comes from repairing the underlying cause, not patching the symptom. We work through the springs, rollers, tracks, hinges, opener and balance to find what is actually stopping the door from running properly.',
            'Once the repair is done, we run the door through a full open and close, check the balance and safety reverse, and confirm it operates smoothly before we pack up.',
          ],
          link: { to: '/services/service-and-maintenance', label: 'See service and maintenance' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Why is my garage door suddenly hard to open?',
          a: 'A door that becomes hard to open can point to a balance problem, worn hardware, or a spring issue. The cause should be assessed before the door is forced, so the right fix can be identified.',
        },
        {
          q: 'Can most garage door problems be fixed in one visit?',
          a: 'Many common problems can be resolved the same visit because frequently needed parts are carried on the truck. More involved repairs may require a specific part to be sourced first.',
        },
        {
          q: 'Should I keep using a garage door that is acting up?',
          a: 'It is generally better to avoid repeatedly forcing a door that is sticking, stalling or behaving abnormally, as this can worsen the underlying problem. An assessment can identify the cause.',
        },
        {
          q: 'How do you decide what needs fixing on my garage door?',
          a: 'We diagnose the door on site, checking the springs, rollers, tracks, opener and balance to find the actual cause before recommending a repair.',
        },
        {
          q: 'What garage door problems do you handle?',
          a: 'We handle everyday garage door problems including sticking or binding doors, stalling or reversing, noisy operation, and doors that will not respond to their controls.',
        },
      ],

      related: ['opener-repair', 'off-track-repair', 'service-and-maintenance'],
    },
  },
  {
    slug: 'garage-door-sensor-repair',
    name: 'Garage Door Sensor Repair',
    short: 'Misaligned or blocked safety sensors realigned and tested so the door closes.',
    img: 'sv-opener-repair',
    alt: 'LiftMaster garage door opener mounted to the ceiling with chain rail and emergency release cord',
    about: [
      'The safety sensors — the small photo-eyes near the floor on each side of the door — stop the door closing on anything in its path. When they are misaligned, dirty or wired loose, the door will not close and the opener light often flashes.',
      'We realign and clean the photo-eyes, check the wiring, and test that the door closes on command and reverses when the beam is broken.',
    ],
    points: [
      'Photo-eyes realigned and cleaned',
      'Sensor wiring checked',
      'Safety reverse tested',
      'Door confirmed closing on command',
    ],

    page: {
      h1: 'Garage Door Sensor Repair',
      metaTitle: 'Garage Door Sensor Repair - BSD Garage Door',
      metaDescription:
        'Need Garage Door Sensor Repair? BSD Garage Door realigns and tests safety photo-eyes so your door closes reliably. Restore safe operation — call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/garage-door-sensor-repair/',
      heroImage: 'garage-door-sensor-repair-hero.webp',
      heroKicker: 'Franklin & MetroWest opener specialists',
      heroSub:
        'Restore safe, reliable closing with garage door sensor repair that realigns, tests, and corrects the photo-eyes that keep the door from closing on obstacles.',

      intro: {
        heading: 'Restore Reliable Closing With Professional Garage Door Sensor Repair',
        body: [
          'When a garage door will not close, or reverses just before it reaches the floor, the safety sensors are a common cause. These photo-eyes sit low on each side of the opening and stop the door if their beam is blocked — so when they drift out of alignment or get dirty, the door treats a clear opening as an obstacle.',
          'We realign and clean the sensors, check the wiring back to the opener, and test the safety reverse so the door closes on command and still protects anything in its path.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Sensor Repair',
        intro:
          'We focus on accurate sensor alignment, safe operation, and clear testing so your garage door closes dependably.',
        items: [
          {
            icon: 'Gear',
            title: 'Accurate Sensor Alignment',
            text: 'We realign the photo-eyes precisely so their beam lines up and the door stops treating a clear opening as blocked.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Testing',
            text: 'We test the safety reverse so the door still stops and reverses when something crosses the sensor beam.',
          },
          {
            icon: 'Wrench',
            title: 'Wiring & Connection Checks',
            text: 'We check the sensor wiring and connections back to the opener to rule out a loose or damaged link.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We explain what was affecting the sensors and what the repair addresses before work begins.',
          },
        ],
      },

      offerings: {
        kicker: 'What we repair',
        heading: 'Correct The Sensor Faults That Stop Your Garage Door Closing',
        intro:
          'Most sensor problems come down to alignment, obstruction or wiring. These are the faults we check and correct.',
        items: [
          {
            icon: 'Gear',
            title: 'Misaligned photo-eyes',
            text: 'A knocked or drifted sensor breaks the beam and stops the door closing. We realign both eyes so the beam is true again.',
          },
          {
            icon: 'Shield',
            title: 'Blocked or dirty lenses',
            text: 'Dust, cobwebs or a stray object across a lens reads as an obstruction. We clean the lenses and clear the beam path.',
          },
          {
            icon: 'Wrench',
            title: 'Loose or damaged wiring',
            text: 'A loose terminal or damaged sensor wire interrupts the signal. We check the wiring and connections back to the opener.',
          },
          {
            icon: 'IconTrack',
            title: 'Sensor bracket problems',
            text: 'A bent or loose bracket lets the eye drift out of position. We secure the brackets so the alignment holds.',
          },
        ],
      },

      sections: [
        {
          id: 'signs',
          kicker: 'Know the signs',
          heading: 'Recognise The Signs Of A Garage Door Sensor Problem',
          body: [
            'The safety sensors give clear signals when something is wrong, and reading them early saves forcing a door that is trying to protect the opening. Most sensor faults show up the same handful of ways.',
            'If you notice any of the following on your Franklin-area door, the photo-eyes are worth checking.',
          ],
          list: [
            'The door starts to close, then stops and reverses',
            'The opener light blinks or flashes when you try to close',
            'The door only closes if you hold the wall button down',
            'A sensor indicator light is off or flickering',
            'A sensor sits crooked, knocked or hanging from its bracket',
          ],
        },
        {
          id: 'why-it-matters',
          kicker: 'Safe by design',
          heading: 'Keep Your Garage Door Safe With Properly Working Sensors',
          img: 'garage-door-sensor-repair-detail',
          imgAlt:
            'Garage door spring and bracket hardware being checked with a level during service',
          body: [
            'The photo-eyes are a safety feature, not an optional extra — they are what stops a closing door from coming down on a person, a pet or a vehicle. A sensor that is bypassed or ignored removes that protection.',
            'We repair and realign the sensors rather than defeating them, then test that the door reverses reliably when the beam is broken, so the door stays both convenient and safe.',
          ],
          link: { to: '/services/opener-repair', label: 'See opener repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Why won’t my garage door close all the way?',
          a: 'A door that will not close, or reverses near the floor, is often caused by misaligned or blocked safety sensors. The photo-eyes should be checked and realigned before other causes are considered.',
        },
        {
          q: 'Why is my garage door opener light blinking?',
          a: 'A blinking opener light frequently indicates a safety sensor problem, such as misalignment or a blocked beam. The sensors should be inspected to confirm the cause.',
        },
        {
          q: 'Can dirty sensors stop my garage door from closing?',
          a: 'Yes. Dust or debris on a sensor lens can break the beam and make the door treat a clear opening as blocked. Cleaning and realigning the lenses can restore normal closing.',
        },
        {
          q: 'Is it safe to bypass my garage door sensors?',
          a: 'Bypassing the sensors removes an important safety feature that stops the door closing on people, pets or objects. Repairing and realigning the sensors is the safer approach.',
        },
        {
          q: 'How do you fix garage door sensors that are out of alignment?',
          a: 'We realign both photo-eyes so their beam lines up, clean the lenses, check the wiring, and test the safety reverse to confirm the door closes reliably.',
        },
      ],

      related: ['opener-repair', 'garage-door-remote-replacement', 'garage-door-keypad-installation'],
    },
  },
  {
    slug: 'garage-door-keypad-installation',
    name: 'Garage Door Keypad Installation',
    short: 'Wireless entry keypads fitted and programmed for keyless garage access.',
    img: 'sv-opener-installation',
    alt: 'Garage door opener mounted to the ceiling with the rail fitted',
    about: [
      'A wireless keypad mounted by the garage door lets you open it with a code — no remote, no key. We fit the keypad, pair it to your opener, and set up the codes you want.',
      'We check the keypad works with your opener before we leave and show you how to add or change codes.',
    ],
    points: [
      'Keypad mounted and paired to the opener',
      'Entry codes set up',
      'Compatibility checked first',
      'Tested before we leave',
    ],

    page: {
      h1: 'Garage Door Keypad Installation',
      metaTitle: 'Garage Door Keypad Installation - BSD Garage Door',
      metaDescription:
        'Need Garage Door Keypad Installation? BSD Garage Door fits and programs wireless entry keypads for convenient keyless access. Call to schedule today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/garage-door-keypad-installation/',
      heroKicker: 'Franklin & MetroWest opener specialists',
      heroSub:
        'Add convenient keyless entry with professional garage door keypad installation — fitted, programmed, and tested to work reliably with your opener.',

      intro: {
        heading: 'Add Convenient Keyless Entry With Professional Keypad Installation',
        body: [
          'A wireless entry keypad turns the garage into a keyless door — a code on the pad opens it, so you are covered when you are locked out, sending the kids in, or heading out without a remote. Professional installation makes sure the keypad pairs cleanly with your opener and works every time.',
          'We confirm the keypad suits your opener, mount it securely by the door, program the entry codes you want, and test it before we leave.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Keypad Installation',
        intro:
          'We focus on proper setup, opener compatibility, and clear guidance so your keypad works reliably from the first code.',
        items: [
          {
            icon: 'Gear',
            title: 'Proper Keypad Setup',
            text: 'We mount and program the keypad carefully so it pairs cleanly with your opener and responds every time.',
          },
          {
            icon: 'Wrench',
            title: 'Compatibility Checked',
            text: 'We confirm the keypad suits your opener before installation, so it works with the system you already have.',
          },
          {
            icon: 'Shield',
            title: 'Secure Code Setup',
            text: 'We set up your entry codes and show you how to change them, so access stays in your control.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We walk you through using the keypad and managing codes before we finish.',
          },
        ],
      },

      offerings: {
        kicker: 'What we set up',
        heading: 'Set Up Keyless Garage Access With A Properly Installed Keypad',
        intro:
          'A keypad is only useful when it is paired, positioned and programmed correctly. These are the parts of the installation we handle.',
        items: [
          {
            icon: 'Wrench',
            title: 'Keypad mounted securely',
            text: 'We fit the keypad by the garage door in a spot that is easy to reach and secure, ready for daily use.',
          },
          {
            icon: 'Gear',
            title: 'Paired to your opener',
            text: 'We pair the keypad to your opener and confirm the signal is reliable across the range you use.',
          },
          {
            icon: 'Shield',
            title: 'Entry codes programmed',
            text: 'We program the entry code you choose and show you how to add or change codes later.',
          },
          {
            icon: 'Check',
            title: 'Tested before we leave',
            text: 'We test the keypad through several open and close cycles to confirm it responds consistently.',
          },
        ],
      },

      sections: [
        {
          id: 'benefits',
          kicker: 'Everyday convenience',
          heading: 'Enjoy Reliable Keyless Access For Your Garage Door',
          img: 'garage-door-keypad-installation-detail',
          imgAlt: 'A white panelled garage door on a residential home',
          body: [
            'A keypad adds a convenient way into the garage that does not depend on carrying a remote or a key. It is handy for family members, for getting in when you are locked out, and for anyone who would rather leave the remote in the car.',
            'We set the keypad up to work smoothly with your existing opener, so keyless access is dependable rather than an occasional gamble.',
          ],
          list: [
            'Keyless entry without a remote or key',
            'A code for family members or trusted helpers',
            'Codes you can change whenever you need to',
            'A backup way in if a remote fails or is lost',
          ],
        },
        {
          id: 'compatibility',
          kicker: 'Set up to work',
          heading: 'Ensure Dependable Keypad Performance With Proper Installation',
          body: [
            'A keypad only earns its place when it pairs reliably with the opener and holds its programming. The right first step is confirming the keypad suits your opener, then mounting and programming it properly.',
            'We check compatibility, position the keypad for easy everyday use, program your codes, and test it so it responds consistently before we leave.',
          ],
          link: { to: '/services/opener-installation', label: 'See opener installation' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Can a keypad be added to my existing garage door opener?',
          a: 'In many cases, yes. The opener should be checked first to confirm compatibility, after which a suitable keypad can be installed and programmed.',
        },
        {
          q: 'How does a garage door keypad work?',
          a: 'A wireless keypad lets you open the garage by entering a code, sending a signal to the opener without needing a remote or key.',
        },
        {
          q: 'Can I set up more than one code on my keypad?',
          a: 'Many keypads support setting up or changing entry codes. We program your initial code and show you how to manage codes for family members or helpers.',
        },
        {
          q: 'What should I do if my garage door keypad stops working?',
          a: 'A keypad that stops responding can be caused by pairing, battery or wiring issues. The keypad and opener can be checked to identify the cause and restore operation.',
        },
        {
          q: 'Is a keypad a secure way to open my garage?',
          a: 'A keypad uses a code you control and can change when needed. Setting up and managing codes properly helps keep access secure.',
        },
      ],

      related: ['opener-installation', 'garage-door-remote-replacement', 'garage-door-sensor-repair'],
    },
  },
  {
    slug: 'garage-door-remote-replacement',
    name: 'Garage Door Remote Replacement',
    short: 'New remotes supplied and programmed when the old one is lost or failing.',
    img: 'sv-opener-repair',
    alt: 'LiftMaster garage door opener mounted to the ceiling with chain rail and emergency release cord',
    about: [
      'A lost, broken or unreliable remote does not mean a new opener. We supply a compatible remote, program it to your opener, and clear an old remote from the memory if it has gone missing.',
      'We confirm the new remote works across the range you use before we leave.',
    ],
    points: [
      'Compatible remote supplied and programmed',
      'Lost remotes cleared from opener memory',
      'Compatibility checked first',
      'Range tested before we leave',
    ],

    page: {
      h1: 'Garage Door Remote Replacement',
      metaTitle: 'Garage Door Remote Replacement - BSD Garage Door',
      metaDescription:
        'Need Garage Door Remote Replacement? BSD Garage Door supplies and programs compatible remotes for lost or failing controls. Restore easy access — call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/garage-door-remote-replacement/',
      heroKicker: 'Franklin & MetroWest opener specialists',
      heroSub:
        'Get back easy, one-touch access with garage door remote replacement — a compatible remote supplied, programmed to your opener, and range-tested.',

      intro: {
        heading: 'Restore One-Touch Access With Professional Remote Replacement',
        body: [
          'A remote that is lost, cracked or working only some of the time makes the simplest part of the day unreliable. Replacing it does not mean replacing the opener — a compatible remote, programmed correctly, restores dependable one-touch access.',
          'We confirm the right remote for your opener, program it on site, and clear a missing remote from the opener’s memory so a lost control can no longer open your door. Then we test it across the range you actually use.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Reliable Garage Door Remote Replacement',
        intro:
          'We focus on correct compatibility, proper programming, and security so your replacement remote works dependably.',
        items: [
          {
            icon: 'Gear',
            title: 'Correct Compatibility',
            text: 'We confirm the right remote for your opener, so the replacement pairs cleanly instead of almost fitting.',
          },
          {
            icon: 'Wrench',
            title: 'Proper Programming',
            text: 'We program the remote to your opener on site and confirm it triggers the door reliably.',
          },
          {
            icon: 'Shield',
            title: 'Security-Minded Service',
            text: 'We can clear a lost remote from the opener memory, so a missing control can no longer open your door.',
          },
          {
            icon: 'Phone',
            title: 'Clear Service Guidance',
            text: 'We show you how the new remote works and how to program additional ones if you need them.',
          },
        ],
      },

      offerings: {
        kicker: 'What we set up',
        heading: 'Get A Compatible Remote Supplied, Programmed, And Tested',
        intro:
          'A replacement remote needs to match, pair and reach. These are the parts of a remote replacement we handle.',
        items: [
          {
            icon: 'Gear',
            title: 'Compatible remote supplied',
            text: 'We supply a remote that matches your opener, so it pairs properly rather than working intermittently.',
          },
          {
            icon: 'Wrench',
            title: 'Programmed to your opener',
            text: 'We program the remote on site and confirm it opens and closes the door as it should.',
          },
          {
            icon: 'Shield',
            title: 'Lost remotes cleared',
            text: 'If a remote has gone missing, we can clear the opener memory and reprogram your current remotes for security.',
          },
          {
            icon: 'Check',
            title: 'Range tested',
            text: 'We test the remote across the distance you use it, so it responds from where you actually park.',
          },
        ],
      },

      sections: [
        {
          id: 'when-replace',
          kicker: 'When to replace',
          heading: 'Replace A Lost Or Failing Garage Door Remote Before It Strands You',
          body: [
            'A remote rarely fails all at once — it works from closer, then only sometimes, then not at all. Replacing an unreliable or lost remote keeps you from being caught out at the door, and clearing a missing one keeps your garage secure.',
            'If any of the following sound familiar on your Franklin-area door, a replacement remote is usually the simple fix.',
          ],
          list: [
            'The remote only works from very close to the door',
            'The door responds intermittently or needs several presses',
            'The remote is cracked, water-damaged or unresponsive',
            'A remote has been lost or left in a vehicle you no longer have',
            'You need an extra remote for another driver',
          ],
        },
        {
          id: 'security',
          kicker: 'Access under control',
          heading: 'Keep Your Garage Secure After A Remote Is Lost',
          body: [
            'A lost remote is a security concern as much as a convenience one — whoever holds it can open your door. Clearing the opener’s memory and reprogramming your current remotes closes that gap.',
            'We supply and program a compatible replacement, remove any missing remotes from the memory, and test everything so your access is both easy and under your control.',
          ],
          link: { to: '/services/opener-repair', label: 'See opener repair' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Can I get a replacement remote for my existing garage door opener?',
          a: 'In many cases, yes. The opener should be checked to confirm compatibility, after which a suitable replacement remote can be supplied and programmed.',
        },
        {
          q: 'What should I do if I lost my garage door remote?',
          a: 'A lost remote can be cleared from the opener’s memory so it can no longer open the door, and a new remote programmed in its place. This helps keep the garage secure.',
        },
        {
          q: 'Why does my garage door remote only work up close?',
          a: 'A remote that only works at short range can indicate a weak battery or a fault in the remote or opener. It can be checked to determine whether a replacement is needed.',
        },
        {
          q: 'Can you program a universal garage door remote?',
          a: 'Compatibility depends on the opener. We confirm the right remote for your system and program it so it operates the door reliably.',
        },
        {
          q: 'Can I have more than one remote for my garage door?',
          a: 'Yes. Additional compatible remotes can be programmed to the same opener for other drivers or as a backup.',
        },
      ],

      related: ['opener-repair', 'garage-door-keypad-installation', 'garage-door-sensor-repair'],
    },
  },
  {
    slug: 'commercial-garage-door-repair',
    name: 'Commercial Garage Door Repair',
    short: 'Repairs for rolling, sectional and overhead commercial doors that keep businesses moving.',
    img: 'sv-tracks-replacement',
    alt: 'Curved galvanised garage door tracks with mounting bracket and cable drum',
    about: [
      'A commercial door out of action can hold up a whole operation — a loading bay that will not open, a roller shutter jammed halfway. We repair rolling, sectional and overhead commercial doors and get the opening working again.',
      'We diagnose the fault on site, repair what is broken, and confirm the door cycles properly before we leave.',
    ],
    points: [
      'Rolling, sectional and overhead doors',
      'Springs, cables, rollers and openers',
      'On-site diagnosis and written pricing',
      'Door cycle-tested after repair',
    ],

    page: {
      h1: 'Commercial Garage Door Repair',
      metaTitle: 'Commercial Garage Door Repair - BSD Garage Door',
      metaDescription:
        'Need Commercial Garage Door Repair? BSD Garage Door repairs rolling, sectional, and overhead commercial doors to keep your business moving. Call today.',
      canonicalUrl: 'https://bsdgaragedoorllc.com/services/commercial-garage-door-repair/',
      heroImage: 'commercial-garage-door-repair-hero.webp',
      heroKicker: 'Franklin & MetroWest commercial service',
      heroSub:
        'Keep your business moving with commercial garage door repair for rolling, sectional, and overhead doors — diagnosed on site and repaired to run reliably.',

      intro: {
        heading: 'Keep Your Business Moving With Professional Commercial Garage Door Repair',
        body: [
          'A commercial door that will not open holds up more than a doorway — it stalls deliveries, loading bays and the day’s work. Professional commercial garage door repair gets rolling, sectional and overhead doors back in service by targeting the real fault rather than the symptom.',
          'We diagnose the door on site, explain what we find, and repair what is genuinely broken — from springs and cables to rollers, tracks and openers — then confirm the door cycles properly before we leave.',
        ],
      },

      whyChooseUs: {
        heading: 'Why Choose Us For Dependable Commercial Garage Door Repair',
        intro:
          'We focus on accurate diagnosis, practical repairs, and minimal downtime so your commercial door is back in service quickly.',
        items: [
          {
            icon: 'Gear',
            title: 'Accurate Diagnosis',
            text: 'We identify the real cause of the fault before recommending a repair, so the fix addresses the problem the first time.',
          },
          {
            icon: 'Wrench',
            title: 'Practical Commercial Repairs',
            text: 'Our technicians repair rolling, sectional and overhead doors, focusing on getting the opening working again.',
          },
          {
            icon: 'Shield',
            title: 'Safety-Focused Service',
            text: 'We check operation and safety-related functions so the door works reliably in a busy commercial setting.',
          },
          {
            icon: 'Phone',
            title: 'Clear Communication',
            text: 'You receive straightforward guidance on the fault, the repair, and the price before work begins.',
          },
        ],
      },

      offerings: {
        kicker: 'What we repair',
        heading: 'Repair The Commercial Door Faults That Interrupt Your Operation',
        intro:
          'Commercial doors take heavy, repeated use, and a few components carry most of that load. These are the repairs we concentrate on.',
        items: [
          {
            icon: 'Bolt',
            title: 'Springs & counterbalance',
            text: 'Worn or broken springs leave a heavy door hard or unsafe to move. We replace them and reset the balance so the door lifts as it should.',
          },
          {
            icon: 'IconTrack',
            title: 'Cables, rollers & tracks',
            text: 'Frayed cables, worn rollers or damaged track make a door bind or jam. We repair the running gear so the door travels smoothly.',
          },
          {
            icon: 'Gear',
            title: 'Commercial openers',
            text: 'A commercial operator that stalls or will not run stops the opening cold. We diagnose and repair the drive, controls and limits.',
          },
          {
            icon: 'Shield',
            title: 'Safety & controls',
            text: 'We check the safety features and controls so the door operates reliably and predictably in daily use.',
          },
        ],
      },

      sections: [
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Address Common Commercial Door Problems Before They Halt Work',
          body: [
            'A commercial door earns its keep by opening on demand, and small faults become expensive when they stop it doing that. Forcing a struggling door tends to turn a component repair into a larger one.',
            'These are the problems we most often put right on rolling, sectional and overhead doors across the area.',
          ],
          list: [
            'A door stuck open, closed or jammed partway',
            'A roller shutter that binds or will not roll',
            'Broken springs or frayed lift cables',
            'A commercial opener that stalls or will not run',
            'Doors off the track or damaged after an impact',
          ],
        },
        {
          id: 'minimise-downtime',
          kicker: 'Back in service',
          heading: 'Restore Reliable Operation And Minimise Business Downtime',
          img: 'commercial-garage-door-repair-detail',
          imgAlt:
            'A gloved technician using a cordless drill to fasten a garage door track bracket',
          body: [
            'When a commercial door is down, the priority is getting the opening back in service safely. We diagnose the fault quickly, carry common parts to resolve many repairs the same visit, and confirm the price in writing before work beyond making the door safe.',
            'Once repaired, we cycle the door and check its safety features so it runs reliably through the heavy, repeated use a commercial setting demands.',
          ],
          link: { to: '/services/emergency-services', label: 'See emergency services' },
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'What types of commercial garage doors do you repair?',
          a: 'We repair rolling, sectional and overhead commercial doors, addressing faults with springs, cables, rollers, tracks and openers.',
        },
        {
          q: 'Can you repair a commercial door that is stuck open or closed?',
          a: 'Yes. A commercial door stuck open or closed should be assessed to determine the cause before it is forced, so it can be repaired and returned to safe operation.',
        },
        {
          q: 'How do you minimise downtime for a commercial door repair?',
          a: 'We diagnose the fault on site and carry common parts, which allows many repairs to be completed the same visit. More involved repairs may require a specific part to be sourced.',
        },
        {
          q: 'Do you repair commercial garage door openers?',
          a: 'Yes. We diagnose and repair commercial operators, including drive, control and limit faults that stop the door running properly.',
        },
        {
          q: 'Is a broken spring on a commercial door dangerous?',
          a: 'A commercial door spring is under high tension and a heavy door with a broken spring can be unsafe to move. It should be assessed and repaired by a technician rather than forced.',
        },
      ],

      related: ['emergency-services', 'off-track-repair', 'opener-repair'],
    },
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const areas = [
  {
    slug: 'bellingham',
    name: 'Bellingham',
    lat: 42.0868,
    lng: -71.4745,
    distance: '5 miles',
    blurb:
      'A short run down Route 140 - residential repairs and new installs from North Bellingham through the Maple Street corridor.',
    note:
      'A lot of Bellingham housing stock went up in the same few years, which means springs and rollers tend to fail in clusters. Ask about neighbor scheduling.',
    landmarks: ['North Bellingham', 'Maple Street', 'Hartford Avenue', 'Silver Lake'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Bellingham is the
    // reference/first page; every other location keeps its original layout.
    page: {
      h1: 'Garage Door Repair in Bellingham, MA',
      metaTitle: 'Garage Door Repair in Bellingham - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Bellingham? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/bellingham/',
      heroSub:
        'Fast, dependable Garage Door Repair in Bellingham, MA - from snapped springs to off-track doors and failing openers, our local technicians restore safe, smooth operation, usually the same day.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Bellingham',
        intro:
          'Local technicians, honest written pricing, and same-visit repairs that get your Bellingham garage door working safely again.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Bellingham Technicians',
            text: 'We know Bellingham’s streets and housing, from North Bellingham to the Maple Street corridor, and reach most of the town the same day.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins - no surprises once we are on your driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Same-Visit Repairs',
            text: 'We carry common springs, rollers, cables and opener parts on the truck, so most repairs are finished in a single visit.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Bellingham',
          heading: 'Trusted Garage Door Repair in Bellingham for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'A garage door rarely fails at a convenient time. A torsion spring lets go on a cold morning off Route 140, a door sticks halfway as you are leaving a home near Silver Lake, or an opener quits on a family heading out from North Bellingham. Our team handles Garage Door Repair in Bellingham across all of these situations, tracing the real cause on site instead of guessing at the symptom.',
            'Because Bellingham sits along the I-495 corridor between Franklin and Milford, we cover the whole town - from the Maple Street and Hartford Avenue neighborhoods to Caryville and South Bellingham. Common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Bellingham',
          body: [
            'Much of Bellingham’s housing went up within the same few years, so springs, rollers and cables often wear out in clusters - when one neighbor’s spring snaps, others on the street are usually not far behind. On top of that, the town’s freeze-thaw winters are hard on hardware, stiffening rollers and pulling doors out of balance until the opener has to fight to lift them.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Catching a small fault early is the difference between a quick visit and a door stuck shut on the coldest morning of the year, and it is the everyday reality of Garage Door Repair in Bellingham.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Doors off the track or binding in the vertical rails',
            'Frayed lift cables and worn nylon or steel rollers',
            'Openers that stall, reverse or respond intermittently',
            'Misaligned safety sensors that stop the door closing',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Bellingham',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'The garage door is the largest moving part of most Bellingham homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Bellingham from the neighboring Franklin and Milford area the same day, and we will tell you plainly on the phone whether a problem is urgent or safe to leave until morning.',
            'Every job starts with a straightforward explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Bellingham - clear assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Bellingham?',
          a: 'In most cases, yes. Bellingham is within our core service area along I-495, and because we carry common parts on the truck we can often complete the repair the same day. Call and we will let you know what to expect.',
        },
        {
          q: 'How much does garage door repair in Bellingham cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and give you a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring snapped - is it safe to keep using the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause more damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Bellingham.',
        },
        {
          q: 'Which parts of Bellingham do you cover?',
          a: 'We cover all of Bellingham, including North Bellingham, South Bellingham and Caryville, and the neighborhoods around Maple Street, Hartford Avenue and Silver Lake, along with nearby Franklin, Mendon and Blackstone.',
        },
        {
          q: 'What types of garage door problems do you repair?',
          a: 'We handle the full range - broken springs, frayed cables, doors off the track, worn rollers and hinges, misaligned sensors, and openers that stall or reverse. If the door is not moving safely or smoothly, we can diagnose and fix it.',
        },
      ],

      // Local-area intro + Google directions map. Rendered by <LocationTemplate>
      // as a split panel (copy one side, map the other) below "How a call goes".
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Bellingham',
        body: [
          'BSD Garage Door provides professional garage door repair, installation, and maintenance services for homeowners and businesses in Bellingham. Whether you need help with a broken spring, damaged panel, faulty opener, worn hardware, or a door that is not operating properly, our team delivers practical solutions focused on safe, smooth, and dependable garage door performance.',
          'We serve Bellingham and nearby communities including Franklin, Medway, Milford, and Hopedale. Whether you are near Bellingham State Forest, downtown Bellingham, or neighborhoods along Route 140 and Interstate 495, you can get driving directions on Google Maps and connect with our team for reliable local garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47393.410011102824!2d-71.48222159592021!3d42.06273040573584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e46e87bb7cf6b3%3A0xf61b81cfff5c7d3f!2sBellingham%2C%20Massachusetts%2002019%2C%20USA!3m2!1d42.0861089!2d-71.47427259999999!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016428511!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Bellingham',
      },
    },
  },
  {
    slug: 'medway',
    name: 'Medway',
    lat: 42.1418,
    lng: -71.3967,
    distance: '5 miles',
    blurb:
      'Village Street to Chicken Brook, covering both older Medway center homes and the newer developments off Route 109.',
    note:
      'Medway has a mix of carriage-style doors on older colonials and builder-grade steel on the newer streets. We spec hardware to the house, not a one-size kit.',
    landmarks: ['Medway Center', 'Village Street', 'Choate Park', 'Route 109'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Medway, MA',
      metaTitle: 'Garage Door Repair in Medway - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Medway? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/medway/',
      heroSub:
        'Dependable Garage Door Repair in Medway, MA - from broken springs and worn rollers to opener faults and off-track doors, our technicians restore safe, smooth operation on carriage-style and modern steel doors alike.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Medway',
        intro:
          'Careful diagnosis, written pricing, and hardware matched to your home - not a one-size kit - so your Medway garage door runs safely and reliably.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Medway Service',
            text: 'From Medway Center and Village Street to the newer developments off Route 109, we know the town’s mix of older and modern homes and reach it quickly.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Hardware Matched to the House',
            text: 'Whether the door is a carriage-style unit on an older colonial or builder-grade steel on a newer street, we spec parts to the door rather than a one-size kit.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Medway',
          heading: 'Trusted Garage Door Repair in Medway for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Medway runs from the older colonials around the town center out to the newer developments off Route 109, and the garage doors change with the streets - carriage-style units on the historic homes, builder-grade steel on the newer plats. A door rarely fails at a convenient time: a spring can let go near Choate Park, a roller can seize on an older home off Village Street, or an opener can quit out toward Chicken Brook. Our team handles Garage Door Repair in Medway across all of it, finding the real cause on site rather than guessing at the symptom.',
            'Because the town’s doors vary so much, we spec hardware to the house rather than fitting a one-size kit - a matched spring and the right rollers for the door you actually have. Common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Medway',
          body: [
            'Medway’s mix of housing means we see a wide range of doors, but the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, rollers and hinges wear until the door drags, cables fray, and openers begin to hesitate or reverse. Older carriage-style doors and newer steel units simply arrive at these problems by different routes.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it with hardware matched to the door and test it through a full cycle. Staying ahead of these issues is a routine part of Garage Door Repair in Medway, and catching them early keeps a small fix from becoming a door stuck shut on the coldest morning of the year.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Worn rollers and hinges that make the door drag or bind',
            'Frayed lift cables and doors off the track',
            'Openers that stall, reverse or respond intermittently',
            'Mismatched or worn hardware from an earlier one-size repair',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Medway',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Medway homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Medway from the neighboring Franklin and Millis area the same day, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Medway - honest assessments, hardware matched to your door, and a finished door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Medway?',
          a: 'In most cases, yes. Medway is close to our home base, and because we carry common parts on the truck we can often complete the repair the same day. Call and we will let you know what to expect.',
        },
        {
          q: 'Can you repair a carriage-style garage door on an older Medway home?',
          a: 'Yes. We work on both carriage-style doors on older colonials and builder-grade steel on the newer streets, and we spec the springs and rollers to the door you have rather than a one-size kit.',
        },
        {
          q: 'How much does garage door repair in Medway cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Medway.',
        },
        {
          q: 'Which areas of Medway do you cover?',
          a: 'We cover all of Medway, including Medway Center, Village Street, the Choate Park area and the Route 109 corridor, along with nearby Franklin, Millis, Milford and Norfolk.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Medway',
        body: [
          'BSD Garage Door helps Medway homeowners keep their garage doors safe, functional, and reliable throughout the year. Our services cover common problems such as broken springs, worn rollers, damaged panels, malfunctioning openers, and general garage door maintenance, with solutions tailored to the needs of each property.',
          'We serve Medway and surrounding areas including Franklin, Millis, Milford, and Norfolk. Whether your home is near Choate Park, Village Street, or the neighborhoods around Route 109, you can get driving directions on Google Maps and connect with our team for professional garage door assistance.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47362.062358773284!2d-71.43868819533394!3d42.10471016248347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e470fcfd65b60f%3A0x7a33733994526165!2sMedway%2C%20Massachusetts%2002053%2C%20USA!3m2!1d42.141764099999996!2d-71.3967256!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016509283!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Medway',
      },
    },
  },
  {
    slug: 'wrentham',
    name: 'Wrentham',
    lat: 42.0668,
    lng: -71.3281,
    distance: '6 miles',
    blurb:
      'From Wrentham Village to the Pond Street neighborhoods, including same-day slots most weekdays.',
    note:
      'Retail and restaurant properties around the outlet area need after-hours service so doors are working before the next open. We schedule those outside trading hours.',
    landmarks: ['Wrentham Village', 'Lake Pearl', 'Pond Street', 'Sheldonville'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Wrentham, MA',
      metaTitle: 'Garage Door Repair in Wrentham - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Wrentham? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/wrentham/',
      heroSub:
        'Dependable Garage Door Repair in Wrentham, MA - from emergency repairs and broken springs to opener faults and new installations, our technicians restore safe, smooth operation for homes and businesses.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Wrentham',
        intro:
          'Straightforward diagnosis, written pricing, and flexible scheduling - including after-hours service - that keeps your Wrentham garage door running safely and reliably.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Wrentham Service',
            text: 'From Wrentham Village and the Lake Pearl area to the Pond Street and Sheldonville neighborhoods, we cover the whole town for homes and businesses.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'After-Hours for Businesses',
            text: 'Retail and restaurant properties near the outlets often need doors working before the next open, so we schedule that service outside trading hours.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Wrentham',
          heading: 'Trusted Garage Door Repair in Wrentham for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Wrentham blends quiet residential streets with the steady bustle of the Premium Outlets and the events at Lake Pearl, so the doors we service run from family two-car garages to the roll-downs behind retail and restaurant units. When one fails - a spring near Pond Street, an opener out toward Sheldonville, or a storefront door that will not lift before opening - it holds up the day. Our team handles Garage Door Repair in Wrentham across homes and businesses alike, finding the real cause on site rather than guessing at the symptom.',
            'The retail and restaurant properties around the outlet area often need a door working before the next open, so we schedule that work outside trading hours. On the residential side, common parts ride on the truck, so most homeowners are back to a working door the same day - same-day slots are available most weekdays.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Wrentham',
          body: [
            'Across Wrentham’s homes and its busy commercial corners, the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, rollers and hinges wear until the door drags, cables fray, and openers begin to hesitate or reverse. Doors on the busier retail and restaurant properties simply reach that point faster from heavier use, which is why an emergency call is sometimes the first sign.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Wrentham, and catching them early keeps a small fix from becoming an after-hours emergency.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Doors off the track or binding in the rails',
            'Frayed lift cables and worn rollers and hinges',
            'Openers that stall, reverse or respond intermittently',
            'Storefront or restaurant doors that will not open before trading',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Wrentham',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the main way into most Wrentham homes and, for a business, the door the day depends on - so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Wrentham from the neighboring Franklin and Norfolk area, and for urgent problems we can arrange emergency and after-hours service - we will always tell you plainly on the phone whether a problem needs attention now or can wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Wrentham - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer emergency garage door repair in Wrentham?',
          a: 'Yes. For urgent problems - a stuck door, a snapped spring or a storefront that will not open - we can arrange emergency and after-hours service so the door is working when you need it. Call and we will let you know what is possible.',
        },
        {
          q: 'Can you service my business garage door outside opening hours?',
          a: 'Often, yes. Retail and restaurant properties near the Wrentham outlets frequently need a door working before the next open, so we schedule that service outside trading hours to keep downtime to a minimum.',
        },
        {
          q: 'How much does garage door repair in Wrentham cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Wrentham.',
        },
        {
          q: 'Which areas of Wrentham do you cover?',
          a: 'We cover all of Wrentham, including Wrentham Village, the Lake Pearl area, the Pond Street neighborhoods and Sheldonville, along with nearby Franklin, Norfolk, Foxborough and Plainville.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Wrentham',
        body: [
          'BSD Garage Door provides dependable garage door services for homeowners and properties throughout Wrentham. From emergency repairs and broken spring replacement to opener troubleshooting and new garage door installations, our team focuses on restoring smooth, safe operation while helping customers maintain the value and functionality of their garages.',
          'Our service area includes Wrentham and nearby communities such as Franklin, Norfolk, Foxborough, and Plainville. Whether you are near Wrentham Village Premium Outlets, Lake Pearl, or Route 140, you can get driving directions on Google Maps and connect with our team for convenient local garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47394.424133343695!2d-71.41112399593922!3d42.061371757135376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e46584d42c4fd7%3A0x3123990c202e5b58!2sWrentham%2C%20Massachusetts%2002093%2C%20USA!3m2!1d42.0668808!2d-71.3278373!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016675741!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Wrentham',
      },
    },
  },
  {
    slug: 'norfolk',
    name: 'Norfolk',
    lat: 42.1195,
    lng: -71.3251,
    distance: '6 miles',
    blurb:
      'Main Street through the Pondville area - residential repair and replacement with same-day appointments available most days.',
    note:
      'Norfolk lots are often larger, which means detached barns and workshops with non-standard openings. We measure on site rather than assuming a stock size.',
    landmarks: ['Norfolk Center', 'Pondville', 'Stony Brook', 'Seekonk Street'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Norfolk, MA',
      metaTitle: 'Garage Door Repair in Norfolk - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Norfolk? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/norfolk/',
      heroSub:
        'Dependable Garage Door Repair in Norfolk, MA - from broken springs and openers to uneven, noisy doors on homes, barns and workshops, our technicians restore safe, smooth operation.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Norfolk',
        intro:
          'Careful diagnosis, written pricing, and doors measured to your property - including the larger lots, barns and workshops common around Norfolk.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Norfolk Service',
            text: 'From Norfolk Center and the Pondville area to the properties along Seekonk Street, we cover the town’s homes, barns and workshops.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Measured On Site',
            text: 'Norfolk lots often have detached garages and outbuildings with non-standard openings, so we measure on site rather than assuming a stock size.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Norfolk',
          heading: 'Trusted Garage Door Repair in Norfolk for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Norfolk is a greener, more spread-out town than most of the ones around it - larger lots, longer driveways, and plenty of detached garages, barns and workshops behind the main house. A door here can be a standard two-car unit near Norfolk Center or an oversized carriage door on an outbuilding off Seekonk Street. Our team handles Garage Door Repair in Norfolk across all of them, finding the real cause on site rather than guessing at the symptom.',
            'Because so many Norfolk openings are non-standard, we measure on site rather than assuming a stock size, and we spec the springs and hardware to the door in front of us. Common repair parts ride on the truck, so most homeowners are back to a working door the same day - same-day appointments are available here most days.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Norfolk',
          body: [
            'Whether the door hangs on the house or on a detached barn out back, the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, rollers and hinges wear until the door moves unevenly, cables fray, and openers begin to hesitate or reverse. Doors on the larger outbuildings often see less frequent use, so a problem can go unnoticed until the door is needed.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Norfolk, and catching them early keeps a small fix from becoming a door that will not open when you need the space.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Uneven or noisy movement from worn rollers and hinges',
            'Frayed lift cables and doors off the track',
            'Openers that stall, reverse or respond intermittently',
            'Oversized or non-standard doors on barns and workshops',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Norfolk',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Norfolk homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Norfolk from the neighboring Franklin and Wrentham area with same-day appointments available most days, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Norfolk - honest assessments, doors measured and specced to your property, and a finished door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Norfolk?',
          a: 'Often, yes - same-day appointments are available in Norfolk most days. Because we carry common parts on the truck, many repairs are completed in a single visit. Call and we will confirm what is possible.',
        },
        {
          q: 'Can you fit or repair a garage door on a barn or workshop?',
          a: 'Yes. Norfolk lots often have detached garages, barns and workshops with non-standard openings. We measure on site rather than assuming a stock size, so the door and hardware suit the actual opening.',
        },
        {
          q: 'How much does garage door repair in Norfolk cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Norfolk.',
        },
        {
          q: 'Which areas of Norfolk do you cover?',
          a: 'We cover all of Norfolk, including Norfolk Center, the Pondville area, the Stony Brook neighborhoods and the Seekonk Street corridor, along with nearby Franklin, Wrentham, Medway and Walpole.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Norfolk',
        body: [
          'BSD Garage Door offers professional garage door repair, installation, and maintenance services for homes and businesses in Norfolk. If your garage door is making unusual noises, moving unevenly, failing to open, or experiencing an opener or spring problem, our team can provide dependable service focused on safe and consistent performance.',
          'We proudly serve Norfolk along with nearby Franklin, Wrentham, Medway, and Walpole. From neighborhoods near Norfolk Town Hill and the Norfolk Country Club to properties along Route 1A and Route 115, you can get driving directions on Google Maps and connect with our team for trusted garage door solutions.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47370.27591753106!2d-71.40971244548756!3d42.09371412381465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e47b1eed13dfbf%3A0xa55befb4ede75e55!2sNorfolk%2C%20Massachusetts%2C%20USA!3m2!1d42.119542599999996!2d-71.3250563!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016576819!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Norfolk',
      },
    },
  },
  {
    slug: 'millis',
    name: 'Millis',
    lat: 42.1676,
    lng: -71.3578,
    distance: '7 miles',
    blurb:
      'Pleasant Street to the Exchange Street corridor, covering both village homes and the newer streets off Route 115.',
    note:
      'Millis winters are hard on weather seals and torsion springs. A fall tune-up here usually pays for itself before the first ice storm.',
    landmarks: ['Millis Center', 'Pleasant Street', 'Clyde F. Brown area', 'Route 115'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Millis, MA',
      metaTitle: 'Garage Door Repair in Millis - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Millis? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/millis/',
      heroSub:
        'Dependable Garage Door Repair in Millis, MA - from broken torsion springs and worn weather seals to noisy doors and opener faults, our technicians keep your garage running safely through every season.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Millis',
        intro:
          'Careful diagnosis, written pricing, and seasonal know-how that keeps your Millis garage door running safely and quietly year-round.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Millis Service',
            text: 'From Millis Center and Pleasant Street to the newer streets off Route 115, we know the town’s homes and reach them quickly.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Ready for Millis Winters',
            text: 'Our winters are hard on weather seals and torsion springs, so we carry the parts to put them right and can tune the door up before the cold sets in.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Millis',
          heading: 'Trusted Garage Door Repair in Millis for Local Homes',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Millis is a quieter, mostly residential town, from the village homes around the center to the newer streets off Route 115. A garage door here is part of daily life - the way the kids get to the yard, the second front door for groceries - so a door that will not open is more than an inconvenience. A spring can let go on a cold morning near Pleasant Street, or an opener can quit out toward the Clyde F. Brown area. Our team handles Garage Door Repair in Millis across all of it, finding the real cause on site rather than guessing at the symptom.',
            'Millis winters are especially hard on weather seals and torsion springs, so we carry the right parts to put them right and get the door sealing and lifting properly again. Common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Millis',
          body: [
            'Between years of daily use and hard New England winters, the failures we see in Millis are consistent. Torsion springs weaken and snap in the cold, bottom weather seals crack and let draughts and water under the door, rollers and hinges wear until the door drags, and openers begin to hesitate or reverse. A noisy door is often the first sign that one of these parts is on its way out.',
            'We work through the springs, rollers, hinges, tracks, seals and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Millis, and a fall tune-up often catches a tired spring or seal before the first ice storm.',
          ],
          list: [
            'Broken or weakening torsion springs, especially in cold weather',
            'Cracked or flattened bottom weather seals letting the weather in',
            'Worn rollers and hinges that make the door noisy or drag',
            'Frayed lift cables and doors off the track',
            'Openers that stall, reverse or respond intermittently',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Millis',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Millis homes and often the main way in, so a door that will not open can bring the morning to a halt. We keep our response local and quick, reaching most of Millis from the neighboring Medway and Franklin area the same day, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Millis - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Millis?',
          a: 'In most cases, yes. Millis is well within our service area, and because we carry common parts on the truck we can often complete the repair the same day. Call and we will let you know what to expect.',
        },
        {
          q: 'Should I get a garage door tune-up before winter in Millis?',
          a: 'It is a good idea. Millis winters are hard on torsion springs and weather seals, so a fall tune-up can catch a tired spring or a cracked seal before the cold sets in and often pays for itself before the first ice storm.',
        },
        {
          q: 'Why is my garage door so noisy?',
          a: 'Noise usually points to worn rollers or hinges, a spring losing tension, or a door that needs lubrication and adjustment. We can identify the cause and quiet the door down as part of a repair or tune-up.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Millis.',
        },
        {
          q: 'Which areas of Millis do you cover?',
          a: 'We cover all of Millis, including Millis Center, Pleasant Street, the Clyde F. Brown area and the Route 115 corridor, along with nearby Medway, Franklin, Norfolk and Walpole.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Millis',
        body: [
          'BSD Garage Door provides reliable garage door repair and installation services throughout Millis. Homeowners can turn to our team for assistance with broken springs, damaged panels, noisy doors, worn hardware, opener problems, and other issues that can affect the safety and convenience of a residential garage.',
          'We serve Millis and nearby communities including Medway, Franklin, Norfolk, and Walpole. Whether you are near Memorial Drive, Millis Public Library, or neighborhoods surrounding Route 109 and Route 115, you can get driving directions on Google Maps and connect with our team for professional garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d94703.97215848305!2d-71.46427596485904!3d42.1181967609203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e47a180c5599cb%3A0xa5069757a13ab5a!2sMillis%2C%20Massachusetts%2002054%2C%20USA!3m2!1d42.166966099999996!2d-71.351738!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016529794!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Millis',
      },
    },
  },
  {
    slug: 'foxborough',
    name: 'Foxborough',
    lat: 42.0654,
    lng: -71.2478,
    distance: '8 miles',
    blurb:
      'Downtown Foxborough through Patriot Place-adjacent neighborhoods, residential and light commercial.',
    note:
      'Event weekends fill the roads. We route Foxborough jobs around traffic when we can, and keep extra springs on the truck for the builder-grade doors common in the newer plats.',
    landmarks: ['Downtown Foxborough', 'Patriot Place area', 'Cocasset Street', 'Lakeview'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Foxborough, MA',
      metaTitle: 'Garage Door Repair in Foxborough - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Foxborough? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/foxborough/',
      heroSub:
        'Reliable Garage Door Repair in Foxborough, MA - from broken springs and worn openers to off-track doors and full replacements, our technicians restore safe, smooth operation for homes and businesses.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Foxborough',
        intro:
          'Straightforward diagnosis, written pricing, and practical repairs that keep your Foxborough garage door running safely and reliably.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Foxborough Service',
            text: 'From downtown Foxborough to the Patriot Place area and the newer subdivisions off Cocasset Street, we cover the whole town for homes and businesses.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Same-Visit Repairs',
            text: 'We carry common springs, rollers, cables and opener parts on the truck - including extras for the builder-grade doors common in newer plats - so most repairs finish in one visit.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Foxborough',
          heading: 'Trusted Garage Door Repair in Foxborough for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Foxborough is a busy town built around Gillette Stadium and Patriot Place, with quiet residential streets and light-commercial properties threaded between Route 1 and Interstate 95. A garage door does not wait for a convenient moment to fail - a spring can let go before a Monday commute, or an opener can quit as a family heads out on an event weekend. Our team handles Garage Door Repair in Foxborough across all of it, finding the real cause on site rather than guessing at the symptom.',
            'Many of the newer plats around town were fitted with builder-grade doors whose springs and rollers wear out on a similar schedule, so we keep extras on the truck. From downtown Foxborough to the Patriot Place area, we repair residential and light-commercial doors and finish most visits the same day.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Foxborough',
          body: [
            'Whether the door hangs on an older home near the town center or a builder-grade unit in one of the newer subdivisions, the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, cables fray, openers begin to hesitate or reverse, and doors slip off the track once a roller or hinge gives way. Left alone, a single worn part pulls the whole door out of balance and the opener works harder to keep up.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these issues is a routine part of Garage Door Repair in Foxborough, and catching them early keeps a small fix from becoming a door stuck shut on a busy morning.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Doors off the track or binding in the rails',
            'Frayed lift cables and worn nylon or steel rollers',
            'Openers that stall, reverse or respond intermittently',
            'Misaligned safety sensors that stop the door closing',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Foxborough',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Foxborough homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, and on event weekends we route jobs around the stadium traffic so a full parking lot does not keep a technician from reaching you - we will always tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Foxborough - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Foxborough?',
          a: 'In most cases, yes. Foxborough is well within our service area, and because we carry common parts on the truck we can often complete the repair the same day. On stadium event weekends we route around traffic and will confirm timing when you call.',
        },
        {
          q: 'How much does garage door repair in Foxborough cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'The springs on my builder-grade garage door wore out quickly - can you help?',
          a: 'Yes. Many newer Foxborough homes came with builder-grade doors whose springs wear out on a similar schedule, which is why we keep extras on the truck. We can replace worn springs and check the balance so the door runs smoothly again.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Foxborough.',
        },
        {
          q: 'Which areas of Foxborough do you cover?',
          a: 'We cover all of Foxborough, including downtown, the Patriot Place area, the Cocasset Street corridor and the Lakeview neighborhoods, along with nearby Wrentham, Norfolk, Mansfield and Plainville.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Foxborough',
        body: [
          'BSD Garage Door delivers professional garage door repair, replacement, installation, and maintenance services in Foxborough. Whether you need help with a broken garage door spring, malfunctioning opener, damaged door components, or a complete replacement, our team provides practical solutions designed around reliable operation and long-term performance.',
          'We serve Foxborough and nearby areas including Wrentham, Norfolk, Mansfield, and Plainville. From neighborhoods near Gillette Stadium and Patriot Place to properties close to Route 1 and Interstate 95, you can get driving directions on Google Maps and connect with our team for dependable local garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d94796.84767274672!2d-71.41127176837946!3d42.05601289233048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e462df88828929%3A0xb2bc875508d868b3!2sFoxborough%2C%20Massachusetts%2C%20USA!3m2!1d42.06415!2d-71.24997619999999!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790060792974!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Foxborough',
      },
    },
  },
  {
    slug: 'milford',
    name: 'Milford',
    lat: 42.1398,
    lng: -71.5162,
    distance: '8 miles',
    blurb:
      'Main Street through the Purchase Street industrial edge - residential and commercial garage door work.',
    note:
      'Milford is where a lot of our commercial calls come from: rolling steel, dock equipment and high-cycle operators that need service outside business hours.',
    landmarks: ['Milford Center', 'Purchase Street', 'Louisa Lake', 'Route 16'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Milford, MA',
      metaTitle: 'Garage Door Repair in Milford - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Milford? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/milford/',
      heroSub:
        'Dependable Garage Door Repair in Milford, MA for homes and businesses - from broken springs and openers to rolling steel and dock doors, our technicians restore safe, smooth operation across the town.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Milford',
        intro:
          'Straightforward diagnosis, written pricing, and practical repairs for both homes and Milford’s busy commercial properties.',
        items: [
          {
            icon: 'Pin',
            title: 'Homes & Businesses in Milford',
            text: 'From the neighborhoods around Milford Center to the Purchase Street industrial edge, we cover residential doors and commercial openings across town.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway or the loading dock.',
          },
          {
            icon: 'Wrench',
            title: 'Commercial Door Experience',
            text: 'We service rolling steel, dock equipment and high-cycle operators, and can work outside business hours to keep your operation moving.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety features after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Milford',
          heading: 'Trusted Garage Door Repair in Milford for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Milford is one of the busier towns we cover, with Main Street neighborhoods on one side and the Purchase Street industrial edge on the other. That means the calls range widely - a snapped spring on a family home, a rolling steel door jammed at a warehouse, or a high-cycle opener that quits at a shop off Route 140. Our team handles Garage Door Repair in Milford across residential and commercial doors alike, finding the real cause on site rather than guessing at the symptom.',
            'A lot of our commercial work comes from Milford - rolling steel, dock equipment and operators that run hundreds of cycles a day - and we can schedule that work outside business hours so a repair does not shut down your operation. On the residential side, common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Milford',
          body: [
            'Between busy homes and heavier commercial use, the failures we see in Milford cover a wide range. Residential springs weaken and snap after years of daily cycles, openers begin to hesitate or reverse, and doors slip off the track once a roller or hinge gives way. On the commercial side, rolling steel curtains bind, dock hardware wears, and high-cycle operators reach the end of their service life faster from the sheer volume of use.',
            'We work through the springs, rollers, hinges, tracks and operators to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Milford, and for a business it can be the difference between a quick fix and a door that holds up the whole day.',
          ],
          list: [
            'Broken or weakening springs on residential doors',
            'Rolling steel doors that bind, jam or will not lift',
            'Worn dock hardware and high-cycle commercial operators',
            'Openers that stall, reverse or respond intermittently',
            'Doors off the track or damaged after an impact',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Milford',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'Whether it is the main way into a Milford home or the loading door a business depends on, a door that will not open holds up the day. We keep our response local and quick, reaching most of Milford from the neighboring Franklin and Hopedale area, and for commercial work we can arrange service outside business hours - we will always tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Milford - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you repair commercial garage doors in Milford?',
          a: 'Yes. Milford is a big source of our commercial work - we service rolling steel doors, dock equipment and high-cycle operators, and can schedule outside business hours to keep your operation running.',
        },
        {
          q: 'Can you service my garage door outside business hours?',
          a: 'For commercial properties in Milford, often yes. Rolling steel and high-cycle doors are easier to service when the business is closed, so we can arrange timing that keeps downtime to a minimum.',
        },
        {
          q: 'How much does garage door repair in Milford cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Milford.',
        },
        {
          q: 'Which areas of Milford do you cover?',
          a: 'We cover all of Milford, including Milford Center, the Purchase Street area, the Louisa Lake neighborhoods and the Route 16 corridor, along with nearby Franklin, Medway, Hopedale and Plainville.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Milford',
        body: [
          'BSD Garage Door provides dependable garage door services for residential and commercial customers throughout Milford. Our team handles repairs, maintenance, opener issues, broken springs, damaged panels, and garage door installations, helping customers restore smooth operation and improve the safety and convenience of their properties.',
          'We serve Milford as well as nearby Franklin, Medway, Hopedale, and Plainville. Whether you are near Milford Regional Medical Center, the Upper Charles Trail, or commercial areas along Route 140 and Route 85, you can get driving directions on Google Maps and connect with our team for professional garage door assistance.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d94724.27602621935!2d-71.5427237156287!3d42.10460888963588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e4725761b1baa1%3A0x82012c3c2860a425!2sMilford%2C%20Massachusetts%2001757%2C%20USA!3m2!1d42.1415784!2d-71.5191856!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016552982!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Milford',
      },
    },
  },
  {
    slug: 'plainville',
    name: 'Plainville',
    lat: 42.004,
    lng: -71.3328,
    distance: '8 miles',
    blurb:
      'South Street to the Route 1 corridor, with same-day residential appointments most weekdays.',
    note:
      'Plainville sits on the Attleboro line, so we often pair stops. If a neighbor is already booked, ask - same-day multi-stop visits are cheaper for everyone.',
    landmarks: ['Plainville Center', 'Route 1', 'Lake Mirimichi', 'Washington Street'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Plainville, MA',
      metaTitle: 'Garage Door Repair in Plainville - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Plainville? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/plainville/',
      heroSub:
        'Dependable Garage Door Repair in Plainville, MA for homes and businesses - from broken springs and openers to damaged panels and off-track doors, our technicians restore safe, smooth operation.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Plainville',
        intro:
          'Straightforward diagnosis, written pricing, and efficient scheduling that keeps your Plainville garage door running safely and reliably.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Plainville Service',
            text: 'From Plainville Center and the Route 1 corridor to the neighborhoods off Washington Street, we cover the whole town for homes and businesses.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Efficient Neighbor Scheduling',
            text: 'Plainville sits right on the Attleboro line, so we often pair nearby stops - if a neighbor is already booked, a same-day multi-stop visit can save everyone time and money.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Plainville',
          heading: 'Trusted Garage Door Repair in Plainville for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Plainville is a compact town strung along the Route 1 corridor, where quiet residential streets sit next to the retail and commercial pull of Plainridge Park and the shops toward the Attleboro line. When a garage door fails here - a spring near Plainville Center, an opener out toward Lake Mirimichi, or a panel damaged after a bump - it does not wait for a convenient moment. Our team handles Garage Door Repair in Plainville across homes and businesses alike, finding the real cause on site rather than guessing at the symptom.',
            'Because Plainville sits right on the Attleboro line, we often pair nearby stops on the same run, which keeps visits efficient. Common parts ride on the truck, so most homeowners are back to a working door the same day - same-day appointments are available most weekdays.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Plainville',
          body: [
            'Across Plainville’s homes and its busier Route 1 businesses, the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, rollers and hinges wear until the door drags, cables fray, panels take a knock, and openers begin to hesitate or reverse. Left alone, a single worn part pulls the rest of the door out of balance and the opener works harder to keep up.',
            'We work through the springs, rollers, hinges, tracks, panels and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Plainville, and catching them early keeps a small fix from turning into a bigger one.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Doors off the track or binding in the rails',
            'Frayed lift cables and worn rollers and hinges',
            'Dented or damaged panels after an impact',
            'Openers that stall, reverse or respond intermittently',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Plainville',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is often the main way into a Plainville home and a daily necessity for a business, so a door that will not open holds up more than the driveway. We keep our response local and quick, reaching most of Plainville from the neighboring Wrentham and Attleboro area with same-day appointments most weekdays, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Plainville - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Plainville?',
          a: 'In most cases, yes - same-day appointments are available in Plainville most weekdays. Because we carry common parts on the truck, many repairs are completed in a single visit. Call and we will confirm timing.',
        },
        {
          q: 'Can I get a discount if my neighbor also needs garage door service?',
          a: 'Possibly. Plainville sits on the Attleboro line, so we often pair nearby stops on the same run. If a neighbor is already booked, ask - a same-day multi-stop visit can be more efficient for everyone.',
        },
        {
          q: 'How much does garage door repair in Plainville cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Plainville.',
        },
        {
          q: 'Which areas of Plainville do you cover?',
          a: 'We cover all of Plainville, including Plainville Center, the Route 1 corridor, the Lake Mirimichi area and the Washington Street neighborhoods, along with nearby Wrentham, Foxborough, Mansfield and Attleboro.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Plainville',
        body: [
          'BSD Garage Door offers professional garage door repair and installation services for homeowners and businesses in Plainville. From broken springs and damaged panels to garage door opener problems and routine maintenance, our team works to provide reliable solutions that keep your garage door operating safely and smoothly.',
          'Our service area includes Plainville and surrounding communities such as Wrentham, Foxborough, Mansfield, and Attleboro. Whether you are near Plainridge Park Casino, neighborhoods along Route 1, or properties close to Interstate 495, you can get driving directions on Google Maps and connect with our team for convenient garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47410.761624064726!2d-71.3990207462447!3d42.03947902968418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e46680f5d1b6b7%3A0xa5cdad2cf8538839!2sPlainville%2C%20Massachusetts%2002762%2C%20USA!3m2!1d42.004265499999995!2d-71.3328331!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016596353!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Plainville',
      },
    },
  },
  {
    slug: 'hopedale',
    name: 'Hopedale',
    lat: 42.1307,
    lng: -71.5412,
    distance: '9 miles',
    blurb:
      'The mill village and the streets off Hopedale Street - mostly residential, with a few commercial doors on the old mill properties.',
    note:
      'Older Hopedale housing still runs original one-piece tilt-up doors. Replacement is often cheaper than chasing another repair on hardware that has already outlived the house.',
    landmarks: ['Hopedale Village', 'The Parklands', 'Dutcher Street', 'Freedom Street'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Hopedale, MA',
      metaTitle: 'Garage Door Repair in Hopedale - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Hopedale? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/hopedale/',
      heroSub:
        'Dependable Garage Door Repair in Hopedale, MA - from broken springs and worn rollers to opener faults and aging doors, our technicians restore safe, smooth operation and give honest repair-or-replace advice.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Hopedale',
        intro:
          'Careful diagnosis, written pricing, and honest advice that keeps your Hopedale garage door running safely - or tells you plainly when replacement is the smarter call.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Hopedale Service',
            text: 'From Hopedale Village and The Parklands to the streets off Dutcher and Freedom Street, we know the town’s older housing and reach it quickly.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Repair or Replace, Honestly',
            text: 'On aging one-piece doors we will tell you when a repair makes sense and when a replacement is the cheaper, safer long-term choice.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Hopedale',
          heading: 'Trusted Garage Door Repair in Hopedale for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Hopedale grew up around its mill village, and much of the town’s housing carries the detailing - and the original hardware - of that era. A garage door rarely fails at a convenient time: a spring can let go on a cold morning off Route 16, a roller can seize on an older home near The Parklands, or an opener can quit downtown. Our team handles Garage Door Repair in Hopedale across all of it, finding the real cause on site rather than guessing at the symptom.',
            'We repair the doors you have - springs, rollers, cables, hinges and openers - across Hopedale Village and the surrounding streets, along with the few commercial doors on the old mill properties. Common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Hopedale',
          body: [
            'Because so many Hopedale homes have been through decades of daily use, the failures we see tend to trace back to age. Springs weaken and snap, rollers and hinges wear until the door drags, cables fray, and openers begin to hesitate or reverse. Some of the oldest homes still run original one-piece tilt-up doors, where worn hardware can make the whole door unsafe to lift by hand.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Keeping ahead of these problems is a routine part of Garage Door Repair in Hopedale - and where the hardware has already outlived the house, we will say so rather than chase another short-lived fix.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Worn rollers and hinges that make the door drag or bind',
            'Frayed lift cables on aging doors',
            'Openers that stall, reverse or respond intermittently',
            'Original one-piece tilt-up doors that are unsafe to operate',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Hopedale',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Hopedale homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Hopedale from the neighboring Milford and Franklin area the same day, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Hopedale - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Hopedale?',
          a: 'In most cases, yes. Hopedale is well within our service area, and because we carry common parts on the truck we can often complete the repair the same day. Call and we will let you know what to expect.',
        },
        {
          q: 'My home still has an old one-piece garage door - can you repair it?',
          a: 'Often, yes, though it depends on the condition of the hardware. On older one-piece tilt-up doors we will assess whether a repair is safe and worthwhile, and tell you honestly if a replacement is the better long-term value.',
        },
        {
          q: 'How much does garage door repair in Hopedale cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Hopedale.',
        },
        {
          q: 'Which areas of Hopedale do you cover?',
          a: 'We cover all of Hopedale, including Hopedale Village, The Parklands and the streets around Dutcher and Freedom Street, along with nearby Milford, Medway, Franklin and Millis.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Hopedale',
        body: [
          'BSD Garage Door provides reliable garage door repair, maintenance, and installation services for customers in Hopedale. We help with common garage door problems including broken springs, worn rollers, damaged panels, opener issues, and doors that have become difficult or unsafe to operate, with solutions suited to each property.',
          'We serve Hopedale and nearby communities including Milford, Medway, Franklin, and Millis. Whether you are near Hopedale Community Park, downtown Hopedale, or neighborhoods around Route 16 and Route 140, you can get driving directions on Google Maps and connect with our team for professional local garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d94724.46631785057!2d-71.56034592912617!3d42.104481524709776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e46d61c5303e5d%3A0x200e984df7033d92!2sHopedale%2C%20Massachusetts%2C%20USA!3m2!1d42.1264389!2d-71.53681759999999!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790060855802!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Hopedale',
      },
    },
  },
  {
    slug: 'walpole',
    name: 'Walpole',
    lat: 42.1418,
    lng: -71.2495,
    distance: '10 miles',
    blurb:
      'East Walpole through downtown and the neighborhoods off Main Street, including HOA-compliant replacements.',
    note:
      'Walpole HOAs can be specific about door style and color. We handle the submission-ready documentation so a replacement clears review the first time.',
    landmarks: ['Walpole Center', 'East Walpole', 'Bird Park', 'Main Street'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Walpole, MA',
      metaTitle: 'Garage Door Repair in Walpole - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Walpole? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/walpole/',
      heroSub:
        'Dependable Garage Door Repair in Walpole, MA - from broken springs and openers to noisy or damaged doors, our technicians restore safe, smooth operation for homes and businesses.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Walpole',
        intro:
          'Careful diagnosis, written pricing, and repairs - and HOA-ready replacements - that keep your Walpole garage door running safely and looking right.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Walpole Service',
            text: 'From Walpole Center and East Walpole to the neighborhoods off Main Street near Bird Park, we cover the whole town for homes and businesses.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'HOA-Ready Replacements',
            text: 'Walpole HOAs can be specific about door style and color, so we handle the submission-ready paperwork to help a replacement clear review the first time.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Walpole',
          heading: 'Trusted Garage Door Repair in Walpole for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Walpole runs from the older streets of East Walpole through downtown out to the neighborhoods near Bird Park, with the retail of Walpole Mall and the Route 1 corridor nearby. A garage door here is part of the daily routine, so a spring that lets go off Main Street or an opener that quits before the morning commute is more than an inconvenience. Our team handles Garage Door Repair in Walpole across homes and businesses alike, finding the real cause on site rather than guessing at the symptom.',
            'Many Walpole neighborhoods sit under HOAs that are particular about how a door looks, so when a repair turns into a replacement we can handle the style-and-color documentation to clear review. On the repair side, common parts ride on the truck, so most homeowners are back to a working door the same day they call.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Walpole',
          body: [
            'Across Walpole’s mix of older and newer homes, the failures that bring us out are consistent. Springs weaken and snap after years of daily cycles, rollers and hinges wear until the door drags or grows noisy, cables fray, panels take a knock, and openers begin to hesitate or reverse. Left alone, a single worn part pulls the rest of the door out of balance and the opener works harder to keep up.',
            'We work through the springs, rollers, hinges, tracks, panels and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Walpole, and where a door is past a sensible repair, we can quote an HOA-compliant replacement rather than chase another fix.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Noisy or dragging doors from worn rollers and hinges',
            'Frayed lift cables and doors off the track',
            'Dented or damaged panels after an impact',
            'Openers that stall, reverse or respond intermittently',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Walpole',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is the largest moving part of most Walpole homes and often the main way in, so a door that will not open is more than an inconvenience. We keep our response local and quick, reaching most of Walpole from the neighboring Norfolk and Franklin area, and we will tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Walpole - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you offer same-day garage door repair in Walpole?',
          a: 'In most cases, yes. Because we carry common parts on the truck, many Walpole repairs are completed the same day. Call and we will confirm timing when you describe the problem.',
        },
        {
          q: 'My HOA has rules about garage door style and color - can you help?',
          a: 'Yes. Walpole HOAs can be specific about door style and color, so when a replacement is needed we handle the submission-ready documentation to help it clear architectural review the first time.',
        },
        {
          q: 'How much does garage door repair in Walpole cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Walpole.',
        },
        {
          q: 'Which areas of Walpole do you cover?',
          a: 'We cover all of Walpole, including Walpole Center, East Walpole, the Bird Park area and the Main Street neighborhoods, along with nearby Norfolk, Millis, Franklin and Foxborough.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Walpole',
        body: [
          'BSD Garage Door helps homeowners and businesses in Walpole with dependable garage door repair, installation, and maintenance services. Whether you are dealing with a broken spring, faulty opener, damaged panel, noisy door, or general wear and tear, our team focuses on practical repairs and reliable garage door performance.',
          'We serve Walpole and surrounding communities such as Norfolk, Millis, Franklin, and Foxborough. From neighborhoods near Walpole Mall and Bird Park to properties along Route 1 and Route 27, you can get driving directions on Google Maps and connect with our team for professional garage door assistance close to home.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d90894.52852707535!2d-71.3978892351507!3d42.08428065540225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e47c2fd5b04f33%3A0x35a2651a701d52ff!2sWalpole%2C%20Massachusetts%2C%20USA!3m2!1d42.1470361!2d-71.2520606!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016656978!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Walpole',
      },
    },
  },
  {
    slug: 'attleboro',
    name: 'Attleboro',
    lat: 41.9445,
    lng: -71.2856,
    distance: '12 miles',
    blurb:
      'Full residential and light-commercial coverage from downtown Attleboro out to the South Attleboro line.',
    note:
      'Attleboro is at the outer edge of our same-day zone, so booking before noon gives the best chance of a technician reaching you the same afternoon.',
    landmarks: ['Downtown Attleboro', 'Capron Park', 'South Attleboro', 'County Street'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Attleboro, MA',
      metaTitle: 'Garage Door Repair in Attleboro - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Attleboro? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/attleboro/',
      heroSub:
        'Dependable Garage Door Repair in Attleboro, MA for homes and businesses - from broken springs and worn openers to off-track doors, our technicians restore safe, smooth operation across the city.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Attleboro',
        intro:
          'Straightforward diagnosis, written pricing, and practical repairs that get your Attleboro garage door working safely again.',
        items: [
          {
            icon: 'Pin',
            title: 'Serving All of Attleboro',
            text: 'From downtown and Capron Park to South Attleboro and the County Street area, we cover the whole city for homes and businesses alike.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Practical, Same-Visit Repairs',
            text: 'We carry common springs, rollers, cables and opener parts on the truck, so many repairs are finished in a single visit.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Attleboro',
          heading: 'Trusted Garage Door Repair in Attleboro for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Attleboro sits at the southern end of our service area, where Route 1 and Interstate 95 meet a mix of older homes and busy commercial properties. That mix shows up in the calls we get - a snapped spring on a family home near Capron Park, a commercial overhead door that will not lift at a shop off County Street, or an opener that quits downtown. Our team handles Garage Door Repair in Attleboro across all of it, diagnosing the real cause on site rather than guessing at the symptom.',
            'As one of the region’s older manufacturing cities, Attleboro has plenty of long-standing homes and buildings whose original hardware is well past its prime. We repair both residential and light-commercial doors, from South Attleboro to the downtown core, and carry common parts on the truck so many repairs are completed in a single visit.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Attleboro',
          body: [
            'Because Attleboro pairs older housing stock with heavier commercial use, the doors we see cover a wide range - but the failures that bring us out are consistent. Worn springs and cables give way after years of daily cycles, openers on both homes and storefronts start to hesitate, and doors drift off the track once a roller or hinge lets go. Left alone, one worn part pulls the rest of the door out of balance and the opener strains to keep up.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Attleboro, and catching them early keeps a small fix from becoming a door stuck shut at the worst possible moment.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Doors off the track or binding in the rails',
            'Frayed lift cables and worn nylon or steel rollers',
            'Residential and commercial openers that stall or reverse',
            'Misaligned safety sensors that stop the door closing',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Attleboro',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is often the main way into an Attleboro home or the daily access point for a business, so a door that will not open holds up more than the driveway. Attleboro sits toward the outer edge of our service area, so booking earlier in the day gives the best chance of a technician reaching you the same afternoon - and we will always tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Attleboro - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you repair both residential and commercial garage doors in Attleboro?',
          a: 'Yes. We handle residential doors and light-commercial overhead doors across Attleboro, from homes near Capron Park to storefronts and shops around the downtown and County Street area.',
        },
        {
          q: 'How soon can you reach me for a garage door repair in Attleboro?',
          a: 'Attleboro is toward the outer edge of our service area, so booking earlier in the day gives the best chance of a same-afternoon visit. We will confirm timing when you call and let you know if a problem is urgent.',
        },
        {
          q: 'How much does garage door repair in Attleboro cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - can I still use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Attleboro.',
        },
        {
          q: 'Which areas of Attleboro do you cover?',
          a: 'We cover all of Attleboro, including downtown, South Attleboro, the Capron Park area and the County Street corridor, along with nearby Mansfield, Plainville, Franklin and Foxborough.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Attleboro',
        body: [
          'BSD Garage Door provides professional garage door repair and installation services throughout Attleboro. Our team can assist with broken springs, damaged panels, malfunctioning openers, worn hardware, and other garage door problems, helping residential and commercial customers maintain safe, convenient, and dependable access to their properties.',
          'We serve Attleboro and nearby communities including Mansfield, Plainville, Franklin, and Foxborough. Whether you are near Capron Park Zoo, downtown Attleboro, or neighborhoods along Route 1 and Interstate 95, you can get driving directions on Google Maps and connect with our team for reliable local garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d189748.4803286157!2d-71.49759907831573!3d42.004138331834255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e45df97249b007%3A0xc9801dee522f4720!2sAttleboro%2C%20Massachusetts%2002703%2C%20USA!3m2!1d41.9443066!2d-71.2813908!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790016251237!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Attleboro',
      },
    },
  },
  {
    slug: 'mansfield',
    name: 'Mansfield',
    lat: 42.0334,
    lng: -71.2189,
    distance: '12 miles',
    blurb:
      'West Street through downtown Mansfield and the neighborhoods off Route 106, including commuter-rail corridor homes.',
    note:
      'A lot of Mansfield inventory is builder-grade from the same decade. Upgrading to nylon rollers and a high-cycle spring at the first service call usually pays for itself.',
    landmarks: ['Mansfield Center', 'West Street', 'Mansfield Station area', 'Route 106'],

    // Reusable location-page template content (see <LocationTemplate>). Opt-in:
    // only areas carrying a `page` block use the template. Modeled on Bellingham.
    page: {
      h1: 'Garage Door Repair in Mansfield, MA',
      metaTitle: 'Garage Door Repair in Mansfield - BSD Garage Door',
      metaDescription:
        'Looking for Garage Door Repair in Mansfield? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!',
      canonicalUrl: 'https://bsdgaragedoorllc.com/service-areas/mansfield/',
      heroSub:
        'Dependable Garage Door Repair in Mansfield, MA - from broken springs and worn openers to off-track doors and replacements, our technicians restore safe, smooth operation for homes and businesses.',

      whyChooseUs: {
        heading: 'Why Choose Us for Garage Door Repair in Mansfield',
        intro:
          'Straightforward diagnosis, written pricing, and practical repairs - plus sensible upgrades - that keep your Mansfield garage door running safely and reliably.',
        items: [
          {
            icon: 'Pin',
            title: 'Local Mansfield Service',
            text: 'From Mansfield Center and the West Street area to the commuter-rail neighborhoods off Route 106, we cover the whole town for homes and businesses.',
          },
          {
            icon: 'Check',
            title: 'Honest, Written Pricing',
            text: 'You get a clear diagnosis and a price in writing before any repair begins, so there are no surprises on the driveway.',
          },
          {
            icon: 'Wrench',
            title: 'Repairs That Last',
            text: 'On the builder-grade doors common around Mansfield, we can upgrade to nylon rollers and a high-cycle spring so the next failure is further off.',
          },
          {
            icon: 'Shield',
            title: 'Safety-First Workmanship',
            text: 'We test the balance and safety reverse after every repair, so your door leaves smooth, quiet and safe to use.',
          },
        ],
      },

      sections: [
        {
          id: 'local-repair',
          kicker: 'Serving Mansfield',
          heading: 'Trusted Garage Door Repair in Mansfield for Homes and Businesses',
          img: 'sv-garage-door-repair',
          imgAlt:
            'A technician using a cordless drill to secure a garage door track bracket at the top corner of the rail',
          reverse: true,
          body: [
            'Mansfield is a commuter town with a busy commercial side - retail around Mansfield Crossing, event traffic near the Xfinity Center, and neighborhoods that empty toward the train station each morning. When a garage door fails here, timing matters: a snapped spring before an early train or an opener that quits on a concert weekend is more than an inconvenience. Our team handles Garage Door Repair in Mansfield across homes and businesses alike, finding the real cause on site rather than guessing at the symptom.',
            'A lot of the town’s housing went up builder-grade in the same decade, so we see the same springs and rollers reaching the end of their life on similar schedules. We repair what has failed and, where it makes sense, upgrade the weak points so the door runs longer - and we keep common parts on the truck to finish most visits the same day.',
          ],
        },
        {
          id: 'common-problems',
          kicker: 'Common problems',
          heading: 'Common Garage Door Problems We Fix Across Mansfield',
          body: [
            'Because so much Mansfield inventory shares the same builder-grade hardware from the same era, the failures tend to arrive on a similar timeline. Springs weaken and snap after years of daily cycles, stock rollers wear and rattle, cables fray, and openers begin to hesitate or reverse. Doors on the busier commercial properties simply reach that point faster from heavier use.',
            'We work through the springs, rollers, hinges, tracks and opener to find what is actually failing, then repair it and test the door through a full cycle. Staying ahead of these problems is a routine part of Garage Door Repair in Mansfield, and upgrading a weak point at the first service call often prevents the next call altogether.',
          ],
          list: [
            'Broken or weakening torsion and extension springs',
            'Worn stock rollers that rattle or drag',
            'Frayed lift cables on aging doors',
            'Openers that stall, reverse or respond intermittently',
            'Doors off the track or binding in the rails',
          ],
        },
        {
          id: 'fast-response',
          kicker: 'Local response',
          heading: 'Fast, Local Response for Garage Door Repair in Mansfield',
          img: 'sv-panels-repair',
          imgAlt:
            'A technician fastening a garage door hinge bracket to a white raised-panel door',
          body: [
            'A garage door is often the main way into a Mansfield home and the daily access point for a business, so a door that will not open holds up more than the driveway. Mansfield sits toward the southern edge of our service area, so booking earlier in the day gives the best chance of a same-afternoon visit, and we will always tell you plainly on the phone whether a problem is urgent or safe to wait.',
            'Every job starts with a clear explanation of what we find and what it will cost, before any work begins. That is the standard we hold for Garage Door Repair in Mansfield - honest assessments, parts we would fit on our own homes, and a door that leaves balanced, quiet and safe.',
          ],
        },
      ],

      faqHeading: 'Frequently Asked Questions',
      faqEyebrow: 'FAQ',
      faqs: [
        {
          q: 'Do you repair both residential and commercial garage doors in Mansfield?',
          a: 'Yes. We handle residential doors and light-commercial overhead doors across Mansfield, from homes near the train station to the retail and business properties around Mansfield Crossing.',
        },
        {
          q: 'My garage door is builder-grade and keeps needing repairs - what can I do?',
          a: 'Many Mansfield homes share the same builder-grade hardware, which wears out on a similar schedule. Upgrading to nylon rollers and a high-cycle spring at a service call usually costs little more and pushes the next failure much further out.',
        },
        {
          q: 'How much does garage door repair in Mansfield cost?',
          a: 'It depends on the part and the problem, so we assess the door on site and provide a price in writing before any work begins. Common repairs such as springs or rollers are quoted up front with no obligation.',
        },
        {
          q: 'My garage door spring broke - is it safe to use the door?',
          a: 'It is best not to. A broken spring leaves the door very heavy and unpredictable, and forcing it can cause further damage or injury. Leave the door down and call; broken springs are one of the most common repairs we handle in Mansfield.',
        },
        {
          q: 'Which areas of Mansfield do you cover?',
          a: 'We cover all of Mansfield, including Mansfield Center, the West Street area, the Mansfield Station neighborhoods and the Route 106 corridor, along with nearby Foxborough, Plainville, Attleboro and Wrentham.',
        },
      ],

      // Local-area intro + Google directions map (provided content).
      directions: {
        kicker: 'Serving your area',
        heading: 'BSD Garage Door – Mansfield',
        body: [
          'BSD Garage Door offers dependable garage door repair, maintenance, and installation services for Mansfield homeowners and businesses. From broken springs and opener problems to damaged doors and replacement installations, our team provides practical solutions designed to restore proper operation and help keep your garage safe and functional.',
          'We serve Mansfield and surrounding areas including Foxborough, Plainville, Attleboro, and Wrentham. Whether you are near Mansfield Crossing, Xfinity Center, or neighborhoods along Route 140 and Interstate 495, you can get driving directions on Google Maps and connect with our team for professional garage door service.',
        ],
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d94817.90014233704!2d-71.39969441917735!3d42.041907022138155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89e4623b5bcf3d2b%3A0x4f1a1f54bde2b1ed!2sMansfield%2C%20Massachusetts%2C%20USA!3m2!1d42.0334565!2d-71.2190578!4m5!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door%2C%20275%20Washington%20St%20Unit%20A8%2C%20Franklin%2C%20MA%2002038%2C%20United%20States!3m2!1d42.0687962!2d-71.4117011!5e0!3m2!1sen!2s!4v1790060913331!5m2!1sen!2s',
        mapTitle: 'Driving directions to BSD Garage Door from Mansfield',
      },
    },
  },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);

export const googleRating = { value: 5, count: 6 };

export const googleReviews = [
  {
    name: 'Rick Almeida',
    role: 'Off-track repair',
    photo: '/img/reviews/rick.jpg',
    initials: 'RA',
    rating: 5,
    text: 'My garage door came off the track and I couldn’t get it to close properly. I called for service and they were able to send someone out quickly. The technician got the door back on track, adjusted everything, and tested it several times before leaving. It’s been working perfectly since. Fast, professional service and a very smooth experience overall.',
  },
  {
    name: 'Vipservices Concierge',
    role: 'Springs replacement',
    photo: '/img/reviews/vipservices.png',
    initials: 'VC',
    rating: 5,
    text: 'My garage door springs broke, leaving the door difficult to open and close. I contacted the company for service, and they responded quickly. The technician replaced the broken springs, balanced and adjusted the door, and tested everything thoroughly before leaving. The entire process was fast, professional, and hassle-free. My garage door has been working perfectly ever since.',
  },
  {
    name: 'Anthony Tort',
    role: 'Garage door repair',
    photo: '/img/reviews/anthony.png',
    initials: 'AT',
    rating: 5,
    text: 'Had an issue with my garage door and I called for a repair. The technician was friendly, found the problem quickly, and had everything fixed without trying to sell me things I didn’t need. The door is running smooth and quiet again. Really good experience from start to finish. I’ll definitely call them again if I ever need garage door service.',
  },
  {
    name: 'Joaquim Correia',
    role: 'Panel replacement',
    photo: '/img/reviews/joaquim.png',
    initials: 'JC',
    rating: 5,
    text: 'One of the panels on my garage door was damaged and I really didn’t want to replace the entire door. They came out, took a look, and were able to replace just the damaged panel. The new panel fits perfectly and the door looks great again. Communication was easy, they showed up when they said they would, and the whole job went smoothly. Really pleased with how it turned out!',
  },
  {
    name: 'Gal Hacham',
    role: 'Opener installation',
    photo: '/img/reviews/gal.png',
    initials: 'GH',
    rating: 5,
    text: 'My garage door opener suddenly stopped working, so I called for service. The technician arrived on time, checked everything, and explained that the opener needed to be replaced. He had the new unit installed and set up pretty quickly, and made sure the remotes and everything else were working before he left. The whole process was easy and professional, and the garage door has been working great since. Very happy with the service and would use them again.',
  },
];

export const homeFaqs = [
  {
    q: 'How quickly can you get to me?',
    a: 'We run 24-hour service Sunday through Thursday, so emergencies - a door stuck open, a car trapped, a snapped spring - go out as soon as a technician is free. Friday we are on the road 7am to 5pm. Saturday we are closed.',
  },
  {
    q: 'Is the estimate really free?',
    a: 'Estimates for new doors, new openers and replacement quotes are free with no obligation. Repair visits carry a diagnostic fee that we waive in full when you approve the work.',
  },
  {
    q: 'Are you fully licensed and insured?',
    a: 'Yes. Proof is available on request.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Yes. It depends on the quality, condition and kind of the job, and on the products used. We will tell you exactly what is covered before the work starts.',
  },
  {
    q: 'What brands do you service?',
    a: 'All of the major ones - Clopay, Amarr, Wayne Dalton, Overhead Door, Raynor and CHI, plus LiftMaster, Chamberlain, Genie and Sommer openers. If it opens, we can work on it.',
  },
];

export const trustPoints = [
  { label: 'Availability', value: '24 hr', note: 'Sun through Thu' },
  { label: 'Open', value: 'Sun-Fri', note: 'Six days a week' },
  { label: 'Typical response', value: 'Same day', note: 'When we can' },
  { label: 'Pricing', value: 'Upfront', note: 'Before work begins' },
];

export const processSteps = [
  {
    title: 'Call or send the form',
    body: 'Tell us what the door is doing. We diagnose a surprising amount over the phone and will say plainly whether it is urgent.',
  },
  {
    title: 'We send a technician',
    body: 'A technician comes out to diagnose the issue properly, with the common parts already on the truck.',
  },
  {
    title: 'Price upon the job',
    body: 'You get the full cost before a wrench comes out. Approve it, decline it, or ask us to quote an alternative.',
  },
  {
    title: 'We get it done',
    body: 'We complete the repair quickly, test the door through a full cycle, and walk you through what changed.',
  },
];
