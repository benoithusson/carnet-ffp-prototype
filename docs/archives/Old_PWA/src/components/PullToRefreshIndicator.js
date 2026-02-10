import React from 'react';
import '../styles/PullToRefreshIndicator.css';

/* BEM Block: pull-to-refresh-indicator */
function PullToRefreshIndicator({ isPulling, pullDistance, isRefreshing, threshold }) {
  const progress = Math.min(pullDistance / threshold, 1);
  const rotation = progress * 360;

  if (!isPulling && !isRefreshing) return null;

  return (
    <div
      className="pull-to-refresh-indicator"
      style={{
        transform: `translateY(${pullDistance * 0.5}px)`,
        opacity: isPulling ? Math.min(progress, 1) : 1
      }}
    >
      <div
        className={`pull-to-refresh-indicator__spinner ${isRefreshing ? 'pull-to-refresh-indicator__spinner--spinning' : ''}`}
        style={{
          transform: isRefreshing ? undefined : `rotate(${rotation}deg)`
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"
            stroke="#155294"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default PullToRefreshIndicator;
