import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle } from 'lucide-react';
import './Locations.css';

const locationsData = [
  {
    id: "financial-district",
    name: "Apollo Hospitals - Financial District",
    type: "Advanced Orthopaedic & Surgical Hub",
    address: "Apollo Hospitals, Nanakramguda, Financial District, Hyderabad, Telangana 500032",
    phone: "+91 40 2360 7777",
    email: "consult@precisionortho.in",
    hours: "24/7 Emergency Trauma Level 1",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.618037380182!2d78.33796593955078!3d17.414002600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95ab10baaaaa%3A0xe67db55da8a09fca!2sApollo%20Hospitals%2C%20Financial%20District!5e0!3m2!1sen!2sin!4v1712678531000!5m2!1sen!2sin",
    features: [
      "Stryker Mako 4.0 Robotic Suites",
      "Class 100 Laminar Airflow Operating Theatres",
      "3.0 Tesla MRI & Advanced Biomarking",
      "Dedicated VIP International Ward",
      "Advanced Sports Physiotherapy Center"
    ]
  }
];

const Locations = () => {
  return (
    <div className="locations-page">
      {/* Dynamic Localized schemas for Google Local Business indexing */}
      {locationsData.map((loc) => (
         <script type="application/ld+json" key={loc.id}>
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "MedicalClinic",
             "name": loc.name,
             "description": loc.type,
             "address": {
                "@type": "PostalAddress",
                "streetAddress": loc.address,
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana"
             },
             "telephone": loc.phone,
             "medicalSpecialty": "Orthopedic Surgery"
           })}
         </script>
      ))}

      <section className="locations-hero">
        <div className="container text-center">
          <h1>State-of-the-Art Clinical Hub</h1>
          <p className="hero-subtext">
            Precision Orthopaedics maintains an unyielding standard of excellence, operating exclusively out of our ultra-modern surgical facility at Apollo Hospitals, Financial District.
          </p>
        </div>
      </section>

      <section className="locations-content container">
        {locationsData.map((loc, index) => (
          <div className="location-card-lg" key={loc.id} id={loc.id}>
            <div className="loc-info-panel">
              <div className="loc-badge">{loc.type}</div>
              <h2>{loc.name}</h2>
              
              <ul className="loc-contact-list mt-lg">
                <li><MapPin size={20} className="loc-icon" /> <span>{loc.address}</span></li>
                <li><Phone size={20} className="loc-icon" /> <a href={`tel:${loc.phone}`}>{loc.phone}</a></li>
                <li><Mail size={20} className="loc-icon" /> <a href={`mailto:${loc.email}`}>{loc.email}</a></li>
                <li><Clock size={20} className="loc-icon" /> <span className="highlight-text">{loc.hours}</span></li>
              </ul>

              <div className="loc-features mt-lg">
                <h3>Facility Capabilities</h3>
                <ul>
                  {loc.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} className="text-secondary" /> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="loc-actions mt-lg">
                <a href="#triage" className="btn btn-primary">Book Consultation at {loc.name.split('-')[1]}</a>
                <a href={loc.mapSrc} target="_blank" rel="noreferrer" className="btn btn-outline" style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  <Navigation size={18} /> Get Directions
                </a>
              </div>
            </div>

            <div className="loc-map-panel">
              <iframe 
                src={loc.mapSrc} 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${loc.name} Map`}
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Locations;
