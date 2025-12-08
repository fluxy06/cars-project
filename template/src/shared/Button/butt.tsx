import React from 'react';
import './ActionButton.css';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  width?: { min: string; preferred: string; max: string };
  height?: { min: string; preferred: string; max: string };
};

export const ActionButton: React.FC<ButtonProps> = ({ label, onClick, width, height }) => {
  const widthAdaptive = width
    ? `clamp(${width.min}, ${width.preferred}, ${width.max})`
    : `clamp(100px, 20vw, 300px)`;

  const heightAdaptive = height
    ? `clamp(${height.min}, ${height.preferred}, ${height.max})`
    : 'clamp(40px, 5vh, 80px)';

  return (
    <button
      onClick={onClick}
      className="action-btn"
      style={{
        width: widthAdaptive,
        height: heightAdaptive,
        fontSize: 'clamp(12px, 3vw, 24px)',
      }}
    >
      {label}
    </button>
  );
};

export default ActionButton;
