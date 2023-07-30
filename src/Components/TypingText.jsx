import React, { useState, useEffect } from 'react';
import './module.scss'

const TypingText = ({ texts, speed, deleteSpeed, fixedPrefix, shouldDelay = true }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isDeleting) {
        // If in deletion phase, remove the last character from the current text
        setCurrentText((prevText) => prevText.slice(0, -1));
        if (currentText === '') {
          // If the current text is fully deleted, move to the next text
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (currentText === texts[currentTextIndex]) {
          // If the current text is fully typed, start the deletion phase
          if (shouldDelay) {
            // If delay flag is set, wait for 1 second before starting deletion
            setTimeout(() => {
              setIsDeleting(true);
            }, 1000);
          } else {
            setIsDeleting(true);
          }
        } else {
          // If in typing phase, add the next character to the current text
          setCurrentText((prevText) => {
            const nextChar = texts[currentTextIndex][prevText.length];
            return prevText + nextChar;
          });
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearInterval(typingInterval); // Clean up the interval on component unmount
  }, [currentText, currentTextIndex, texts, speed, deleteSpeed, isDeleting, shouldDelay]);

  return <h1>{fixedPrefix} <span className='typingText'>{currentText}</span></h1>;
};

export default TypingText;
