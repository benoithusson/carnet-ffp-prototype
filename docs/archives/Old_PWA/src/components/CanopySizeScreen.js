import React, { useState, useEffect, useRef } from 'react';
import '../styles/CanopySizeScreen.css';
import useAutoRefresh from '../hooks/useAutoRefresh';
import usePullToRefresh from '../hooks/usePullToRefresh';
import PullToRefreshIndicator from './PullToRefreshIndicator';
import Icon from './Icon';

/* BEM Block: canopy-size */
function CanopySizeScreen({ onNavigate, onSave }) {
  const [size, setSize] = useState('');
  const [error, setError] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-refresh on component mount
  useAutoRefresh([]);

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

  // Handle input change - only allow numbers
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (value === '' || /^\d+$/.test(value)) {
      setSize(value);
      setError(false);
    }
  };

  // Handle validation
  const handleValidate = () => {
    if (!size) {
      setError(true);
      return;
    }

    // Save the value and navigate back
    if (onSave) {
      onSave(size);
    }
    onNavigate('canopy-size-and-type');
  };

  return (
    <div className="canopy-size" ref={scrollContainerRef}>
      {/* Pull-to-refresh indicator */}
      <PullToRefreshIndicator
        isPulling={isPulling}
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        threshold={threshold}
      />

      {/* BEM Element: canopy-size__header-page */}
      <div className="canopy-size__header-page">
        <div className="canopy-size__header-container">
          <div className="canopy-size__header-title">
            <p>Taille de voile</p>
          </div>
          <div
            className="canopy-size__header-back-button"
            onClick={() => onNavigate('canopy-size-and-type')}
          >
            <Icon name="back-arrow" size={32} />
          </div>
        </div>
      </div>

      {/* BEM Element: canopy-size__input-section */}
      <div className="canopy-size__input-section">
        <div className="canopy-size__input-container">
          <div className="canopy-size__input-label">
            <p>Taille de voile</p>
          </div>
          <div className={`canopy-size__input-field ${error ? 'canopy-size__input-field--error' : ''}`}>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Exemple: 170"
              value={size}
              onChange={handleInputChange}
              className="canopy-size__input"
            />
            <div className="canopy-size__input-unit">
              <p>ft²</p>
            </div>
          </div>
        </div>
        {error && (
          <div className="canopy-size__error-message">
            <div className="canopy-size__error-icon">
              <Icon name="error" size={16} color="#ba0808" />
            </div>
            <div className="canopy-size__error-text">
              <p>Choisissez une taille de voile</p>
            </div>
          </div>
        )}
      </div>

      {/* BEM Element: canopy-size__button-container */}
      <div className="canopy-size__button-container">
        <button
          className="canopy-size__button canopy-size__button--primary"
          onClick={handleValidate}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default CanopySizeScreen;
