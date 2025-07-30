
import React, { createContext, useState,useEffect } from 'react';

// Theme Context
export const ThemeContext = createContext(null);

// Theme Styles (JSON-like structure)
export const themeStyles = {
  light: {
    background: '#f7f0ed',
    text: '#6C757D',
    cardBackground: '#ffffff',
    cardBackgroundShadow: ' 0 2px 4px  rgba(0, 0, 0, 0.1)',
    cardBackgroundHoverShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    navbarBackground: 'transparent',
    navbarShadow: 'rgba(0, 0, 0, 0.1)',
    hoverBackground: '#ffcece',
    textSecondary: '#7A8389',
    imageShadow:'0 4px 10px rgba(0, 0, 0, 0.28)',
    buttonShadow:'0 5px 7px rgba(0, 0, 0, 0.1)', 
    buttonBacnground:'#fff',

  },
  dark: {
    background: '#1a202c',
    text: '#caced1',
    cardBackground: '#2d3748',
    cardBackgroundShadow: ' 0 2px 4px #caced1',
    cardBackgroundHoverShadow: '0 2px 10px #b7bcc0ff',
    navbarBackground: 'rgba(26, 32, 44, 0.8)',
    navbarShadow: 'rgba(255, 255, 255, 0.1)',
    hoverBackground: '#4a5568',
    textSecondary: '#a0aec0',
    imageShadow:'0 4px 8px #a0aec0',
    buttonBacnground:'#fff',
    buttonShadow:'0 2px 4px #BB86FC',

  },
};




export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('user-theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('user-theme', theme);
  }, [theme]);

 
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme,setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


