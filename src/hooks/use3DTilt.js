import { useState, useCallback } from 'react';

/**
 * use3DTilt - A hook for physical 3D tilt effects
 * @param {number} intensity - How aggressive the tilt is
 */
const use3DTilt = (intensity = 15) => {
  const [style, setStyle] = useState({});

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out'
    });
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  }, []);

  return { style, onMouseMove, onMouseLeave };
};

export default use3DTilt;
