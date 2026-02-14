import React, { useState } from 'react';
import './Inscription.css';

/**
 * Inscription Screen Component
 * BEM Convention: inscription-screen (Block)
 * Displays signup form with email input and social signup options
 */
const Inscription = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="inscription-screen" data-node-id="2503:4198">
      {/* BEM: inscription-screen__header (Element) */}
      <header className="inscription-screen__header" data-node-id="2715:12180">
        <div className="inscription-screen__header-content">
          <h1 className="inscription-screen__title">Inscription</h1>
          <p className="inscription-screen__subtitle">
            Vous avez déjà un compte ?{' '}
            <a href="/connexion" className="inscription-screen__link">
              Connexion
            </a>
          </p>
        </div>
      </header>

      {/* BEM: inscription-screen__content (Element) */}
      <div className="inscription-screen__content" data-node-id="2503:4199">
        {/* Email Input with Helper Text */}
        <div className="inscription-screen__input-container" data-node-id="2503:4255">
          <div className="inscription-screen__input-wrapper" data-node-id="2658:8440">
            <label htmlFor="email" className="inscription-screen__label">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              className="inscription-screen__input"
              placeholder="Exemple : benoit@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="inscription-screen__helper-text">
              Nous vous enverrons un email de confirmation sur cette adresse.
            </p>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button className="inscription-screen__button inscription-screen__button--primary" data-node-id="2658:8435">
          Supprimer
        </button>

        {/* Divider */}
        <div className="inscription-screen__divider" data-node-id="2637:12763">
          <div className="inscription-screen__divider-line"></div>
          <span className="inscription-screen__divider-text">Ou</span>
          <div className="inscription-screen__divider-line"></div>
        </div>

        {/* Social Signup Buttons */}
        <div className="inscription-screen__social-container" data-node-id="2658:8414">
          <button className="inscription-screen__button inscription-screen__button--social" data-node-id="2658:8415">
            <svg className="inscription-screen__social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="inscription-screen__button-text">Continuer avec Google</span>
          </button>

          <button className="inscription-screen__button inscription-screen__button--social" data-node-id="2658:8416">
            <svg className="inscription-screen__social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08l.01-.01z" fill="#000000"/>
              <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#000000"/>
            </svg>
            <span className="inscription-screen__button-text">Continuer avec Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
