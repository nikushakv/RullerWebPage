import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { translations } from './translations';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ka');
  const toggleLanguage = () => setLanguage((prev) => (prev === 'ka' ? 'en' : 'ka'));
  const t = translations[language];

  return (
    <Router>
      <ScrollToTop />
      <div className="ruller-container">
        <Navbar t={t} toggleLanguage={toggleLanguage} />

        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/properties" element={<Properties t={t} language={language} />} />
          <Route path="/properties/:id" element={<PropertyDetail t={t} language={language} />} />
          <Route path="/contact" element={<Contact t={t} />} />
          <Route path="*" element={<NotFound t={t} />} />
        </Routes>

        <Footer t={t} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;