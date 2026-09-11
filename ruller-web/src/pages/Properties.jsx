import React from 'react';

// Fake database of properties (later you can replace these with real ones!)
const propertyData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    titleKa: "პრემიუმ კლასის ბინა ვაკეში",
    titleEn: "Premium Apartment in Vake",
    price: "$250,000",
    sqm: 120,
    beds: 3,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    titleKa: "თანამედროვე ბინა საბურთალოზე",
    titleEn: "Modern Flat in Saburtalo",
    price: "$145,000",
    sqm: 85,
    beds: 2,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    titleKa: "კერძო სახლი მთაწმინდაზე",
    titleEn: "Private House in Mtatsminda",
    price: "$450,000",
    sqm: 300,
    beds: 5,
  }
];

function Properties({ t }) {
  // We check if the translation contains English words to figure out which title to show
  const isKa = t.price === "ფასი"; 

  return (
    <div className="page-container animate-fade-in">
      <h2>{t.propTitle}</h2>
      <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        {t.propDesc}
      </p>

      <div className="properties-grid">
        {propertyData.map((prop) => (
          <div className="property-card" key={prop.id}>
            
            {/* Image Box */}
            <div className="property-image-wrapper">
              <img src={prop.image} alt="Property" className="property-image" />
              <div className="property-price-tag">{prop.price}</div>
            </div>

            {/* Info Box */}
            <div className="property-info">
              <h3>{isKa ? prop.titleKa : prop.titleEn}</h3>
              
              <div className="property-specs">
                <span>📏 {prop.sqm} {t.sqm}</span>
                <span>🛏️ {prop.beds} {t.beds}</span>
              </div>

              <button className="details-btn">{t.detailsBtn}</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;