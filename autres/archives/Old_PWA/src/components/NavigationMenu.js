import React from 'react';
import '../styles/NavigationMenu.css';

/**
 * NavigationMenu Component
 *
 * Quick navigation menu to access all screens in the app for development purposes.
 */

function NavigationMenu({ onNavigate }) {
  const screens = [
    { id: 'canopy-size-and-type', name: 'Canopy Size and Type Screen (Step 4/6)' },
  ];

  return (
    <div className="nav-menu">
      <h1 className="nav-menu__header">Navigation Menu</h1>
      <p className="nav-menu__subtitle">Select a screen to view</p>

      <div className="nav-menu__list">
        {screens.map((screen) => (
          <button
            key={screen.id}
            className="nav-menu__item"
            onClick={() => onNavigate(screen.id)}
          >
            {screen.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavigationMenu;
