import React from 'react';
import { ShieldCheck, Award, Flag } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
       <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Precision Orthopaedics",
          "description": "Hyderabad's Premier Robotic & Minimally Invasive Orthopaedic Team."
        })}
      </script>

      <section className="about-hero">
        <div className="container text-center">
          <h1>Excellence in Motion</h1>
          <p className="hero-subtext">Establishing the global standard for complex musculoskeletal reconstruction in India through relentless technological integration and uncompromised surgical discipline.</p>
        </div>
      </section>

      <section className="container mt-xl mb-xl">
        <div className="about-grid">
           <div className="about-text">
             <h2 style={{color: 'var(--primary)', marginBottom: '1.5rem'}}>Our Genesis</h2>
             <p style={{fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem'}}>
               Led by the President of the Shoulder and Elbow Society of India, Precision Orthopaedics was founded explicitly to eliminate the compromise between advanced technological care and deeply personalized patient mapping.
             </p>
             <p style={{fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8'}}>
               Every surgeon on our board carries high-level international certifications—ranging from Swiss Olympic Fellowships to rigorous training protocols from the Mayo Clinic. We are not just surgeons; we are architects of joint preservation.
             </p>

             <ul className="accreditation-list mt-lg" style={{listStyle: 'none', padding: 0}}>
               <li style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem'}}><ShieldCheck size={24} style={{color: 'var(--secondary)'}}/> <strong>JCI & NABH Accredited Protocols</strong></li>
               <li style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem'}}><Award size={24} style={{color: 'var(--secondary)'}}/> <strong>Top Ranked Robotic Ortho Center (2025)</strong></li>
             </ul>
           </div>
           
           <div className="about-image-placeholder">
             <div style={{background: '#EBEBEB', width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-lg)', color: '#999', fontWeight: 'bold'}}>
                [Surgical Team / Facility Image Placeholder]
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
