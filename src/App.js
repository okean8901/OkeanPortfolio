import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CV from './components/CV';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useEffect(() => {
    // Initialize particles.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Add scroll animation effect
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.section-animate');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
          section.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <ParticlesBackground />
        <ScrollProgress />
        <Header />
        <SocialLinks />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <CV />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;