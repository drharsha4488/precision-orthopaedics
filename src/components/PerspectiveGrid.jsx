import React, { useEffect, useState } from 'react';
import './PerspectiveGrid.css';

const PerspectiveGrid = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 20;
      const y = (e.clientX / window.innerWidth - 0.5) * -20;
      setRotate({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="grid-perspective-wrapper">
      <div 
        className="grid-plane"
        style={{
          transform: `perspective(1000px) rotateX(${60 + rotate.x}deg) rotateZ(${rotate.y}deg)`
        }}
      >
        <div className="grid-lines" />
      </div>
    </div>
  );
};

export default PerspectiveGrid;
