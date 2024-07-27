import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const BG_COLOR = '#ddd9d6';
  const BG_COLOR1 = '#161412';

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? BG_COLOR1 : BG_COLOR;
    document.body.style.color = darkMode ? BG_COLOR : BG_COLOR1;
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, handleThemeChange, BG_COLOR, BG_COLOR1 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
