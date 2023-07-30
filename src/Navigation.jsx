import React from 'react';
import { Link } from 'react-scroll';
import styles from './module.scss'; // Import the module.css file

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles['navigation__list']}>
        <li className={styles['navigation__item']}>
          <Link to="hero" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className={styles['navigation__item']}>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className={styles['navigation__item']}>
          <Link to="portfolio" smooth={true} duration={1000}>
            Portfolio
          </Link>
        </li>
        <li className={styles['navigation__item']}>
          <Link to="services" smooth={true} duration={1000}>
            Services
          </Link>
        </li>
        <li className={styles['navigation__item']}>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
