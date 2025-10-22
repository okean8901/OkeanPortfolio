import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const descriptionRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    let timeoutId;
    let typeTimeoutId;
    
    const typeWriter = (element, text, speed = 30) => {
      let i = 0;
      element.innerHTML = '';
      
      const type = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          typeTimeoutId = setTimeout(type, speed);
        }
      };
      
      type();
    };

    if (descriptionRef.current) {
      const originalText = t.hero.description;
      descriptionRef.current.textContent = '';
      
      // Clear any existing timeouts
      if (timeoutId) clearTimeout(timeoutId);
      if (typeTimeoutId) clearTimeout(typeTimeoutId);
      
      timeoutId = setTimeout(() => {
        typeWriter(descriptionRef.current, originalText, 30);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (typeTimeoutId) clearTimeout(typeTimeoutId);
    };
  }, [language, t.hero.description]);

  return (
    <section className="hero section-animate" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-description" ref={descriptionRef}>
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">{t.hero.viewProjects}</a>
              <a href="#contact" className="btn btn-secondary">{t.hero.getInTouch}</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img
                src="/IMG/avt.jpg"
                alt="Pham Le Truong - Software Engineering Intern"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
