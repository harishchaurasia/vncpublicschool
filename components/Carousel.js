// components/Carousel.js
import React, { useState, useEffect } from 'react';

const Carousel = ({ children, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, interval);

    return () => clearInterval(autoScroll); // Clean up the interval on component unmount
  }, [currentIndex, interval, children.length]);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slides">
        {React.Children.map(children, (child, index) => {
          let className = 'carousel-slide';

          if (index === currentIndex) {
            className += ' active';
          } else if (index === (currentIndex + 1) % children.length) {
            className += ' next';
          } else if (
            index ===
            (currentIndex - 1 + children.length) % children.length
          ) {
            className += ' prev';
          }

          return (
            <div className={className} key={index}>
              {child}
            </div>
          );
        })}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-markers">
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            className={`carousel-marker ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
