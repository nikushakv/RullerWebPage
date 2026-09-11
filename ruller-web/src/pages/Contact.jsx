import React, { useState } from 'react';

function Contact({ t }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setIsSubmitted(true); // Shows the success message
  };

  return (
    <div className="page-container animate-fade-in">
      <h2>{t.navContact}</h2>
      
      <div className="contact-layout">
        {/* Left Side: Info */}
        <div className="contact-page-info">
          <h3>RULLER</h3>
          <p>{t.contactDesc}</p>
          <div className="contact-details">
            <p>{t.phone}</p>
            <p>{t.email}</p>
            <p>{t.address}</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              {t.formSuccess}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>{t.formName}</label>
                <input type="text" required placeholder="..." />
              </div>
              <div className="form-group">
                <label>{t.formEmail}</label>
                <input type="email" required placeholder="@" />
              </div>
              <div className="form-group">
                <label>{t.formMsg}</label>
                <textarea rows="5" required placeholder="..."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {t.formSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;