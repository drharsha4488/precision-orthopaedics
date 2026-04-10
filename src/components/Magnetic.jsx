import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Magnetic - A high-performance luxury physics wrapper
 * @param {children} React nodes
 * @param {number} pull - Strength of the attraction (0.1 to 0.5)
 */
const Magnetic = ({ children, pull = 0.25 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Luxury-grade spring physics (higher damping for refined feel)
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Subtle pull towards the cursor
    x.set((clientX - centerX) * pull);
    y.set((clientY - centerY) * pull);
  };

  const handleMouseLeave = () => {
    // Reset to neutral gracefully
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        transition: 'all 0.1s ease-out'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
