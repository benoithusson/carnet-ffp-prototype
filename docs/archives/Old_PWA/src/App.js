import React, { useState, useEffect } from 'react';
import './styles/App.css';
import CanopySizeAndTypeScreen from './components/CanopySizeAndTypeScreen';
import CanopySizeScreen from './components/CanopySizeScreen';
import CanopyTypeScreen from './components/CanopyTypeScreen';
import LogbookPhotoUploadScreen from './components/LogbookPhotoUploadScreen';
import NavigationMenu from './components/NavigationMenu';

function App() {
  const [currentScreen, setCurrentScreen] = useState('nav-menu');
  const [previousScreen, setPreviousScreen] = useState('nav-menu');
  const [transitionDirection, setTransitionDirection] = useState('right'); // 'right' or 'left'

  // State for canopy form data
  const [canopySize, setCanopySize] = useState('');
  const [canopyType, setCanopyType] = useState([]);
  const [logbookPhotos, setLogbookPhotos] = useState([]);

  // Define screen hierarchy for transition direction
  const screenHierarchy = {
    'nav-menu': 0,
    'canopy-size-and-type': 1,
    'canopy-size': 2,
    'canopy-type': 2,
    'logbook-photo': 2
  };

  // Handle navigation with transition direction
  const handleNavigate = (screen) => {
    const currentLevel = screenHierarchy[currentScreen] || 0;
    const nextLevel = screenHierarchy[screen] || 0;

    // Determine direction: right for forward, left for back
    setTransitionDirection(nextLevel > currentLevel ? 'right' : 'left');
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  // Double tap detection on header to go back to navigation menu
  useEffect(() => {
    let lastTap = 0;
    let isRefreshing = false;

    // Listen for refresh events to temporarily disable double-tap
    const handleRefreshStart = () => {
      isRefreshing = true;
      setTimeout(() => { isRefreshing = false; }, 1000);
    };

    const handleDoubleTap = (e) => {
      if (isRefreshing) return; // Don't navigate during refresh

      // Check if the tap is within a header element - more specific selectors
      const target = e.target;
      const isInHeader = target.closest('[class*="__header-section"]') ||
                        target.closest('[class*="__header-container"]') ||
                        target.closest('[class*="__header-page"]') ||
                        target.closest('[class*="__header-content"]') ||
                        target.closest('[class*="HeaderProgressIndicator"]');

      if (!isInHeader) return;

      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        // Double tap detected in header
        handleNavigate('nav-menu');
      }

      lastTap = currentTime;
    };

    document.addEventListener('touchend', handleDoubleTap);
    window.addEventListener('refresh-start', handleRefreshStart);

    return () => {
      document.removeEventListener('touchend', handleDoubleTap);
      window.removeEventListener('refresh-start', handleRefreshStart);
    };
  }, []);

  return (
    <div className="app">
      <div className={`screen-container ${transitionDirection === 'right' ? 'slide-right' : 'slide-left'}`} key={currentScreen}>
        {currentScreen === 'nav-menu' && <NavigationMenu onNavigate={handleNavigate} />}
        {currentScreen === 'canopy-size-and-type' && <CanopySizeAndTypeScreen onNavigate={handleNavigate} canopySize={canopySize} canopyType={canopyType} logbookPhotos={logbookPhotos} />}
        {currentScreen === 'canopy-size' && <CanopySizeScreen onNavigate={handleNavigate} onSave={setCanopySize} />}
        {currentScreen === 'canopy-type' && <CanopyTypeScreen onNavigate={handleNavigate} onSave={setCanopyType} initialSelection={canopyType} />}
        {currentScreen === 'logbook-photo' && <LogbookPhotoUploadScreen onNavigate={handleNavigate} onSave={setLogbookPhotos} initialPhotos={logbookPhotos} />}
      </div>
    </div>
  );
}

export default App;
