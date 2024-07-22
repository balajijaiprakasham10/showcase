// src/Pages/Project3.jsx
import React from 'react';
import Gallery from '../Components/Gallery/Gallery';

import image1 from "../assets/project3/image1.jpg";
import image2 from "../assets/project3/image2.jpg";
import image3 from "../assets/project3/image3.jpg";


const images = [
  { id: 1, src: image1, alt: 'Project 3 Image 1' },
  { id: 2, src: image2, alt: 'Project 3 Image 2' },
  { id: 3, src: image3, alt: 'Project 3 Image 3' },
];

const Project3 = () => {
  return (
    <div className='project'>
      <h1></h1>
      <p></p>
      <Gallery images={images} />
    </div>
  );
};

export default Project3;
