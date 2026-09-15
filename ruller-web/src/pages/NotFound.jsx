import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFound({ t }) {
  return (
    <div className="page-container animate-fade-in">
      <Seo title="404 | RULLER" />
      <h2>404</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>{t.pageNotFoundDesc}</p>
      <Link to="/" className="details-btn" style={{ display: 'inline-block', maxWidth: '200px', margin: '0 auto' }}>
        {t.backHome}
      </Link>
    </div>
  );
}

export default NotFound;