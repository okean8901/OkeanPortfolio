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
      icon: 'fa-solid fa-code',
      title: t.skills.skillCategories.programming,
      description: t.skills.skillDescriptions.programming,
      level: 90
    },
    {
      icon: 'fa-solid fa-globe',
      title: t.skills.skillCategories.web,
      description: t.skills.skillDescriptions.web,
      level: 85
    },
    {
      icon: 'fa-solid fa-database',
      title: t.skills.skillCategories.database,
      description: t.skills.skillDescriptions.database,
      level: 80
    },
    {
      icon: 'fa-solid fa-tools',
      title: t.skills.skillCategories.tools,
      description: t.skills.skillDescriptions.tools,
      level: 85
    },
    {
      icon: 'fa-solid fa-brain',
      title: t.skills.skillCategories.ai,
      description: t.skills.skillDescriptions.ai,
      level: 75
    },
    {
      icon: 'fa-solid fa-users',
      title: t.skills.skillCategories.soft,
      description: t.skills.skillDescriptions.soft,
      level: 90
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
