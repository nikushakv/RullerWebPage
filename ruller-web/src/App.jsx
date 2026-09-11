import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import { translations } from './translations';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ka');

  const toggleLanguage = () => {
    setLanguage(language === 'ka' ? 'en' : 'ka');
  };

  const t = translations[language];

  return (
    <Router>
      <div className="ruller-container">
        <Navbar t={t} toggleLanguage={toggleLanguage} />

        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/properties" element={<Properties t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
        </Routes>

        {/* FOOTER */}
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

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/995555123456"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
    </Router>
  );
}

export default App;