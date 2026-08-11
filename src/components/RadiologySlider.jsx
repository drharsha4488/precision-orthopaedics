import React, { useState, useEffect, useRef } from 'react';
import '../pages/TreatmentTemplate.css';

const RadiologySlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, pos)));
  };

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="radiology-slider" ref={containerRef}>
      <div className="slider-image after-image">
        <img loading="lazy" decoding="async" width="1024" height="1024" src="/xray_after.webp" alt="Post-operative robotic knee replacement X-ray" />
        <span className="slider-label after-label">AFTER — Mako Robotic</span>
      </div>
      <div className="slider-image before-image" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img loading="lazy" decoding="async" width="1024" height="1024" src="/xray_before.webp" alt="Pre-operative osteoarthritis X-ray" />
        <span className="slider-label before-label">BEFORE — Grade IV OA</span>
      </div>
      <div
        className="slider-handle"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
      >
        <div className="handle-line"></div>
        <div className="handle-grip">⟷</div>
        <div className="handle-line"></div>
      </div>
    </div>
  );
};

export default RadiologySlider;
