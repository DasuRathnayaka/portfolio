import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="profile-photo">
          <img src="/images/profile-photo.png" alt="Dasuni Rathnayaka" />
        </div>
        <h1>Hi, I'm Dasuni Rathnayaka</h1>
        <h2>IT Undergraduate at University of Moratuwa</h2>
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