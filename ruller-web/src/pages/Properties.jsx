import React from 'react';
import Seo from '../components/Seo';
import PropertyCard from '../components/PropertyCard';
import { propertyData } from '../data/properties';

function Properties({ t, language }) {
  return (
    <div className="page-container animate-fade-in">
      <Seo title={`${t.propTitle} | RULLER`} description={t.propDesc} />
      
      <h2>{t.propTitle}</h2>
      <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        {t.propDesc}
      </p>

      <div className="properties-grid">
        {propertyData.map((prop) => (
          <PropertyCard key={prop.id} property={prop} language={language} t={t} />
        ))}
      </div>
    </div>
  );
}

export default Properties;