import React from 'react';

const About = () => {
  return (
    <section className="about section-animate" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a motivated and detail-oriented Software Engineering Intern
              with strong expertise in C#, ASP.NET Core MVC, and SQL Server.
              My focus is on creating intelligent, scalable solutions that
              solve real-world problems through secure user management,
              RESTful APIs, and AI integration.
            </p>
            <p>
              Currently pursuing Software Engineering at BTEC FPT British
              College, I have been awarded the Academic Achievement Award for
              Fall Semester 2024 in the Computing major. I bring innovative
              ideas to life through clean, efficient code and user-centered
              design.
            </p>
            <div className="education-info">
              <h3>Education</h3>
              <div className="education-item">
                <h4>BTEC FPT British College – Software Engineering</h4>
                <p>Mar 2023 – Present</p>
                <p className="achievement">
                  🏆 Awarded Academic Achievement Award – Fall Semester 2024
                  (Computing major)
                </p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
