import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const descriptionRef = useRef(null);
  const rolesRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (descriptionRef.current) {
      const originalText = t.hero.description;
      descriptionRef.current.textContent = originalText;
    }
  }, [language, t.hero.description]);

  useEffect(() => {
    let timeoutIds = [];
    let typeTimeoutIds = [];
    
    const typeWriter = (element, text, speed = 50) => {
      return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        
        const type = () => {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            const typeTimeoutId = setTimeout(type, speed);
            typeTimeoutIds.push(typeTimeoutId);
          } else {
            resolve();
          }
        };
        
        type();
      });
    };

    const typeRoles = async () => {
      if (rolesRef.current && t.hero.roles) {
        // Infinite loop to cycle through roles
        while (true) {
          for (let i = 0; i < t.hero.roles.length; i++) {
            // Type the role
            await typeWriter(rolesRef.current, t.hero.roles[i], 50);
            
            // Wait before deleting
            await new Promise(resolve => {
              const timeoutId = setTimeout(resolve, 2000);
              timeoutIds.push(timeoutId);
            });
            
            // Delete the text
            await new Promise(resolve => {
              let deleteCount = t.hero.roles[i].length;
              const deleteInterval = setInterval(() => {
                if (deleteCount > 0) {
                  rolesRef.current.innerHTML = rolesRef.current.innerHTML.slice(0, -1);
                  deleteCount--;
                } else {
                  clearInterval(deleteInterval);
                  resolve();
                }
              }, 30);
              timeoutIds.push(deleteInterval);
            });
          }
        }
      }
    };

    // Start typing roles after a delay
    const startTimeout = setTimeout(() => {
      typeRoles();
    }, 800);
    timeoutIds.push(startTimeout);

    // Cleanup function
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      typeTimeoutIds.forEach(id => clearTimeout(id));
    };
  }, [language, t.hero.roles]);

  return (
    <section className="hero section-animate" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.hero.title}</h1>
            <div className="hero-roles">
              <p className="hero-roles-text" ref={rolesRef}></p>
            </div>
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
                alt="Pham Le Truong - Software Tester, Quality Assurance"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
