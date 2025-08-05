import React from 'react';
import '../styles/Skills.css';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: "🧠 Soft Skills",
      icon: "🧠",
      skills: [
        "Creativity", "Curiosity", "Flexibility", "Self Confidence", 
        "Ability to Plan and Organize", "Adaptability", "Problem Solving", 
        "Team Working", "Leadership", "Good Communication"
      ]
    },
    {
      title: "💻 Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C/C++", "JavaScript"]
    },
    {
      title: "🌐 Web Development",
      icon: "🌐", 
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "⚛️ Frameworks",
      icon: "⚛️",
      skills: ["Django", "Django REST", "React.js", "Flask"]
    },
    {
      title: "🗄️ Database",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "MSSQL"]
    },
    {
      title: "🔧 Version Control",
      icon: "🔧",
      skills: ["Git"]
    },
    {
      title: "🚀 Technologies",
      icon: "🚀",
      skills: ["Blockchain Technology", "Docker", "Docker Compose", "RESTful APIs"]
    },
    {
      title: "💻 IDEs",
      icon: "💻",
      skills: ["IntelliJ", "PyCharm", "Visual Studio Code", "Visual Studio"]
    },
    {
      title: "📊 Data Science",
      icon: "📊",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch", "PyTorch Geometric"]
    }
  ];

  return (
    <div className={`skills ${isDarkMode ? 'dark' : ''}`}>
      <div className="skills-content">
        <div className="skills-header">
          <h1>Skills & Expertise</h1>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 