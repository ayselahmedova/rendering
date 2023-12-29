// src/CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css'; // CSS faylı

const CustomButton = ({ text, warnMessage, hint }) => {
  const buttonClassName = warnMessage ? 'warn-button' : 'normal-button';
  const hintStyle = hint ? { fontStyle: 'italic' } : {};

  const handleClick = () => {
    if (warnMessage) {
      alert(warnMessage);
    }
  };

  return (
    <button className={buttonClassName} onClick={handleClick} style={hintStyle}>
      {text}
      {hint && <span className="hint-popup">{hint}</span>}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  warnMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default CustomButton;
