// components/ScrollToTopButton.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const arrowButtonStyle = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#000',
  zIndex: 1000,
};

const scrollToTop = () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
};

const ScrollToTopButton = () => (
  <button style={arrowButtonStyle} onClick={scrollToTop} aria-label="Scroll to top">
    <FaArrowUp />
  </button>
);

export default ScrollToTopButton;
