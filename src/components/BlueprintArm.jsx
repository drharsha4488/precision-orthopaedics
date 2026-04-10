import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlueprintArm - A scroll-driven SVG drawing of a robotic arm
 */
const BlueprintArm = () => {
  return (
    <div className="blueprint-arm-container" style={{ width: '300px', height: '300px' }}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base */}
        <motion.path
          d="M50 160 L150 160 L150 180 L50 180 Z"
          stroke="var(--secondary)"
          strokeWidth="1"
          strokeDasharray="4 2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Arm segment 1 */}
        <motion.path
          d="M100 160 L100 100 L140 60"
          stroke="var(--secondary)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        {/* Joint */}
        <motion.circle
          cx="100" cy="100" r="5"
          stroke="var(--secondary)"
          fill="rgba(6,182,212,0.1)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        {/* Arm segment 2 (Haptics) */}
        <motion.path
          d="M140 60 L180 40 L170 30"
          stroke="var(--secondary)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        />
        {/* Target Reticle */}
        <motion.circle
          cx="170" cy="30" r="10"
          stroke="var(--secondary)"
          strokeDasharray="2 2"
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 0.5, rotate: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
      </svg>
    </div>
  );
};

export default BlueprintArm;
