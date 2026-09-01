import { FaCode, FaDatabase, FaChartLine, FaServer, FaUserGraduate, FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const highlights = [
    // {
    //   icon: <FaCode />,
    //   title: 'Software Development',
    //   description: 'Building scalable, maintainable web and software solutions using modern technologies and best practices.',
    //   color: '#6366f1'
    // },
    // {
    //   icon: <FaDatabase />,
    //   title: 'Database Management',
    //   description: 'Designing, optimizing and managing relational and cloud databases for performance and reliability.',
    //   color: '#8b5cf6'
    // },
    // {
    //   icon: <FaChartLine />,
    //   title: 'Data Analytics',
    //   description: 'Transforming raw data into actionable insights through analysis, visualization and reporting.',
    //   color: '#f97316'
    // },
    // {
    //   icon: <FaServer />,
    //   title: 'IT & Systems',
    //   description: 'Supporting computer systems, networks and ICT operations to ensure business continuity.',
    //   color: '#10b981'
    // }
  ];

  const stats = [
    // { 
    //   label: 'Computer Science', 
    //   value: 'BSc', 
    //   icon: <FaUserGraduate /> 
    // },
    // { 
    //   label: 'ICT Professional', 
    //   value: 'Certified', 
    //   icon: <FaBriefcase /> 
    // },
    // { 
    //   label: 'Web Development', 
    //   value: 'Expert', 
    //   icon: <FaLaptopCode /> 
    // }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            ICT Professional & <span className="gradient-text">Software Developer</span>
          </h2>
          <p className="section-subtitle">
            Building practical digital solutions that address real-world needs
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3 className="about-title">Who I Am</h3>
            
            <p className="about-text">
              I am an ICT professional with a strong background in computer science,
              software development, database systems, and information technology.
              I am passionate about creating practical digital solutions that solve
              real-world problems and improve user experiences.
            </p>

            <p className="about-text">
              My technical expertise spans across the full development stack, with
              proficiency in modern technologies including <strong>React</strong>,{' '}
              <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Laravel</strong>,
              and various database systems like <strong>PostgreSQL</strong>,{' '}
              <strong>MySQL</strong>, and <strong>Firebase</strong>. I also have
              experience in data analytics, database administration, and IT support.
            </p>

            <p className="about-text">
              I am committed to continuous learning and professional growth, regularly
              working on personal projects, participating in professional development,
              and staying updated with the latest industry trends and technologies.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="code-preview">
              {/* <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-title">profile.js</span>
              </div> */}

              <div className="code-content">
                <pre>
                  <code>
                    {/* <span className="comment">// Professional Profile</span>
                    {'\n'}
                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                    {'\n  '}
                    <span className="variable">name</span>: <span className="string">"Mike Sukwala"</span>,
                    {'\n  '}
                    <span className="variable">field</span>: <span className="string">"Information Technology"</span>,
                    {'\n  '}
                    <span className="variable">expertise</span>: [
                    {'\n    '}
                    <span className="string">"Software Development"</span>,
                    {'\n    '}
                    <span className="string">"Database Systems"</span>,
                    {'\n    '}
                    <span className="string">"Data Analytics"</span>,
                    {'\n    '}
                    <span className="string">"IT Support"</span>
                    {'\n  ]'},
                    {'\n  '}
                    <span className="variable">stack</span>: [
                    {'\n    '}
                    <span className="string">"React"</span>,
                    {'\n    '}
                    <span className="string">"Node.js"</span>,
                    {'\n    '}
                    <span className="string">"NestJS"</span>,
                    {'\n    '}
                    <span className="string">"Laravel"</span>,
                    {'\n    '}
                    <span className="string">"SQL"</span>
                    {'\n  ]'}
                    {'\n}'}
                    {'\n\n'}
                    <span className="comment">// Open to exciting opportunities 🚀</span> */}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="highlight-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="highlight-icon" style={{ background: `${item.color}15` }}>
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;