import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Theme';
import './module.scss';
import LeftPanel from './LeftPanel';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [showThemeCard, setShowThemeCard] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setShowThemeCard(false);
  };

  const themeOptions = [
    { label: 'Light', value: 'light', theme: lightTheme },
    { label: 'Dark', value: 'dark', theme: darkTheme },
    // Add more theme options here
  ];

  const openThemeCard = () => {
    setShowThemeCard(true);
  };

  return (
    <ThemeProvider theme={themeOptions.find((option) => option.value === theme).theme}>
      <GlobalStyle />
      <div className="container">
        <div className="left-section">
          <LeftPanel openThemeCard={openThemeCard} />
        </div>
        <div className="content">
          {/* Content for the main content area */}
          {children}
        </div>
        <div className="right-section">
          
        <Navigation />
        </div>
        <div className={`theme-card ${showThemeCard ? 'show' : ''}`}>
          {themeOptions.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="theme"
                value={option.value}
                checked={theme === option.value}
                onChange={() => handleThemeChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      
      </div>
    </ThemeProvider>
  );
};

export default Layout;
