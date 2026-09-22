import { Link } from 'react-router-dom';
import Seo from './Seo.jsx';
import Reveal from './Reveal.jsx';
import { Crumbs, HowACall } from './Blocks.jsx';
import ServiceRail from './ServiceRail.jsx';
import { AboutBlock } from './Sections.jsx';
import FaqSection from './FaqSection.jsx';
import LocationBand from './LocationBand.jsx';
import { Check, Phone, Pin, Arrow, Gear, Wrench, Bolt, Shield, IconTrack } from './Icons.jsx';
import { biz } from '../data/site.js';
import { buildServiceGraph } from '../lib/serviceJsonLd.js';

/**
 * Reusable service-page template.
 *
 * Renders one long-form, SEO/conversion-oriented service page from a `service`
 * record. Rich content lives under `service.page` (see src/data/site.js); when
 * a field is missing the template falls back to the base fields (name, short,
 * about, points). Only services carrying a `page` block reach this component
 * (routed in Services.jsx); every other service keeps its original layout.
 *
 * The page deliberately reuses the site's established sections so a service
 * page shares one visual language with the homepage and the old service pages:
 *   • Hero            → the .pagehead photographic band (old service-page hero)
 *   • Our Process     → <HowACall/>   ("How a call goes / No mystery, no pressure")
 *   • Our Services    → <ServiceRail/> (the homepage services rail)
 *   • Why Choose Us   → <AboutBlock/>  (the homepage "The difference" block)
 *   • Service areas   → <LocationBand/> (the same band the location pages use)
 *   • FAQs            → <FaqSection/>  (the homepage FAQ accordion, fed service Q&A)
 * Service-specific long-form content (intro, offerings, info sections) is
 * template-owned.
 */

// Icons referenced by name from the offerings data.
const ICONS = { Check, Phone, Pin, Gear, Wrench, Bolt, Shield, IconTrack };

function Icon({ name, size = 22 }) {
  const Cmp = ICONS[name] || Check;
  return <Cmp size={size} />;
}

