import { useEffect } from 'react';

/**
 * Custom hook for auto-refresh on component mount/update
 * This hook triggers a page refresh when dependencies change
 * @param {Array} dependencies - Array of dependencies to watch for changes
 */
function useAutoRefresh(dependencies = []) {
  useEffect(() => {
    // Dispatch a custom event to notify that data should be refreshed
    const event = new CustomEvent('auto-refresh', {
      detail: { timestamp: Date.now() }
    });
    window.dispatchEvent(event);

    // Optional: Add a visual indicator that refresh occurred
    console.log('🔄 Auto-refresh triggered at:', new Date().toLocaleTimeString());
  }, dependencies);
}

export default useAutoRefresh;
