import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <Link to="/" className="nav-logo">Dasuni Rathnayaka</Link>
      <div className="nav-right">
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li className="theme-toggle-wrapper"><ThemeToggle /></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 