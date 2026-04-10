import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, ShieldCheck, ArrowRight, BarChart3, Target, Gauge, Clock, UserCheck } from 'lucide-react';
import './EliteRecovery.css';

const EliteRecovery = () => {
  return (
    <div className="recovery-page">
      {/* ══ HERO: ACCELERATED PIPELINE ══ */}
      <section className="recovery-hero container animate-reveal">
        <div className="hero-content">
          <span className="tech-tag">Performance Lab 4.0</span>
          <h1>Accelerated <span className="text-secondary">Velocity</span> Recovery.</h1>
          <p className="subtitle">
            Where Precision Arthroplasty meets World-Class Athletic Performance. Utilizing the VALD Intelligence stack to secure sub-millimeter data for elite return-to-sport clearance.
          </p>
          <div className="hero-stats">
            <div className="stat-pill"><Gauge size={18}/> 40% Faster Mobilization</div>
            <div className="stat-pill"><Target size={18}/> 100% Symmetry Recovery</div>
          </div>
        </div>
      </section>

      {/* ══ THE VALD COMMAND CENTRE (Case Study) ══ */}
      <section className="container section-block">
        <div className="vald-dashboard bento-card col-span-full">
          <div className="dashboard-overlay"></div>
          <div className="case-study-header">
            <div className="player-profile">
              <div className="player-avatar">RD</div>
              <div>
                <h3>Case Study: Professional Cricketer (IPL)</h3>
                <span className="status-label live">Live Recovery Tracking</span>
              </div>
            </div>
            <div className="case-meta">
              <span>Goal: Return to Pivoting & Bowling</span>
              <span>Surgery: Robotic ACL-R (Internal Brace)</span>
            </div>
          </div>

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

          <div className="clearance-tag mt-md">
            <UserCheck size={18} /> **Stage 3 Cleared:** Functional Linear Running Started
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE TRACKS ══ */}
      <section className="container section-block grid-3">
        <div className="bento-card">
          <Zap size={32} className="text-secondary mb-md" />
          <h3>Neural-Dynamic Rehab</h3>
          <p>Proprioceptive re-education using high-frame-rate biofeedback to prevent re-injury.</p>
        </div>
        <div className="bento-card">
          <BarChart3 size={32} className="text-secondary mb-md" />
          <h3>VALD ForceDecks</h3>
          <p>Objective strength mapping to identify micro-deficits invisible to the human eye.</p>
        </div>
        <div className="bento-card">
          <Clock size={32} className="text-secondary mb-md" />
          <h3>24/7 Concierge Support</h3>
          <p>Direct communication with your surgical board for real-time recovery adjustments.</p>
        </div>
      </section>

      {/* ══ CALL TO ACTION ══ */}
      <section className="container mb-xl">
        <div className="bento-card bento-dark text-center p-xl">
           <h2>Reclaim Your Peak Performance.</h2>
           <p className="mt-sm">Elite recovery planning for professional athletes and high-performance individuals.</p>
           <button className="btn btn-primary mt-lg">Request Athlete Triage <ArrowRight size={18}/></button>
        </div>
      </section>
    </div>
  );
};

export default EliteRecovery;
