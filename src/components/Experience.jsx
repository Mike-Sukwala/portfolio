// src/components/Experience/Experience.jsx
import { FaBriefcase, FaCalendar, FaMapMarker, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Lilongwe, Malawi",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Leading a team of 8 developers building enterprise-level web applications",
        "Architected microservices infrastructure handling 100k+ daily requests",
        "Implemented CI/CD pipeline reducing deployment time by 70%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      icon: <FaCode />
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Blantyre, Malawi",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Developed and maintained 15+ client projects using MERN stack",
        "Built RESTful APIs serving 50k+ monthly active users",
        "Optimized database queries improving performance by 40%",
        "Implemented real-time features using WebSocket and Socket.io"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      icon: <FaDatabase />
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Startup Hub Malawi",
      location: "Lilongwe, Malawi",
      period: "2019 - 2020",
      type: "Internship",
      description: [
        "Assisted in building responsive web applications for clients",
        "Participated in daily stand-ups and agile development sprints",
        "Wrote unit tests using Jest and React Testing Library",
        "Collaborated with designers to implement UI/UX designs"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Jest"],
      icon: <FaCloud />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            My career path and professional achievements
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="experience-card">
                <div className="experience-icon">
                  {exp.icon}
                </div>
                
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                  
                  <div className="experience-company">
                    <span className="company-name">{exp.company}</span>
                    <span className="company-divider">•</span>
                    <span className="company-location">
                      <FaMapMarker />
                      {exp.location}
                    </span>
                  </div>
                  
                  <div className="experience-period">
                    <FaCalendar />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="experience-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;