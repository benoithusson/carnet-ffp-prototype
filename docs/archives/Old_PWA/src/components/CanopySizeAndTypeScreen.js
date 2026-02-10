import React, { useState, useEffect, useRef } from 'react';
import '../styles/CanopySizeAndTypeScreen.css';
import useAutoRefresh from '../hooks/useAutoRefresh';
import usePullToRefresh from '../hooks/usePullToRefresh';
import PullToRefreshIndicator from './PullToRefreshIndicator';
import Icon from './Icon';

/* BEM Block: canopy-size-and-type */
function CanopySizeAndTypeScreen({ onNavigate, canopySize = '', canopyType = [], logbookPhotos = [] }) {
  const scrollContainerRef = useRef(null);

  // Auto-refresh on component mount and when data changes
  useAutoRefresh([canopySize, canopyType, logbookPhotos]);

  // Pull-to-refresh functionality
  const handleRefresh = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Screen refreshed');
        resolve();
      }, 300);
    });
  };

  const pullToRefresh = usePullToRefresh(handleRefresh);
  const { isPulling, pullDistance, isRefreshing, threshold } = pullToRefresh;

  // Sync the scrollContainerRef with the pull-to-refresh containerRef
  useEffect(() => {
    if (scrollContainerRef.current) {
      pullToRefresh.containerRef.current = scrollContainerRef.current;
    }
  }, [pullToRefresh]);

  // State for validation errors
  const [errors, setErrors] = useState({
    canopySize: false,
    canopyType: false,
    logbookPhotos: false
  });

  // Handle validation on continue
  const handleContinue = () => {
    const newErrors = {
      canopySize: !canopySize,
      canopyType: canopyType.length === 0,
      logbookPhotos: logbookPhotos.length === 0
    };

    setErrors(newErrors);

    // Check if all fields are filled
    if (!newErrors.canopySize && !newErrors.canopyType && !newErrors.logbookPhotos) {
      console.log('Form is valid, continuing...');
      // Navigate to next screen or handle form submission
    }
  };

  return (
    <div className="canopy-size-and-type" ref={scrollContainerRef}>
      {/* Pull-to-refresh indicator */}
      <PullToRefreshIndicator
        isPulling={isPulling}
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        threshold={threshold}
      />

      {/* BEM Element: canopy-size-and-type__content */}
      <div className="canopy-size-and-type__content">
        {/* BEM Element: canopy-size-and-type__header-section - HeaderProgressIndicator */}
        <div className="canopy-size-and-type__header-section">
          {/* Progress Indicator */}
          <div className="canopy-size-and-type__progress-indicator">
            <div className="canopy-size-and-type__progress-step">
              <p className="canopy-size-and-type__progress-text">
                Etape 4/6 - Transfert du carnet
              </p>
            </div>
            {/* Progress bars */}
            <div className="canopy-size-and-type__progress-bars">
              <div className="canopy-size-and-type__progress-bar canopy-size-and-type__progress-bar--remaining"></div>
              <div className="canopy-size-and-type__progress-bar canopy-size-and-type__progress-bar--completed"></div>
            </div>
          </div>

          {/* Header Title and Subtitle */}
          <div className="canopy-size-and-type__header-content">
            <div className="canopy-size-and-type__header-title">
              <p>Taille et type de voile autorisée</p>
            </div>
            <div className="canopy-size-and-type__header-subtitle">
              <p>Remplissez les informations sur votre taille de voile et votre type de voile autorisée.</p>
            </div>
          </div>
        </div>

        {/* BEM Element: canopy-size-and-type__list - Liste des filtres */}
        <div className="canopy-size-and-type__list">
          {/* Canopy Size Item */}
          <div className="canopy-size-and-type__list-item" onClick={() => onNavigate('canopy-size')}>
            <div className="canopy-size-and-type__list-item-content">
              <div className="canopy-size-and-type__list-item-text">
                <div className="canopy-size-and-type__list-item-icon">
                  <Icon name="canopy-size" size={24} />
                </div>
                <div className="canopy-size-and-type__list-item-text-container">
                  <p className="canopy-size-and-type__list-item-label">Taille de voile</p>
                  {canopySize && (
                    <p className="canopy-size-and-type__list-item-value">{canopySize} ft²</p>
                  )}
                </div>
              </div>
              <div className="canopy-size-and-type__list-item-chevron">
                <Icon name="chevron-right" size={24} />
              </div>
            </div>
            {errors.canopySize && (
              <div className="canopy-size-and-type__error-message">
                <div className="canopy-size-and-type__error-icon">
                  <Icon name="error" size={16} color="#ba0808" />
                </div>
                <div className="canopy-size-and-type__error-text">
                  <p>Choisissez une taille de voile</p>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="canopy-size-and-type__divider"></div>

          {/* Canopy Type Item */}
          <div className="canopy-size-and-type__list-item" onClick={() => onNavigate('canopy-type')}>
            <div className="canopy-size-and-type__list-item-content">
              <div className="canopy-size-and-type__list-item-text">
                <div className="canopy-size-and-type__list-item-icon">
                  <Icon name="canopy-type" size={24} />
                </div>
                <div className="canopy-size-and-type__list-item-text-container">
                  <p className="canopy-size-and-type__list-item-label">Type de voile</p>
                  {canopyType.length > 0 && (
                    <p className="canopy-size-and-type__list-item-value">{canopyType.join(', ')}</p>
                  )}
                </div>
              </div>
              <div className="canopy-size-and-type__list-item-chevron">
                <Icon name="chevron-right" size={24} />
              </div>
            </div>
            {errors.canopyType && (
              <div className="canopy-size-and-type__error-message">
                <div className="canopy-size-and-type__error-icon">
                  <Icon name="error" size={16} color="#ba0808" />
                </div>
                <div className="canopy-size-and-type__error-text">
                  <p>Choisissez un type de voile</p>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="canopy-size-and-type__divider"></div>

          {/* Logbook Photo Item */}
          <div className="canopy-size-and-type__list-item" onClick={() => onNavigate('logbook-photo')}>
            <div className="canopy-size-and-type__list-item-content">
              <div className="canopy-size-and-type__list-item-text">
                <div className="canopy-size-and-type__list-item-icon">
                  <Icon name="camera" size={24} />
                </div>
                <div className="canopy-size-and-type__list-item-text-container">
                  <p className="canopy-size-and-type__list-item-label">Photo du carnet</p>
                  {logbookPhotos.length > 0 && (
                    <p className="canopy-size-and-type__list-item-value">{logbookPhotos.length} photo{logbookPhotos.length > 1 ? 's' : ''}</p>
                  )}
                </div>
              </div>
              <div className="canopy-size-and-type__list-item-chevron">
                <Icon name="chevron-right" size={24} />
              </div>
            </div>
            {errors.logbookPhotos && (
              <div className="canopy-size-and-type__error-message">
                <div className="canopy-size-and-type__error-icon">
                  <Icon name="error" size={16} color="#ba0808" />
                </div>
                <div className="canopy-size-and-type__error-text">
                  <p>Téléchargez les photos de votre carnet</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BEM Element: canopy-size-and-type__button-container */}
      <div className="canopy-size-and-type__button-container">
        <button
          className="canopy-size-and-type__button canopy-size-and-type__button--secondary"
          onClick={() => onNavigate('nav-menu')}
        >
          Retour
        </button>
        <button
          className="canopy-size-and-type__button canopy-size-and-type__button--primary"
          onClick={handleContinue}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}

export default CanopySizeAndTypeScreen;
