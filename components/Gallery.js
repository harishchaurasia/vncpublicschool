import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then(setImages);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-gray-200 aspect-square group hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={`/gallery/${image}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
