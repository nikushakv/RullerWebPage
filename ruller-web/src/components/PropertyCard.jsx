import React from 'react';
import { Link } from 'react-router-dom';
import { IconArea, IconBed } from './icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

function PropertyCard({ property, language, t }) {
  const title = language === 'ka' ? property.titleKa : property.titleEn;
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={`property-card reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="property-image-wrapper">
        <img src={property.images[0]} alt={title} className="property-image" loading="lazy" />
      </div>
      <div className="property-info">
        <div className="property-price">{property.price}</div>
        <h3>{title}</h3>
        <div className="property-specs">
          <span><IconArea /> {property.sqm} {t.sqm}</span>
          <span><IconBed /> {property.beds} {t.beds}</span>
        </div>
        <Link to={`/properties/${property.id}`} className="details-btn">
          {t.detailsBtn}
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;