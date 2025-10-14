import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    const throttledUpdateScrollProgress = throttle(updateScrollProgress, 16);
    window.addEventListener('scroll', throttledUpdateScrollProgress);

    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollProgress);
    };
  }, []);

  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
