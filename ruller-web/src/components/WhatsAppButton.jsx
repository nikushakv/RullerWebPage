import React from 'react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/995555123456"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt=""
      />
    </a>
  );
}

export default WhatsAppButton;