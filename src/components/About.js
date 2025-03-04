import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            I am an IT undergraduate at the University of Moratuwa, passionate about
            software development and technology. With a strong foundation in various
            programming languages and frameworks, I am constantly learning and
            exploring new technologies to create innovative solutions.
          </p>
          <p>
            My academic journey has equipped me with both theoretical knowledge and
            practical experience in software development, database management, and
            web technologies. I enjoy taking on challenging projects that allow me
            to grow and apply my skills in real-world scenarios.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>BSc in Information Technology</h4>
            <p>University of Moratuwa</p>
            <p>2020 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 