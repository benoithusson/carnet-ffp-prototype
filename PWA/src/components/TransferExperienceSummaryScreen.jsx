import React from 'react';
import './TransferExperienceSummaryScreen.css';

/**
 * Transfer Experience Summary Screen Component
 * Screen 07 - Résumé du transfert d'expérience
 * Shows the 5-step process for experience transfer
 */
const TransferExperienceSummaryScreen = () => {
  const steps = [
    {
      number: 1,
      title: 'Brevets et qualifications',
      description: 'Récupérer vos brevets et autres qualifications de l\'extranet FFP.'
    },
    {
      number: 2,
      title: 'Brevets et qualifications manquants',
      description: 'Ajoutez vos brevets et qualifications manuellement si certains sont manquants.'
    },
    {
      number: 3,
      title: 'Sauts',
      description: 'Ajoutez les informations concernant vos sauts (nombre total, date du dernier saut...) '
    },
    {
      number: 4,
      title: 'Taille et type de voile',
      description: 'Ajoutez les informations concernant votre taille et type de voile.'
    },
    {
      number: 5,
      title: 'L\'école',
      description: 'Choisissez l\'école dans laquelle vous souhaitez envoyer votre demande de transfert d\'expérience pour validation.'
    }
  ];

  return (
    <div className="transfer-summary" data-node-id="2715:13192">
      {/* Header */}
      <header className="transfer-summary__header" data-node-id="2715:13416">
        <div className="transfer-summary__header-content">
          <h1 className="transfer-summary__title">
            Le transfert d'expérience
          </h1>
          <p className="transfer-summary__subtitle">
            Va permettre de transferer les informations de votre carnet de saut papier vers votre nouveau carnet de sauts dématérialisé.
          </p>
        </div>
      </header>

      {/* Steps List */}
      <div className="transfer-summary__content">
        <div className="transfer-summary__steps-container" data-node-id="2715:13322">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="transfer-summary__step-item">
                <div className="transfer-summary__step-number-container">
                  <div className="transfer-summary__step-number">
                    {step.number}
                  </div>
                </div>
                <div className="transfer-summary__step-content">
                  <div className="transfer-summary__step-title">
                    {step.title}
                  </div>
                  <p className="transfer-summary__step-description">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="transfer-summary__divider">
                  <div className="transfer-summary__divider-line"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Button Container */}
      <div className="transfer-summary__button-container" data-node-id="2776:26175">
        <button className="transfer-summary__button-primary">
          Continuer
        </button>
      </div>
    </div>
  );
};

export default TransferExperienceSummaryScreen;
