import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for pull-to-refresh functionality
 * @param {Function} onRefresh - Callback function to execute on refresh
 * @param {number} threshold - Distance in pixels to trigger refresh (default: 80)
 */
function usePullToRefresh(onRefresh, threshold = 80) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const touchStartY = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e) => {
      // Only trigger if at the top of the scroll
      if (container.scrollTop === 0) {
        startY = e.touches[0].clientY;
        touchStartY.current = startY;
      }
    };

    const handleTouchMove = (e) => {
      if (isRefreshing) return;

      currentY = e.touches[0].clientY;
      const distance = currentY - startY;

      // Only pull down when at the top
      if (container.scrollTop === 0 && distance > 0) {
        setIsPulling(true);
        setPullDistance(Math.min(distance, threshold * 1.5));

        // Prevent default scroll when pulling
        if (distance > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = async () => {
      if (pullDistance >= threshold && !isRefreshing) {
        setIsRefreshing(true);

        // Execute refresh callback
        if (onRefresh) {
          await onRefresh();
        }

        // Reset after refresh
        setTimeout(() => {
          setIsRefreshing(false);
          setIsPulling(false);
          setPullDistance(0);
        }, 500);
      } else {
        setIsPulling(false);
        setPullDistance(0);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onRefresh, threshold, pullDistance, isRefreshing]);

  return {
    containerRef,
    isPulling,
    pullDistance,
    isRefreshing,
    threshold
  };
}

export default usePullToRefresh;
