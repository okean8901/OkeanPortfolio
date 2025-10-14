import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={(e) => smoothScroll(e, '#home')}>Portfolio</a>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link" onClick={(e) => smoothScroll(e, '#home')}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
              <li><a href="#skills" className="nav-link" onClick={(e) => smoothScroll(e, '#skills')}>Skills</a></li>
              <li><a href="#projects" className="nav-link" onClick={(e) => smoothScroll(e, '#projects')}>Projects</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/PhamLeTruong_Resume.pdf" download className="download-cv-btn">
              <i className="fa-solid fa-download"></i>
              <span>Download CV</span>
            </a>

            <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle mobile menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
