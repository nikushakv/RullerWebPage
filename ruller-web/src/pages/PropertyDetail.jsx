import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertyData } from '../data/properties';
import Lightbox from '../components/Lightbox';

function PropertyDetail({ t, language }) {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const property = propertyData.find((p) => String(p.id) === id);

  if (!property) {
    return (
      <div className="page-container animate-fade-in">
        <h2>{t.notFoundTitle}</h2>
        <p>{t.notFoundDesc}</p>
        <Link to="/properties" className="details-btn" style={{ display: 'inline-block', marginTop: '20px', maxWidth: '250px' }}>
          {t.backToProperties}
        </Link>
      </div>
    );
  }

  const title = language === 'ka' ? property.titleKa : property.titleEn;
  const desc = language === 'ka' ? property.descKa : property.descEn;

  return (
    <div className="page-container animate-fade-in" style={{ textAlign: 'left' }}>
      <Link to="/properties" className="back-link">← {t.backToProperties}</Link>

      <div className="property-detail-layout">
        <div className="property-detail-gallery">
          <img
            src={property.images[activeImage]}
            alt={title}
            className="property-detail-main-image"
            style={{ cursor: 'zoom-in' }}
            onClick={() => setLightboxOpen(true)}
          />
          {property.images.length > 1 && (
            <div className="property-thumbnails">
              {property.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className={`property-thumb ${idx === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="property-detail-info">
          <h2 style={{ textAlign: 'left' }}>{title}</h2>
          <div className="property-detail-price">{property.price}</div>
          <div className="property-specs" style={{ margin: '20px 0' }}>
            <span>{property.sqm} {t.sqm}</span>
            <span>{property.beds} {t.beds}</span>
            <span>{property.location}</span>
          </div>
          <p className="property-detail-desc">{desc}</p>
          <a href="https://wa.me/995555123456" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '20px' }}>
            {t.contactAboutThis}
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox src={property.images[activeImage]} alt={title} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

export default PropertyDetail;