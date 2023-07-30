import React from 'react';
import styles from './module.scss'; // Import the module.scss file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}>
        <p>&copy; 2022 Your Company. All rights reserved.</p>
        <div className={styles['footer__social']}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  