import React, { useState } from 'react';
import './LicenseNumberScreen.css';

/**
 * License Number Screen Component
 * Screen 04 - Numéro de licence FFP
 * Allows users to connect to their FFP member space
 */
const LicenseNumberScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="license-screen" data-node-id="835:3256">
      {/* Header */}
      <header className="license-screen__header" data-node-id="2658:10144">
        <div className="license-screen__header-content">
          <h1 className="license-screen__title">
            Connectez-vous à votre espace licencié
          </h1>
          <p className="license-screen__subtitle">
            Pour récupérer automatiquement tous les brevets et qualifications enregistrés sur l'intranet de la FFP.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="license-screen__content">
        {/* Form Container */}
        <div className="license-screen__form-container" data-node-id="2276:9481">
          {/* Password Input */}
          <div className="license-screen__input-wrapper" data-node-id="2658:10318">
            <label htmlFor="password" className="license-screen__label">
              Mot de passe
            </label>
            <div className="license-screen__input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="license-screen__input"
                placeholder="Placeholder par défault"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="license-screen__helper-text">Helper Text</p>
          </div>

          {/* Forgot Password Link */}
          <div className="license-screen__forgot-container" data-node-id="2658:10344">
            <a href="/forgot-password" className="license-screen__forgot-link">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
      </div>

      {/* Button Container */}
      <div className="license-screen__button-container" data-node-id="2658:10353">
        <button className="license-screen__button-primary">
          Continuer
        </button>
      </div>
    </div>
  );
};

export default LicenseNumberScreen;
