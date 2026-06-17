import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const ImageCarousel = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/gallery');
      const filenames = await response.json();
      setImageFilenames(filenames.slice(0, 5));
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Carousel interval={5000}>
        {imageFilenames.map((filename, index) => (
          <img
            key={index}
            src={`/gallery/${filename}`}
            alt={`VNC Public School - ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
