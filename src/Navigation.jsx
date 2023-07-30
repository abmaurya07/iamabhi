import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="#home">Home</a></li>
        <li className="navigation__item"><a href="#about">About</a></li>
        <li className="navigation__item"><a href="#portfolio">Portfolio</a></li>
        <li className="navigation__item"><a href="#services">Services</a></li>
        <li className="navigation__item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
