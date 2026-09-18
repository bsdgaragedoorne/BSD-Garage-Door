import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { Crumbs, HowACall } from '../components/Blocks.jsx';
import { Check, icons } from '../components/Icons.jsx';
import { biz, getService, services } from '../data/site.js';
import LocationBand from '../components/LocationBand.jsx';
import { breadcrumbSchema, serviceSchema } from '../lib/schema.js';
import { NotFound } from './Pages.jsx';

export function ServicesIndex() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <>
      <Seo
        title="Garage Door Services in Franklin, MA | Repair & Installation"
        description="Full garage door services in Franklin, MA: installation, repair, maintenance, spring replacement, opener installation and emergency callouts. Free estimate - 843-279-3345."
        path="/services"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>Garage Door Services in Franklin, MA</h1>
          <p className="lede">
            Thirteen service lines covering everything from an annual tune-up to a full insulated door
            replacement - residential and commercial, across MetroWest, six days a week.
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

      <section className="section svsection">
        <div className="wrap">
          <Reveal className="svhead svhead--caps">
            <h2>Our services</h2>
          </Reveal>

          <div className="svboxes">
            {services.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal
                  className="svbox"
                  as={Link}
                  to={`/services/${s.slug}`}
                  key={s.slug}
                  delay={(i % 3) * 70}
                >
                  <span className="svbox__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>
                    <Icon size={17} />
                    <span>{s.name}</span>
                  </h3>
                  <p>{s.short}</p>
                  <span className="boxmore">
                    read more <span aria-hidden="true">›</span>
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <LocationBand />
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: `/services/${service.slug}` },
  ];
  const description = `${service.short} Serving Franklin and MetroWest. Call ${biz.phone} for a free written estimate.`;

  return (
    <>
      <Seo
        title={`${service.name} in Franklin, MA | BSD Garage Door`}
        description={description}
        path={`/services/${service.slug}`}
        schema={serviceSchema({ ...service, metaDescription: description })}
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{service.name}</h1>
          <p className="lede">{service.short}</p>
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

      <section className="section svdetail" id="about-the-service">
        <div className="wrap svdetail__grid">
          <Reveal className="svdetail__media about3d__stage">
            <svg className="about3d__geo" viewBox="0 0 420 480" aria-hidden="true" focusable="false">
              <polygon points="86,28 390,96 318,458 28,372" fill="#fdeeee" />
              <polygon points="72,16 402,84 328,470 16,368" fill="none" stroke="#e30613" strokeWidth="2.2" />
              <polygon points="148,58 408,38 372,438 108,468" fill="none" stroke="#111111" strokeWidth="2.2" />
            </svg>
            <div className="about3d__model">
              <img
                src={`/img/${service.img}-720.webp`}
                srcSet={`/img/${service.img}-440.webp 440w, /img/${service.img}-720.webp 720w`}
                sizes="(min-width: 900px) 38vw, 86vw"
                alt={service.alt}
                width="720"
                height="540"
              />
            </div>
            <div className="about3d__badge">
              <strong>Franklin, MA</strong>
              <span>Licensed &amp; insured local repair</span>
            </div>
          </Reveal>
          <Reveal className="svdetail__body" delay={80}>
            <div className="fxeyebrow">About the service</div>
            <h2>
              {service.name} in <span className="accent">Franklin and MetroWest</span>
            </h2>
            {service.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="svdetail__ticks">
              {service.points.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to="/contact" className="btn">
                Get a free estimate
              </Link>
              <Link to="/services" className="btn btn--ghost">
                All services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <HowACall />

      <LocationBand />
    </>
  );
}
