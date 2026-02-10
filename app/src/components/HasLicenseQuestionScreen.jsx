import React, { useState } from 'react';
import './HasLicenseQuestionScreen.css';

/**
 * Has License Question Screen Component
 * Screen 04 - Question about FFP license
 * Asks user if they have a FFP license number
 */
const HasLicenseQuestionScreen = () => {
  const [selectedOption, setSelectedOption] = useState('yes');

  const options = [
    {
      id: 'yes',
      title: 'Oui',
      description: 'J\'ai un numéro de licence FFP'
    },
    {
      id: 'no',
      title: 'Non',
      description: 'Je n\'ai pas de numéro de licence FFP'
    }
  ];

  return (
    <div className="has-license" data-node-id="2254:2981">
      {/* Header */}
      <header className="has-license__header" data-node-id="2721:64124">
        <div className="has-license__back-button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="has-license__header-content">
          <h1 className="has-license__title">
            Avez-vous un numéro de licence FFP ?
          </h1>
        </div>
      </header>

      {/* Content - Selection Card */}
      <div className="has-license__content">
        <div className="has-license__selection-card" data-node-id="2828:10530">
          {options.map((option, index) => (
            <React.Fragment key={option.id}>
              <button
                className={`has-license__option ${selectedOption === option.id ? 'has-license__option--selected' : ''}`}
                onClick={() => setSelectedOption(option.id)}
                data-node-id={index === 0 ? '2828:10531' : '2828:10533'}
              >
                <div className="has-license__option-content">
                  <div className={`has-license__option-title ${selectedOption === option.id ? 'has-license__option-title--selected' : ''}`}>
                    {option.title}
                  </div>
                  <p className="has-license__option-description">
                    {option.description}
                  </p>
                </div>
                <div className="has-license__radio-container">
                  <div className={`has-license__radio ${selectedOption === option.id ? 'has-license__radio--selected' : ''}`}>
                    {selectedOption === option.id && (
                      <div className="has-license__radio-inner"></div>
                    )}
                  </div>
                </div>
              </button>
              {index < options.length - 1 && (
                <div className="has-license__divider">
                  <div className="has-license__divider-line"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HasLicenseQuestionScreen;
