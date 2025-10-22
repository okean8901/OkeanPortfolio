import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification(t.contact.notifications.fillFields, 'error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      showNotification(t.contact.notifications.validEmail, 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      showNotification(t.contact.notifications.success, 'success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <section className="contact section-animate" id="contact">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h3>{t.contact.emailLabel}</h3>
                  <p>phamletruong2001@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-map-marker-alt"></i>
                <div>
                  <h3>{t.contact.contactInfo}</h3>
                  <p>{t.contact.location}</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h3>{t.contact.phoneLabel}</h3>
                  <p>0823 369 604</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-brands fa-github"></i>
                <div>
                  <h3>{t.contact.githubLabel}</h3>
                  <p>github.com/okean8901</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <label>{t.contact.name}</label>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <label>{t.contact.email}</label>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  rows="5"
                ></textarea>
                <label>{t.contact.message}</label>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <i className={`fa-solid ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                {isSubmitting ? t.contact.sending : t.contact.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="download-cv-section section-animate">
        <div className="container">
          <h2 className="section-title">{t.contact.downloadCV}</h2>
          <p className="section-subtitle">
            {t.contact.downloadCVSubtitle}
          </p>
          <a
            href="/PhamLeTruong_Resume.pdf"
            download
            className="download-cv-btn large"
          >
            <i className="fa-solid fa-download"></i>
            {t.contact.downloadCVBtn}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
