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
            <li className="nav-item">
              <a href="/about" className="menu-item" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            
            <li className="nav-item">
              <span className="nav-label">Clinical Divisions <ChevronDown size={14} /></span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Anatomical Architecture</div>
                    <a href="/clinical-divisions/lower-extremity" className="menu-item" onClick={() => setIsMenuOpen(false)}>Lower Limb Alignment</a>
                    <a href="/clinical-divisions/pelvic-hip-reconstruction" className="menu-item" onClick={() => setIsMenuOpen(false)}>Pelvic Architecture</a>
                    <a href="/clinical-divisions/upper-extremity" className="menu-item" onClick={() => setIsMenuOpen(false)}>Upper Extremity Recon</a>
                    <a href="/clinical-divisions/sports-medicine" className="menu-item" onClick={() => setIsMenuOpen(false)}>Athletic Performance</a>
                    <div className="menu-footer-link">Board-Governed Anatomical Units</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-label">Clinical Programs <ChevronDown size={14} /></span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">INSTITUTIONAL PROGRAMS</div>
                    <a href="/clinical-programs/robotic-arthroplasty" className="menu-item" onClick={() => setIsMenuOpen(false)}>Robotic Arthroplasty</a>
                    <a href="/clinical-programs/joint-preservation" className="menu-item" onClick={() => setIsMenuOpen(false)}>Joint Preservation</a>
                    <a href="/clinical-programs/spine-care" className="menu-item" onClick={() => setIsMenuOpen(false)}>Spine & Neural Restoration</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Specialized Centers</div>
                    <a href="/clinical-programs/musculoskeletal-oncology" className="menu-item" onClick={() => setIsMenuOpen(false)}>Oncology & Bone Tumors</a>
                    <a href="/clinical-programs/complex-trauma" className="menu-item" onClick={() => setIsMenuOpen(false)}>Complex Trauma Hub</a>
                    <a href="/clinical-programs/diagnostics-lab" className="menu-item" onClick={() => setIsMenuOpen(false)}>Diagnostics & Performance Lab</a>
                  </div>
                  <div>
                     <a href="/clinical-programs" className="menu-footer-link" onClick={() => setIsMenuOpen(false)}>View All Programs →</a>
                     <div className="menu-footer-link">Board-Governed Surgical Platforms</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-label">Procedures <ChevronDown size={14} /></span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Arthroplasty</div>
                    <a href="/procedures/robotic-knee-replacement" className="menu-item" onClick={() => setIsMenuOpen(false)}>Knee Replacement</a>
                    <a href="/procedures/robotic-hip-replacement" className="menu-item" onClick={() => setIsMenuOpen(false)}>Hip Replacement</a>
                    <a href="/procedures/revision-knee-replacement" className="menu-item" onClick={() => setIsMenuOpen(false)}>Revision Surgery</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Preservation</div>
                    <a href="/procedures/high-tibial-osteotomy" className="menu-item" onClick={() => setIsMenuOpen(false)}>Osteotomy</a>
                    <a href="/procedures/cartilage-restoration" className="menu-item" onClick={() => setIsMenuOpen(false)}>Cartilage Restoration</a>
                    <a href="/procedures/meniscal-root-repair" className="menu-item" onClick={() => setIsMenuOpen(false)}>Meniscal Repair</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Upper Limb</div>
                    <a href="/procedures/rotator-cuff-repair" className="menu-item" onClick={() => setIsMenuOpen(false)}>Rotator Cuff Repair</a>
                    <a href="/procedures/reverse-shoulder-arthroplasty" className="menu-item" onClick={() => setIsMenuOpen(false)}>Reverse Shoulder</a>
                    <a href="/procedures/latarjet-stabilization" className="menu-item" onClick={() => setIsMenuOpen(false)}>Latarjet Stabilization</a>
                  </div>
                </div>
                <a href="/procedures" className="menu-footer-link" onClick={() => setIsMenuOpen(false)}>Technical Reconstruction Library →</a>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-label">Workflows <ChevronDown size={14} /></span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">PROTOCOL PIPELINES</div>
                    <a href="/workflows/robotic-arthroplasty-planning" className="menu-item" onClick={() => setIsMenuOpen(false)}>Robotic Case Planning</a>
                    <a href="/workflows/return-to-sport-clearance" className="menu-item" onClick={() => setIsMenuOpen(false)}>Return-to-Sport Clearance</a>
                    <a href="/workflows/board-review-protocol" className="menu-item" onClick={() => setIsMenuOpen(false)}>Board Review Protocol</a>
                    <a href="/workflows/joint-preservation-pathway" className="menu-item" onClick={() => setIsMenuOpen(false)}>Biological Restoration Path</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-label">Surgeons <ChevronDown size={14} /></span>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Institutional Leadership</div>
                    <a href="/doctors#surgical-board" className="menu-item" onClick={() => setIsMenuOpen(false)}>Surgical Board</a>
                    <a href="/doctors#division-specialists" className="menu-item" onClick={() => setIsMenuOpen(false)}>Division Specialists</a>
                    <a href="/doctors#program-leads" className="menu-item" onClick={() => setIsMenuOpen(false)}>Program Leads</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item"><a href="/locations" className="menu-item" onClick={() => setIsMenuOpen(false)}>Locations</a></li>
          </ul>

          <div className="header-actions">
             <a href="/symptoms" className="symptom-checker-cta" onClick={() => setIsMenuOpen(false)}>
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
              <div className="strip-item"><Shield size={12}/> Board-Reviewed Surgical Planning</div>
              <div className="strip-item"><Shield size={12}/> Protocol-Sequenced Rehabilitation Pathways</div>
              <div className="strip-item"><Shield size={12}/> NAQI Infection Surveillance Compliance</div>
              <div className="strip-item"><Shield size={12}/> Collaborative Surgical Board Oversight Model</div>
           </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
