import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="#hero" className="logo">
          &lt;<span className="logo-bracket">/</span>M<span className="logo-dot">.</span>&gt;
        </a>

        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <span className="nav-number">01.</span> About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              <span className="nav-number">02.</span> Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              <span className="nav-number">03.</span> Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>
              <span className="nav-number">04.</span> Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <span className="nav-number">05.</span> Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;