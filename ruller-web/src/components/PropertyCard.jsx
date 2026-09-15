import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property, language, t }) {
  const title = language === 'ka' ? property.titleKa : property.titleEn;

  return (
    <div className="property-card">
      <div className="property-image-wrapper">
        <img src={property.images[0]} alt={title} className="property-image" loading="lazy" />
      </div>

      <div className="property-info">
        <div className="property-price">{property.price}</div>
        <h3>{title}</h3>
        <div className="property-specs">
          <span>{property.sqm} {t.sqm}</span>
          <span>{property.beds} {t.beds}</span>
        </div>
        <Link to={`/properties/${property.id}`} className="details-btn">
          {t.detailsBtn}
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;