import React from 'react';
import '../styles/Icon.css';

// Import SVG icons
import { ReactComponent as CanopySizeIcon } from '../assets/icons/canopy-size.svg';
import { ReactComponent as CanopyTypeIcon } from '../assets/icons/canopy-type.svg';
import { ReactComponent as CameraIcon } from '../assets/icons/camera.svg';
import { ReactComponent as ChevronRightIcon } from '../assets/icons/chevron-right.svg';
import { ReactComponent as BackArrowIcon } from '../assets/icons/back-arrow.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';

/* BEM Block: icon */
const iconMap = {
  'canopy-size': CanopySizeIcon,
  'canopy-type': CanopyTypeIcon,
  'camera': CameraIcon,
  'chevron-right': ChevronRightIcon,
  'back-arrow': BackArrowIcon,
  'search': SearchIcon,
  'close': CloseIcon,
  'error': ErrorIcon,
  'upload': UploadIcon,
  'delete': DeleteIcon,
};

function Icon({ name, className = '', color = '#1a1c1d', size = 24 }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span
      className={`icon ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        color: color,
      }}
    >
      <IconComponent />
    </span>
  );
}

export default Icon;
