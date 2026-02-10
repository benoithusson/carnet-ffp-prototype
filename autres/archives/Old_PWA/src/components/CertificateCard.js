import React from 'react';
import '../styles/CertificateCard.css';

/**
 * CertificateCard Component
 *
 * Displays a certificate card with name, date, location, and a 3-dot menu button
 *
 * BEM Structure:
 * - Block: certificate-card
 * - Elements: __content, __info, __title, __subtitle, __menu-button, __menu-icon
 * - Modifiers: none
 */

function CertificateCard({ certificateName, date, location, onMenuClick }) {
  const handleMenuClick = (e) => {
    e.stopPropagation();
    onMenuClick && onMenuClick();
  };

  return (
    <div className="certificate-card">
      <div className="certificate-card__content">
        <div className="certificate-card__info">
          <h3 className="certificate-card__title">{certificateName}</h3>
          <p className="certificate-card__subtitle">{date}</p>
          <p className="certificate-card__subtitle">{location}</p>
        </div>
        <button
          className="certificate-card__menu-button"
          onClick={handleMenuClick}
          aria-label="Menu"
        >
          <svg
            className="certificate-card__menu-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="6" r="2" fill="#1a1c1d" />
            <circle cx="12" cy="12" r="2" fill="#1a1c1d" />
            <circle cx="12" cy="18" r="2" fill="#1a1c1d" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CertificateCard;
