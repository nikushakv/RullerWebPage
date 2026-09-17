import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import { translations } from './translations';
import './App.css';

// Lazy load the routes (except Home, which is kept eager for immediate load)
const Properties = lazy(() => import('./pages/Properties'));
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [language, setLanguage] = useState('ka');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'ka' ? 'en' : 'ka'));
  const t = translations[language];

  return (
    <Router>
      <ScrollToTop />
      <div className="ruller-container">
        <Navbar t={t} toggleLanguage={toggleLanguage} />

        {/* Skip to content link for keyboard users */}
        <a href="#main-content" className="skip-link">Skip to content</a>

        {/* Main content wrapped for accessibility */}
        <main id="main-content">
          <Suspense fallback={<div className="page-container">…</div>}>
            <Routes>
              <Route path="/" element={<Home t={t} language={language} />} />
              <Route path="/properties" element={<Properties t={t} language={language} />} />
              <Route path="/properties/:id" element={<PropertyDetail t={t} language={language} />} />
              <Route path="/contact" element={<Contact t={t} />} />
              <Route path="*" element={<NotFound t={t} />} />
            </Routes>
          </Suspense>
        </main>

        <Footer t={t} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;