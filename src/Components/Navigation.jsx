import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import './module.scss'; // Import the module.css file

const Navigation = () => {
  return (
    <div className='navigation'>
  
          <Link to="hero" smooth={true} duration={1000}>
            <FaHome className='navigation__icon'/>
          </Link>
        
        
          <Link to="about" smooth={true} duration={1000}>
            <FaInfoCircle className='navigation__icon'/>
          </Link>
        
        
          <Link to="portfolio" smooth={true} duration={1000}>
            <FaBriefcase className='navigation__icon'/>
          </Link>
        
        
          <Link to="services" smooth={true} duration={1000}>
            <FaCogs className='navigation__icon'/>
          </Link>
        
        
          <Link to="contact" smooth={true} duration={1000}>
            <FaEnvelope className='navigation__icon'/>
          </Link>
        
      
    </div>
  );
};

export default Navigation;
