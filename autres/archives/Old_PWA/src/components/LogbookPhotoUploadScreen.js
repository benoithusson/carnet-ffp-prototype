import React, { useState, useRef, useEffect } from 'react';
import '../styles/LogbookPhotoUploadScreen.css';
import useAutoRefresh from '../hooks/useAutoRefresh';
import usePullToRefresh from '../hooks/usePullToRefresh';
import PullToRefreshIndicator from './PullToRefreshIndicator';
import Icon from './Icon';

/* BEM Block: logbook-photo-upload */
function LogbookPhotoUploadScreen({ onNavigate, onSave, initialPhotos = [] }) {
  const [photos, setPhotos] = useState(initialPhotos);
  const [error, setError] = useState(false);
  const fileInputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Auto-refresh on component mount and when photos change
  useAutoRefresh([photos]);

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

  // Handle file selection
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      // Convert files to URLs for preview
      const newPhotos = files.map(file => URL.createObjectURL(file));
      setPhotos(prev => [...prev, ...newPhotos]);
      setError(false);
    }
  };

  // Handle upload button click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Handle delete photo
  const handleDeletePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  // Handle validation
  const handleValidate = () => {
    if (photos.length === 0) {
      setError(true);
      return;
    }

    if (onSave) {
      onSave(photos);
    }
    onNavigate('canopy-size-and-type');
  };

  return (
    <div className="logbook-photo-upload" ref={scrollContainerRef}>
      {/* Pull-to-refresh indicator */}
      <PullToRefreshIndicator
        isPulling={isPulling}
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        threshold={threshold}
      />

      {/* BEM Element: logbook-photo-upload__header-page */}
      <div className="logbook-photo-upload__header-page">
        <div className="logbook-photo-upload__header-container">
          <div className="logbook-photo-upload__header-title">
            <p>Photo du carnet</p>
          </div>
          <div
            className="logbook-photo-upload__header-back-button"
            onClick={() => onNavigate('canopy-size-and-type')}
          >
            <Icon name="back-arrow" size={32} />
          </div>
        </div>
      </div>

      {/* BEM Element: logbook-photo-upload__input-section */}
      <div className="logbook-photo-upload__input-section">
        <div className="logbook-photo-upload__input-container">
          <div className="logbook-photo-upload__input-label">
            <p>Photos du carnet</p>
          </div>

          {/* Upload Input */}
          <div
            className={`logbook-photo-upload__upload-area ${error ? 'logbook-photo-upload__upload-area--error' : ''}`}
            onClick={handleUploadClick}
          >
            <div className="logbook-photo-upload__upload-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13V21" stroke="#5A5F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14.899C3.25704 14.1399 2.69657 13.2217 2.36104 12.214C2.0255 11.2062 1.92371 10.1353 2.06336 9.08232C2.20302 8.02938 2.58046 7.02202 3.1671 6.13655C3.75374 5.25109 4.53419 4.51074 5.44934 3.97157C6.36448 3.43241 7.39033 3.10857 8.44917 3.0246C9.50801 2.94062 10.5721 3.09871 11.5608 3.48688C12.5495 3.87505 13.4369 4.48313 14.1557 5.26506C14.8746 6.04698 15.4061 6.98225 15.71 8.00002H17.5C18.4655 7.99991 19.4055 8.31034 20.181 8.88546C20.9565 9.46058 21.5265 10.2699 21.8068 11.1938C22.087 12.1178 22.0627 13.1074 21.7373 14.0164C21.412 14.9254 20.8029 15.7057 20 16.242" stroke="#5A5F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 17L12 13L16 17" stroke="#5A5F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="logbook-photo-upload__upload-text">
              <p>Ajouter une photo</p>
            </div>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />

        </div>
        {error && (
          <div className="logbook-photo-upload__error-message">
            <div className="logbook-photo-upload__error-icon">
              <Icon name="error" size={16} color="#ba0808" />
            </div>
            <div className="logbook-photo-upload__error-text">
              <p>Téléchargez les photos de votre carnet</p>
            </div>
          </div>
        )}

        {/* Info Message */}
        <div className="logbook-photo-upload__info-message">
          <p>Le tampon et la signature doivent être visibles.</p>
        </div>
      </div>

      {/* BEM Element: logbook-photo-upload__photos-container */}
      {photos.length > 0 && (
        <div className="logbook-photo-upload__photos-container">
          {photos.map((photo, index) => (
            <div key={index} className="logbook-photo-upload__photo-item">
              <div className="logbook-photo-upload__photo-thumbnail">
                <img src={photo} alt={`Photo ${index + 1}`} />
              </div>
              <div className="logbook-photo-upload__photo-delete" onClick={() => handleDeletePhoto(index)}>
                <div className="logbook-photo-upload__delete-icon">
                  <Icon name="delete" size={24} />
                </div>
                <div className="logbook-photo-upload__delete-label">
                  <p>Supprimer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BEM Element: logbook-photo-upload__button-container */}
      <div className="logbook-photo-upload__button-container">
        <button
          className="logbook-photo-upload__button logbook-photo-upload__button--primary"
          onClick={handleValidate}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default LogbookPhotoUploadScreen;
