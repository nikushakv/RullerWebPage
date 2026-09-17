import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

function Home({ t }) {
  return (
    <div>
      <header className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-heading">{t.heroHeading}</h1>
            <p className="hero-sub">{t.subtitle}</p>
            <Link to="/properties" className="btn-brass">{t.heroCta}</Link>
          </div>
          <div className="hero-frame">
            <div className="hero-photo-frame">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80"
                alt=""
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="about-section">
        <h2>{t.aboutTitle}</h2>
        <div className="about-text">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </div>
      </section>

      <section className="services-section">
        <h2>{t.servicesTitle}</h2>
        <div className="services-row">
          <div className="service-col">
            <h3>{t.buySellTitle}</h3>
            <p>{t.buySellDesc}</p>
          </div>
          <div className="service-col">
            <h3>{t.rentTitle}</h3>
            <p>{t.rentDesc}</p>
          </div>
          <div className="service-col">
            <h3>{t.consultTitle}</h3>
            <p>{t.consultDesc}</p>
          </div>
        </div>
      </section>
      <Testimonials t={t} language={language} />
    </div>
  );
}

export default Home;