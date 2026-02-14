import React, { useState } from 'react';
import './BrevetsQualifications.css';

/**
 * Brevets et Qualifications Screen Component
 * Screen 05 - Les brevets et qualifications
 * Displays user's skydiving certifications (brevets)
 * Supports empty state when no certifications are added
 *
 * BEM Structure:
 * - Block: brevets-screen
 * - Elements: header, progress, content, card, button-container, etc.
 * - Modifiers: step states (done, current, next), empty state
 */
const BrevetsQualifications = () => {
  // State to toggle between empty and filled view (for demo purposes)
  const [showEmpty, setShowEmpty] = useState(true);

  // Dummy data for certifications
  const certifications = [
    {
      id: 1,
      name: 'Brevet A',
      location: 'EFP Saumur',
      date: '12/04/2015'
    },
    {
      id: 2,
      name: 'Brevet B',
      location: 'EFP Saumur',
      date: '22/06/2015'
    },
    {
      id: 3,
      name: 'Brevet B2',
      location: 'Skydive Pau',
      date: '25/08/2016'
    },
    {
      id: 4,
      name: 'Brevet BPA',
      location: 'Skydive Pau',
      date: '04/07/2018'
    }
  ];

  return (
    <div className="brevets-screen">
      {/* Header with progress bar */}
      <header className="brevets-screen__header">
        <div className="brevets-screen__header-top">
          <button className="brevets-screen__back-button" aria-label="Retour">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0001 25.3333L6.66675 16L16.0001 6.66666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.3334 16H6.66675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="brevets-screen__step-text">Etape 2 sur 6</p>
          <button className="brevets-screen__skip-button">Passer</button>
        </div>

        {/* Progress bar with 6 steps */}
        <div className="brevets-screen__progress">
          <div className="brevets-screen__progress-step brevets-screen__progress-step--done"></div>
          <div className="brevets-screen__progress-step brevets-screen__progress-step--current">
            <div className="brevets-screen__progress-step-inner"></div>
          </div>
          <div className="brevets-screen__progress-step brevets-screen__progress-step--next"></div>
          <div className="brevets-screen__progress-step brevets-screen__progress-step--next"></div>
          <div className="brevets-screen__progress-step brevets-screen__progress-step--next"></div>
          <div className="brevets-screen__progress-step brevets-screen__progress-step--next"></div>
        </div>

        <div className="brevets-screen__header-content">
          <h1 className="brevets-screen__title">
            {showEmpty ? 'Vos brevets manquants' : 'Vos brevets et qualifications'}
          </h1>
          <p className="brevets-screen__subtitle">
            Vous pourrez modifier ces informations à tout moment dans votre profil.
          </p>
        </div>
      </header>

      {/* Content with certification cards or empty state */}
      <div className="brevets-screen__content">
        {showEmpty ? (
          /* Empty state */
          <div className="brevets-screen__empty-state">
            <p className="brevets-screen__empty-text">
              Vous n'avez pas encore ajouté vos brevets manquants.
            </p>
          </div>
        ) : (
          /* Filled state with cards */
          <div className="brevets-screen__card-container">
            {certifications.map((cert, index) => (
              <React.Fragment key={cert.id}>
                {index > 0 && <div className="brevets-screen__divider"></div>}
                <div className="brevets-screen__card">
                  <h3 className="brevets-screen__card-title">{cert.name}</h3>

                  <div className="brevets-screen__card-info">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8.66667C8.73638 8.66667 9.33333 8.06971 9.33333 7.33333C9.33333 6.59695 8.73638 6 8 6C7.26362 6 6.66667 6.59695 6.66667 7.33333C6.66667 8.06971 7.26362 8.66667 8 8.66667Z" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13.3333C10 11.3333 12.6667 9.44947 12.6667 7.33333C12.6667 4.75599 10.5773 2.66667 8 2.66667C5.42267 2.66667 3.33333 4.75599 3.33333 7.33333C3.33333 9.44947 6 11.3333 8 13.3333Z" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="brevets-screen__card-text">{cert.location}</span>
                  </div>

                  <div className="brevets-screen__card-info">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 1.33333V4" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.33333 1.33333V4" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.66667H14" stroke="#4D5156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="brevets-screen__card-text">{cert.date}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Bottom button container - dual buttons for empty state, single for filled */}
      <div className="brevets-screen__button-container">
        {showEmpty ? (
          /* Empty state: two buttons side by side */
          <div className="brevets-screen__button-group">
            <button
              className="brevets-screen__button-secondary"
              onClick={() => setShowEmpty(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ajouter brevet
            </button>
            <button className="brevets-screen__button-primary">
              Continuer
            </button>
          </div>
        ) : (
          /* Filled state: single button */
          <button className="brevets-screen__button-primary">
            Continuer
          </button>
        )}
      </div>
    </div>
  );
};

export default BrevetsQualifications;
