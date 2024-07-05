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

// const scrollToTop = () => {
//   document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
// };

const scrollToTop = () => {
  const target = document.getElementById('home');
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition;
  const duration = 500; // duration in milliseconds
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressRatio = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * progressRatio);
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};


const ScrollToTopButton = () => (
  <button style={arrowButtonStyle} onClick={scrollToTop} aria-label="Scroll to top">
    <FaArrowUp />
  </button>
);

export default ScrollToTopButton;
