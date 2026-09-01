import {
  FaDatabase,
  FaMobile,
  FaTools,
  FaCode,
  FaNetworkWired,
  FaShieldAlt,
  FaChartBar,
  FaGraduationCap,
  FaCalculator,
  FaCloud,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaServer,
} from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    // =====================================================
    // IT & SYSTEMS
    // =====================================================
    {
      title: "IT & Systems",
      icon: <FaTools />,
      skills: [
        { name: "IT Support", level: 90 },
        { name: "Hardware Troubleshooting", level: 90 },
        { name: "Software Troubleshooting", level: 90 },
        { name: "Computer Maintenance", level: 88 },
        { name: "Windows", level: 90 },
        { name: "Linux", level: 75 },
        { name: "System Administration", level: 80 },
        { name: "Operating Systems", level: 88 },
        { name: "Computer Architecture", level: 82 },
        { name: "Technical Support", level: 90 },
      ],
    },

    // =====================================================
    // SOFTWARE DEVELOPMENT
    // =====================================================
    {
      title: "Software Development",
      icon: <FaCode />,
      skills: [
        { name: "Java", level: 80 },
        { name: "C#", level: 80 },
        { name: "PHP", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 90 },
        { name: "Object-Oriented Programming", level: 88 },
        { name: "Data Structures & Algorithms", level: 82 },
        { name: "Web Development", level: 90 },
        { name: "Mobile Application Development", level: 80 },
        { name: "Software Engineering", level: 85 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 82 },
        { name: "NestJS", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Spring Boot", level: 75 },
        { name: "REST APIs", level: 85 },
      ],
    },

    // =====================================================
    // DATABASES & DATA MANAGEMENT
    // =====================================================
    {
      title: "Databases & Data Management",
      icon: <FaDatabase />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 70 },
        { name: "Database Design", level: 88 },
        { name: "Database Administration", level: 78 },
        { name: "SQL", level: 90 },
        { name: "Data Management", level: 88 },
        { name: "Data Modeling", level: 82 },
        { name: "ER Diagrams", level: 85 },
        { name: "Database Normalization", level: 85 },
      ],
    },

    // =====================================================
    // NETWORKING
    // =====================================================
    {
      title: "Networking",
      icon: <FaNetworkWired />,
      skills: [
        { name: "Computer Networks", level: 88 },
        { name: "Network Administration", level: 80 },
        { name: "Network Troubleshooting", level: 88 },
        { name: "Network Security", level: 80 },
        { name: "TCP/IP", level: 82 },
        { name: "LAN & WAN", level: 85 },
        { name: "IP Addressing", level: 85 },
        { name: "DNS & DHCP", level: 78 },
        { name: "Network Configuration", level: 80 },
        { name: "Wireless Networking", level: 82 },
      ],
    },

    // =====================================================
    // CYBERSECURITY
    // =====================================================
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt />,
      skills: [
        { name: "Cybersecurity Fundamentals", level: 85 },
        { name: "Information Security", level: 82 },
        { name: "Network Security", level: 80 },
        { name: "Security Awareness", level: 90 },
        { name: "Authentication & Access Control", level: 80 },
        { name: "Data Protection", level: 85 },
        { name: "Password Security", level: 90 },
        { name: "Cybersecurity Best Practices", level: 88 },
        { name: "Security Risk Awareness", level: 80 },
      ],
    },

    // =====================================================
    // DATA ANALYTICS
    // =====================================================
    {
      title: "Data Analytics",
      icon: <FaChartBar />,
      skills: [
        { name: "Data Collection", level: 90 },
        { name: "Data Capture", level: 90 },
        { name: "Data Cleaning", level: 88 },
        { name: "Data Validation", level: 88 },
        { name: "Data Analysis", level: 85 },
        { name: "Data Interpretation", level: 85 },
        { name: "Data Management", level: 88 },
        { name: "Data Reporting", level: 90 },
        { name: "Data Visualization", level: 80 },
        { name: "DHIS2", level: 80 },
        { name: "Basic Statistics", level: 85 },
      ],
    },

    // =====================================================
    // COMPUTER SCIENCE
    // =====================================================
    // {
    //   title: "Computer Science",
    //   icon: <FaLaptopCode />,
    //   skills: [
    //     { name: "Algorithms", level: 82 },
    //     { name: "Data Structures", level: 82 },
    //     { name: "Object-Oriented Programming", level: 88 },
    //     { name: "Problem Solving", level: 92 },
    //     { name: "Computational Thinking", level: 90 },
    //     { name: "Programming Logic", level: 90 },
    //     { name: "Software Design", level: 82 },
    //     { name: "System Analysis", level: 80 },
    //     { name: "Computer Architecture", level: 82 },
    //     { name: "Operating Systems", level: 85 },
    //     { name: "Information Systems", level: 85 },
    //     { name: "Discrete Mathematics", level: 80 },
    //   ],
    // },

    // =====================================================
    // SOFTWARE ENGINEERING
    // =====================================================
    {
      title: "Software Engineering",
      icon: <FaCogs />,
      skills: [
        { name: "Software Development Life Cycle", level: 85 },
        { name: "Requirements Analysis", level: 82 },
        { name: "System Design", level: 82 },
        { name: "Object-Oriented Design", level: 85 },
        { name: "Software Testing", level: 78 },
        { name: "Debugging", level: 90 },
        { name: "Version Control", level: 85 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 88 },
        { name: "API Development", level: 82 },
        { name: "Documentation", level: 85 },
      ],
    },

    // =====================================================
    // CLOUD & DEPLOYMENT
    // =====================================================
    {
      title: "Cloud & Deployment",
      icon: <FaCloud />,
      skills: [
        { name: "Application Deployment", level: 82 },
        { name: "Web Hosting", level: 80 },
        { name: "Cloud Computing Fundamentals", level: 75 },
        { name: "Render", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Database Deployment", level: 80 },
        { name: "Environment Configuration", level: 82 },
        { name: "API Deployment", level: 80 },
      ],
    },

    // =====================================================
    // MOBILE DEVELOPMENT
    // =====================================================
    {
      title: "Mobile Development",
      icon: <FaMobile />,
      skills: [
        { name: "Mobile Application Development", level: 80 },
        { name: "Flutter", level: 78 },
        { name: "Firebase", level: 85 },
        { name: "Mobile UI Development", level: 80 },
        { name: "REST API Integration", level: 82 },
        { name: "Mobile Database Integration", level: 80 },
      ],
    },

    // =====================================================
    // MATHEMATICS & STATISTICS
    // =====================================================
    // {
    //   title: "Mathematics & Statistics",
    //   icon: <FaCalculator />,
    //   skills: [
    //     { name: "Mathematics", level: 90 },
    //     { name: "Algebra", level: 90 },
    //     { name: "Geometry", level: 88 },
    //     { name: "Trigonometry", level: 85 },
    //     { name: "Calculus", level: 80 },
    //     { name: "Statistics", level: 85 },
    //     { name: "Probability", level: 82 },
    //     { name: "Problem Solving", level: 92 },
    //     { name: "Mathematical Reasoning", level: 90 },
    //     { name: "Data Interpretation", level: 88 },
    //   ],
    // },

    // =====================================================
    // ICT & COMPUTER STUDIES
    // =====================================================
    // {
    //   title: "ICT & Computer Studies",
    //   icon: <FaGraduationCap />,
    //   skills: [
    //     { name: "ICT Education", level: 95 },
    //     { name: "Computer Studies", level: 95 },
    //     { name: "Digital Literacy", level: 95 },
    //     { name: "Computer Applications", level: 92 },
    //     { name: "Programming Education", level: 88 },
    //     { name: "Database Education", level: 88 },
    //     { name: "Networking Education", level: 85 },
    //     { name: "Cybersecurity Awareness", level: 90 },
    //     { name: "Internet & Web Technologies", level: 92 },
    //     { name: "Educational Technology", level: 92 },
    //   ],
    // },

    // =====================================================
    // TEACHING & LEARNING TECHNOLOGY
    // =====================================================
    {
      title: "Teaching & Learning",
      icon: <FaGraduationCap />,
      skills: [
        { name: "ICT Teaching", level: 95 },
        { name: "Computer Studies Teaching", level: 95 },
        { name: "Mathematics Teaching", level: 95 },
        { name: "Lesson Planning", level: 92 },
        { name: "Classroom Technology", level: 90 },
        { name: "Digital Learning", level: 90 },
        { name: "Student Assessment", level: 90 },
        { name: "Educational Software", level: 88 },
        { name: "Computer Lab Management", level: 90 },
        { name: "Technical Demonstration", level: 90 },
      ],
    },

    // =====================================================
    // SYSTEMS & PROJECT MANAGEMENT
    // =====================================================
    {
      title: "Systems & Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        { name: "Systems Analysis", level: 80 },
        { name: "Project Planning", level: 82 },
        { name: "Requirements Gathering", level: 80 },
        { name: "Problem Analysis", level: 88 },
        { name: "Technical Documentation", level: 85 },
        { name: "Team Collaboration", level: 88 },
        { name: "Agile Fundamentals", level: 75 },
        { name: "Project Management Fundamentals", level: 78 },
      ],
    },

    // =====================================================
    // SERVER & SYSTEM ADMINISTRATION
    // =====================================================
    {
      title: "Server & Administration",
      icon: <FaServer />,
      skills: [
        { name: "Server Administration", level: 75 },
        { name: "Linux Administration", level: 75 },
        { name: "Windows Administration", level: 85 },
        { name: "User Account Management", level: 82 },
        { name: "File & Resource Management", level: 85 },
        { name: "System Configuration", level: 82 },
        { name: "System Monitoring", level: 78 },
        { name: "Backup & Recovery", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Expertise</span>

          <h2 className="section-title">
            My Technical Skills
          </h2>

          <p className="section-description">
            A combination of computer science, software development,
            IT support, networking, cybersecurity, data analytics,
            mathematics, and ICT education skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="skill-category"
            >

              {/* Category Header */}
              <div className="category-header">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3 className="category-title">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="skills-list">

                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-item"
                  >

                    <div className="skill-info">

                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-percentage">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="skill-bar">

                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}