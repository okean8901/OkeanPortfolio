import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

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
              <li><a href="#home" className="nav-link" onClick={(e) => smoothScroll(e, '#home')}>{t.nav.home}</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => smoothScroll(e, '#about')}>{t.nav.about}</a></li>
              <li><a href="#skills" className="nav-link" onClick={(e) => smoothScroll(e, '#skills')}>{t.nav.skills}</a></li>
              <li><a href="#experience" className="nav-link" onClick={(e) => smoothScroll(e, '#experience')}>{t.nav.experience}</a></li>
              <li><a href="#projects" className="nav-link" onClick={(e) => smoothScroll(e, '#projects')}>{t.nav.projects}</a></li>
              <li><a href="#cv" className="nav-link" onClick={(e) => smoothScroll(e, '#cv')}>CV</a></li>
              <li><a href="#certifications" className="nav-link" onClick={(e) => smoothScroll(e, '#certifications')}>{t.nav.certifications}</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => smoothScroll(e, '#contact')}>{t.nav.contact}</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="language-toggle" onClick={toggleLanguage} title={t.language.toggle}>
              <i className="fa-solid fa-globe"></i>
              <span>{language === 'en' ? 'VI' : 'EN'}</span>
            </button>

            <a href="/PhamLeTruong_Resume.pdf" download className="download-cv-btn">
              <i className="fa-solid fa-download"></i>
              <span>{t.nav.downloadCV}</span>
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
