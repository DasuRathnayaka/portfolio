import React, { useState } from 'react';
import '../styles/Projects.css';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);

  const openImagePopup = (imageSrc, imageIndex, projectImages) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(imageIndex);
    setCurrentProjectImages(projectImages);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentProjectImages([]);
  };

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentProjectImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentProjectImages[nextIndex]);
  };

  const goToPrevImage = () => {
    const prevIndex = currentImageIndex === 0 ? currentProjectImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentProjectImages[prevIndex]);
  };
  
  const projects = [
    {
      title: "Travel Place Recommendation System",
      description: "Developed AI-powered travel recommendation platform using Heterogeneous Graph Transformer (HGT) neural networks for personalized destination suggestions.",
      sections: [
        {
          title: "Machine Learning Core",
          description: "Implemented HGT-based recommendation engine using PyTorch and PyTorch Geometric with heterogeneous graph neural networks and multi-head attention mechanisms. Designed dual-node architecture with user nodes (demographics, preferences) and location nodes (categories, features, activities) connected through multiple edge types. Engineered 352-dimensional location features and 83-dimensional user features with weighted importance systems optimized through Bayesian optimization. Developed hybrid recommendation strategies combining content-based filtering, collaborative filtering, and weather-aware ranking with adaptive alpha weights learned through neural gating mechanisms. Built comprehensive cold-start handling for new users/locations by extending graph structures dynamically. Integrated weather compatibility scoring using real-time weather data and budget-aware recommendations with hotel price data. Achieved high-performance architecture with 2.3M parameters, 320-dimensional hidden layers, 8 attention heads, and 2 HGT layers. Optimized through comprehensive evaluation achieving 86%+ accuracy in matching user preferences to appropriate destinations."
        },
        {
          title: "Backend Architecture",
          description: "Developed Flask-based RESTful API following SOLID principles with modular controller-service-model architecture. Integrated MySQL database with automated seeding, weather integration service, and comprehensive error handling."
        },
        {
          title: "Frontend Interface",
          description: "Created React.js user interface with interactive forms, autocomplete fields, date pickers, and responsive design. Built intuitive UX with grid-based selections and seamless API communication."
        }
      ],
      technologies: ["PyTorch", "PyTorch Geometric", "Flask", "React.js", "MySQL", "NumPy", "Pandas", "Scikit-learn"],
      images: [
        "/images/FireShot Capture 129 - Vite + React - [localhost].png",
        "/images/FireShot Capture 130 - Vite + React - [localhost].png",
        "/images/FireShot Capture 131 - Vite + React - [localhost].png",
        "/images/FireShot Capture 132 - Vite + React - [localhost].png"
      ]
    },
    {
      title: "🏥 GPService Platform",
      description: "Developed a comprehensive GPService platform using Django and Django REST Framework to revolutionize healthcare delivery through technology. The platform enables online video consultations, form-based medical assessments, and complete prescription management, creating a seamless digital healthcare experience. Designed and implemented a robust Entity-Relationship Diagram (ERD) and database models to ensure optimal data structure and relationships. The system features secure appointment scheduling with role-based access control, allowing different user types to access appropriate functionality while maintaining data security. Developed sophisticated nested resources and asynchronous tasks for prescription processing, ensuring efficient handling of medical workflows. Built comprehensive RESTful APIs for CRUD operations with thorough data validation and secure authentication mechanisms. The architecture facilitates seamless doctor-patient interactions through a well-structured API design that supports real-time communication and data exchange.",
      technologies: ["Django", "Django REST", "PostgreSQL"]
    },
    {
      title: "🚗 Blockchain-based Vehicle Registration and Ownership Management System",
      description: "Developed an innovative Self-Sovereign Identity (SSI) Issuer module as part of a cutting-edge blockchain-based vehicle registration and ownership management system. The project enables secure and decentralized identity issuance for vehicle ownership, eliminating the need for traditional centralized verification systems. Implemented advanced Verifiable Credentials (VCs) technology to provide robust authentication mechanisms for vehicle owners, ensuring the integrity and authenticity of ownership records. Integrated sophisticated Blockchain technology using Indy Blockchain to create a tamper-proof and trustless verification system that maintains immutable records of vehicle ownership and transactions. The system facilitates secure identity management for both buyers and sellers in vehicle transactions, streamlining the transfer process while maintaining security. Ensured complete privacy-preserving authentication mechanisms that operate without reliance on centralized authorities, giving users full control over their identity and ownership data.",
      technologies: ["Django", "HTML", "CSS", "Bootstrap", "Indy Blockchain"]
    },
    {
      title: "🌐 Portfolio Website",
      description: "Built a modern and responsive personal website using ReactJS to showcase my professional skills, projects, and achievements in an elegant and interactive format. The website features a clean, user-friendly design with smooth animations and transitions that provide an engaging user experience across all devices. Implemented a comprehensive automated build process using GitHub Actions for continuous integration and deployment, ensuring that any updates to the codebase are automatically tested and deployed. The automation workflow includes code quality checks, build optimization, and seamless deployment to production. Deployed the website using Firebase hosting service, taking advantage of its global CDN, SSL certificates, and reliable infrastructure to ensure fast loading times and high availability for visitors worldwide.",
      technologies: ["React.js", "Firebase"],
      liveLink: "https://dasuni-rathnayaka-portfolio.web.app/",
      githubLink: "https://github.com/DasuRathnayaka/portfolio"
    },
    {
      title: "📚 Books Management System",
      description: "Developed comprehensive test automation coverage for a sophisticated book management system built with Spring Boot REST API architecture. The project focused on implementing robust testing strategies using industry-standard tools to ensure system reliability and functionality. Covered extensive cucumber-based behavior-driven development (BDD) testing scenarios that validate business requirements and user stories in a human-readable format. Implemented thorough Cypress end-to-end testing suite that covers user interactions, API integrations, and complete application workflows to ensure seamless user experience. The testing framework provides comprehensive coverage of the book management system's core functionality, including book catalog management, user authentication, search capabilities, and data persistence operations, ensuring high code quality and system reliability.",
      technologies: ["Cucumber", "Cypress"]
    }
  ];

  return (
    <div className={`projects ${isDarkMode ? 'dark' : ''}`}>
      <div className="projects-content">
      <h2>My Projects</h2>
        <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              {project.sections && (
                <div className="project-sections">
                  {project.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="project-section">
                      <h4 className="section-title">{section.title}</h4>
                      {section.points ? (
                        <ul className="project-points">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="project-point">{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="section-description">{section.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {project.points && (
                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i} className="project-point">{point}</li>
                  ))}
                </ul>
              )}
              {project.images && (
                <div className="project-images">
                  <h4 className="images-title">🖼️ Project Screenshots</h4>
                  <div className="image-gallery">
                    {project.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        className="thumbnail-image"
                        onClick={() => openImagePopup(image, imageIndex, project.images)}
                      />
                    ))}
                  </div>
                </div>
              )}
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
              {(project.liveLink || project.githubLink) && (
            <div className="project-links">
                  {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="image-popup-overlay" onClick={closeImagePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Project screenshot" className="popup-image" />
            <button className="close-popup-btn" onClick={closeImagePopup}>✕</button>
            {currentProjectImages.length > 1 && (
              <>
                <button className="nav-btn prev-btn" onClick={goToPrevImage}>
                  ‹
                </button>
                <button className="nav-btn next-btn" onClick={goToNextImage}>
                  ›
                </button>
                <div className="image-counter">
                  {currentImageIndex + 1} / {currentProjectImages.length}
                </div>
              </>
            )}
          </div>
      </div>
      )}
    </div>
  );
};

export default Projects; 