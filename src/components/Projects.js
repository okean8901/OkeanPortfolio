import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.projects.projects.portfolio.title,
      description: t.projects.projects.portfolio.description,
      image: '/IMG/portfolio.png',
      category: 'web portfolio',
      github: 'https://github.com/okean8901/OkeanPortfolio',
      live: '#',
      duration: 'Dec 2024 – Jan 2025',
      role: 'Frontend Developer',
      tags: ['React', 'JavaScript (ES6+)', 'CSS3', 'HTML5', 'Responsive Design', 'Particles.js', 'FontAwesome', 'Context API']
    },
    {
      id: 2,
      title: t.projects.projects.aiCV.title,
      description: t.projects.projects.aiCV.description,
      image: '/IMG/AI_CV.png',
      category: 'ai web',
      github: 'https://github.com/okean8901/AI_CV_WEB.git',
      live: null,
      duration: 'Jun 2025 – Ongoing',
      role: 'Full Stack Developer',
      tags: ['ASP.NET Core 8.0', 'Azure AI Services', 'Entity Framework Core', 'SQL Server', 'Tailwind CSS', 'OAuth']
    },
    {
      id: 3,
      title: t.projects.projects.ecommerce.title,
      description: t.projects.projects.ecommerce.description,
      image: '/IMG/okeanmobile.png',
      category: 'ecommerce web',
      github: 'https://github.com/okean8901/OkeanMobile_ASP.NET_MVC.git',
      live: null,
      duration: 'Apr 2025 – May 2025',
      role: 'Full Stack Developer',
      tags: ['ASP.NET Core MVC', 'Entity Framework Core', 'Azure AI Services', 'VNPay', 'MailKit', 'RESTful APIs']
    },
    {
      id: 4,
      title: t.projects.projects.sims.title,
      description: t.projects.projects.sims.description,
      image: '/IMG/apdp.png',
      category: 'web',
      github: 'https://github.com/okean8901/SIMS_ASP.NET_MVC.git',
      live: null,
      duration: '2024',
      role: 'Full Stack Developer',
      tags: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'Role-based Access', 'User Authentication']
    },
    {
      id: 5,
      title: t.projects.projects.anime.title,
      description: t.projects.projects.anime.description,
      image: '/IMG/okeananime.png',
      category: 'web',
      github: 'https://github.com/okean8901/OkeanAnime_MovieWeb.git',
      live: null,
      duration: '2025',
      role: 'Full Stack Developer',
      tags: ['ASP.NET Core 8', 'MVC', 'Entity Framework Core', 'SQL Server', 'Identity', 'JWT', 'Bootstrap 5', 'jQuery']
    }
  ];

  const filters = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'web', label: t.projects.filters.web },
    { key: 'portfolio', label: t.projects.filters.portfolio },
    { key: 'ai', label: t.projects.filters.ai },
    { key: 'ecommerce', label: t.projects.filters.ecommerce }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="projects section-animate" id="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => handleFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card" data-category={project.category}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Code"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live"
                      >
                        <i className="fa-solid fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-details">
                  <p><strong>{t.projects.projectDetails.duration}:</strong> {project.duration}</p>
                  <p><strong>{t.projects.projectDetails.role}:</strong> {project.role}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
