import React from 'react';

function Footer({ t }) {
  return (
    <footer className="footer-section">
      <h2>{t.contactTitle}</h2>
      <p>{t.contactDesc}</p>
      <div className="contact-info">
        <p>{t.phone}</p>
        <p>{t.email}</p>
        <p>{t.address}</p>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} RULLER. {t.rights}</p>
      </div>
    </footer>
  );
}

export default Footer;