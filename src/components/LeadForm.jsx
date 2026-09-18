import { useState } from 'react';
import { services, biz } from '../data/site.js';
import { Check, Phone, Shield, User, Mail, Pin, Gear } from './Icons.jsx';
import SelectField from './SelectField.jsx';

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const empty = { name: '', phone: '', email: '', address: '', service: '', date: '', message: '' };

/**
 * Posts to Netlify Forms. The matching static form lives in
 * /public/__forms.html so Netlify can detect it at build time - without that
 * file a React SPA submits into a void.
 */
export default function LeadForm({
  formName = 'free-estimate',
  light = false,
  compact = false,
  bare = false,
  contact = false,
  onDone,
}) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | done | error

  // Formats as (843) 555-0142 while typing and silently drops anything that
  // is not a digit, so letters simply cannot be entered.
  const formatPhone = (raw) => {
    let d = raw.replace(/\D/g, '');
    if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
    d = d.slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const set = (k) => (e) => {
    const raw = e.target.value;
    setValues((v) => ({ ...v, [k]: k === 'phone' ? formatPhone(raw) : raw }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (values.name.trim().length < 2) e.name = 'Enter your full name.';
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      e.phone = 'Enter a 10-digit US phone number.';
    } else if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) {
      // US numbering plan: neither the area code nor the exchange may start
      // with 0 or 1, which rules out most typos and junk entries.
      e.phone = 'That does not look like a valid US number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!contact && values.address.trim().length < 4) e.address = 'Enter the address where the door is.';
    if (!values.service) e.service = 'Choose the service you need.';
    if (!compact && values.message.trim().length < 5) e.message = 'Tell us briefly what the door is doing.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector('.field--error input, .field--error select');
      if (first) first.focus();
      return;
    }
    setState('sending');
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, 'bot-field': '', ...values }),
      });
      // fetch only rejects on a network failure, so a 404 or 501 still lands
      // here. Without this check the form reported success locally, where
      // there is no Netlify handler and nothing was actually sent.
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      setState('done');
      setValues(empty);
      if (onDone) onDone();
    } catch (err) {
      setState('error');
    }
  };

  const fieldClass = (k) => `field${light ? ' field--light' : ''}${errors[k] ? ' field--error' : ''}`;
  // In `bare` / contact layouts labels stay in the DOM for screen readers but
  // are visually hidden; the placeholder carries the visible text.
  const hideLab = bare || contact;
  const lab = hideLab ? 'sr-only' : undefined;
  const ph = contact
    ? {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Number',
        address: 'Service address',
        message: 'Message here',
      }
    : bare
      ? {
          name: 'Full name *',
          email: 'Your email *',
          phone: 'Phone number *',
          address: 'Address *',
          message: 'Describe the problem *',
        }
      : {
          name: 'John Doe',
          email: 'you@example.com',
          phone: '(843) 555-0142',
          address: '12 Example St, Franklin',
          message: 'Loud bang this morning and now it will not lift. Two-car door, about eight years old.',
        };

  if (state === 'done') {
    return (
      <div className={`form-status${light ? ' form-status--light' : ''}`} role="status">
        <h3>
          <Check size={18} /> Request received
        </h3>
        <p style={{ marginTop: '0.4rem' }}>
          A technician will call you back shortly. If the door is stuck open or a car is trapped, call{' '}
          <a href={biz.phoneHref} style={{ color: 'inherit', textDecoration: 'underline' }}>
            {biz.phone}
          </a>{' '}
          instead.
        </p>
      </div>
    );
  }

  const withIco = (icon, el) =>
    compact ? (
      <div className="field__control">
        <span className="field__ico" aria-hidden="true">
          {icon}
        </span>
        {el}
      </div>
    ) : (
      el
    );

  const serviceField = (
    <SelectField
      id={`${formName}-service`}
      name="service"
      label="Service needed"
      placeholder={contact ? 'Choose a service' : 'Select a service *'}
      error={errors.service}
      value={values.service}
      onChange={set('service')}
      light={light}
      bare={hideLab}
      icon={compact ? <Gear size={16} /> : null}
      options={[
        ...services.map((s) => ({ value: s.name, label: s.name })),
        { value: 'Not sure', label: 'Not sure - please advise' },
      ]}
    />
  );

  return (
    <form
      name={formName}
      onSubmit={submit}
      noValidate
      className={contact ? 'form--contact' : bare ? 'form--bare' : compact ? 'form--modal' : undefined}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hp">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {contact ? (
        <>
          <div className="field-row field-row--2">
            <div className={fieldClass('name')}>
              <label className={lab} htmlFor={`${formName}-name`}>Full name</label>
              <input
                id={`${formName}-name`}
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
                placeholder={ph.name}
              />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>
            <div className={fieldClass('email')}>
              <label className={lab} htmlFor={`${formName}-email`}>Email</label>
              <input
                id={`${formName}-email`}
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                aria-invalid={!!errors.email}
                placeholder={ph.email}
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
          </div>
          <div className="field-row field-row--2">
            <div className={fieldClass('phone')}>
              <label className={lab} htmlFor={`${formName}-phone`}>Phone</label>
              <input
                id={`${formName}-phone`}
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={14}
                value={values.phone}
                onChange={set('phone')}
                aria-invalid={!!errors.phone}
                placeholder={ph.phone}
              />
              {errors.phone && <span className="field__error">{errors.phone}</span>}
            </div>
            {serviceField}
          </div>
        </>
      ) : (
        <>
          <div className="field-row field-row--2">
            <div className={fieldClass('name')}>
              <label className={lab} htmlFor={`${formName}-name`}>Full name</label>
              {withIco(
                <User size={16} />,
                <input
                  id={`${formName}-name`}
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={set('name')}
                  aria-invalid={!!errors.name}
                  placeholder={ph.name}
                />
              )}
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>
            <div className={fieldClass('phone')}>
              <label className={lab} htmlFor={`${formName}-phone`}>Phone</label>
              {withIco(
                <Phone size={16} />,
                <input
                  id={`${formName}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={14}
                  value={values.phone}
                  onChange={set('phone')}
                  aria-invalid={!!errors.phone}
                  placeholder={ph.phone}
                />
              )}
              {errors.phone && <span className="field__error">{errors.phone}</span>}
            </div>
          </div>
          <div className="field-row field-row--2">
            <div className={fieldClass('email')}>
              <label className={lab} htmlFor={`${formName}-email`}>Email</label>
              {withIco(
                <Mail size={16} />,
                <input
                  id={`${formName}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={set('email')}
                  aria-invalid={!!errors.email}
                  placeholder={ph.email}
                />
              )}
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
            <div className={fieldClass('address')}>
              <label className={lab} htmlFor={`${formName}-address`}>Address</label>
              {withIco(
                <Pin size={16} />,
                <input
                  id={`${formName}-address`}
                  name="address"
                  autoComplete="street-address"
                  value={values.address}
                  onChange={set('address')}
                  aria-invalid={!!errors.address}
                  placeholder={ph.address}
                />
              )}
              {errors.address && <span className="field__error">{errors.address}</span>}
            </div>
          </div>
          <div className={bare ? 'field-row field-row--2' : undefined}>
            {serviceField}
            {bare && (
              <div className={fieldClass('date')}>
                <label className={lab} htmlFor={`${formName}-date`}>
                  Preferred date
                </label>
                <input
                  id={`${formName}-date`}
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={set('date')}
                  min={new Date().toISOString().slice(0, 10)}
                />
              </div>
            )}
          </div>
        </>
      )}

      {!compact && (
        <div className={fieldClass('message')}>
          <label className={lab} htmlFor={`${formName}-message`}>Describe the problem</label>
          <textarea
            id={`${formName}-message`}
            name="message"
            aria-invalid={!!errors.message}
            value={values.message}
            onChange={set('message')}
            placeholder={ph.message}
          />
        </div>
      )}

      <button
        type="submit"
        className={contact ? 'btn cmap__go' : bare ? 'btn btn--fx' : 'btn btn--volt btn--block'}
        disabled={state === 'sending'}
      >
        {state === 'sending' ? 'Sending…' : contact ? 'Request a quote' : bare ? 'Get a quote' : 'Get my free estimate'}
        {bare && <span className="plus">+</span>}
      </button>

      {state === 'error' && (
        <p className="field__error" style={{ marginTop: '0.8rem' }} role="alert">
          That did not send. Please call {biz.phone} and we will take the details over the phone.
          {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
            <> (Form submissions only work on the deployed site, not on localhost.)</>
          )}
        </p>
      )}

      {!contact && (
        <p className="form__note">
          {compact ? (
            <Shield size={15} style={{ display: 'inline', verticalAlign: '-3px' }} />
          ) : (
            <Phone size={13} style={{ display: 'inline', verticalAlign: '-2px' }} />
          )}{' '}
          Need someone now? Call{' '}
          <a href={biz.phoneHref} style={{ color: 'inherit', textDecoration: 'underline' }}>
            {biz.phone}
          </a>{' '}
          during opening hours. No spam, no shared data.
        </p>
      )}
    </form>
  );
}
