import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const typeWriter = (element, text, speed = 50) => {
      let i = 0;
      element.innerHTML = '';
      
      const type = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };
      
      type();
    };

    if (descriptionRef.current) {
      const originalText = descriptionRef.current.textContent;
      descriptionRef.current.textContent = '';
      
      setTimeout(() => {
        typeWriter(descriptionRef.current, originalText, 30);
      }, 1000);
    }
  }, []);

  return (
    <section className="hero section-animate" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Pham Le Truong</h1>
            <p className="hero-subtitle">Software Engineering</p>
            <p className="hero-description" ref={descriptionRef}>
              Motivated and detail-oriented Software Engineering with strong
              expertise in C#, ASP.NET Core MVC, and SQL Server. Proven
              ability to design, develop, and optimize web applications with
              secure user management, RESTful APIs, and AI integration.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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
