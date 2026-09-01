import { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile
} from 'react-icons/fa';
import { SiLaravel, SiTailwindcss, SiFlutter, SiFirebase } from 'react-icons/si';
 

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing professional work and technical skills with interactive components and seamless user experience.",
      technologies: ["React", "TailwindCSS"],
      techIcons: [<FaReact />, <SiTailwindcss />],
      category: "web",
       
       
    },
    {
      id: 2,
      title: "Essay Grader Mobile Application",
      description: "AI-powered mobile application for automated essay grading and feedback generation.",
      technologies: ["React Native", "Node.js"],
      techIcons: [<FaMobile />, <FaNodeJs />],
      category: "mobile",
       
       
    },
    {
      id: 3,
      title: "Chikanda Accommodation Finder",
      description: "A comprehensive accommodation discovery platform designed specifically for University of Malawi students.",
      technologies: ["Laravel", "MySQL", "React"],
      techIcons: [<SiLaravel />, <FaDatabase />, <FaReact />],
      category: "fullstack",
       
      
    },
    {
      id: 4,
      title: "TestMate Mobile App",
      description: "A secure mobile examination administration platform for educational institutions.",
      technologies: ["Flutter", "Firebase"],
      techIcons: [<SiFlutter />, <SiFirebase />],
      category: "mobile",
       
       
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Applications', count: projects.filter(p => p.category === 'web').length },
    { id: 'fullstack', name: 'Full Stack Solutions', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile Applications', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
             Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of projects demonstrating technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="project-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span>{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.emoji}</span>
                  {project.featured && (
                    <div className="featured-badge">
                      <span className="star">⭐</span>
                      Featured
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-tech-icons">
                    {project.techIcons.map((icon, i) => (
                      <span key={i} className="tech-icon">{icon}</span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;