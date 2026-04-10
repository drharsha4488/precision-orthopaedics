import React from 'react';
import { motion } from 'framer-motion';
import '../pages/EliteRecovery.css';

const RecoveryMetrics = () => {
  return (
    <div className="metrics-grid mt-lg">
      <div className="metric-box">
        <span className="label">ForcePlate Symmetry</span>
        <div className="metric-track">
          <motion.div 
            className="metric-fill" 
            initial={{ width: 0 }} 
            whileInView={{ width: '92%' }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <span className="val">92% Baseline</span>
      </div>
      <div className="metric-box">
        <span className="label">Gait Velocity</span>
        <div className="metric-track">
          <motion.div 
            className="metric-fill" 
            initial={{ width: 0 }} 
            whileInView={{ width: '88%' }} 
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        <span className="val">2.4 m/s</span>
      </div>
      <div className="metric-box">
        <span className="label">Jump Power (Watt)</span>
        <div className="metric-track">
           <motion.div 
            className="metric-fillHighlight" 
            initial={{ width: 0 }} 
            whileInView={{ width: '75%' }} 
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
        </div>
        <span className="val">75% Target</span>
      </div>
    </div>
  );
};

export default RecoveryMetrics;
