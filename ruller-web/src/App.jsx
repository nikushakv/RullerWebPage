import React, { useState } from 'react';
import './App.css';

const translations = {
  ka: {
    langBtn: "🇬🇧 ENG",
    title: "RULLER",
    subtitle: "უძრავი ქონების პროფესიონალები",
    aboutTitle: "ჩვენ შესახებ",
    aboutP1: "კეთილი იყოს თქვენი მობრძანება Ruller-ში. ჩვენ ვართ 6 პროფესიონალისგან შემდგარი გუნდი, რომელსაც აერთიანებს უძრავი ქონების სფეროში მუშაობის მრავალწლიანი გამოცდილება.",
    aboutP2: "ჩვენი მთავარი ფასეულობებია სანდოობა, სისწრაფე და მომხმარებელზე მორგებული სერვისი. გამოცდილება, რომელიც წლების განმავლობაში დავაგროვეთ, გვაძლევს საშუალებას შემოგთავაზოთ საუკეთესო პირობები ბაზარზე.",
    servicesTitle: "რას გთავაზობთ?",
    buySellTitle: "🏠 ყიდვა / გაყიდვა",
    buySellDesc: "დაგეხმარებით სასურველი ქონების საუკეთესო ფასად შეძენასა და რეალიზაციაში.",
    rentTitle: "🔑 გაქირავება",
    rentDesc: "სწრაფად და მარტივად ვიპოვით სანდო დამქირავებელს თქვენი ბინისთვის ან კომერციული ფართისთვის.",
    consultTitle: "📈 კონსულტაცია",
    consultDesc: "გაგიწევთ პროფესიონალურ დახმარებას უძრავი ქონების ბაზრის ანალიზსა და საინვესტიციო გადაწყვეტილებებში.",
    contactTitle: "დაგვიკავშირდით",
    contactDesc: "ენდეთ ჩვენს 6 კაციან გამოცდილ გუნდს და გაიმარტივეთ უძრავ ქონებასთან დაკავშირებული პროცესები.",
    phone: "📞 ტელეფონი: +995 5XX XXX XXX",
    email: "✉️ ელ-ფოსტა: info@ruller.ge",
    address: "📍 მისამართი: თბილისი, საქართველო",
    rights: "ყველა უფლება დაცულია."
  },
  en: {
    langBtn: "🇬🇪 GEO",
    title: "RULLER",
    subtitle: "Real Estate Professionals",
    aboutTitle: "About Us",
    aboutP1: "Welcome to Ruller. We are a team of 6 professionals united by years of experience in the real estate industry.",
    aboutP2: "Our core values are reliability, speed, and customer-oriented service. The experience we have gained over the years allows us to offer you the best conditions on the market.",
    servicesTitle: "Our Services",
    buySellTitle: "🏠 Buy / Sell",
    buySellDesc: "We will help you purchase or sell your desired property at the best price.",
    rentTitle: "🔑 Rent",
    rentDesc: "We quickly and easily find reliable tenants for your apartment or commercial space.",
    consultTitle: "📈 Consulting",
    consultDesc: "We provide professional assistance in real estate market analysis and investment decisions.",
    contactTitle: "Contact Us",
    contactDesc: "Trust our experienced 6-man team and simplify your real estate processes.",
    phone: "📞 Phone: +995 5XX XXX XXX",
    email: "✉️ Email: info@ruller.ge",
    address: "📍 Address: Tbilisi, Georgia",
    rights: "All rights reserved."
  }
};

function App() {
  const [language, setLanguage] = useState('ka');

  const toggleLanguage = () => {
    setLanguage(language === 'ka' ? 'en' : 'ka');
  };

  const t = translations[language];

  return (
    <div className="ruller-container">
      {/* LANGUAGE BUTTON */}
      <button className="language-btn animate-fade-in" onClick={toggleLanguage}>
        {t.langBtn}
      </button>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content animate-slide-up">
          <h1 className="brand-title">{t.title}</h1>
          <p className="brand-subtitle">{t.subtitle}</p>
        </div>
      </header>

      {/* ABOUT US SECTION */}
      <section className="about-section animate-slide-up-delay-1">
        <h2>{t.aboutTitle}</h2>
        <div className="about-text">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
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

      {/* FOOTER */}
      <footer className="footer-section animate-fade-in-delay">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactDesc}</p>
        <div className="contact-info">
          <p>{t.phone}</p>
          <p>{t.email}</p>
          <p>{t.address}</p>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} RULLER. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;