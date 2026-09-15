import React from 'react';
import Seo from '../components/Seo';

function Home({ t, language }) {
  return (
    <div>
      <Seo
        title={language === 'ka' ? "RULLER | უძრავი ქონების პროფესიონალები თბილისში" : "RULLER | Real Estate Professionals in Tbilisi"}
        description={t.subtitle}
      />
      <header className="hero-section">
        <div className="hero-content animate-slide-up">
          <h1 className="brand-title">{t.title}</h1>
          <p className="brand-subtitle">{t.subtitle}</p>
        </div>
      </header>

      <section className="about-section animate-slide-up-delay-1">
        <h2>{t.aboutTitle}</h2>
        <div className="about-text">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </div>
      </section>

      <section className="services-section animate-slide-up-delay-2">
        <h2>{t.servicesTitle}</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>{t.buySellTitle}</h3>
            <p>{t.buySellDesc}</p>
          </div>
          <div className="service-card">
            <h3>{t.rentTitle}</h3>
            <p>{t.rentDesc}</p>
          </div>
          <div className="service-card">
            <h3>{t.consultTitle}</h3>
            <p>{t.consultDesc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;