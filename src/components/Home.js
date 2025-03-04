import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Hi, I'm Dasuni Rathnayaka</h1>
        <h2>IT Undergraduate at University of Moratuwa</h2>
        <p>Passionate about creating innovative solutions through technology</p>
        <div className="social-links">
          <a href="https://github.com/DasuRathnayaka" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">View Projects</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 