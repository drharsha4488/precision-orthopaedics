import React, { useEffect, useState } from 'react';
import './GlowOrbs.css';

const GlowOrbs = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="glow-orbs-container">
      <div 
        className="orb orb-primary" 
        style={{ 
          left: `${50 + (mousePos.x - 50) * 0.1}%`, 
          top: `${30 + (mousePos.y - 50) * 0.1}%` 
        }}
      />
      <div 
        className="orb orb-secondary" 
        style={{ 
          left: `${20 + (50 - mousePos.x) * 0.1}%`, 
          top: `${70 + (50 - mousePos.y) * 0.1}%` 
        }}
      />
      <div 
        className="orb orb-tertiary" 
        style={{ 
          left: `${80 + (mousePos.x - 50) * 0.15}%`, 
          top: `${50 + (mousePos.y - 50) * 0.15}%` 
        }}
      />
    </div>
  );
};

export default GlowOrbs;
