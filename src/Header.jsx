import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Your Logo</div>

      {/* Navigation Menu */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Portfolio</li>
          <li className="nav__item">Services</li>
          <li className="nav__item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
