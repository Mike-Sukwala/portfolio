// Education.jsx
import { FaGraduationCap, FaCertificate, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "BACHELOR OF EDUCATION COMPUTER SCIENCE(WITH CREDIT)",
      institution: "UNIVERSITY OF MALAWI",
      year: "2021-2025",
      icon: <FaGraduationCap />,
      description: "Focusing on software development, algorithms, and educational technology"
    },

    {
      id: 2,
      title: " CERTIFICATE IN CYBER SECURITY ",
      institution: "CISCO NETWORKING ACADEMY",
      year: "2025-2026",
      icon: <FaSchool />,
      description: "knowledge of cybersecurity, including the global implications of cyber threats on industries,vulnerabilities and threat detection and defense"
       
    },

    {
      id: 3,
      title: "CERTIFICATE IN IT CUSTOMER SUPPORT BASICS ",
      institution: "CISCO NETWORKING ACADEMY",
      year: "2026",
      icon: <FaCertificate />,
      description: "foundational knowledge in help desk operations, customer service, and remote troubleshooting using industry-standard tools to assist users in resolving technical issues and can effectively communicate technical concepts to non-technical users."

    },
    {
      id: 4,
      title: " INFORMATION COMMUNICATION TECHNOLOGY CERTIFICATE(TEVETA)",
      institution: " AIDA CHILEMBWE TECHNICAL COLLEGE",
      year: "2019 - 2020",
      icon: <FaCertificate />,
      description: "Comprehensive training in networking, hardware, and software applications"
    },
    
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">The foundation that built my skills and passion for technology</p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-institution">{item.institution}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;