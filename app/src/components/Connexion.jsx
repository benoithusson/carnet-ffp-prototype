import React, { useState } from 'react';
import './Connexion.css';

/**
 * Connexion Screen Component
 * BEM Convention: connexion-screen (Block)
 * Displays login form with email, password, and social login options
 */
const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="connexion-screen" data-node-id="2503:3873">
      {/* BEM: connexion-screen__header (Element) */}
      <header className="connexion-screen__header" data-node-id="2715:12140">
        <div className="connexion-screen__header-content">
          <h1 className="connexion-screen__title">Connexion</h1>
          <p className="connexion-screen__subtitle">
            Vous n'avez pas encore de compte ?{' '}
            <a href="/inscription" className="connexion-screen__link">
              Inscription
            </a>
          </p>
        </div>
      </header>

      {/* BEM: connexion-screen__content (Element) */}
      <div className="connexion-screen__content" data-node-id="2503:3874">
        {/* BEM: connexion-screen__form-container (Element) */}
        <div className="connexion-screen__form-container" data-node-id="2503:3879">
          {/* Email + Password Group */}
          <div className="connexion-screen__inputs-group">
            {/* Email Input */}
            <div className="connexion-screen__input-wrapper" data-node-id="2658:8013">
              <label htmlFor="email" className="connexion-screen__label">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                className="connexion-screen__input"
                placeholder="Exemple : benoit@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input + Forgot Password */}
            <div className="connexion-screen__password-group">
              <div className="connexion-screen__input-wrapper" data-node-id="2658:8051">
                <label htmlFor="password" className="connexion-screen__label">
                  Mot de passe
                </label>
                <div className="connexion-screen__input-container">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="connexion-screen__input connexion-screen__input--with-trailing"
                    placeholder="Exemple : MotDePasse123!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="connexion-screen__input-trailing"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Masquer' : 'Afficher'}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="connexion-screen__forgot-password" data-node-id="2503:3931">
                <a href="/forgot-password" className="connexion-screen__forgot-link">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="connexion-screen__remember-me" data-node-id="2522:6287">
            <label className="connexion-screen__checkbox-label">
              <input
                type="checkbox"
                className="connexion-screen__checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="connexion-screen__checkbox-custom"></span>
              <span className="connexion-screen__checkbox-text">Se souvenir de moi</span>
            </label>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button className="connexion-screen__button connexion-screen__button--primary" data-node-id="2658:8249">
          Supprimer
        </button>

        {/* Divider */}
        <div className="connexion-screen__divider" data-node-id="2637:12763">
          <div className="connexion-screen__divider-line"></div>
          <span className="connexion-screen__divider-text">Ou</span>
          <div className="connexion-screen__divider-line"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="connexion-screen__social-container" data-node-id="2503:3889">
          <button className="connexion-screen__button connexion-screen__button--social" data-node-id="2658:8394">
            <svg className="connexion-screen__social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="connexion-screen__button-text">Continuer avec Google</span>
          </button>

          <button className="connexion-screen__button connexion-screen__button--social" data-node-id="2658:8403">
            <svg className="connexion-screen__social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08l.01-.01z" fill="#000000"/>
              <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#000000"/>
            </svg>
            <span className="connexion-screen__button-text">Continuer avec Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
