import React, { useState } from 'react';
import './TerminerInscription.css';

/**
 * TerminerInscription Screen Component
 * BEM Convention: terminer-inscription (Block)
 * Displays registration completion form with profile photo, personal details, and password setup
 */
const TerminerInscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [poids, setPoids] = useState('');
  const [email, setEmail] = useState('benoit.husson.tours@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Password validation states
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password criteria
    setHasMinLength(value.length >= 8);
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value));
    setHasLowercase(/[a-z]/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="terminer-inscription" data-node-id="835:2549">
      {/* BEM: terminer-inscription__header (Element) */}
      <header className="terminer-inscription__header" data-node-id="2715:12447">
        <div className="terminer-inscription__header-content">
          <h1 className="terminer-inscription__title">Terminer votre inscription</h1>
          <p className="terminer-inscription__subtitle">
            Vous pourrez modifier ces informations à tout moment dans votre profil.
          </p>
        </div>
      </header>

      {/* BEM: terminer-inscription__content (Element) */}
      <div className="terminer-inscription__content" data-node-id="835:2550">
        {/* Profile Photo Upload */}
        <div className="terminer-inscription__photo-container" data-node-id="891:2999">
          <div className="terminer-inscription__photo-wrapper">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="terminer-inscription__photo"
              />
            ) : (
              <div className="terminer-inscription__photo terminer-inscription__photo--placeholder"></div>
            )}
            <label htmlFor="photo-upload" className="terminer-inscription__photo-badge">
              <svg className="terminer-inscription__camera-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.67004 18.95L7.60004 15.64C8.39004 15.11 9.53004 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="terminer-inscription__photo-text">Ajouter</span>
            </label>
            <input
              type="file"
              id="photo-upload"
              className="terminer-inscription__photo-input"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="terminer-inscription__form" data-node-id="835:2559">
          {/* Nom Input */}
          <div className="terminer-inscription__input-wrapper" data-node-id="2658:8935">
            <label htmlFor="nom" className="terminer-inscription__label">
              Nom
            </label>
            <input
              id="nom"
              type="text"
              className="terminer-inscription__input"
              placeholder="Exemple : Dupont"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          {/* Prénom Input */}
          <div className="terminer-inscription__input-wrapper" data-node-id="2658:8951">
            <label htmlFor="prenom" className="terminer-inscription__label">
              Prénom
            </label>
            <input
              id="prenom"
              type="text"
              className="terminer-inscription__input"
              placeholder="Exemple : Jean"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>

          {/* Date de naissance Input */}
          <div className="terminer-inscription__input-wrapper" data-node-id="2658:8966">
            <label htmlFor="date-naissance" className="terminer-inscription__label">
              Date de naissance (jour / mois / année)
            </label>
            <input
              id="date-naissance"
              type="text"
              className="terminer-inscription__input"
              placeholder="Exemple : 15/03/1990"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />
          </div>

          {/* Poids Input */}
          <div className="terminer-inscription__input-wrapper" data-node-id="2658:8981">
            <label htmlFor="poids" className="terminer-inscription__label">
              Poids (en kg)
            </label>
            <div className="terminer-inscription__input-container">
              <input
                id="poids"
                type="number"
                className="terminer-inscription__input terminer-inscription__input--with-trailing"
                placeholder="Exemple : 75"
                value={poids}
                onChange={(e) => setPoids(e.target.value)}
              />
              <span className="terminer-inscription__input-trailing">kg</span>
            </div>
            <p className="terminer-inscription__input-message">
              Votre poids servira à calculer votre taille de voile autorisée.
            </p>
          </div>

          {/* Email Input */}
          <div className="terminer-inscription__input-wrapper" data-node-id="2828:10730">
            <label htmlFor="email" className="terminer-inscription__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="terminer-inscription__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input with Criteria */}
          <div className="terminer-inscription__password-section" data-node-id="2658:9092">
            <div className="terminer-inscription__input-wrapper" data-node-id="2658:9056">
              <label htmlFor="password" className="terminer-inscription__label">
                Mot de passe
              </label>
              <div className="terminer-inscription__input-container">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="terminer-inscription__input terminer-inscription__input--with-trailing"
                  placeholder="Exemple : MotDePasse123!"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="terminer-inscription__input-trailing-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Masquer' : 'Afficher'}
                </button>
              </div>
            </div>

            {/* Password Criteria Badges */}
            <div className="terminer-inscription__password-criteria" data-node-id="890:2533">
              <div
                className={`terminer-inscription__badge ${hasMinLength ? 'terminer-inscription__badge--valid' : ''}`}
                data-node-id="890:5086"
              >
                {hasMinLength && (
                  <img
                    src="/icons/check-outlined.svg"
                    alt="Valid"
                    className="terminer-inscription__badge-icon"
                  />
                )}
                Au moins 8 caractères
              </div>
              <div
                className={`terminer-inscription__badge ${hasSpecialChar ? 'terminer-inscription__badge--valid' : ''}`}
                data-node-id="2990:13360"
              >
                {hasSpecialChar && (
                  <img
                    src="/icons/check-outlined.svg"
                    alt="Valid"
                    className="terminer-inscription__badge-icon"
                  />
                )}
                Au moins 1 caractère spécial
              </div>
              <div
                className={`terminer-inscription__badge ${hasLowercase ? 'terminer-inscription__badge--valid' : ''}`}
                data-node-id="890:5088"
              >
                {hasLowercase && (
                  <img
                    src="/icons/check-outlined.svg"
                    alt="Valid"
                    className="terminer-inscription__badge-icon"
                  />
                )}
                Au moins 1 lettre minuscule
              </div>
              <div
                className={`terminer-inscription__badge ${hasUppercase ? 'terminer-inscription__badge--valid' : ''}`}
                data-node-id="890:5089"
              >
                {hasUppercase && (
                  <img
                    src="/icons/check-outlined.svg"
                    alt="Valid"
                    className="terminer-inscription__badge-icon"
                  />
                )}
                Au moins 1 lettre majuscule
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button className="terminer-inscription__button" data-node-id="2658:9374">
          Continuer
        </button>
      </div>
    </div>
  );
};

export default TerminerInscription;
