import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      href: 'https://www.facebook.com/profile.php?id=61579262682390',
      icon: 'fa-brands fa-facebook',
      label: 'Facebook'
    },
    {
      href: 'https://www.youtube.com/@phamletruong4450',
      icon: 'fa-brands fa-youtube',
      label: 'YouTube'
    },
    {
      href: 'https://www.tiktok.com/@letruong.2001',
      icon: 'fa-brands fa-tiktok',
      label: 'TikTok'
    },
    {
      href: 'https://x.com/truongle_89201',
      icon: 'fa-brands fa-twitter',
      label: 'Twitter'
    },
    {
      href: 'https://github.com/okean8901',
      icon: 'fa-brands fa-github',
      label: 'GitHub'
    }
  ];

  return (
    <aside className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className="social-link"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </aside>
  );
};

export default SocialLinks;
