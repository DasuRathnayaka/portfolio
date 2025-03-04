import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Node.js', 'Express.js', 'Bootstrap'],
    'Tools & Technologies': ['Git', 'GitHub', 'VS Code', 'Figma'],
    'Databases': ['MySQL', 'MongoDB'],
  };

  return (
    <div className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-items">
              {items.map(skill => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 