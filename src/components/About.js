import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="about section-animate" id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {t.about.description1}
            </p>
            <p>
              {t.about.description2}
            </p>
            <div className="education-info">
              <h3>{t.about.education}</h3>
              <div className="education-item">
                <h4>{t.about.educationTitle}</h4>
                <p>{t.about.educationPeriod}</p>
                <p className="achievement">
                  {t.about.achievement}
                </p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">{t.about.stats.yearsExperience}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">{t.about.stats.projectsCompleted}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">{t.about.stats.technologies}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
