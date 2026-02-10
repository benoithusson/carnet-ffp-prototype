import React, { useState } from 'react';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import TerminerInscription from './components/TerminerInscription';
import HasLicenseQuestionScreen from './components/HasLicenseQuestionScreen';
import LicenseNumberScreen from './components/LicenseNumberScreen';
import TransferExperienceSummaryScreen from './components/TransferExperienceSummaryScreen';
import BrevetsQualifications from './components/BrevetsQualifications';
import './App.css';

/**
 * Main App Component
 * Simple routing system with screen navigation links
 */
function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'connexion':
        return <Connexion />;
      case 'inscription':
        return <Inscription />;
      case 'terminer-inscription':
        return <TerminerInscription />;
      case 'has-license':
        return <HasLicenseQuestionScreen />;
      case 'license-number':
        return <LicenseNumberScreen />;
      case 'transfer-summary':
        return <TransferExperienceSummaryScreen />;
      case 'brevets-qualifications':
        return <BrevetsQualifications />;
      default:
        return (
          <div className="app__home">
            <div className="app__home-container">
              <h1 className="app__home-title">Carnet FFP - Prototype PWA</h1>
              <p className="app__home-subtitle">
                Navigation des écrans disponibles
              </p>
              <nav className="app__home-nav">
                {/* Partie 1: Connexion / Inscription */}
                <div className="app__home-section">
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('connexion')}
                  >
                    01 - Connexion
                  </button>
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('inscription')}
                  >
                    02 - Inscription
                  </button>
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('terminer-inscription')}
                  >
                    03 - Terminer inscription
                  </button>
                </div>

                <div className="app__home-divider"></div>

                {/* Partie 2: Onboarding / Transfert d'expérience */}
                <div className="app__home-section">
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('has-license')}
                  >
                    04 - Avez-vous une licence FFP ?
                  </button>
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('license-number')}
                  >
                    05 - Numéro de licence FFP
                  </button>
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('transfer-summary')}
                  >
                    06 - Résumé transfert d'expérience
                  </button>
                  <button
                    className="app__home-link"
                    onClick={() => setCurrentScreen('brevets-qualifications')}
                  >
                    07 - Les brevets et qualifications
                  </button>
                </div>
              </nav>
              <button
                className="app__home-back"
                onClick={() => setCurrentScreen('home')}
                style={{ opacity: currentScreen === 'home' ? 0 : 1 }}
              >
                ← Retour à l'accueil
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {currentScreen !== 'home' && (
        <button
          className="app__back-button"
          onClick={() => setCurrentScreen('home')}
        >
          ← Retour
        </button>
      )}
      {renderScreen()}
    </div>
  );
}

export default App;
