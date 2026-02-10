import React, { useState, useEffect, useRef } from 'react';
import '../styles/CanopyTypeScreen.css';
import usePullToRefresh from '../hooks/usePullToRefresh';
import PullToRefreshIndicator from './PullToRefreshIndicator';
import useAutoRefresh from '../hooks/useAutoRefresh';
import Icon from './Icon';

/* BEM Block: canopy-type */

// Canopy types data - grouped alphabetically with manufacturer info
const CANOPY_TYPES = [
  {
    letter: 'A',
    items: [
      { name: 'Aerodyne', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' },
      { name: 'Atair', manufacturer: 'Atair Aerospace', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'C',
    items: [
      { name: 'Crossfire', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' },
      { name: 'Cypres', manufacturer: 'Airtec', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'E',
    items: [
      { name: 'Elektra', manufacturer: 'Flight Concepts', logo: '/assets/logo/PD.jpg' },
      { name: 'Epicene', manufacturer: 'Flight Concepts', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'F',
    items: [
      { name: 'Falcon', manufacturer: 'Flight Concepts', logo: '/assets/logo/PD.jpg' },
      { name: 'Fury', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'J',
    items: [
      { name: 'Javelin', manufacturer: 'Sun Path Products', logo: '/assets/logo/PD.jpg' },
      { name: 'JFX', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'K',
    items: [
      { name: 'Katana', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' },
      { name: 'Kraken', manufacturer: 'Icarus Canopies', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'N',
    items: [
      { name: 'Navigator', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'Nitron', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'P',
    items: [
      { name: 'Pilot 7', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' },
      { name: 'Pulse', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'PD Optimum', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'S',
    items: [
      { name: 'Sabre 3', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'Silhouette', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' },
      { name: 'Safire', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'Spectre', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'Storm', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'V',
    items: [
      { name: 'Valkyrie', manufacturer: 'Flight Concepts', logo: '/assets/logo/PD.jpg' },
      { name: 'Velocity', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' },
      { name: 'Velo', manufacturer: 'NZ Aerosports', logo: '/assets/logo/PD.jpg' },
      { name: 'Vision', manufacturer: 'Aerodyne', logo: '/assets/logo/PD.jpg' }
    ]
  },
  {
    letter: 'Z',
    items: [
      { name: 'Zulu', manufacturer: 'Performance Designs', logo: '/assets/logo/PD.jpg' },
      { name: 'Zero', manufacturer: 'Icarus Canopies', logo: '/assets/logo/PD.jpg' }
    ]
  }
];

function CanopyTypeScreen({ onNavigate, onSave, initialSelection = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState(initialSelection);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollContainerRef = useRef(null);

  // Pull-to-refresh functionality
  const handleRefresh = async () => {
    // Simulate refresh - in real app, you would reload data here
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('List refreshed');
        resolve();
      }, 300);
    });
  };

  const pullToRefresh = usePullToRefresh(handleRefresh);
  const { isPulling, pullDistance, isRefreshing, threshold } = pullToRefresh;

  // Auto-refresh on component mount and when data changes
  useAutoRefresh([]);

  // Sync the scrollContainerRef with the pull-to-refresh containerRef
  useEffect(() => {
    if (scrollContainerRef.current) {
      pullToRefresh.containerRef.current = scrollContainerRef.current;
    }
  }, [pullToRefresh]);

  // Handle scroll to show/hide search bar
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const currentScrollY = scrollContainerRef.current.scrollTop;

      // Don't hide searchbar when pulling to refresh
      if (!isPulling && !isRefreshing) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down - hide search bar
          setShowSearchBar(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show search bar
          setShowSearchBar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, isPulling, isRefreshing]);

  // Handle checkbox toggle
  const handleToggle = (itemName) => {
    setSelectedTypes(prev => {
      if (prev.includes(itemName)) {
        return prev.filter(type => type !== itemName);
      } else {
        return [...prev, itemName];
      }
    });
  };

  // Handle chip removal
  const handleRemoveChip = (itemName) => {
    setSelectedTypes(prev => prev.filter(type => type !== itemName));
  };

  // Handle validation
  const handleValidate = () => {
    if (onSave) {
      onSave(selectedTypes);
    }
    onNavigate('canopy-size-and-type');
  };

  // Filter canopy types based on search
  const filteredTypes = CANOPY_TYPES.map(group => ({
    letter: group.letter,
    items: group.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="canopy-type">
      {/* Pull-to-refresh indicator */}
      <PullToRefreshIndicator
        isPulling={isPulling}
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        threshold={threshold}
      />

      {/* BEM Element: canopy-type__header-page */}
      <div className="canopy-type__header-page">
        <div className="canopy-type__header-container">
          <div className="canopy-type__header-title">
            <p>Type de voile</p>
          </div>
          <div
            className="canopy-type__header-back-button"
            onClick={() => onNavigate('canopy-size-and-type')}
          >
            <Icon name="back-arrow" size={32} />
          </div>
        </div>

        {/* Search Bar - with smooth slide animation */}
        <div className={`canopy-type__searchbar-container ${showSearchBar ? 'canopy-type__searchbar-container--visible' : 'canopy-type__searchbar-container--hidden'}`}>
          <div className="canopy-type__searchbar">
            <div className="canopy-type__searchbar-icon">
              <Icon name="search" size={24} color="#5a5f65" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un centre "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="canopy-type__searchbar-input"
            />
          </div>
        </div>

        {/* Selected chips - horizontally scrollable */}
        {selectedTypes.length > 0 && (
          <div className="canopy-type__chips-container">
            {selectedTypes.map((type, index) => (
              <div
                key={index}
                className="canopy-type__chip"
                onClick={() => handleRemoveChip(type)}
              >
                <span>{type}</span>
                <div className="canopy-type__chip-close">
                  <Icon name="close" size={16} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BEM Element: canopy-type__list-container - Scrollable list */}
      <div className="canopy-type__list-container" ref={scrollContainerRef}>
        <div className="canopy-type__list">
          {filteredTypes.map((group, groupIndex) => (
            <div key={groupIndex} className="canopy-type__section">
              {/* Sticky letter header */}
              <div className="canopy-type__letter-container">
                <div className="canopy-type__letter">
                  <p>{group.letter}</p>
                </div>
              </div>

              {/* Items container */}
              <div className="canopy-type__items-container">
                {group.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <div
                      className="canopy-type__list-item"
                      onClick={() => handleToggle(item.name)}
                    >
                      <div className="canopy-type__list-item-content">
                        <img
                          src={item.logo}
                          alt={item.manufacturer}
                          className="canopy-type__list-item-logo"
                        />
                        <div className="canopy-type__list-item-text">
                          <div className={`canopy-type__list-item-label ${selectedTypes.includes(item.name) ? 'canopy-type__list-item-label--selected' : ''}`}>
                            <p>{item.name}</p>
                          </div>
                          <div className="canopy-type__list-item-subtitle">
                            <p>{item.manufacturer}</p>
                          </div>
                        </div>
                      </div>
                      <div className="canopy-type__checkbox">
                        <div className={`canopy-type__checkbox-box ${selectedTypes.includes(item.name) ? 'canopy-type__checkbox-box--checked' : ''}`}>
                          {selectedTypes.includes(item.name) && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8L7 12L13 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    {itemIndex < group.items.length - 1 && (
                      <div className="canopy-type__divider"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BEM Element: canopy-type__button-container */}
      <div className="canopy-type__button-container">
        <button
          className="canopy-type__button canopy-type__button--primary"
          onClick={handleValidate}
          disabled={selectedTypes.length === 0}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default CanopyTypeScreen;
