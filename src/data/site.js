// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for business info (NAP), services and service areas.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://bsdgaragedoor.com';

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
  latitude: 42.0687962,
  longitude: -71.4117011,
  mapUrl: 'https://maps.app.goo.gl/WuUEzftgNbdVZ3mC8',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11800!2d-71.4117011!3d42.0687962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door!5e0!3m2!1sen!2sus!4v1710000000000',
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

export const addressOneLine = `${biz.street}, ${biz.city}, ${biz.state} ${biz.zip}`;
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
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const areas = [
  {
    slug: 'franklin',
    name: 'Franklin',
    lat: 42.0834,
    lng: -71.3967,
    distance: 'Home base',
    blurb:
      'Our shop sits on Washington Street, so downtown Franklin, the Forge Park corridor and the neighborhoods off King Street get our fastest response times.',
    note:
      'Franklin mixes older capes with newer subdivisions. We carry both standard torsion hardware and the quieter belt-drive openers a lot of newer HOAs prefer.',
    landmarks: ['Downtown Franklin', 'Forge Park', 'King Street', 'Franklin State Forest', 'Dean College area'],
  },
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
