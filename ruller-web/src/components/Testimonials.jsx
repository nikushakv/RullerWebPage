import React from 'react';
import { testimonials } from '../data/testimonials';

function Testimonials({ t, language }) {
  return (
    <section className="testimonials-section">
      <h2>{t.testimonialsTitle}</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <blockquote className="testimonial-card" key={item.id}>
            <p className="testimonial-quote">
              “{language === 'ka' ? item.quoteKa : item.quoteEn}”
            </p>
            <footer className="testimonial-author">
              {language === 'ka' ? item.nameKa : item.nameEn}
              <span className="testimonial-role">
                {language === 'ka' ? item.roleKa : item.roleEn}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;