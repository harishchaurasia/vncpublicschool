// components/ImageCarousel.js
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const ImageCarousel = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const filenames = await response.json();
      setImageFilenames(filenames);
    };

    fetchImages();
  }, []);

  return (
    <div className="relative">
      <div className="carousel-container">
        <Carousel interval={3000}>
          {imageFilenames.map((filename, index) => (
            <img
              key={index}
              src={`/images/${filename}`}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
