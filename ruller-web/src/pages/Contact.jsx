import React, { useState } from 'react';
import Seo from '../components/Seo';

// Replace with your own Formspree form ID later
const FORMSPREE_ID = 'YOUR_FORM_ID';

const initialForm = { name: '', email: '', message: '' };

function Contact({ t }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t.errRequired;
    if (!form.email.trim()) {
      errs.email = t.errRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.errEmail;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = t.errMessage;
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');

    // DEMO MODE: If you haven't added your real Formspree ID yet, 
    // this fakes a successful email send so you can test the UI!
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setTimeout(() => {
        setStatus('success');
        setForm(initialForm);
      }, 1500);
      return;
    }

    // REAL MODE: Runs when you add a real Formspree ID
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <Seo title={`${t.navContact} | RULLER`} />
      
      <h2>{t.navContact}</h2>

      <div className="contact-layout">
        <div className="contact-page-info">
          <h3>RULLER</h3>
          <p>{t.contactDesc}</p>
          <div className="contact-details">
            <p>{t.phone}</p>
            <p>{t.email}</p>
            <p>{t.address}</p>
          </div>
          
          {/* Styled the Map to match your premium border-radius design */}
          <div className="map-embed" style={{ marginTop: '30px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <iframe
              title="RULLER office location"
              src="https://www.google.com/maps?q=Tbilisi,Georgia&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>                       
        </div>

        <div className="contact-form-container">
          {status === 'success' ? (
            <div className="success-message">
              {t.formSuccess}
              <button
                className="submit-btn"
                style={{ marginTop: '20px' }}
                onClick={() => setStatus('idle')}
              >
                {t.formSendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">{t.formName}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.formEmail}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.formMsg}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              {status === 'error' && (
                <span className="field-error">{t.formError}</span>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? t.formSending : t.formSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;