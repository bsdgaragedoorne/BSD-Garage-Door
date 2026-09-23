import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo.jsx';
import Reveal from './Reveal.jsx';
import { Crumbs, HowACall } from './Blocks.jsx';
import { AboutIntro, TrustMarquee, AboutBlock } from './Sections.jsx';
import ServiceRail from './ServiceRail.jsx';
import LocationBand from './LocationBand.jsx';
import GoogleReviews from './GoogleReviews.jsx';
import FaqSection from './FaqSection.jsx';
import { Check, Phone, Pin, Gear, Wrench, Bolt, Shield, IconTrack } from './Icons.jsx';
import { biz } from '../data/site.js';
import { areaSchema, faqSchema, breadcrumbSchema, combine } from '../lib/schema.js';

/**
 * Reusable location-page template.
 *
 * Renders one long-form, local-SEO location page from an `area` record whose
 * rich content lives under `area.page` (see src/data/site.js). Only areas that
 * carry a `page` block reach this component (routed in Areas.jsx); every other
 * location keeps its original layout untouched.
 *
 * Section order (kept close to the service-page template):
 *   Hero → About us (<AboutIntro/>) → red marquee (<TrustMarquee/>) →
 *   Why choose us (<AboutBlock/>) → first content section → Our services
 *   (<ServiceRail/>) → remaining content sections → Service areas
 *   (<LocationBand/>) → How a call goes (<HowACall/>) → FAQs (<FaqSection/>) →
 *   Google map → global CtaBand + Footer.
 *
 * The About-us band and the red marquee are the shared components already used
 * on the location pages and are rendered unchanged.
 */

// Icons referenced by name from the whyChooseUs data.
const ICONS = { Check, Phone, Pin, Gear, Wrench, Bolt, Shield, IconTrack };

export default function LocationTemplate({ area }) {
  const page = area.page || {};

  const path = `/service-areas/${area.slug}`;
  const title = page.metaTitle || `Garage Door Repair in ${area.name}, ${biz.state} | ${biz.name}`;
  const description = page.metaDescription || `${area.blurb} Call ${biz.phone}.`;
  const h1 = page.h1 || `Garage Door Repair in ${area.name}, ${biz.state}`;
  const heroSub = page.heroSub || area.blurb;

  const sections = page.sections || [];
  const faqs = page.faqs || [];

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/service-areas' },
    { name: area.name, path },
  ];

  const schema = faqs.length ? combine(areaSchema(area), faqSchema(faqs)) : areaSchema(area);

  return (
    <div className="locpage">
      <Seo
        title={title}
        description={description}
        path={path}
        canonicalUrl={page.canonicalUrl}
        schema={schema}
        breadcrumbs={breadcrumbSchema(trail)}
      />

      {/* 1 — Hero */}
      <section className="pagehead pagehead--areas">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{h1}</h1>
          <p className="lede">{heroSub}</p>
          <div className="btn-row">
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone} <span className="plus">+</span>
            </a>
            <Link to="/contact" className="btn btn--ghost-light">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — About us (shared band, unchanged) */}
      <AboutIntro />

      {/* 3 — Red sliding row */}
      <TrustMarquee />

      {/* 4 — Why choose us (homepage "The difference" design, local copy) */}
      {page.whyChooseUs && (
        <AboutBlock
          id="why-choose-us"
          kicker="Why choose us"
          heading={page.whyChooseUs.heading}
          lede={page.whyChooseUs.intro}
          cards={page.whyChooseUs.items.map((b) => ({
            icon: ICONS[b.icon] || Check,
            title: b.title,
            body: b.text,
          }))}
        />
      )}

      {/* 5 — Local content sections (min. three). A section may carry an
              optional `img` (base name → -440/-720 webp) and `imgAlt`. With
              `reverse: true` the image sits on the right and the copy on the
              left (column order is set by DOM order so it works reliably). */}
      {sections.map((sec, i) => {
        const chalk = i % 2 === 1;
        const hasImg = Boolean(sec.img);
        const media = hasImg && (
          <Reveal className="svc-info__media" key="media">
            <img
              src={`/img/${sec.img}-720.webp`}
              srcSet={`/img/${sec.img}-440.webp 440w, /img/${sec.img}-720.webp 720w`}
              sizes="(min-width: 900px) 46vw, 92vw"
              alt={sec.imgAlt || ''}
              title={h1}
              width="720"
              height="540"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        );
        const body = (
          <Reveal className="svc-info__body" key="body" delay={hasImg ? 80 : 0}>
            {sec.kicker && <p className="svc-kicker">{sec.kicker}</p>}
            <h2>{sec.heading}</h2>
            {(sec.body || []).map((p) => (
              <p key={p}>{p}</p>
            ))}
            {sec.list && (
              <ul className="svc-list">
                {sec.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Reveal>
        );
        return (
          <Fragment key={sec.id || sec.heading}>
            <section id={sec.id} className={`section${chalk ? ' svc-band--chalk' : ''}`}>
              <div className={`wrap svc-info__grid${hasImg ? ' svc-info__grid--media' : ''}`}>
                {hasImg && sec.reverse ? [body, media] : [media, body]}
              </div>
            </section>

            {/* 6 — Our services (shared homepage rail) sits directly below the
                    first content section, with the testimonials section beneath it. */}
            {i === 0 && <ServiceRail />}
            {i === 0 && <GoogleReviews />}
          </Fragment>
        );
      })}

      {/* 7 — Service areas (shared band; excludes this town's own link) */}
      <LocationBand
        excludeSlug={area.slug}
        kicker="More locations we serve"
        title={
          <>
            More locations
            <br />
            we serve
          </>
        }
      />

      {/* 8 — How a call goes (shared) */}
      <HowACall />

      {/* 8b — Local-area intro + directions map (copy one side, map the other).
              Data-driven via page.directions so it stays reusable per city. */}
      {page.directions && (
        <section className="section locabout" id="area-directions" aria-label={page.directions.heading}>
          <div className="wrap">
            <div className="locabout__panel">
              <Reveal className="locabout__copy">
                {page.directions.kicker && <p className="svc-kicker">{page.directions.kicker}</p>}
                <h2>{page.directions.heading}</h2>
                {page.directions.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="btn-row">
                  <a href={biz.phoneHref} className="btn btn--fx">
                    Call {biz.phone}
                  </a>
                  <a
                    href={page.directions.mapLink || biz.mapUrl}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                </div>
              </Reveal>
              <Reveal className="locabout__map" delay={80}>
                <iframe
                  className="locabout__frame"
                  title={page.directions.mapTitle || `Directions to ${biz.name}`}
                  src={page.directions.mapSrc}
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
      )}

      {/* 9 — FAQs (shared accordion, fed location Q&A + FAQ schema) */}
      {faqs.length > 0 && (
        <FaqSection items={faqs} title={page.faqHeading} eyebrow={page.faqEyebrow} />
      )}

      {/* 10 — Google map (after FAQs, before the global CtaBand + Footer) */}
      <section className="section locmap" aria-label={`${biz.name} location map`}>
        <div className="wrap">
          <iframe
            title={`${biz.name} on Google Maps`}
            className="locmap__frame"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47388.88205697812!2d-71.44822203596142!3d42.0687962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46fea3101926f%3A0x7292bc46ae8c73f!2sBSD%20Garage%20Door!5e0!3m2!1sen!2s!4v1790005470324!5m2!1sen!2s"
            width="800"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </div>
  );
}
