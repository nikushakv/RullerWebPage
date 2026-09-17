import React, { useEffect } from 'react';

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img src={src} alt={alt} className="lightbox-image" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Lightbox;