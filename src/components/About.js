import React from 'react';
import '../styles/About.css';

const About = () => {
  const interests = [
    { name: 'Travelling', icon: '✈️' },
    { name: 'Volunteering', icon: '🤝' },
    { name: 'Reading', icon: '📚' },
    { name: 'Music', icon: '🎵' },
    { name: 'Swimming', icon: '🏊‍♀️' },
    { name: 'Movies', icon: '🎬' },
    { name: 'Blogging', icon: '✍️' }
  ];

  const languages = [
    { name: 'English', level: 'Professional Language', icon: '🇬🇧' },
    { name: 'Sinhala', level: 'Native Knowledge', icon: '🇱🇰' },
    { name: 'Tamil', level: 'Moderate Knowledge', icon: '🗣️' }
  ];

  const gpServiceTechnologies = ['Django', 'Django REST'];

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "May 2024",
      skills: [
        "Classification",
        "Clustering",
        "Data Science",
        "Machine Learning",
        "ML",
        "Recommender Systems",
        "Regression",
        "Scikit-learn",
        "SciPy"
      ],
      credentialId: "PWID-B0247600",
      credentialLink: "https://www.credly.com/badges/a3f84d43-830c-4290-b7e8-c749b0d9b0fa/linked_in_profile",
      logo: "/images/coursera-rebrand-logo-square.avif"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "May 2024",
      skills: [
        "Machine Learning",
        "Clustering",
        "Regression",
        "Classification",
        "SciPy and scikit-learn"
      ],
      credentialId: "FFS95H7M9ERV",
      credentialLink: "https://www.coursera.org/account/accomplishments/verify/FFS95H7M9ERV",
      logo: "/images/ibm_security_logo.jpg"
    },
    {
      title: "Data Science Orientation",
      issuer: "Coursera",
      date: "Apr 2024",
      skills: [
        "AI",
        "Artificial Intelligence",
        "Critical Listening",
        "Critical Reading",
        "Data Science",
        "Machine Learning"
      ],
      credentialId: "PWID-B0267600",
      credentialLink: "https://www.credly.com/badges/bcbebe31-ab20-4819-aba0-2b4e198d974f/linked_in_profile",
      logo: "/images/coursera-rebrand-logo-square.avif"
    },
    {
      title: "What is Data Science?",
      issuer: "IBM",
      date: "Apr 2024",
      skills: [
        "Data Science",
        "Big Data",
        "Machine Learning",
        "Deep Learning",
        "Data Mining"
      ],
      credentialId: "59FBDM48Z2JB",
      credentialLink: "https://www.coursera.org/account/accomplishments/verify/59FBDM48Z2JB",
      logo: "/images/ibm_security_logo.jpg"
    },
    {
      title: "Data Structure and Algorithms in Java for Intermediate Level",
      issuer: "Great Learning",
      date: "Jun 2023",
      skills: [
        "Data Structures",
        "Java",
        "Algorithms"
      ],
      credentialId: "Data Structures & Algorithms in Java for Intermediate Level.png",
      credentialLink: "https://olympus.mygreatlearning.com/courses/12495/certificate",
      logo: "/images/mygreatlearning.png"
    },
    {
      title: "Front End Development - HTML",
      issuer: "Great Learning",
      date: "Jun 2023",
      skills: [
        "HTML5"
      ],
      credentialId: "Front End Development - HTML.png",
      credentialLink: "https://olympus.mygreatlearning.com/courses/12495/certificate",
      logo: "/images/mygreatlearning.png"
    },
    {
      title: "Introduction to Machine Learning US",
      issuer: "Great Learning",
      date: "Jun 2023",
      skills: [
        "Machine Learning"
      ],
      credentialId: "Introduction to Machine Learning US.png",
      credentialLink: "https://olympus.mygreatlearning.com/courses/12495/certificate",
      logo: "/images/mygreatlearning.png"
    },
    {
      title: "Front End Development - CSS",
      issuer: "Great Learning",
      date: "Apr 2023",
      skills: [
        "Cascading Style Sheets (CSS)"
      ],
      credentialId: "Front End Development - CSS.png",
      credentialLink: "https://olympus.mygreatlearning.com/courses/12495/certificate",
      logo: "/images/mygreatlearning.png"
    },
    {
      title: "OOPs in Java",
      issuer: "Great Learning",
      date: "Apr 2023",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Java"
      ],
      credentialId: "OOPs in Java.png",
      credentialLink: "https://olympus.mygreatlearning.com/courses/12495/certificate",
      logo: "/images/mygreatlearning.png"
    },
    {
      title: "Python for Beginners",
      issuer: "Department of Computer Science & Engineering, University of Moratuwa",
      date: "Apr 2023",
      skills: [
        "Python (Programming Language)"
      ],
      credentialId: "dbiZkiKMqL",
      credentialLink: "#",
      logo: "/images/CSE.jpg"
    },
    {
      title: "Web Design for Beginners",
      issuer: "Faculty of Information Technology - University of Moratuwa",
      date: "Nov 2022",
      skills: [
        "HTML",
        "Cascading Style Sheets (CSS)",
        "Bootstrap (Framework)"
      ],
      credentialId: "KtMuFyuZix",
      credentialLink: "#",
      logo: "/images/University_of_Moratuwa_logo.png"
    }
  ];

  const participations = [
    {
      name: "Hackmoral 5.0",
      organizer: "INTECS of University of Moratuwa",
      type: "Coding Competition",
      date: "2023"
    }
  ];

  return (
    <div className="about">
      <div className="about-content">
        <div className="about-header">
          <h1>DASUNI RATHNAYAKA</h1>
        </div>
        
        <div className="about-text">
          <p>
            A passionate and enthusiastic IT undergraduate at University of Moratuwa, 
            committed to working smart and embracing challenges in the tech industry. 
            With a strong foundation in software development and a drive for innovation, 
            I combine technical expertise with a goal-oriented mindset to deliver impactful solutions.
          </p>
          <p className="career-objective">
            Actively seeking opportunities in Software Engineering and AI/ML Engineering roles, 
            with a focus on innovative and challenging projects
          </p>
        </div>

        <div className="interests-section">
          <h3>Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <span className="interest-icon">{interest.icon}</span>
                <span className="interest-name">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="languages-grid">
            {languages.map((language, index) => (
              <div key={index} className="language-item">
                <span className="language-icon">{language.icon}</span>
                <div className="language-info">
                  <span className="language-name">{language.name}</span>
                  <span className="language-level">{language.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <div className="university-info">
              <img 
                src="/images/University_of_Moratuwa_logo.png" 
                alt="University of Moratuwa Logo" 
                className="university-logo"
              />
              <h4>B.Sc. (Hons) in Information Technology</h4>
              <p className="institution">
                <a href="https://uom.lk/" target="_blank" rel="noopener noreferrer">
                  University of Moratuwa
                </a>
              </p>
            </div>
            <p className="duration">2021 - 2025</p>
            <p className="field">Faculty of Information Technology</p>
            <div className="education-details">
              <p className="status">Final-year Undergraduate</p>
              <p className="gpa">Current GPA - 3.74</p>
              <div className="achievements">
                <h5>Academic Achievements</h5>
                <ul>
                  <li>Level 1 semester 2 - Dean's list (SGPA - 3.8)</li>
                  <li>Level 2 semester 2 - Dean's list (SGPA - 3.83)</li>
                  <li>Level 3 semester 1 - SGPA 3.78</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="education-item">
            <div className="school-info">
              <img 
                src="/images/cck.png" 
                alt="Central College Kuliyapitiya Logo" 
                className="school-logo"
              />
              <h4>GCE Advanced Level</h4>
              <p className="institution">
                <a href="https://cck.lk/" target="_blank" rel="noopener noreferrer">
                  Central College, Kuliyapitiya
                </a>
              </p>
            </div>
            <p className="duration">2016 - 2018</p>
            <div className="education-details">
              <p className="exam-year">Examination Year: 2019</p>
              <div className="results">
                <ul>
                  <li>Chemistry - A</li>
                  <li>Physics - B</li>
                  <li>Biology - B</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Trainee Software Engineer</h4>
            <p className="company">
              <a href="https://avantrio.xyz/" target="_blank" rel="noopener noreferrer">
                Avantrio (Pvt) Ltd
              </a>
            </p>
            <p className="duration">01/2024 - 07/2024</p>
            <div className="experience-details">
              <p className="company-description">
                Avantrio is a Colombo-based software engineering agency
                specializing in building and scaling products.
              </p>
              <div className="projects-section">
                <h5>Projects</h5>
                <div className="project-item">
                  <h6>GPService Platform</h6>
                  <div className="technologies">
                    {gpServiceTechnologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="project-description">
                    Developed GPService platform using Django and Django REST Framework. Enabled online video consultations, form-based medical assessments, and prescription management. Designed Entity-Relationship Diagram (ERD) and database models. Implemented secure appointment scheduling and role-based access control. Developed nested resources and asynchronous tasks for prescription processing. Built RESTful APIs for CRUD operations, ensuring data validation and secure authentication. Facilitated seamless doctor-patient interactions through a well-structured API architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications-section">
          <h3>Licenses & Certifications</h3>
          <div className="certification-items">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="certification-header">
                  <img src={cert.logo} alt={cert.issuer} className="issuer-logo" />
                  <div className="certification-title">
                    <h4>{cert.title}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="issue-date">Issued {cert.date}</p>
                    <p className="credential-id">Credential ID: {cert.credentialId}</p>
                  </div>
                </div>
                <div className="certification-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="credential-link">
                  Show credential
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="participations-section">
          <h3>Participations</h3>
          <div className="participation-items">
            {participations.map((participation, index) => (
              <div key={index} className="participation-item">
                <h4>{participation.name}</h4>
                <p className="organizer">{participation.organizer}</p>
                <p className="participation-type">{participation.type}</p>
                <p className="participation-date">{participation.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 