// Contact.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaFacebook
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'squamike@gmail.com',
      link: 'mailto:squamike@gmail.com',
      color: '#6366f1'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+265 886383294',
      link: 'tel:+265886383294',
      color: '#f97316'
    },
    {
      icon: <FaMapMarker />,
      title: 'Location',
      info: 'Mulanje, Malawi',
      link: null,
      color: '#10b981'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/bed-com-14-20?tab=repositories',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mike',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://x.com/MikeSukwala',
      color: '#1da1f2'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://web.facebook.com/mike.sukwala.5',
      color: '#1877f2'
    }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setError('');
  };

  // Send email
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);
    setError('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,

        // Your email address
        to_email: 'squamike@gmail.com'
      };

      await emailjs.send(
        'service_yb8zjff',
        'template_g7aabef',
        templateParams,
        'LD-h_60k-q-HhuuTL'
      );

      // Show success message
      setIsSubmitted(true);

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      console.error('EmailJS Error:', err);

      setError(
        'Sorry, your message could not be sent. Please try again or contact me directly by email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            Get in Touch
          </span>

          <h2 className="section-title">
            Let's Work{' '}
            <span className="gradient-text">
              Together
            </span>
          </h2>

          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing!
          </p>
        </div>

        <div className="contact-grid">

          {/* ================================
              CONTACT INFORMATION
          ================================= */}
          <div className="contact-info">

            <h3 className="contact-info-title">
              Let's Connect
            </h3>

            <p className="contact-info-text">
              I'm always excited to take on new challenges and
              collaborate on innovative projects. Whether you have
              a question, a project idea, or simply want to say hi,
              feel free to get in touch.
            </p>

            {/* Contact Details */}
            <div className="contact-details">

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="contact-detail-item"
                >

                  <div
                    className="detail-icon"
                    style={{
                      backgroundColor: `${item.color}20`,
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>

                  <div className="detail-content">

                    <h4>
                      {item.title}
                    </h4>

                    {item.link ? (
                      <a href={item.link}>
                        {item.info}
                      </a>
                    ) : (
                      <p>
                        {item.info}
                      </p>
                    )}

                  </div>

                </div>
              ))}

            </div>

            {/* Social Links */}
            <div className="social-links">

              <h4>
                Connect with me
              </h4>

              <div className="social-icons">

                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      backgroundColor: `${social.color}15`,
                      color: social.color
                    }}
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* ================================
              CONTACT FORM
          ================================= */}
          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Success Message */}
              {isSubmitted && (
                <div className="form-success">

                  <FaCheckCircle />

                  <span>
                    Message sent successfully!
                    I'll get back to you soon.
                  </span>

                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="form-error">

                  <span>
                    {error}
                  </span>

                </div>
              )}

              {/* Name */}
              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />

              </div>

              {/* Email */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />

              </div>

              {/* Subject */}
              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />

              </div>

              {/* Message */}
              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

        {/* Availability */}
        <div className="availability-badge">

          <span className="status-dot"></span>

          Currently available for  work

        </div>

      </div>
    </section>
  );
}