import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ t, toggleLanguage }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">RULLER</Link>
      <div className="nav-links">
        <Link to="/">{t.navHome}</Link>
        <Link to="/properties">{t.navProperties}</Link>
        <button className="nav-lang-btn" onClick={toggleLanguage}>
          {t.langBtn}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;