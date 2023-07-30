import React from 'react';
import styles from './module.scss'; // Import the module.scss file
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Layout from './Layout';
import Navigation from './Navigation';
import NotFound from './NotFound';
import Portfolio from './Portfolio';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero__content']}>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my work and skills in web development</p>
        <button className={styles['hero__cta']}>View Portfolio</button>
      </div>
    </section>
  );
};

export default Hero;
