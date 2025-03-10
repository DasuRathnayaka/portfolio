import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faMedium } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`home ${isDarkMode ? 'dark' : ''}`}>
      <div className="hero">
        <div className="profile-photo">
          <img src="/images/profile-photo.png" alt="Dasuni Rathnayaka" />
        </div>
        <h1>Hi, I'm Dasuni Rathnayaka</h1>
        <div className="typing-text">
          <TypeAnimation
            sequence={[
              'IT Undergraduate at University of Moratuwa',
              2000,
              'Software Engineer',
              2000,
              'AI/ML Engineer',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontFamily: 'Poppins, sans-serif' }}
          />
        </div>
        <div className="hero-description">
          <p>A passionate and enthusiastic IT professional with a drive for innovation and excellence. 
          I'm committed to working smart, taking on challenges, and bringing fresh perspectives to every project.</p>
          <p>As a dedicated team player, I find my greatest satisfaction in contributing to project success 
          through my multi-perspective approach and goal-oriented mindset.</p>
        </div>
        <div className="social-links">
          <a href="mailto:dasu.rathnayaka@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://github.com/DasuRathnayaka" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/dasuni-rathnayaka" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://dasunirathnayaka.medium.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 