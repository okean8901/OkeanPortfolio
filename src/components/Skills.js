import React, { useEffect } from 'react';

const Skills = () => {
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
      title: 'Programming Languages & Frameworks',
      description: 'C#, .NET Framework, .NET Core, ASP.NET Core MVC',
      level: 90
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS',
      level: 85
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Databases',
      description: 'Microsoft SQL Server, MySQL',
      level: 80
    },
    {
      icon: 'fa-solid fa-tools',
      title: 'Development Tools',
      description: 'Visual Studio, Git, GitHub, Entity Framework Core, LINQ',
      level: 85
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'AI & Cloud Services',
      description: 'Azure AI Services, RESTful API Development, MVC Architecture',
      level: 75
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Soft Skills',
      description: 'Problem-Solving, Team Collaboration, Time Management, Adaptability',
      level: 90
    }
  ];

  return (
    <section className="skills section-animate" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
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
