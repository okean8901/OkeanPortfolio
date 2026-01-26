import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const animateSkills = () => {
      const skillCards = document.querySelectorAll('.skill-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
              progressBar.style.transform = 'translateX(0)';
            }
          }
        });
      }, { threshold: 0.5 });

      skillCards.forEach(card => observer.observe(card));
    };

    animateSkills();
  }, []);

  const skills = [
    {
      icon: 'fa-solid fa-flask-vial',
      title: t.skills.skillCategories.testing,
      description: t.skills.skillDescriptions.testing,
      level: 95
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: t.skills.skillCategories.techniques,
      description: t.skills.skillDescriptions.techniques,
      level: 92
    },
    {
      icon: 'fa-solid fa-toolbox',
      title: t.skills.skillCategories.tools,
      description: t.skills.skillDescriptions.tools,
      level: 90
    },
    {
      icon: 'fa-solid fa-database',
      title: t.skills.skillCategories.database,
      description: t.skills.skillDescriptions.database,
      level: 88
    },
    {
      icon: 'fa-solid fa-globe',
      title: t.skills.skillCategories.web,
      description: t.skills.skillDescriptions.web,
      level: 85
    },
    {
      icon: 'fa-solid fa-users',
      title: t.skills.skillCategories.soft,
      description: t.skills.skillDescriptions.soft,
      level: 94
    }
  ];

  return (
    <section className="skills section-animate" id="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-level">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
