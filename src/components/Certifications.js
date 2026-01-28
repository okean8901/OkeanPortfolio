import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Certifications = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="certifications section-animate" id="certifications">
      <div className="container">
        <h2 className="section-title">{t.certifications.title}</h2>
        <p className="section-subtitle">{t.certifications.subtitle}</p>
        <div className="certifications-container">
          {Object.values(t.certifications.certificates).map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-header">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
              <div className="certification-details">
                <p className="certification-date">
                  <strong>Issued:</strong> {cert.issued}
                </p>
                <p className="certification-id">
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
