// src/Components/Gallery/ImageModal.jsx
import React, { useState } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className={`modal-overlay ${zoomed ? 'zoomed' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={zoomed ? 'zoomed-img' : ''} onClick={toggleZoom} />
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
