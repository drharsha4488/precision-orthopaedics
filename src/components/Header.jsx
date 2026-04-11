import React from 'react';
// import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="global-header animate-reveal">
      <div className="nav-island">
        <a href="/" className="brand-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="logo-text">Precision <span>Ortho</span></span>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About Precision Ortho</a></li>
          <li className="nav-dropdown">
            <span className="dropdown-trigger">Clinical Divisions <ChevronDown size={14} /></span>
            <ul className="dropdown-menu">
              <li><a href="/clinical-divisions/lower-extremity" onClick={() => setIsMenuOpen(false)}>Lower Extremity</a></li>
              <li><a href="/clinical-divisions/pelvic-hip-reconstruction" onClick={() => setIsMenuOpen(false)}>Pelvic & Hip Reconstruction</a></li>
              <li><a href="/clinical-divisions/upper-extremity" onClick={() => setIsMenuOpen(false)}>Upper Extremity</a></li>
              <li><a href="/clinical-divisions/sports-medicine" onClick={() => setIsMenuOpen(false)}>High-Performance Sports Medicine</a></li>
            </ul>
          </li>
          <li><a href="/symptoms" className="nav-highlight" onClick={() => setIsMenuOpen(false)}>Symptom Checker</a></li>
          <li><a href="/doctors" onClick={() => setIsMenuOpen(false)}>Surgeons</a></li>
          <li><a href="/locations" onClick={() => setIsMenuOpen(false)}>Facilities</a></li>
        </ul>

        <div className="header-actions">
           <a href="tel:+917842932051" className="contact-pill" style={{textDecoration: 'none'}}>
             <Phone size={14} style={{color: 'var(--secondary)'}}/> +91 78429 32051
           </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
