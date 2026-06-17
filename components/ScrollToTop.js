import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const scrollToTop = () => {
  const target = document.getElementById('home');
  const distance = target.getBoundingClientRect().top;
  const start = window.pageYOffset;
  const duration = 500;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + distance * progress);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const ScrollToTopButton = () => (
  <button
    onClick={scrollToTop}
    aria-label="Scroll to top"
    className="hidden md:flex fixed bottom-24 right-5 z-50 w-11 h-11 items-center justify-center rounded-full bg-gray-800/70 hover:bg-gray-800 text-white backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200"
  >
    <FaArrowUp className="text-sm" />
  </button>
);

export default ScrollToTopButton;
