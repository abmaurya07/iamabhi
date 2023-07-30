import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import NotFound from './NotFound';
import { Link } from 'react-scroll';

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
        {/* Main content */}
        <Routes>
          <Route path="/" element={<About />} />
          {/* Add more Route components for other sections */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Sections */}
        <section data-section="about" id="about">
        <About />
        </section>
        <section data-section="portfolio" id="portfolio">
        <Portfolio />
        </section>
        <section data-section="hero" id="hero">
        <About />
        </section>
        <section data-section="about" id="about">
        <About />
        </section>
        {/* Add more sections with corresponding IDs and data-section attributes */}
      </Layout>
    </Router>
  );
}

export default App;
