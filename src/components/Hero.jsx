import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const words = ['Full Stack Developer', 'Cyber Security Analyst', 'Data analyst'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];
      const currentText = typedRef.current;

      if (isDeleting) {
        currentText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(type, 500);
        return;
      }

      timeoutId = setTimeout(type, isDeleting ? 50 : 100);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for work
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">MIKE SUKWALA</span>
          </h1>

          <div className="hero-typed">
            <span ref={typedRef} className="typed-text"></span>
            <span className="cursor">|</span>
          </div>

              
        </div>

        <div className="hero-visual">
           
        </div>
      </div>

       
    </section>
  );
};

export default Hero;