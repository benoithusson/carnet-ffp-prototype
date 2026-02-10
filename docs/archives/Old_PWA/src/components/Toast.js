import React, { useEffect } from 'react';
import '../styles/Toast.css';

/**
 * Toast Component
 *
 * Displays a toast notification with success, warning, or error states
 *
 * BEM Structure:
 * - Block: toast
 * - Elements: __container, __content, __icon, __message, __close-button
 * - Modifiers: --success, --warning, --error
 */

function Toast({ message, type = 'success', isVisible, onClose, duration = 3000 }) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    if (type === 'success') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#007a00" stroke="#007a00" strokeWidth="1.5" />
          <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__container">
        <div className="toast__content">
          <div className="toast__icon">{getIcon()}</div>
          <p className="toast__message">{message}</p>
          <button className="toast__close-button" onClick={onClose} aria-label="Fermer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
