import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import AreaMap from './AreaMap.jsx';
import { Pin, Phone } from './Icons.jsx';
import { areas, biz } from '../data/site.js';

export default function LocationBand({
  excludeSlug,
  kicker = 'Where we work',
  title = (
    <>
      Franklin and
      <br />
      surrounding towns
    </>
  ),
}) {
  const list = excludeSlug ? areas.filter((a) => a.slug !== excludeSlug) : areas;

  return (
    <section className="section locband" id="service-areas">
      <div className="wrap locband__grid">
        <Reveal className="locband__copy">
          <div className="locband__kicker">{kicker}</div>
          <h2>{title}</h2>
          <p>
            From Franklin, MA out to Foxborough, Attleboro and the Route 495 towns. Not sure if we
            reach you? Call and ask &mdash; we will make it work for you.
          </p>

          <ul className="locband__towns">
            {list.map((a) => (
              <li key={a.slug}>
                <Link className="locband__town" to={`/service-areas/${a.slug}`}>
                  <span className="locband__mark" aria-hidden="true">
                    <Pin size={15} />
                  </span>
                  <strong>{a.name}</strong>
                  <em>{a.distance}</em>
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/service-areas" className="locband__more">
            All service areas
          </Link>
        </Reveal>

        <Reveal className="locband__aside" delay={80}>
          <a className="locband__call" href={biz.phoneHref}>
            <span className="locband__call-icon" aria-hidden="true">
              <Phone size={18} />
            </span>
            <span className="locband__call-txt">
              <small>Have a question?</small>
              Call us &mdash; we&rsquo;re happy to help.
            </span>
            <span className="locband__call-chevron" aria-hidden="true">
              ›
            </span>
          </a>

          <div className="locband__mapcard">
            <AreaMap />
            <div className="locband__notes">
              <p>
                <small>Proudly serving</small>
                Franklin and surrounding communities
              </p>
              <p>
                Same great service.
                <br />
                Across every town we cover.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