export default function ServiceTemplate({ service }) {
  const page = service.page || {};

  const path = `/services/${service.slug}`;
  const title = page.metaTitle || `${service.name} in ${biz.city}, ${biz.state} | ${biz.name}`;
  const description =
    page.metaDescription ||
    `${service.short} Serving ${biz.city} and MetroWest. Call ${biz.phone} for a free estimate.`;

  const h1 = page.h1 || service.name;
  const heroSub = page.heroSub || service.short;
  // Optional per-service hero background photo. When omitted the hero keeps the
  // shared .pagehead band (unchanged for opener-repair and every other page).
  // `heroImage` may be a full filename (e.g. 'foo.webp') or a base name that
  // follows the project's -720.webp convention.
  const heroImage = page.heroImage || null;
  const heroBg = heroImage ? (heroImage.includes('.') ? heroImage : `${heroImage}-720.webp`) : null;
  // When a service supplies `heroAlt`, the hero photo is rendered as a real
  // <img> (so it carries alt + title) instead of a CSS background. Services
  // that only set `heroImage` (e.g. springs-replacement) keep the CSS-bg hero.
  const heroAlt = page.heroAlt || null;
  const heroTitle = page.heroTitle || null;
  const heroPhoto = Boolean(heroBg && heroAlt);

  const introHeading = page.intro?.heading || `${service.name} in ${biz.city} and MetroWest`;
  const introBody = page.intro?.body || service.about || [];
  const introPoints = page.intro?.points || service.points || [];
  // Intro photo: defaults to the service image; a service can pass its own, or
  // `introImage: false` to run the intro text-only (e.g. when the service image
  // is already used as the hero background).
  const introImage = page.introImage === false ? null : page.introImage || service.img;

  const offerings = page.offerings || null;
  const sections = page.sections || [];
  const faqs = page.faqs || [];

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path },
  ];

  // Custom per-service JSON-LD (Service + FAQPage + BreadcrumbList).
  // springs-replacement carries its own approved literal (page.jsonLd) and is
  // left unchanged; every other service is generated from its data. This is the
  // ONLY structured-data output on service pages — the old auto schema that used
  // to be passed to <Seo> has been removed to prevent any duplicate Service
  // entity.
  const jsonLd = page.jsonLd || buildServiceGraph(service, page);

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        canonicalUrl={page.canonicalUrl}
      />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      )}

      {/* 1 — Hero (old service-page photographic band) */}
      <section
        className={`pagehead${heroPhoto ? ' pagehead--img' : heroBg ? ' pagehead--photo' : ''}`}
        style={heroBg && !heroPhoto ? { '--svc-hero': `url(/img/${heroBg})` } : undefined}
      >
        {heroPhoto && (
          <div className="pagehead__media">
            <img
              src={`/img/${heroBg}`}
              alt={heroAlt}
              title={heroTitle || undefined}
              width={page.heroWidth || undefined}
              height={page.heroHeight || undefined}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        )}
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{h1}</h1>
          <p className="lede">{heroSub}</p>
          <div className="btn-row">
            <a href={biz.phoneHref} className="btn btn--fx">
              Call {biz.phone}
            </a>
            <Link to="/contact" className="btn btn--ghost-light">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Service intro (content, with optional image) */}
      <section className="section svc-band--chalk" id="about-the-service">
        <div className={`wrap svc-intro__grid${introImage ? ' svc-intro__grid--media' : ''}`}>
          {introImage && (
            <Reveal className="svc-intro__media">
              <img
                src={`/img/${introImage}-720.webp`}
                srcSet={`/img/${introImage}-440.webp 440w, /img/${introImage}-720.webp 720w`}
                sizes="(min-width: 900px) 40vw, 92vw"
                alt={service.alt}
                title={h1}
                width="720"
                height="540"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          )}
          <Reveal className="svc-prose" delay={introImage ? 80 : 0}>
            <p className="svc-kicker">About the service</p>
            <h2>{introHeading}</h2>
            {introBody.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {introPoints.length > 0 && (
              <ul className="svc-ticks">
                {introPoints.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </section>

      {/* 3 — Why choose us: reuse the homepage "The difference" design. When the
              service supplies its own `whyChooseUs`, that content is fed into the
              same AboutBlock design; otherwise the homepage content is shown. */}
      {page.whyChooseUs ? (
        <AboutBlock
          kicker="Why choose us"
          heading={page.whyChooseUs.heading}
          lede={page.whyChooseUs.intro}
          cards={page.whyChooseUs.items.map((b) => ({
            icon: ICONS[b.icon] || Check,
            title: b.title,
            body: b.text,
          }))}
        />
      ) : (
        <AboutBlock />
      )}

      {/* 4 — Our services (shared homepage rail) */}
      <ServiceRail />

      {/* 5 — Services we provide (service-specific offerings) */}
      {offerings && (
        <section className="section svc-band--chalk">
          <div className="wrap">
            <Reveal className="svc-head">
              {offerings.kicker && <p className="svc-kicker">{offerings.kicker}</p>}
              <h2>{offerings.heading}</h2>
              {offerings.intro && <p>{offerings.intro}</p>}
            </Reveal>
            <div className="svc-grid">
              {offerings.items.map((item, i) => (
                <Reveal className="svc-card" key={item.title} delay={(i % 3) * 60}>
                  <span className="svc-card__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — Our process (shared: "How a call goes / No mystery, no pressure") */}
      <HowACall />

      {/* 7 — Informational content sections */}
      {sections.map((sec, i) => {
        const chalk = i % 2 === 1;
        const hasImg = Boolean(sec.img);
        return (
          <section
            key={sec.id || sec.heading}
            id={sec.id}
            className={`section${chalk ? ' svc-band--chalk' : ''}`}
          >
            <div
              className={`wrap svc-info__grid${
                hasImg ? ` svc-info__grid--media${sec.reverse ? ' svc-info__grid--reverse' : ''}` : ''
              }`}
            >
              {hasImg && (
                <Reveal className="svc-info__media">
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
              )}
              <Reveal className="svc-info__body" delay={hasImg ? 80 : 0}>
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
                {sec.chips && (
                  <ul className="svc-chips">
                    {sec.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                )}
                {sec.link && (
                  <Link className="svc-info__link" to={sec.link.to}>
                    {sec.link.label} <Arrow size={16} />
                  </Link>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* 8 — Service areas (shared LocationBand — same section as the location
              pages and the rest of the site). Franklin is excluded from the town
              list, the same way the Franklin location page drops its own link. */}
      <LocationBand excludeSlug="franklin" />

      {/* 9 — FAQs (shared homepage accordion, fed service-specific Q&A + FAQ schema) */}
      {faqs.length > 0 && (
        <FaqSection items={faqs} title={page.faqHeading} eyebrow={page.faqEyebrow} />
      )}
    </>
  );
}
