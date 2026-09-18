import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Custom select.
 *
 * A native <select> popup is drawn by the OS, which flips it above the field
 * whenever there is not enough room below - that is not controllable from CSS.
 * This renders the list ourselves so it always drops downward, and carries the
 * value in a hidden input so Netlify Forms still receives it.
 */
export default function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  light = false,
  bare = false,
  error,
  icon = null,
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [pos, setPos] = useState(null);
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();

  // The list is rendered into <body> rather than inside the field. Inside a
  // scrollable panel (the estimate modal) an absolutely-positioned list is
  // clipped, which forced the modal to scroll instead of the list simply
  // overlaying it. A portal lets it sit above everything, including past the
  // modal's own edges.
  const place = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const below = window.innerHeight - r.bottom - 12;
    const above = r.top - 12;
    const dropUp = below < 190 && above > below;
    setPos({
      left: r.left,
      width: r.width,
      top: dropUp ? undefined : r.bottom + 6,
      bottom: dropUp ? window.innerHeight - r.top + 6 : undefined,
      maxHeight: Math.max(150, Math.min(300, dropUp ? above : below)),
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return undefined;
    place();
    window.addEventListener('resize', place);
    // Any scroll anywhere invalidates the anchor, so track it in the capture
    // phase to catch scrolling inside the modal too.
    window.addEventListener('scroll', place, true);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [open, place]);

  const choose = (v) => {
    onChange({ target: { value: v } });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onDocDown = (e) => {
      if (rootRef.current.contains(e.target)) return;
      if (listRef.current && listRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onDocDown);
    return () => document.removeEventListener('pointerdown', onDocDown);
  }, [open]);

  useEffect(() => {
    if (open && active >= 0 && listRef.current) {
      const el = listRef.current.children[active];
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [active, open]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'Tab') {
      setOpen(false);
      return;
    }
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setOpen(true);
      setActive(Math.max(0, options.findIndex((o) => o.value === value)));
      return;
    }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (active >= 0) choose(options[active].value);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(options.length - 1);
    }
  };

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`field${light ? ' field--light' : ''}${error ? ' field--error' : ''}`}>
      <label className={bare ? 'sr-only' : undefined} htmlFor={id} id={`${id}-label`}>
        {label}
      </label>

      <div className={`sel${open ? ' is-open' : ''}`} ref={rootRef}>
        <input type="hidden" name={name} value={value} />

        <button
          ref={btnRef}
          type="button"
          id={id}
          className={`sel__btn${selected ? '' : ' is-placeholder'}${icon ? ' sel__btn--ico' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${id}-label ${id}`}
          onClick={() => {
            setOpen((v) => !v);
            setActive(Math.max(0, options.findIndex((o) => o.value === value)));
          }}
          onKeyDown={onKeyDown}
        >
          {icon ? <span className="field__ico">{icon}</span> : null}
          <span>{selected ? selected.label : placeholder}</span>
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {open &&
          pos &&
          typeof document !== 'undefined' &&
          createPortal(
            <ul
              className={`sel__list${light ? ' sel__list--light' : ''}`}
              id={listId}
              role="listbox"
              ref={listRef}
              aria-labelledby={`${id}-label`}
              style={{
                left: pos.left,
                width: pos.width,
                top: pos.top,
                bottom: pos.bottom,
                maxHeight: pos.maxHeight,
              }}
            >
              {options.map((o, i) => (
                <li
                  key={o.value || 'empty'}
                  role="option"
                  aria-selected={o.value === value}
                  className={`${i === active ? 'is-active' : ''}${o.value === value ? ' is-selected' : ''}`}
                  onPointerEnter={() => setActive(i)}
                  onClick={() => choose(o.value)}
                >
                  {o.label}
                </li>
              ))}
            </ul>,
            document.body
          )}
      </div>

      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
