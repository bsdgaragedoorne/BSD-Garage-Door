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
import { homeFaqs } from '../data/site.js';
import { organizationSchema, faqSchema, combine } from '../lib/schema.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Garage Door Repair in Franklin, MA | BSD Garage Door"
        description="24-hour garage door repair in Franklin, MA. Broken springs, openers, cables and off-track doors fixed by licensed techs. Free estimates - call 843-279-3345."
        path="/"
        schema={combine(
          organizationSchema()['@graph'][0],
          organizationSchema()['@graph'][1],
          faqSchema(homeFaqs)
        )}
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

      {/* 5 - Number talks */}
      <NumberTalks />

      {/* 6 - Why */}
      <AboutBlock />

      {/* 7 - Google reviews */}
      <GoogleReviews />

      {/* 8 - Service areas */}
      <LocationBand />

      {/* 9 - FAQs */}
      <FaqSection />
    </>
  );
}
