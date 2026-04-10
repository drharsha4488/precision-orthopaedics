import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // default, precision, lock, hover
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (!target) return;

      const text = target.innerText || "";

      if (target.closest('.btn-primary') || target.closest('.btn-outline')) {
        setCursorState('lock');
      } else if (text.includes('0.01mm')) {
        setCursorState('convergence');
      } else if (target.closest('.parallax-bubble') || target.closest('.tech-tag')) {
        setCursorState('precision');
      } else if (target.tagName === 'A' || target.closest('.tech-card') || target.closest('.silo-card')) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHover);
    document.body.addEventListener('mouseenter', () => setIsVisible(true));
    document.body.addEventListener('mouseleave', () => setIsVisible(false));

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className={`custom-cursor state-${cursorState} ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div className="inner-dot" />
      <div className="reticle-ring" />
      <div className="reticle-crosshair-h" />
      <div className="reticle-crosshair-v" />
      <div className="reticle-lock-corners" />
    </div>
  );
};

export default CustomCursor;
