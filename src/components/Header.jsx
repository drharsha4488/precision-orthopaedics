import React from 'react';
import { 
  Menu, X, ChevronDown, Shield, Phone, MapPin, 
  Clock, Calendar, Zap, Target, Activity, Microscope, 
  Crosshair, Settings, Layers 
} from 'lucide-react';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  };

  return (
    <div className="header-wrapper">
      <header className="global-header">
        <div className="nav-island">
          {/* Logo */}
          <a href="/" className="brand-logo" onClick={closeMenus}>
            <span className="logo-text">Precision <span>Ortho</span></span>
          </a>

          {/* NAV LINKS */}
          <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="/about" onClick={closeMenus}>About</a>
            </li>

            {/* CLINICAL DIVISIONS */}
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('divisions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="nav-label"
                onClick={() => toggleMenu('divisions')}
                aria-expanded={activeMenu === 'divisions'}
              >
                Clinical Divisions <ChevronDown size={14} />
              </button>

              <div className={`mega-menu divisions ${activeMenu === 'divisions' ? 'open' : ''}`}>
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Anatomical Architecture</div>
                    <a href="/clinical-divisions/lower-extremity" className="menu-item" onClick={closeMenus}>Lower Limb Alignment</a>
                    <a href="/clinical-divisions/pelvic-hip-reconstruction" className="menu-item" onClick={closeMenus}>Pelvic Architecture</a>
                    <a href="/clinical-divisions/upper-extremity" className="menu-item" onClick={closeMenus}>Upper Extremity Recon</a>
                    <a href="/clinical-divisions/sports-medicine" className="menu-item" onClick={closeMenus}>Athletic Performance</a>
                    <div className="menu-footer-link">Board-Governed Anatomical Units</div>
                  </div>
                </div>
              </div>
            </li>

            {/* PROGRAMS */}
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('programs')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="nav-label"
                onClick={() => toggleMenu('programs')}
                aria-expanded={activeMenu === 'programs'}
              >
                Clinical Programs <ChevronDown size={14} />
              </button>

              <div className={`mega-menu programs ${activeMenu === 'programs' ? 'open' : ''}`}>
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Institutional Programs</div>
                    <a href="/clinical-programs/revision-arthroplasty" className="menu-item" onClick={closeMenus}>Robotic Arthroplasty</a>
                    <a href="/clinical-programs/joint-preservation" className="menu-item" onClick={closeMenus}>Joint Preservation</a>
                    <a href="/clinical-programs/spine-care" className="menu-item" onClick={closeMenus}>Spine & Neural Restoration</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Specialized Centers</div>
                    <a href="/clinical-programs/musculoskeletal-oncology" className="menu-item" onClick={closeMenus}>Oncology & Bone Tumors</a>
                    <a href="/clinical-programs/complex-trauma-reconstruction" className="menu-item" onClick={closeMenus}>Complex Trauma Hub</a>
                    <a href="/clinical-programs/diagnostics" className="menu-item" onClick={closeMenus}>Diagnostics & Performance Lab</a>
                  </div>
                </div>
                <div className="menu-footer-strip">
                  <a href="/clinical-programs" className="menu-footer-link" onClick={closeMenus}>View All Programs →</a>
                </div>
              </div>
            </li>

            {/* PROCEDURES */}
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('procedures')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="nav-label"
                onClick={() => toggleMenu('procedures')}
                aria-expanded={activeMenu === 'procedures'}
              >
                Procedures <ChevronDown size={14} />
              </button>

              <div className={`mega-menu procedures ${activeMenu === 'procedures' ? 'open' : ''}`}>
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Arthroplasty</div>
                    <a href="/procedures/robotic-knee-arthroplasty" className="menu-item" onClick={closeMenus}>Knee Replacement</a>
                    <a href="/procedures/robotic-hip-arthroplasty" className="menu-item" onClick={closeMenus}>Hip Replacement</a>
                    <a href="/procedures/revision-knee-replacement" className="menu-item" onClick={closeMenus}>Revision Surgery</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Preservation</div>
                    <a href="/procedures/high-tibial-osteotomy" className="menu-item" onClick={closeMenus}>Osteotomy</a>
                    <a href="/procedures/cartilage-restoration" className="menu-item" onClick={closeMenus}>Cartilage Restoration</a>
                  </div>
                  <div>
                    <div className="menu-section-label">Upper Limb</div>
                    <a href="/procedures/rotator-cuff-repair" className="menu-item" onClick={closeMenus}>Rotator Cuff Repair</a>
                    <a href="/procedures/reverse-total-shoulder" className="menu-item" onClick={closeMenus}>Reverse Shoulder</a>
                  </div>
                </div>
                <a href="/procedures" className="menu-footer-link" onClick={closeMenus}>Technical Reconstruction Library →</a>
              </div>
            </li>

            {/* WORKFLOWS */}
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('workflows')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="nav-label"
                onClick={() => toggleMenu('workflows')}
                aria-expanded={activeMenu === 'workflows'}
              >
                Workflows <ChevronDown size={14} />
              </button>

              <div className={`mega-menu workflows ${activeMenu === 'workflows' ? 'open' : ''}`}>
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Protocol Pipelines</div>
                    <a href="/workflows/robotic-arthroplasty-planning" className="menu-item" onClick={closeMenus}>Robotic Case Planning</a>
                    <a href="/workflows/return-to-sport-clearance" className="menu-item" onClick={closeMenus}>Return-to-Sport Clearance</a>
                    <a href="/workflows/robotic-arthroplasty-planning" className="menu-item" onClick={closeMenus}>Board Review Protocol</a>
                    <a href="/workflows/joint-preservation-pathway" className="menu-item" onClick={closeMenus}>Joint Restoration Path</a>
                  </div>
                </div>
              </div>
            </li>

            {/* SURGEONS */}
            <li 
              className="nav-item"
              onMouseEnter={() => setActiveMenu('surgeons')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="nav-label"
                onClick={() => toggleMenu('surgeons')}
                aria-expanded={activeMenu === 'surgeons'}
              >
                Surgeons <ChevronDown size={14} />
              </button>

              <div className={`mega-menu surgeons ${activeMenu === 'surgeons' ? 'open' : ''}`}>
                <div className="mega-menu-grid">
                  <div>
                    <div className="menu-section-label">Surgical Board</div>
                    <a href="/doctors#surgical-board" className="menu-item" onClick={closeMenus}>Board Governance Officers</a>
                    <a href="/doctors#division-specialists" className="menu-item" onClick={closeMenus}>Division Specialists</a>
                    <a href="/doctors#program-leads" className="menu-item" onClick={closeMenus}>Lead Program Managers</a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a href="/locations" onClick={closeMenus}>Locations</a>
            </li>
          </ul>

          {/* ACTIONS */}
          <div className="header-actions">
            <a href="/symptoms" className="symptom-checker-cta" onClick={closeMenus}>
              Check Your Symptoms
            </a>
            <a href="tel:+917842932051" className="contact-pill">
              <span className="contact-label">Care Coordination Desk</span>
              <span className="contact-num">+91 78429 32051</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* AUTHORITY STRIP */}
        <div className="authority-strip">
          <div className="strip-item"><Shield size={12}/> Board-Reviewed Surgical Planning</div>
          <div className="strip-item"><Shield size={12}/> Protocol-Sequenced Rehabilitation</div>
          <div className="strip-item"><Shield size={12}/> NAQI Infection Surveillance</div>
          <div className="strip-item"><Shield size={12}/> Surgical Board Oversight</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
