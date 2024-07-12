import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center p-5">
        {images.map((image, index) => (
          <div key={index} className="m-2 rounded-lg overflow-hidden shadow-lg w-96 bg-white relative">
            <img src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} className="w-full h-auto block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
