import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import ServiceRail from '../components/ServiceRail.jsx';
import { AboutBlock, AboutIntro, TrustMarquee } from '../components/Sections.jsx';
import GarageDoor3D from '../components/GarageDoor3D/index.jsx';
import { NumberTalks } from '../components/Blocks.jsx';
import GoogleReviews from '../components/GoogleReviews.jsx';
import FaqSection from '../components/FaqSection.jsx';
import LocationBand from '../components/LocationBand.jsx';
import { homeFaqs, biz } from '../data/site.js';
import { homeLocalBusinessSchema } from '../lib/homeSchema.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Garage Door Repair in Franklin - BSD Garage Door"
        description="Looking for Garage Door Repair in Franklin? BSD Garage Door handles broken garage door repairs, stuck doors, noisy doors and opener issues. Call today!"
        path="/"
        canonicalUrl="https://bsdgaragedoorllc.com/"
      />

      {/* Homepage LocalBusiness structured data (custom JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeLocalBusinessSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* 1 - Hero */}
      <HeroSlider />

      {/* 2 - About */}
      <AboutIntro />

      <TrustMarquee />

      {/* 3 - Interactive 3D door */}
      <section className="section gd3d" id="door-3d">
        <div className="wrap gd3d__grid">
          <Reveal className="gd3d__copy">
            <div className="fxeyebrow">Explore the door</div>
            <h2>
              Every part, from <span>every angle</span>
            </h2>
            <p>
              Drag the door to spin it. This is the same sectional door and overhead gear we install
              and repair - tracks, rollers, hinges and opener included - so you can see exactly what
              sits above your garage before a technician ever knocks.
            </p>
            <ul className="gd3d__parts">
              <li>Sectional steel panels</li>
              <li>Curved side tracks</li>
              <li>Overhead rails</li>
              <li>Rollers &amp; hinges</li>
              <li>Torsion shaft &amp; drums</li>
              <li>Centre-mount opener</li>
            </ul>
            <Link to="/services" className="btn btn--fx">
              See what we service <span className="plus">+</span>
            </Link>
          </Reveal>

          <Reveal className="gd3d__stage" delay={80}>
            <GarageDoor3D />
          </Reveal>
        </div>
      </section>

      {/* 4 - Services */}
      <ServiceRail />

      {/* 4b - Local keyword band (Garage Door Repair in Franklin) */}
      <section className="section hkw" id="franklin-repair">
        <div className="wrap">
          <Reveal className="hkw__head">
            <p className="hkw__kicker">Franklin, MA</p>
            <h2>
              Trusted <span className="accent">Garage Door Repair in Franklin</span>
            </h2>
            <p className="hkw__lede">
              When a spring snaps, the opener quits, or the door jams shut, you need Garage Door Repair
              in Franklin that arrives fast and fixes the real problem the first time. Our local
              technicians diagnose on site and carry common parts on the truck, so most repairs are
              finished in a single visit.
            </p>
          </Reveal>

          <ul className="hkw__grid">
            <Reveal as="li" className="hkw__card">
              <h3>Broken Springs</h3>
              <p>Matched-pair torsion and extension springs replaced and balance-tested so the door lifts safely again.</p>
            </Reveal>
            <Reveal as="li" className="hkw__card" delay={70}>
              <h3>Openers &amp; Cables</h3>
              <p>Worn openers, frayed cables and misaligned safety sensors put right so the door runs smoothly.</p>
            </Reveal>
            <Reveal as="li" className="hkw__card" delay={140}>
              <h3>Off-Track &amp; Panels</h3>
              <p>Doors off the rail, bent tracks and damaged panels repaired or replaced to factory alignment.</p>
            </Reveal>
          </ul>

          <Reveal className="hkw__foot">
            <p>
              From a single stuck door to a full replacement, our Garage Door Repair in Franklin covers
              homes and businesses across the city - always with honest, written pricing before any work
              begins.
            </p>
            <div className="btn-row">
              <a href={biz.phoneHref} className="btn btn--fx">
                Call {biz.phone}
              </a>
              <Link to="/services" className="btn btn--ghost">
                See all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 - Number talks */}
      <NumberTalks />

      {/* 6 - Why */}
      <AboutBlock />

      {/* 7 - Google reviews */}
      <GoogleReviews />

      {/* 8 - Service areas */}
      <LocationBand />

      {/* 8b - Find us + Google map (Garage Door Repair in Franklin) */}
      <section className="section hmap" id="find-us" aria-label={`${biz.name} location`}>
        <div className="wrap">
          <div className="hmap__panel">
            <Reveal className="hmap__copy">
              <p className="hkw__kicker">Find us</p>
              <h2>
                Same-Day <span className="accent">Garage Door Repair in Franklin</span> &amp; MetroWest
              </h2>
              <p>
                Based in Franklin, MA, we deliver fast, dependable Garage Door Repair in Franklin and the
                surrounding MetroWest towns. See our location on the map, then call for a free written
                estimate and same-day service when you need it.
              </p>
              <div className="btn-row">
                <a href={biz.phoneHref} className="btn btn--fx">
                  Call {biz.phone}
                </a>
                <a href={biz.mapUrl} className="btn btn--ghost" target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>
            </Reveal>
            <Reveal className="hmap__map" delay={80}>
              <iframe
                className="hmap__frame"
                title={`${biz.name} on Google Maps`}
                src={biz.mapEmbedUrl}
                width="800"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 - FAQs */}
      <FaqSection />
    </>
  );
}
