import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <div className="hero-section">
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