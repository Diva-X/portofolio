import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/hero-bg.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
        color: 'white',
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1>Bonjour, je suis Jane Doe</h1>
          <h2>Développeuse web full stack</h2>
          <button className="btn btn-primary mt-3">En savoir plus</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;