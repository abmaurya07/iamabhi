import React from 'react'
import styles from './module.scss'
import TypingText from './TypingText';

const Hero = () => {
    const texts = ['am Fullstack Developer', 'Love React', 'Code Cool Websites' ];
    const typingSpeed = 50; 
    const deleteSpeed = 50;
    const fixedPrefix = 'I';

    return (
      <section>
        <div className='hero'>
          <h1>Hi, I'm Abhishek</h1>
          <p>Welcome to my portfolio website where I showcase my work and skills in web development.</p>
          <TypingText 
          texts={texts} 
          speed={typingSpeed} 
          deleteSpeed={deleteSpeed}
          fixedPrefix={fixedPrefix}
          />

          
        </div>
      </section>
    );
  };
  
  export default Hero;