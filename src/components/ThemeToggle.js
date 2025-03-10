import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-switch">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-track">
        <span className="toggle-sun">☀️</span>
        <span className="toggle-moon">🌙</span>
      </label>
    </div>
  );
};

export default ThemeToggle; 