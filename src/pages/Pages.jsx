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
        title="About BSD Garage Door | Franklin, MA Repair Experts"
        description="Meet BSD Garage Door, the local Franklin, MA team for garage door repair, spring replacement, opener service and new garage door installation. Call now!"
        path="/about"
        canonicalUrl="https://bsdgaragedoorllc.com/about/"
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
                title="Garage door installation in Franklin, MA"
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
                title="Garage door maintenance in Franklin, MA"
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
        title="Contact BSD Garage Door | Franklin, MA Garage Repairs"
        description="Contact BSD Garage Door in Franklin, MA for fast garage door repair, spring replacement and opener service. Request your free estimate and call today!"
        path="/contact"
        canonicalUrl="https://bsdgaragedoorllc.com/contact/"
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

function LegalShell({ title, path, metaTitle, description, canonicalUrl, updated, children }) {
  const trail = [{ name: 'Home', path: '/' }, { name: title, path }];
  return (
    <>
      <Seo
        title={metaTitle || `${title} | ${biz.name}`}
        description={description}
        path={path}
        canonicalUrl={canonicalUrl}
        noindex
      />
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={trail} />
          <h1>{title}</h1>
          <p className="lede">Last updated {updated || new Date().getFullYear()}</p>
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
      metaTitle="Privacy Policy | BSD Garage Door of Franklin, MA USA"
      description="How BSD Garage Door in Franklin, MA collects, uses and protects the information you share when you request a garage door repair estimate or service call."
      canonicalUrl="https://bsdgaragedoorllc.com/privacy-policy/"
      updated="September 22, 2026"
    >
      <h2>1. Who We Are</h2>
      <p>Our website address is: https://bsdgaragedoorllc.com/</p>
      <p>
        {biz.name}
        <br />
        275 Washington St Unit A8
        <br />
        Franklin, MA 02038, United States
      </p>

      <h2>2. What Personal Data We Collect and Why</h2>
      <h3>Comments</h3>
      <p>
        When visitors leave comments, we collect the data shown in the comments form, along with the
        visitor&rsquo;s IP address and browser user agent string to help detect spam.
      </p>
      <h3>Media</h3>
      <p>
        If you upload images to our website, please avoid uploading images that contain embedded location
        data (EXIF GPS), as visitors may be able to download and extract location data from those images.
      </p>
      <h3>Contact Forms</h3>
      <p>
        When you submit information through a contact form, we may collect your name, email address, phone
        number, and message or other information you provide. We use this information to respond to
        inquiries, provide customer service, and communicate with you regarding our services.
      </p>
      <p>We do not use contact form information for marketing purposes without your consent.</p>
      <h3>Cookies</h3>
      <p>
        Our website may use cookies and similar technologies to improve your browsing experience. Cookies
        may be used to remember preferences, support website functionality, analyze website traffic, and,
        where applicable, support advertising or other website services.
      </p>
      <p>
        If you leave a comment, cookies may save your name, email address, and website information for your
        convenience.
      </p>
      <h3>Embedded Content</h3>
      <p>
        Pages on our website may include embedded content, such as YouTube videos, maps, or other
        third-party content. Embedded content from other websites behaves in the same way as if you had
        visited those websites directly.
      </p>
      <p>
        These websites may collect information about you, use cookies, embed additional third-party
        tracking, and monitor your interaction with the embedded content.
      </p>
      <h3>Analytics</h3>
      <p>
        We may use third-party analytics services, such as Google Analytics, to understand how visitors use
        our website and improve our website and services. These services may collect information such as
        your IP address, device type, browser information, pages visited, and time spent on the website.
      </p>

      <h2>3. Who We Share Your Data With</h2>
      <p>
        We may share information with third-party service providers when necessary to operate our website,
        provide our services, respond to inquiries, or protect our website.
      </p>
      <p>These may include:</p>
      <ul>
        <li>Google and other analytics providers</li>
        <li>Spam detection services</li>
        <li>Website hosting and technical service providers</li>
        <li>Email or communication service providers</li>
        <li>Email marketing platforms, if you voluntarily subscribe</li>
      </ul>
      <p>We do not sell or rent your personal information.</p>

      <h2>4. How Long We Retain Your Data</h2>
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes described
        in this Privacy Policy, including responding to inquiries, providing services, maintaining business
        records, complying with legal obligations, and protecting our website.
      </p>
      <p>
        If you leave a comment, the comment and its metadata may be retained indefinitely unless deletion is
        requested or the information is no longer needed.
      </p>

      <h2>5. What Rights You Have Over Your Data</h2>
      <p>Depending on applicable law, you may have the right to request:</p>
      <ul>
        <li>A copy of the personal data we hold about you</li>
        <li>Correction of inaccurate personal information</li>
        <li>
          Deletion of your personal data, except where we are required or permitted to retain it for legal,
          security, or legitimate business purposes
        </li>
      </ul>
      <p>To make a privacy-related request, please contact us using the information below.</p>

      <h2>6. Where We Send Your Data</h2>
      <p>
        Visitor comments and other information submitted through our website may be checked through
        automated spam detection services.
      </p>
      <p>
        Information may also be processed by third-party service providers that help us operate our website,
        communications, analytics, and customer service.
      </p>

      <h2>7. Contact Information</h2>
      <p>For privacy-related questions or requests, please contact:</p>
      <p>
        {biz.name}
        <br />
        275 Washington St Unit A8
        <br />
        Franklin, MA 02038, United States
        <br />
        Email: <a href={biz.emailHref}>{biz.email}</a>
        <br />
        Phone: <a href={biz.phoneHref}>+1 843-279-3345</a>
        <br />
        Website: https://bsdgaragedoorllc.com/
      </p>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell
      title="Terms and Conditions"
      path="/terms-and-conditions"
      metaTitle="Terms & Conditions | BSD Garage Door of Franklin, MA"
      description="The terms and conditions for using the BSD Garage Door website and the garage door services we quote across Franklin, MA and the wider MetroWest towns."
      canonicalUrl="https://bsdgaragedoorllc.com/terms-and-conditions/"
      updated="September 22, 2026"
    >
      <h2>1. Who We Are</h2>
      <p>Our website address is: https://bsdgaragedoorllc.com/</p>

      <h2>2. What Personal Data We Collect and Why</h2>
      <h3>Comments</h3>
      <p>
        When visitors leave comments, we collect the data shown in the comments form, along with the
        visitor&rsquo;s IP address and browser user agent string to help detect spam.
      </p>
      <h3>Media</h3>
      <p>
        If you upload images, avoid uploading images with embedded location data (EXIF GPS), as visitors may
        be able to download and extract location data.
      </p>
      <h3>Contact Forms</h3>
      <p>
        We collect your name, email, and message only for customer service purposes. We do not use this
        information for marketing without your consent.
      </p>
      <h3>Cookies</h3>
      <p>
        If you leave a comment, cookies may save your name, email, and website for convenience. Cookies may
        also be used for login, analytics, and advertising.
      </p>
      <h3>Embedded Content</h3>
      <p>
        Pages may include embedded content (e.g., YouTube videos). These websites may collect data, use
        cookies, and track your interaction with the embedded content.
      </p>
      <h3>Analytics</h3>
      <p>
        We use third-party services like Google Analytics to understand visitor behavior. These tools may
        track your IP address, device type, and time on site.
      </p>

      <h2>3. Who We Share Your Data With</h2>
      <p>We may share data with:</p>
      <ul>
        <li>Google (for analytics)</li>
        <li>Spam detection services</li>
        <li>Email marketing platforms (if subscribed)</li>
      </ul>
      <p>We do not sell or rent your personal information.</p>

      <h2>4. How Long We Retain Your Data</h2>
      <p>If you leave a comment, the comment and metadata are retained indefinitely.</p>
      <p>For registered users, we store the personal information they provide in their user profile.</p>

      <h2>5. What Rights You Have Over Your Data</h2>
      <p>You can request:</p>
      <ul>
        <li>A copy of your data</li>
        <li>Deletion of your personal data (excluding any data required for legal or security purposes)</li>
      </ul>

      <h2>6. Where We Send Your Data</h2>
      <p>Visitor comments may be checked through an automated spam detection service.</p>

      <h2>7. Contact Information</h2>
      <p>For privacy-related questions, please contact:</p>
      <p>
        {biz.name}
        <br />
        275 Washington St Unit A8
        <br />
        Franklin, MA 02038, United States
        <br />
        Email: <a href={biz.emailHref}>{biz.email}</a>
        <br />
        Phone: <a href={biz.phoneHref}>+1 843-279-3345</a>
        <br />
        Website: https://bsdgaragedoorllc.com/
      </p>
    </LegalShell>
  );
}

/* --------------------------------------------------------------------- 404 */

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | BSD Garage Door in Franklin, MA USA"
        description="This page could not be found. Explore BSD Garage Door repair, spring replacement, opener service and installation across Franklin, MA and the MetroWest."
        path="/404"
        canonicalUrl="https://bsdgaragedoorllc.com/404"
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
