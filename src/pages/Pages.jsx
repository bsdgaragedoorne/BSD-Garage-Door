import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { Crumbs, HowACall } from '../components/Blocks.jsx';
import { Check, Phone, Mail, Pin, Clock, Shield } from '../components/Icons.jsx';
import { biz, addressOneLine, trustPoints } from '../data/site.js';
import { breadcrumbSchema } from '../lib/schema.js';

/* -------------------------------------------------------------------- About */

export function About() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];
  return (
    <>
      <Seo
        title="About BSD Garage Door | Franklin, MA Technicians"
        description="Meet the licensed garage door technicians serving Franklin, MA. Upfront pricing, stocked trucks, 24-hour service Sunday through Thursday. Call 843-279-3345."
        path="/about"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>When your garage door breaks, we answer</h1>
          <p className="lede">
            BSD Garage Door is a Franklin-based repair and installation company built on one idea:
            tell people the truth about their door, charge a fair price, and finish the job in one visit.
          </p>
        </div>
      </section>

      <section className="section aboutfeat">
        <div className="wrap aboutfeat__grid">
          <Reveal className="aboutfeat__media">
            <div className="aboutfeat__imgA">
              <img
                src="/img/about-a-760.webp"
                srcSet="/img/about-a-460.webp 460w, /img/about-a-760.webp 760w"
                sizes="(min-width: 1000px) 26vw, 55vw"
                alt="BSD Garage Door technician setting new door panels into the tracks at a Franklin home"
                width="760"
                height="1013"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="aboutfeat__imgB">
              <img
                src="/img/about-b-760.webp"
                srcSet="/img/about-b-460.webp 460w, /img/about-b-760.webp 760w"
                sizes="(min-width: 1000px) 24vw, 50vw"
                alt="Technician lubricating garage door hinges during an annual maintenance visit"
                width="760"
                height="570"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="aboutfeat__badge">
              <span>Licensed &amp; insured</span>
            </div>
          </Reveal>

          <Reveal className="aboutfeat__body" delay={120}>
            <div className="why__eyebrow">
              <i />
              About us
              <i />
            </div>

            <h2>
              Franklin&rsquo;s garage door team, built on{' '}
              <span className="accent">work other people would not take.</span>
            </h2>

            <p className="lede">
              We take the late calls - the door that would not close, the snapped spring at 2am, the
              opener that died an hour before you had to leave. Word travelled, and referrals are still
              most of how we get work.
            </p>

            <div className="aboutfeat__pair">
              <div>
                <span className="aboutfeat__icon">
                  <Clock size={22} />
                </span>
                <h3>One visit, not three</h3>
                <p>
                  Springs, cables, rollers and common opener parts ride on every truck, so a diagnosis
                  usually becomes a finished repair the same hour.
                </p>
              </div>

              <div>
                <span className="aboutfeat__icon">
                  <Shield size={22} />
                </span>
                <h3>Priced before we start</h3>
                <p>
                  You see the full cost in writing before a wrench comes out. Approve it, decline it, or
                  ask us to quote an alternative.
                </p>
              </div>
            </div>

            <ul className="aboutfeat__ticks">
              <li>
                <Check size={15} /> Licensed, insured &amp; bonded
              </li>
              <li>
                <Check size={15} /> Fully insured
              </li>
              <li>
                <Check size={15} /> Same-day service
              </li>
              <li>
                <Check size={15} /> Never subcontracted
              </li>
            </ul>

            <div className="aboutfeat__foot">
              <Link to="/contact" className="btn btn--fx">
                Book a technician <span className="plus">+</span>
              </Link>
              <a href={biz.phoneHref} className="aboutfeat__phone">
                <Phone size={17} />
                <span>
                  <em>Speak to us</em>
                  {biz.phone}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="trustbar">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="trustbar__grid">
            {trustPoints.map((t) => (
              <div className="trustbar__cell" key={t.label}>
                <div className="trustbar__label">{t.label}</div>
                <div className="trustbar__value">{t.value}</div>
                <div className="trustbar__note">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowACall />

      <section className="section creds">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Reveal className="prose">
            <div className="eyebrow">Credentials</div>
            <h2>Licensed, insured, and local</h2>
            <ul className="ticks" style={{ marginBottom: '1.6rem' }}>
              <li>
                <Shield size={17} /> Licensed, insured and bonded - proof on request
              </li>
              <li>
                <Check size={17} /> Upfront pricing before work begins
              </li>
              <li>
                <Check size={17} /> 24-hour service Sunday through Thursday
              </li>
              <li>
                <Check size={17} /> Every technician is our own employee, never a subcontractor
              </li>
              <li>
                <Check size={17} /> Serving Franklin and surrounding MetroWest towns
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ Contact */

export function Contact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }];
  const phoneNice = biz.phone.replace(/^(\d{3})-(\d{3})-(\d{4})$/, '($1) $2-$3');

  return (
    <>
      <Seo
        title="Contact BSD Garage Door | Franklin, MA | 843-279-3345"
        description="Call 843-279-3345 or request a free garage door estimate in Franklin, MA. 24-hour service Sunday through Thursday, Friday 7am-5pm."
        path="/contact"
        breadcrumbs={breadcrumbSchema(trail)}
      />

      <section className="pagehead pagehead--contact">
        <div className="wrap">
          <h1>Contact Us</h1>
          <Crumbs trail={trail} />
        </div>
      </section>

      <section className="cmap" aria-labelledby="cmap-title">
        <div className="cmap__map">
          <iframe
            title="BSD Garage Door on Google Maps"
            src={biz.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="wrap cmap__formwrap">
          <div className="cmap__card">
            <p className="cmap__kicker">Contact us</p>
            <h2 id="cmap-title">Get In Touch</h2>
            <LeadForm formName="contact" contact />
          </div>
        </div>
      </section>

      <section className="cinfo">
        <div className="wrap cinfo__grid">
          <a className="cinfo__card" href={biz.phoneHref}>
            <span className="cinfo__icon" aria-hidden="true">
              <Phone size={20} />
            </span>
            <span>
              <strong>Phone</strong>
              {phoneNice}
            </span>
          </a>

          <a className="cinfo__card" href={biz.emailHref}>
            <span className="cinfo__icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            <span>
              <strong>Email</strong>
              {biz.email}
            </span>
          </a>

          <a className="cinfo__card" href={biz.mapUrl} target="_blank" rel="noreferrer">
            <span className="cinfo__icon" aria-hidden="true">
              <Pin size={20} />
            </span>
            <span>
              <strong>Location</strong>
              {addressOneLine}
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------- Legal */

function LegalShell({ title, path, description, children }) {
  const trail = [{ name: 'Home', path: '/' }, { name: title, path }];
  return (
    <>
      <Seo title={`${title} | ${biz.name}`} description={description} path={path} noindex />
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{title}</h1>
          <p className="lede">Last updated {new Date().getFullYear()}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="prose">{children}</div>
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      path="/privacy-policy"
      description="How BSD Garage Door collects, uses and protects the information you submit through this website."
    >
      <p>
        This policy explains what {biz.name} does with the information you give us through this website. We
        keep it short because our practices are simple: we collect what we need to quote and schedule your
        job, and nothing else.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit a form we collect your name, phone number, and optionally your email address, city
        and a description of the problem. We do not ask for payment details through this site. Our host
        also records standard technical data such as IP address and browser type for security and
        performance purposes.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To call or email you back about the estimate or appointment you requested</li>
        <li>To schedule a technician and route them to your address</li>
        <li>To keep a service record so future visits have your door history</li>
      </ul>
      <p>
        We do not sell, rent or trade your information. We do not add you to a marketing list without your
        say-so.
      </p>

      <h2>Sharing</h2>
      <p>
        Information is shared only with the technician assigned to your job and with the service providers
        that run this website and our email. Those providers process data on our behalf and are not
        permitted to use it for anything else. We will also disclose information where the law requires it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site uses only the cookies required for it to function, plus any analytics you have been told
        about at the point of collection. We do not run advertising trackers on this site.
      </p>

      <h2>Retention and your choices</h2>
      <p>
        We keep service records for as long as needed to honour warranties and meet our record-keeping
        obligations. You can ask us to correct or delete your information at any time by emailing{' '}
        <a href={biz.emailHref}>{biz.email}</a> or calling <a href={biz.phoneHref}>{biz.phone}</a>. If you
        ask us to stop contacting you, we will.
      </p>

      <h2>Children</h2>
      <p>This site is intended for adults arranging home or business services and is not directed at children.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes we will update this page and the date above. Continuing to use the site after
        a change means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        {biz.name}, {biz.city}, {biz.state}. Phone <a href={biz.phoneHref}>{biz.phone}</a>, email{' '}
        <a href={biz.emailHref}>{biz.email}</a>.
      </p>

      <p>
        <em>
          This policy is provided as a starting point and is not legal advice. Have it reviewed by a
          Massachusetts attorney before relying on it.
        </em>
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell
      title="Terms and Conditions"
      path="/terms-and-conditions"
      description="The terms that apply to use of the BSD Garage Door website and the services we quote through it."
    >
      <p>
        These terms apply to your use of this website and to estimates requested through it. By using the
        site you agree to them.
      </p>

      <h2>Estimates and quotes</h2>
      <p>
        Prices shown on this site are typical starting points, not fixed quotes. The final price depends on
        the door, the parts required and the condition of the system, and is confirmed in writing before any
        work begins. You are free to decline at that point with nothing owed beyond any agreed diagnostic
        fee.
      </p>

      <h2>Diagnostic fees</h2>
      <p>
        Estimates for new doors and openers are free. Repair visits may carry a diagnostic fee, disclosed
        when you book, which is waived in full if you approve the repair.
      </p>

      <h2>Warranty</h2>
      <p>
        Workmanship is warranted for one year from the date of service. Parts carry the manufacturer&rsquo;s
        warranty. The warranty does not cover damage from misuse, vehicle impact, storm damage, or work
        performed on the door by anyone else after our visit.
      </p>

      <h2>Scheduling and access</h2>
      <p>
        Arrival windows are estimates and may shift due to emergencies ahead of you in the queue. Someone
        aged 18 or over must be present, and the technician needs safe access to the door and to power.
      </p>

      <h2>Safety</h2>
      <p>
        Garage door springs and cables store enough energy to cause serious injury. Nothing on this site is
        an instruction to attempt a repair yourself, and we accept no liability for injury or damage arising
        from work you carry out on your own door.
      </p>

      <h2>Website content</h2>
      <p>
        Content on this site is provided for general information and may change without notice. The text,
        images, logo and design are the property of {biz.name} and may not be reproduced without permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by Massachusetts law, our liability arising from services or from
        use of this site is limited to the amount paid for the service in question. We are not liable for
        indirect or consequential losses.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Commonwealth of Massachusetts.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: {biz.name}, {biz.city}, {biz.state}, <a href={biz.phoneHref}>{biz.phone}</a>,{' '}
        <a href={biz.emailHref}>{biz.email}</a>.
      </p>

      <p>
        <em>
          These terms are a starting template and are not legal advice. Have them reviewed by a Massachusetts attorney before relying on them.
        </em>
      </p>
    </LegalShell>
  );
}

/* --------------------------------------------------------------------- 404 */

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | BSD Garage Door"
        description="That page does not exist. Find garage door repair services and service areas across Franklin, MA."
        path="/404"
        noindex
      />
      <section className="section">
        <div className="wrap nf">
          <div className="nf__code">404</div>
          <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)' }}>That page came off its track</h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            The link is broken, but your door does not have to be. Try one of these instead.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn btn--volt">
              Back to home
            </Link>
            <a href={biz.phoneHref} className="btn btn--ghost">
              <Phone size={16} /> Call {biz.phone}
            </a>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'left' }}>
          </div>
        </div>
      </section>
    </>
  );
}
