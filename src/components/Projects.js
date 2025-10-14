import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing professional experience and projects',
      image: '/IMG/portfolio.png',
      category: 'web portfolio',
      github: 'https://github.com/okean8901/OkeanPortfolio',
      live: '#',
      duration: 'Dec 2024 – Jan 2025',
      role: 'Frontend Developer',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Particles.js', 'FontAwesome']
    },
    {
      id: 2,
      title: 'AI CV Analysis System',
      description: 'Intelligent Resume Analysis Platform with Azure AI Services integration',
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
      title: 'Okean Mobile – E-commerce Platform',
      description: 'Comprehensive e-commerce solution with AI-powered features and secure payment integration',
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
      title: 'Student Information Management System',
      description: 'Comprehensive system for managing student data, courses, enrollments, and user authentication with role-based access control',
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
      title: 'Okean AnimeMovie',
      description: 'ASP.NET Core MVC anime viewing web application: browse anime, watch episodes, comment, favorite, trend and manage content. Optimized performance, clear UI and easy to extend.',
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
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'ai', label: 'AI' },
    { key: 'ecommerce', label: 'E-commerce' }
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
        <h2 className="section-title">My Projects</h2>
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
                  <p><strong>Duration:</strong> {project.duration}</p>
                  <p><strong>Role:</strong> {project.role}</p>
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
