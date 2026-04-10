import React from 'react';
import { ArrowRight, Crosshair, Target, ShieldCheck, PlayCircle, Cpu, Activity, Zap, Shield, Microscope, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundWaves from '../components/BackgroundWaves';
import GlowOrbs from '../components/GlowOrbs';
import PerspectiveGrid from '../components/PerspectiveGrid';
import use3DTilt from '../hooks/use3DTilt';
import Magnetic from '../components/Magnetic';
import BlueprintArm from '../components/BlueprintArm';
import './Home.css';

const Home = () => {
  const tilt1 = use3DTilt(10);
  const tilt2 = use3DTilt(10);
  const tilt3 = use3DTilt(10);
  const tilt4 = use3DTilt(10);
  
  const silo1 = use3DTilt(8);
  const silo2 = use3DTilt(8);
  const silo3 = use3DTilt(8);
  const silo4 = use3DTilt(8);
  return (
    <div className="home-container">
      <GlowOrbs />
      <PerspectiveGrid />
      {/* ══ CINEMATIC HERO ══ */}
      <section className="hero-cinematic">
        <img 
          src="/robotic_surgery_hero_1775752719796.png" 
          className="hero-bg-visual" 
          alt="Precision Robotic Surgery Environment" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
        <div className="editorial-text">PRECISION</div>
        
        <div className="container hero-content animate-reveal">
          <div className="elite-badge">
            <span className="live-dot"></span>
            Unrivaled Clinical Mastery
          </div>
          
          <h1 className="hero-title kinetic-text">
            The Science of<br />
            <span className="text-gradient">Human Restoration.</span>
          </h1>
          
          <p className="hero-subtitle">
            Establishing the global standard for Joint Preservation and Robotic Arthroplasty. We merge UK-trained HOD leadership with the absolute latest in USA-engineered surgical technology.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary lg" onClick={() => window.location.href='/symptoms'}>
              Symptom Checker <Zap size={18} />
            </button>
            <button className="btn btn-outline lg">
              <PlayCircle size={18} /> Watch Surgery Tech
            </button>
          </div>

          <div className="stats-strip">
            <div className="stat-glass-bubble">
              <h4>15k+</h4>
              <span>Elite Procedures</span>
            </div>
            <div className="stat-glass-bubble">
              <h4>0.01mm</h4>
              <span>Robotic Mapping</span>
            </div>
            <div className="stat-glass-bubble">
              <h4>UK/US</h4>
              <span>Trained Faculty</span>
            </div>
          </div>
        </div>

        <BackgroundWaves />
      </section>

      {/* ══ THE ELITE TECH STACK ══ */}
      <section className="tech-bento-section">
        <div className="container">
          <div className="section-header text-center mb-xl">
             <span className="tech-tag">Engineering Clinical Outcomes</span>
              <h2 className="section-title">The Internal Tech Stack</h2>
              <p className="body-text" style={{maxWidth: '700px', margin: '1rem auto'}}>We utilize the world's most advanced surgical and diagnostic platforms to ensure zero-compromise precision.</p>
              <div className="blueprint-overlay">
                <BlueprintArm />
              </div>
           </div>

          <div className="tech-grid">
            <Magnetic pull={0.15}>
              <div 
                className="tech-card col-span-8 animate-reveal"
                style={tilt1.style}
                onMouseMove={tilt1.onMouseMove}
                onMouseLeave={tilt1.onMouseLeave}
              >
                <div className="chasing-border" />
                <span className="tech-tag">Signature Technology</span>
                <h3><Cpu size={24} className="text-secondary" /> Stryker Mako 4.0® SmartRobotics</h3>
                <p>Sub-millimeter 3D mapping and haptic boundary protection for the most accurate joint replacements in India.</p>
                <img src="/precision_mri_visual_1775752750316.png" className="tech-img-preview" alt="Mako Robotic Precision" />
              </div>
            </Magnetic>

            <Magnetic pull={0.2}>
              <div 
                className="tech-card col-span-4 animate-reveal" 
                style={{ ...tilt2.style, animationDelay: '0.1s' }}
                onMouseMove={tilt2.onMouseMove}
                onMouseLeave={tilt2.onMouseLeave}
              >
                <div className="chasing-border" />
                <span className="tech-tag">Visual Superiority</span>
                <h3><Microscope size={24} className="text-secondary" /> Arthrex Synergy UHD4</h3>
                <p>Native 4K HDR visualization for complex shoulder and ligament reconstructions, providing 58x more color depth than standard HD.</p>
                <Link to="/silo/shoulder" className="btn btn-outline w-100 mt-md">Explore Upper Limb</Link>
              </div>
            </Magnetic>

            <Magnetic pull={0.2}>
              <div 
                className="tech-card col-span-4 animate-reveal" 
                style={{ ...tilt3.style, animationDelay: '0.2s' }}
                onMouseMove={tilt3.onMouseMove}
                onMouseLeave={tilt3.onMouseLeave}
              >
                <div className="chasing-border" />
                <span className="tech-tag">Performance Data</span>
                <h3><Activity size={24} className="text-secondary" /> VALD Performance Centre</h3>
                <p>Utilizing ForceDecks and DynaMo to provide objective, data-driven return-to-sport clearance for elite athletes.</p>
                <Link to="/recovery" className="btn btn-primary w-100 mt-md">Sports Centre</Link>
              </div>
            </Magnetic>

            <Magnetic pull={0.15}>
              <div 
                className="tech-card col-span-8 animate-reveal" 
                style={{ ...tilt4.style, animationDelay: '0.3s' }}
                onMouseMove={tilt4.onMouseMove}
                onMouseLeave={tilt4.onMouseLeave}
              >
                <div className="chasing-border" />
                <span className="tech-tag">Joint Restoration</span>
                <h3><Zap size={24} className="text-secondary" /> Precision Biocentrics Unit</h3>
                <p>Molecular-level regeneration using Exosome therapy and BMAC to preserve your natural joints. Led by Dr. Ravi Teja.</p>
                <img src="/sports_performance_lab_1775752734674.png" className="tech-img-preview" alt="VALD Performance Lab" />
              </div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ══ THE SPECIALIST SIILOS (OVERHAULED) ══ */}
      <section className="silo-entry-section container mt-xl mb-xl">
        <div className="section-header text-center mb-lg">
           <span className="tech-tag">Targeted Clinical Authority</span>
           <h2 className="section-title">Specialized Authority Hubs</h2>
        </div>

        <div className="directory-bento-grid">
           <Magnetic pull={0.1}>
             <Link 
               to="/silo/knee" 
               className="silo-card animate-reveal"
               style={silo1.style}
               onMouseMove={silo1.onMouseMove}
               onMouseLeave={silo1.onMouseLeave}
             >
                <div className="chasing-border" />
                <img src="/anatomical_knee_schematic_1775754592483.png" className="silo-schematic" alt="" />
                <div className="silo-card-content">
                  <Activity size={32} className="text-secondary mb-sm" />
                  <h4>Knee & Leg Hub</h4>
                  <p>Mako Robotics & Joint Preservation</p>
                  <div className="silo-lead-tag">Dr. Amith | Dr. Ravi Teja</div>
                </div>
             </Link>
           </Magnetic>

           <Magnetic pull={0.1}>
             <Link 
               to="/silo/hip" 
               className="silo-card animate-reveal"
               style={{ ...silo2.style, animationDelay: '0.1s' }}
               onMouseMove={silo2.onMouseMove}
               onMouseLeave={silo2.onMouseLeave}
             >
                <div className="chasing-border" />
                <img src="/anatomical_hip_schematic_1775754608460.png" className="silo-schematic" alt="" />
                <div className="silo-card-content">
                  <Layers size={32} className="text-secondary mb-sm" />
                  <h4>Hip & Pelvis Hub</h4>
                  <p>DAA Arthroplasty & Complex Trauma</p>
                  <div className="silo-lead-tag">Dr. Nitish Bhan</div>
                </div>
             </Link>
           </Magnetic>

           <Magnetic pull={0.1}>
             <Link 
               to="/silo/shoulder" 
               className="silo-card animate-reveal"
               style={{ ...silo3.style, animationDelay: '0.2s' }}
               onMouseMove={silo3.onMouseMove}
               onMouseLeave={silo3.onMouseLeave}
             >
                <div className="chasing-border" />
                <img src="/anatomical_shoulder_schematic_1775754624021.png" className="silo-schematic" alt="" />
                <div className="silo-card-content">
                  <Zap size={32} className="text-secondary mb-sm" />
                  <h4>Shoulder & Sports</h4>
                  <p>Arthrex 4K Hub & VALD Athletics</p>
                  <div className="silo-lead-tag">Dr. Deepthi | Dr. Harsha</div>
                </div>
             </Link>
           </Magnetic>

           <Magnetic pull={0.1}>
             <Link 
               to="/silo/spine" 
               className="silo-card animate-reveal"
               style={{ ...silo4.style, animationDelay: '0.3s' }}
               onMouseMove={silo4.onMouseMove}
               onMouseLeave={silo4.onMouseLeave}
             >
                <div className="chasing-border" />
                <div className="silo-card-content">
                  <Shield size={32} className="text-secondary mb-sm" />
                  <h4>Advanced Spine Hub</h4>
                  <p>Minimally Invasive Disc Care</p>
                  <div className="silo-lead-tag">Dr. Prashanth Reddy</div>
                </div>
             </Link>
           </Magnetic>
        </div>
      </section>

      {/* ══ GLOBAL LEADERSHIP BLOCK ══ */}
      <section className="container mt-xl mb-xl">
        <div className="bento-card bento-dark text-center p-xl animate-reveal">
           <Shield size={60} className="text-secondary mb-md" style={{margin: '0 auto'}} />
           <h2>Collective Clinical Intelligence</h2>
           <p className="mt-sm body-text" style={{maxWidth: '800px', margin: '0 auto'}}>
             Every patient at Precision Orthopaedics benefits from our Collaborative Surgical Board. We merge UK-trained HOD leadership with the absolute latest in USA-engineered surgical technology.
           </p>
           
           <div className="clinical-authority-badge mt-md">
             <span className="text-secondary">Clinical Board:</span> Dr. Deepthi Reddy (HOD) | Dr. Amith Reddy | Dr. Nitish Bhan | Dr. Ravi Teja | Dr. Prashanth | Dr. Harsha
           </div>

           <div className="hero-actions mt-lg">
              <Link to="/doctors" className="btn btn-primary">Meet the Surgical Board</Link>
              <Link to="/symptoms" className="btn btn-outline">Check Your Symptoms</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
