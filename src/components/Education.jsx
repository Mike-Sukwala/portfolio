import {
  FaGraduationCap,
  FaCertificate,
  FaSchool,
  FaShieldAlt,
  FaDatabase,
  FaLaptopCode,
  FaChartBar,
} from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "BACHELOR OF EDUCATION IN COMPUTER SCIENCE", 
      institution: "UNIVERSITY OF MALAWI",
      year: "COMPLETED",
      icon: <FaGraduationCap />,
      description:
        "Bachelor of Education in Computer Science, awarded with a (CREDIT). The programme provided a strong foundation in computer science, software development, databases, networking, algorithms, systems analysis, programming, and ICT education.",
    },

    {
      id: 2,
      title: "CERTIFICATE IN CYBERSECURITY",
      institution: "CISCO NETWORKING ACADEMY",
      year: "PROFESSIONAL CERTIFICATE",
      icon: <FaShieldAlt />,
      description:
        "Professional training in cybersecurity fundamentals, information security, network security, security awareness, cyber threats, risk management, and cybersecurity best practices.",
    },

    {
      id: 3,
      title: "CERTIFICATE IN IT CUSTOMER SUPPORT ",
      institution: "CISCO NETWORKING ACADEMY",
      year: "PROFESSIONAL CERTIFICATE",
      icon: <FaLaptopCode />,
      description:
        "Training in Information Technology (IT) customer support, technical support, hardware and software troubleshooting, operating systems, networking fundamentals, customer service, and IT support practices.",
    },

    {
      id: 4,
      title: "CERTIFICATE IN INFORMATION AND COMMUNICATION TECHNOLOGY (ICT) ",
      institution: "TECHNICAL, ENTREPRENEURIAL AND VOCATIONAL EDUCATION AND TRAINING AUTHORITY (TEVETA)",
      year: "CERTIFICATE",
      icon: <FaCertificate />,
      description:
        "Comprehensive training in Information and Communication Technology (ICT), including computer applications, hardware, software, networking, computer maintenance, and general ICT skills.",
    },

    {
      id: 5,
      title: "CERTIFICATE IN AGGREGATE DATA CAPTURE AND VALIDATION FUNDAMENTALS",
      institution: "DISTRICT HEALTH INFORMATION SYSTEM (DHIS2)",
      year: "DATA MANAGEMENT CERTIFICATE",
      icon: <FaDatabase />,
      description:
        "Training in aggregate data capture and validation using DHIS2, with emphasis on accurate data entry, data quality, validation processes, and reliable health information management.",
    },

    {
      id: 6,
      title: "CERTIFICATE IN AGGREGATE CUSTOMIZATION FUNDAMENTALS",
      institution: "DISTRICT HEALTH INFORMATION SYSTEM (DHIS2)",
      year: "DATA MANAGEMENT CERTIFICATE",
      icon: <FaDatabase />,
      description:
        "Training in the fundamentals of aggregate data customization within DHIS2, including configuration and management of data collection and reporting components.",
    },

    {
      id: 7,
      title: "AGGREGATE DATA ANALYSIS",
      institution: "DISTRICT HEALTH INFORMATION SYSTEM (DHIS2)",
      year: "DATA ANALYTICS CERTIFICATE",
      icon: <FaChartBar />,
      description:
        "Training in aggregate data analysis using DHIS2, including data analysis, interpretation, reporting, and the use of data to support informed decision-making.",
    },

    {
      id: 8,
      title: "MALAWI SCHOOL CERTIFICATE OF EDUCATION (MSCE)",
      institution: "MALAWI SCHOOL CERTIFICATE OF EDUCATION",
      year: "SECONDARY EDUCATION",
      icon: <FaSchool />,
      description:
        "Malawi School Certificate of Education (MSCE), providing the foundation for further academic and professional development.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">My Journey</span>

          <h2 className="section-title">
            Education & Certifications
          </h2>

          <p className="section-subtitle">
            My academic background and professional certifications in
            Computer Science, ICT, IT Support, Cybersecurity, and Data Analytics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="timeline">

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${
                index % 2 === 0 ? 'left' : 'right'
              }`}
            >

              {/* Timeline Icon */}
              <div className="timeline-icon">
                {item.icon}
              </div>

              {/* Timeline Content */}
              <div className="timeline-content">

                <div className="timeline-year">
                  {item.year}
                </div>

                <h3 className="timeline-title">
                  {item.title}
                </h3>

                <div className="timeline-institution">
                  {item.institution}
                </div>

                <p className="timeline-description">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;