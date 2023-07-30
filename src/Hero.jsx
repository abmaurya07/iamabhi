import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my work and skills in web development</p>
        <button className="hero__cta">View Portfolio</button>
      </div>
    </section>
  );
};

export default Hero;
