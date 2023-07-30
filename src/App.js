import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Layout,
  Hero
} from './Components'



function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('[data-section]');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>

          <Layout>

            {/* Sections */}
            
         <section data-section="hero" id="hero">
              <Hero />
            </section>
           {/*
            <section data-section="about" id="about">
              <About />
            </section>
            <section data-section="services" id="services">
              <Services />
            </section>
            <section data-section="portfolio" id="portfolio">
              <Portfolio />
            </section>
            <section data-section="contact" id="contact">
              <Contact />
            </section>
            <section data-section="testimonials" id="testimonials">
              <Testimonials />
            </section>  */}
            {/* Add more sections with corresponding IDs and data-section attributes */}
          </Layout>

    </Router>
  );
}

export default App;
