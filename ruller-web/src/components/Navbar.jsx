import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar({ t, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" onClick={closeMenu}>RULLER</Link>

      <button
        className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>{t.navHome}</NavLink>
        <NavLink to="/properties" onClick={closeMenu}>{t.navProperties}</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>{t.navContact}</NavLink>
        <button className="nav-lang-btn" onClick={() => { toggleLanguage(); closeMenu(); }}>
          {t.langBtn}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;