import React from 'react';
import { Cpu, Microscope, Activity, ShieldCheck, Zap, Crosshair, BarChart3, ChevronRight } from 'lucide-react';
import './Technology.css';

const Technology = () => {
  return (
    <div className="tech-hub-page">
      <section className="tech-hero animate-reveal">
         <div className="container text-center">
            <span className="elite-badge mb-sm">The Precision Tech Stack</span>
            <h1>The <span>Robotic Command</span> Center</h1>
            <p className="hero-subtitle">We deploy the world's most advanced surgical and diagnostic arrays to eliminate human error and achieve molecular precision.</p>
         </div>
      </section>

      <div className="container tech-grid-main">
        {/* TECHNOLOGY 1: STRYKER MAKO */}
        <div className="tech-block bento-card col-span-full border-glow animate-reveal">
           <div className="tech-header-split">
             <div className="tech-info">
                <span className="tech-category">Robotic Arthroplasty</span>
                <h2>Stryker Mako 4.0® SmartRobotics</h2>
                <p>Mako SmartRobotics combines three key components: 3D CT-based planning, AccuStop™ haptic technology, and insightful data analytics. By generating a 3D digital twin of your anatomy, we map the exact path before a single incision is made.</p>
                <div className="feature-list mt-md">
                   <div className="feature-item"><CheckCircle size={14}/> AccuStop™ Haptic Boundary Protection</div>
                   <div className="feature-item"><CheckCircle size={14}/> Virtual Range of Motion (vROM) Simulation</div>
                   <div className="feature-item"><CheckCircle size={14}/> Sub-millimeter Surgical Accuracy</div>
                </div>
             </div>
             <div className="tech-visual-large">
                <img src="/robotic_surgery_hero_1775752719796.png" alt="Mako Robotics" />
             </div>
           </div>
        </div>

        {/* TECHNOLOGY 2: ARTHREX SYNERGY UHD4 */}
        <div className="tech-block bento-card col-span-2 animate-reveal" style={{animationDelay: '0.1s'}}>
           <span className="tech-category">Surgical Imaging</span>
           <h3>Arthrex Synergy UHD4™</h3>
           <p>The first 4K all-in-one surgical imaging system. It provides native 4K resolution and 10-bit color depth, delivering 58x more color information than standard HD systems.</p>
           <div className="tech-stats-grid mt-md">
              <div className="t-stat"><span>Resolution</span><strong>Native 4K</strong></div>
              <div className="t-stat"><span>Color Depth</span><strong>10-Bit HDR</strong></div>
           </div>
           <div className="mt-md">
              <p className="body-text-sm">Used exclusively by Dr. Deepthi and Dr. Ravi Teja for complex shoulder and knee ligament reconstructions.</p>
           </div>
        </div>

        {/* TECHNOLOGY 3: VALD PERFORMANCE */}
        <div className="tech-block bento-card col-span-1 animate-reveal" style={{animationDelay: '0.2s'}}>
           <span className="tech-category">Sports Performance</span>
           <h3>VALD ForceDecks</h3>
           <p>Dual force plate technology that analyzes how athletes move, land, and produce force.</p>
           <ul className="mini-feature-list mt-sm">
              <li>Biomechanical Symmetry Index</li>
              <li>Rate of Force Development (RFD)</li>
              <li>Neuromuscular Readiness</li>
           </ul>
           <div className="mt-md text-secondary" style={{fontWeight: 600, fontSize: '0.9rem'}}>
              Data-driven RTS clearing by Dr. Harsha.
           </div>
        </div>

        {/* TECHNOLOGY 4: VALD DYNAMO */}
        <div className="tech-block bento-card col-span-1 animate-reveal" style={{animationDelay: '0.3s'}}>
           <span className="tech-category">Strength Analysis</span>
           <h3>VALD DynaMo™</h3>
           <p>Handheld dynamometry and inclinometry for precise muscle strength and ROM tracking.</p>
           <div className="tech-visual-mini mt-sm">
              <Activity size={40} className="text-secondary" />
           </div>
        </div>
      </div>

      <section className="tech-trust-banner container mt-xl mb-xl text-center">
         <div className="bento-card bento-dark p-xl">
            <ShieldCheck size={48} className="text-secondary mb-md" style={{margin: '0 auto'}} />
            <h2>Zero Compromise Sterility</h2>
            <p className="body-text">Our tech stack operates within Class 100 Laminar Airflow suites at Apollo Hospitals, ensuring the absolute lowest risk of surgical site infection in the region.</p>
         </div>
      </section>
    </div>
  );
};

export default Technology;
