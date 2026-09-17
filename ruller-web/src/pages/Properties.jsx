import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import { propertyData } from '../data/properties';

const priceToNumber = (price) => Number(price.replace(/[^0-9]/g, ''));

function Properties({ t, language }) {
  const [sortBy, setSortBy] = useState('default');

  const sorted = useMemo(() => {
    const list = [...propertyData];
    if (sortBy === 'price-asc') list.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
    if (sortBy === 'price-desc') list.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
    if (sortBy === 'beds-desc') list.sort((a, b) => b.beds - a.beds);
    return list;
  }, [sortBy]);

  return (
    <div className="page-container animate-fade-in">
      <h2>{t.propTitle}</h2>
      <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        {t.propDesc}
      </p>

      <div className="filter-bar">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">{t.sortDefault}</option>
          <option value="price-asc">{t.sortPriceAsc}</option>
          <option value="price-desc">{t.sortPriceDesc}</option>
          <option value="beds-desc">{t.sortBeds}</option>
        </select>
      </div>

      <div className="properties-grid">
        {sorted.map((prop) => (
          <PropertyCard key={prop.id} property={prop} language={language} t={t} />
        ))}
      </div>
    </div>
  );
}

export default Properties;