import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const CV = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="cv section-animate" id="cv">
      <div className="container">
        <h2 className="section-title">{t.cv.title}</h2>
        <p className="section-subtitle">{t.cv.subtitle}</p>
        <div className="cv-container">
          <div className="cv-image">
            <img src="/IMG/okean_cv.png" alt="CV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
