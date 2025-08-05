import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Contact.css';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      title: formData.get('title')
    };

    try {
      const response = await fetch('https://us-central1-dasuni-rathnayaka-portfolio.cloudfunctions.net/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitStatus('success');
        form.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact ${isDarkMode ? 'dark' : ''}`}>
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get In Touch</h1>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="personal-info">
              <h4>Dasuni Rathnayaka</h4>
              <p className="title">IT Undergraduate | University of Moratuwa</p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>
                  <a href="mailto:dasu.rathnayaka@gmail.com">dasu.rathnayaka@gmail.com</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="social-section">
              <h4>Connect with Me</h4>
              <div className="social-links">
                <a href="https://github.com/DasuRathnayaka" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/dasuni-rathnayaka" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3>Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ Failed to send message. Please try again or email me directly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="title">Subject</label>
              <input type="text" id="title" name="title" placeholder="Brief subject of your message" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 