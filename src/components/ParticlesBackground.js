import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#03e9f4"
            },
            "shape": {
              "type": "circle"
            },
            "opacity": {
              "value": 0.5,
              "random": false
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#03e9f4",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            }
          },
          "retina_detect": true
        });
      }
    };

    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      // Wait for particles.js to load
      const checkParticles = setInterval(() => {
        if (window.particlesJS) {
          clearInterval(checkParticles);
          initParticles();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkParticles);
      }, 10000);
    }
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;
