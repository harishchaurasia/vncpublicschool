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
      <h1 style={MissionHeading}>
          Gallery 
      </h1>
      <div style={galleryContainerStyle}>
        {images.map((image, index) => (
          <div key={index} style={galleryItemStyle}>
            <img src={`/gallery/${image}`} alt={`Gallery Image ${index + 1}`} style={galleryImageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


const MissionHeading = {
  textAlign: 'center',
  fontSize: '45px',
  fontFamily: 'New Rocker, cursive'
};

const galleryContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px',
};

const galleryItemStyle = {
  margin: '10px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
  width: '450px', // Adjust width as needed
  backgroundColor: '#fff',
  position: 'relative', // Ensure positioning for inner content
};

const galleryImageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
};
