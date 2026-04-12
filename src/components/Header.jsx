import React from 'react';
import { Phone, MapPin, Clock, Calendar, Menu, X, ChevronDown, Shield, Zap, Target, Activity, Microscope, Crosshair, Settings, Layers } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="header-wrapper animate-reveal">
      <header className="global-header">
        <div className="nav-island">
          <a href="/" className="brand-logo" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-text">Precision <span>Ortho</span></span>
          </a>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            
            <li className="nav-dropdown">
              <span className="dropdown-trigger">Clinical Divisions <ChevronDown size={14} /></span>
              <ul className="dropdown-menu">
                <li className="menu-header">Anatomical Architecture</li>
                <li><a href="/clinical-divisions/lower-extremity" onClick={() => setIsMenuOpen(false)}>Lower Limb Alignment Surgery</a></li>
                <li><a href="/clinical-divisions/pelvic-hip-reconstruction" onClick={() => setIsMenuOpen(false)}>Pelvic Architecture Restoration</a></li>
                <li><a href="/clinical-divisions/upper-extremity" onClick={() => setIsMenuOpen(false)}>Upper Limb Reconstruction</a></li>
                <li><a href="/clinical-divisions/sports-medicine" onClick={() => setIsMenuOpen(false)}>Athletic Performance Surgery</a></li>
                <li className="menu-intro">Board-Governed Anatomical Subspecialty Units</li>
              </ul>
            </li>

            <li className="nav-dropdown">
              <span className="dropdown-trigger">Clinical Programs <ChevronDown size={14} /></span>
              <ul className="dropdown-menu">
                <li className="menu-header">INSTITUTIONAL PROGRAMS</li>
                <li><a href="/clinical-programs/robotic-arthroplasty" onClick={() => setIsMenuOpen(false)}>Robotic Arthroplasty</a></li>
                <li><a href="/clinical-programs/joint-preservation" onClick={() => setIsMenuOpen(false)}>Joint Preservation</a></li>
                <li><a href="/clinical-programs/spine-care" onClick={() => setIsMenuOpen(false)}>Spine & Neural Restoration</a></li>
                <li><a href="/clinical-programs/musculoskeletal-oncology" onClick={() => setIsMenuOpen(false)}>Oncology & Bone Tumors</a></li>
                <li><a href="/clinical-programs/complex-trauma" onClick={() => setIsMenuOpen(false)}>Complex Trauma Hub</a></li>
                <li><a href="/clinical-programs/diagnostics-lab" onClick={() => setIsMenuOpen(false)}>Diagnostics & Performance Lab</a></li>
                <li className="separator"></li>
                <li><a href="/clinical-programs" onClick={() => setIsMenuOpen(false)} className="view-all">View All Programs →</a></li>
                <li className="menu-intro">Board-Governed Multidisciplinary Surgical Platforms</li>
              </ul>
            </li>

            <li className="nav-dropdown">
              <span className="dropdown-trigger">Procedures <ChevronDown size={14} /></span>
              <ul className="dropdown-menu wide-menu">
                <li className="menu-header">SURGICAL DIRECTORY</li>
                <div className="menu-grid">
                  <div className="menu-col">
                    <span className="col-title">Arthroplasty</span>
                    <a href="/procedures/robotic-knee-replacement">Knee Replacement</a>
                    <a href="/procedures/robotic-hip-replacement">Hip Replacement</a>
                    <a href="/procedures/revision-knee-replacement">Revision Surgery</a>
                  </div>
                  <div className="menu-col">
                    <span className="col-title">Preservation</span>
                    <a href="/procedures/high-tibial-osteotomy">Osteotomy</a>
                    <a href="/procedures/cartilage-restoration">Cartilage Restoration</a>
                    <a href="/procedures/meniscal-root-repair">Meniscal Repair</a>
                  </div>
                  <div className="menu-col">
                    <span className="col-title">Upper Limb</span>
                    <a href="/procedures/rotator-cuff-repair">Rotator Cuff Repair</a>
                    <a href="/procedures/reverse-shoulder-arthroplasty">Reverse Shoulder</a>
                    <a href="/procedures/latarjet-stabilization">Latarjet Stabilization</a>
                  </div>
                </div>
                <li className="separator"></li>
                <li><a href="/procedures" onClick={() => setIsMenuOpen(false)} className="view-all">Technical Reconstruction Library →</a></li>
                <li className="menu-intro">Protocol-Mapped Technical Reconstruction Library</li>
              </ul>
            </li>

            <li className="nav-dropdown">
              <span className="dropdown-trigger">Clinical Workflows <ChevronDown size={14} /></span>
              <ul className="dropdown-menu">
                <li className="menu-header">PROTOCOL PIPELINES</li>
                <li><a href="/workflows/robotic-arthroplasty-planning" onClick={() => setIsMenuOpen(false)}>Robotic Case Planning</a></li>
                <li><a href="/workflows/return-to-sport-clearance" onClick={() => setIsMenuOpen(false)}>Return-to-Sport Clearance</a></li>
                <li><a href="/workflows/board-review-protocol" onClick={() => setIsMenuOpen(false)}>Board Review Protocol</a></li>
                <li><a href="/workflows/joint-preservation-pathway" onClick={() => setIsMenuOpen(false)}>Biological Restoration Path</a></li>
                <li className="separator"></li>
                <li><a href="/workflows" onClick={() => setIsMenuOpen(false)} className="view-all">View All Process Hubs →</a></li>
              </ul>
            </li>

            <li className="nav-dropdown">
              <span className="dropdown-trigger">Surgeons <ChevronDown size={14} /></span>
              <ul className="dropdown-menu">
                <li><a href="/doctors#surgical-board" onClick={() => setIsMenuOpen(false)}>Surgical Board</a></li>
                <li><a href="/doctors#division-specialists" onClick={() => setIsMenuOpen(false)}>Division Specialists</a></li>
                <li><a href="/doctors#program-leads" onClick={() => setIsMenuOpen(false)}>Program Leads</a></li>
              </ul>
            </li>

            <li><a href="/locations" onClick={() => setIsMenuOpen(false)}>Locations</a></li>
          </ul>

          <div className="header-actions">
             <a href="/symptoms" className="symptom-cta" onClick={() => setIsMenuOpen(false)}>
               Check Your Symptoms
             </a>
             <a href="tel:+917842932051" className="contact-pill" style={{textDecoration: 'none'}}>
               <span className="contact-label">Care Coordination Desk</span>
               <span className="contact-num"> +91 78429 32051</span>
             </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="authority-strip">
           <div className="container strip-flex">
              <div class="strip-item"><Shield size={12}/> Board-Reviewed Surgical Planning</div>
              <div class="strip-item"><Shield size={12}/> Protocol-Sequenced Rehabilitation Pathways</div>
              <div class="strip-item"><Shield size={12}/> NAQI Infection Surveillance Compliance</div>
              <div class="strip-item"><Shield size={12}/> Collaborative Surgical Board Oversight Model</div>
           </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
