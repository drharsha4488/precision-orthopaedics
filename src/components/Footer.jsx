import React from 'react';
import { Phone, MapPin, Mail, ArrowRight, ShieldCheck, Shield, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="luminous-line" />
      <div className="container">
        <div className="footer-directory-grid">
          
          {/* Column 1: Institutional Core */}
          <div className="directory-column">
            <h2 className="footer-brand-title">Precision <span>Ortho</span></h2>
            <div className="directory-list">
               <a href="/about">Academic Charter</a>
               <a href="/doctors#surgical-board">Surgical Board</a>
               <a href="/doctors#division-specialists">Clinical Faculty</a>
               <a href="/locations">Clinical Hubs (Locations)</a>
               <a href="/sitemap">Clinical Sitemap</a>
            </div>
            <div className="apollo-partnership-block">
               <span class="partner-label">Institutional Partner</span>
               <div class="apollo-signature">
                  <strong>APOLLO HOSPITALS</strong>
                  <span>Financial District, Hyderabad</span>
               </div>
            </div>
          </div>

          {/* Column 2: Clinical Divisions */}
          <div className="directory-column">
            <h4>Clinical Divisions</h4>
            <div className="directory-list">
              <a href="/clinical-divisions/lower-extremity">Lower Limb Alignment</a>
              <a href="/clinical-divisions/pelvic-hip-reconstruction">Pelvic Architecture</a>
              <a href="/clinical-divisions/upper-extremity">Upper Extremity Recon</a>
              <a href="/clinical-divisions/sports-medicine">Athletic Performance</a>
            </div>
          </div>

          {/* Column 3: Institutional Programs */}
          <div className="directory-column">
            <h4>Care Programs</h4>
            <div className="directory-list">
               <a href="/clinical-programs/robotic-arthroplasty">Robotic Arthroplasty</a>
               <a href="/clinical-programs/joint-preservation">Joint Preservation</a>
               <a href="/clinical-programs/musculoskeletal-oncology">Musculoskeletal Oncology</a>
               <a href="/clinical-programs/spine-care">Spine & Neural Restoration</a>
               <a href="/clinical-programs/complex-trauma">Complex Trauma Hub</a>
            </div>
          </div>

          {/* Column 4: Technical Procedures */}
          <div className="directory-column">
            <h4>Surgical Procedures</h4>
            <div className="directory-list">
               <a href="/procedures/robotic-knee-replacement">Mako Robotic Knee</a>
               <a href="/procedures/robotic-hip-replacement">Mako Robotic Hip</a>
               <a href="/procedures/acl-pcl-reconstruction">ACL Reconstruction</a>
               <a href="/procedures/reverse-shoulder-arthroplasty">Reverse Shoulder</a>
               <a href="/procedures/revision-knee-replacement">Revision Arthroplasty</a>
               <a href="/procedures" className="view-more">Procedural Library →</a>
            </div>
          </div>

          {/* Column 5: Coordination Matrix */}
          <div className="directory-column">
            <h4>Coordination</h4>
            <div className="contact-matrix">
              <a href="tel:+917842932051" className="matrix-item">
                <span className="label">Care Coordination Desk</span>
                <span className="val">+91 78429 32051</span>
              </a>
              <a href="tel:+914023607777" className="matrix-item">
                <span className="label">Hospital Operations</span>
                <span className="val">+91 40 2360 7777</span>
              </a>
              <a href="mailto:consult@precisionortho.in" className="matrix-item">
                <span className="label">Board Registry</span>
                <span className="val">consult@precisionortho.in</span>
              </a>
            </div>
            
            <div className="compliance-strip">
               <div className="compliance-item"><ShieldCheck size={12}/> JCI Accredited</div>
               <div className="compliance-item"><ShieldCheck size={12}/> NABH Certified</div>
               <div className="compliance-item"><ShieldCheck size={12}/> NAQI Compliant</div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="legal-stack">
            <span className="copyright">&copy; {new Date().getFullYear()} Precision Orthopaedics | Surgical Board Governance</span>
            <p className="clinical-disclaimer">All surgical protocols are subject to institutional board review and patient-specific anatomical mapping.</p>
          </div>
          <div className="legal-links">
            <a href="/privacy">Data Privacy</a>
            <a href="/terms">Terms of Practice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
