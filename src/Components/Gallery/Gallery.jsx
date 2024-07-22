// src/Components/Gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';
import ImageModal from './ImageModal';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {selectedImage && (
        <ImageModal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
