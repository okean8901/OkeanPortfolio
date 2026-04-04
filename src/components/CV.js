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
          <div className="cv-items">
            <div className="cv-item">
              <img src="/IMG/CV_QA_Pham_Le_Truong_page-0001.jpg" alt="CV Vietnamese" />
              <a href="/CV_QA_Pham_Le_Truong.pdf" download className="download-cv-btn">
                <i className="fa-solid fa-download"></i>
                <span>{t.contact.downloadCVBtnVI}</span>
              </a>
            </div>
            <div className="cv-item">
              <img src="/IMG/CV_QA_PhamLeTruong_EN_page-0001.jpg" alt="CV English" />
              <a href="/CV_QA_PhamLeTruong_EN.pdf" download className="download-cv-btn">
                <i className="fa-solid fa-download"></i>
                <span>{t.contact.downloadCVBtnEN}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
