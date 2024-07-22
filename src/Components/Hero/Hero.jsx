import React from 'react';
import './Hero.css'; // Import your updated CSS file
import dark_arrow from '../../assets/dark-arrow.png';
import heroVideo from '../../assets/bg-video.mp4'; // Replace with your video filename

const Hero = () => {
  return (
    <div className='hero container'>
      <video
        autoPlay
        loop
        muted
        src={heroVideo}
        poster="path/to/poster.jpg" // Optional poster image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Place the video behind the hero content
        }}
      />
      <div className="hero-text">
        <h1>A new way ofbuilding.</h1>
        <h2>Quick and closer to nature.</h2>
        {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  );
}

export default Hero;
