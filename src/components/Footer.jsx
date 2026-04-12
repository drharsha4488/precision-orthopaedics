import React from 'react';
import { Phone, MapPin, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="luminous-line" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section brand">
            <h2 className="footer-brand-title">Precision <span className="text-secondary">Ortho</span></h2>
            <p className="brand-desc mb-md">
              The science of human restoration. Fellowship-trained surgical excellence at India's premier multi-speciality hub.
            </p>
            <div className="apollo-highlight">
              <span className="partner-tag">PREMIER PARTNER</span>
              <h3 className="apollo-title">APOLLO HOSPITALS</h3>
              <p className="apollo-subtitle">Financial District, Hyderabad</p>
            </div>
          </div>

          <div className="footer-section links">
            <h4>Clinical Divisions</h4>
            <ul>
              <li><a href="/clinical-divisions/lower-extremity">Lower Limb Alignment</a></li>
              <li><a href="/clinical-divisions/pelvic-hip-reconstruction">Pelvic Architecture Restoration</a></li>
              <li><a href="/clinical-divisions/upper-extremity">Upper Limb Reconstruction</a></li>
              <li><a href="/clinical-divisions/sports-medicine">Athletic Performance Surgery</a></li>
            </ul>
          </div>

          <div className="footer-section credentials">
            <h4>Clinical Authority</h4>
            <div className="cred-badges-grid">
              <div className="cred-badge">
                <ShieldCheck size={24} className="text-secondary" />
                <span>JCI Accredited</span>
              </div>
              <div className="cred-badge">
                <ShieldCheck size={24} className="text-secondary" />
                <span>NABH Certified</span>
              </div>
            </div>
            <p className="mt-md body-text-xs">
              Adhering to the absolute highest standards of international patient safety and clinical protocols.
            </p>
          </div>

          <div className="footer-section contact">
            <h4>Coordination</h4>
            <div className="contact-stack">
              <a href="tel:+917842932051" className="contact-item">
                <div className="icon-box"><Phone size={16} /></div>
                <div>
                   <span className="label">Official Booking</span>
                   <span className="val">+91 78429 32051</span>
                </div>
              </a>
              <a href="tel:+914023607777" className="contact-item">
                <div className="icon-box"><Phone size={16} /></div>
                <div>
                   <span className="label">Hospital Desk</span>
                   <span className="val">+91 40 2360 7777</span>
                </div>
              </a>
              <a href="mailto:consult@precisionortho.in" className="contact-item">
                <div className="icon-box"><Mail size={16} /></div>
                <div>
                   <span className="label">Email Authority</span>
                   <span className="val">consult@precisionortho.in</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Precision Orthopaedics | Surgical Board of Hyderabad
          </div>
          <div className="legal-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap">Clinical Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
