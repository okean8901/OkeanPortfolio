import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="experience section-animate" id="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <p className="section-subtitle">{t.experience.subtitle}</p>
        <div className="experience-container">
          {t.experience.jobs.map((job, index) => (
            <article className="experience-card" key={index} style={{ '--index': index }}>
              <div className="experience-header">
                <h3 className="experience-position">{job.position}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <div className="experience-meta">
                <time className="experience-period" dateTime={job.period}>{job.period}</time>
                <span className="experience-type">{job.type}</span>
              </div>
              <p className="experience-description">{job.description}</p>
              
              <div className="experience-details">
                <h4 className="experience-subtitle-text">{t.experience.responsibilitiesLabel}</h4>
                <ul className="experience-list">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                
                <h4 className="experience-subtitle-text">{t.experience.skillsLabel}</h4>
                <div className="experience-skills">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
