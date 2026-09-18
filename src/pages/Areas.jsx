import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { Crumbs, HowACall } from '../components/Blocks.jsx';
import { Pin } from '../components/Icons.jsx';
import { areas, biz, getArea } from '../data/site.js';
import { breadcrumbSchema, areaSchema } from '../lib/schema.js';
import { NotFound } from './Pages.jsx';
import LocationBand from '../components/LocationBand.jsx';
import { AboutIntro, TrustMarquee } from '../components/Sections.jsx';
import ServiceRail from '../components/ServiceRail.jsx';

export function AreasIndex() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ];

  return (
    <>
      <Seo
        title="Garage Door Service Areas | Franklin & MetroWest, MA"
        description="BSD Garage Door serves Franklin, MA and surrounding towns - Bellingham, Medway, Wrentham, Foxborough, Milford and Attleboro. Call 843-279-3345."
        path="/service-areas"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead pagehead--areas">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Garage Door Service Areas Around Franklin</h1>
          <p className="lede">
            We cover Franklin and the surrounding MetroWest towns - west to Milford, south to Attleboro,
            and east toward Walpole.
          </p>
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

      <section className="section areasec">
        <div className="wrap">
          <Reveal className="svhead">
            <div className="fxeyebrow">Where we work</div>
            <h2>
              Franklin <span className="accent">and surrounding towns</span>
            </h2>
          </Reveal>

          <div className="areagrid">
            {areas.map((a, i) => (
              <Reveal
                className="areacard"
                as={Link}
                to={`/service-areas/${a.slug}`}
                key={a.slug}
                delay={(i % 3) * 70}
              >
                <span className="areacard__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>
                  <Pin size={17} />
                  {a.name}
                </h3>
                <span className="areacard__dist">{a.distance}</span>
                <p>{a.blurb}</p>
                <span className="boxmore">
                  read more <span aria-hidden="true">›</span>
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal className="areanote">
            <p>
              Not on the list? Call{' '}
              <a href={biz.phoneHref}>{biz.phone}</a> and we will make it work!
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceRail />
    </>
  );
}

export function AreaDetail() {
  const { slug } = useParams();
  const area = getArea(slug);
  if (!area) return <NotFound />;

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/service-areas' },
    { name: area.name, path: `/service-areas/${area.slug}` },
  ];
  const description = `Garage door repair, spring replacement, opener service and new door installation in ${area.name}, MA. ${area.blurb} Call ${biz.phone}.`;

  return (
    <>
      <Seo
        title={`Garage Door Repair in ${area.name}, MA | BSD Garage Door`}
        description={description}
        path={`/service-areas/${area.slug}`}
        schema={areaSchema(area)}
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead pagehead--areas">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Garage Door Repair in {area.name}, MA</h1>
          <p className="lede">{area.blurb}</p>
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

      <section className="section areadetail">
        <div className="wrap areadetail__grid">
          <Reveal className="areadetail__body">
            <div className="fxeyebrow">Serving {area.name}</div>
            <h2>Local garage door service in {area.name}</h2>
            <p>{area.note}</p>
            <p>
              Same crews, same written pricing, same-day when we can. If the door is stuck, a spring has
              snapped, or you want a new insulated door, we handle it in {area.name} and the surrounding
              streets.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn">
                Get a free estimate
              </Link>
              <Link to="/services" className="btn btn--ghost">
                All services
              </Link>
            </div>
          </Reveal>

          <Reveal className="areadetail__aside" delay={80}>
            <h3>
              <Pin size={17} /> Neighborhoods we cover
            </h3>
            <ul className="areadetail__hoods">
              {area.landmarks.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <TrustMarquee />

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

      <AboutIntro />

      <HowACall />

      <ServiceRail />
    </>
  );
}
