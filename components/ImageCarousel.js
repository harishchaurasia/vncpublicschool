import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

const ImageCarousel = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(r => r.json())
      .then(filenames => setImageFilenames(filenames.slice(0, 5)));
  }, []);

  return (
    <div>
      <Carousel interval={5000}>
        {imageFilenames.map((filename, index) => (
          <img
            key={index}
            src={`/gallery/${filename}`}
            alt={`VNC Public School - ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
