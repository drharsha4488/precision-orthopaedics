import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Activity, ChevronRight, AlertCircle, Info, Accessibility, Microscope, Stethoscope } from 'lucide-react';
import './Symptoms.css';

const symptomsData = {
  "knee": {
    name: "Knee & Leg",
    icon: <Activity />,
    lead: "Dr. Amith Reddy & Dr. Ravi Teja",
    commonIssues: [
      { id: "knee-locking", title: "Knee Locking or Catching", link: "/specialities/acl-pcl-reconstruction", summary: "A mechanical sensation where the knee gets stuck, often associated with Dr. Ravi Teja's sports medicine expertise." },
      { id: "knee-night-pain", title: "Persistent Night Pain", link: "/specialities/robotic-knee-arthroplasty", summary: "Deep, aching pain that prevents sleep, indicating robotic candidacy under Dr. Amith Reddy." },
      { id: "knee-instability", title: "Knee Giving Way", link: "/specialities/acl-pcl-reconstruction", summary: "A feeling of instability during pivoting or walking on uneven surfaces." },
      { id: "knee-swelling", title: "Chronic Swelling", link: "/specialities/robotic-knee-arthroplasty", summary: "Persistent fluid accumulation that doesn't resolve with rest." }
    ]
  },
  "hip": {
    name: "Hip & Groin",
    icon: <Accessibility />,
    lead: "Dr. Nitish Bhan",
    commonIssues: [
      { id: "hip-stiffness", title: "Morning Hip Stiffness", link: "/silo/hip", summary: "Difficulty with mobility in the morning, a specialty of Dr. Nitish Bhan's DAA approach." },
      { id: "groin-pain", title: "Deep Groin Pain", link: "/silo/hip", summary: "Pain radiating from the groin, common in pelvic and hip degeneration." }
    ]
  },
  "shoulder": {
    name: "Shoulder & Arm",
    icon: <Microscope />,
    lead: "Dr. Deepthi Nandan Reddy",
    commonIssues: [
      { id: "shoulder-weakness", title: "Overhead Weakness", link: "/silo/shoulder", summary: "Inability to lift the arm, requiring Dr. Deepthi's expert upper limb evaluation." },
      { id: "shoulder-click", title: "Clicking & Grinding", link: "/silo/shoulder", summary: "Audible sounds requiring Dr. Harsha's sports-focused return-to-sport evaluation." }
    ]
  },
  "spine": {
    name: "Spine & Back",
    icon: <Stethoscope />,
    lead: "Dr. Prashanth Reddy A",
    commonIssues: [
      { id: "back-numbness", title: "Leg Numbness (Sciatica)", link: "/silo/spine", summary: "Radiating pain travelling from the back, a focus of Dr. Prashanth's spine unit." },
      { id: "spine-stiffness", title: "Inability to Bend", link: "/silo/spine", summary: "Severe restricted motion preventing daily tasks like tying laces." }
    ]
  }
};

const Symptoms = () => {
  const [activeRegion, setActiveRegion] = useState("knee");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIssues = symptomsData[activeRegion].commonIssues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="symptoms-page">
      <section className="symptoms-hero animate-reveal">
        <div className="container">
          <div className="hero-badge">AEO Symptom Discovery</div>
          <h1>Where does it <span>hurt?</span></h1>
          <p className="hero-subtext">
            Start your journey to precision recovery by identifying your specific symptoms. Our clinicians use these markers to architect your custom surgical or conservative roadmap.
          </p>
          
          <div className="search-box-container">
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search symptoms (e.g. 'locking', 'night pain')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="anatomy-hub container">
        <div className="anatomy-selector-grid">
          {Object.entries(symptomsData).map(([key, region]) => (
            <button 
              key={key} 
              className={`region-pill ${activeRegion === key ? 'active' : ''}`}
              onClick={() => setActiveRegion(key)}
            >
              <span className="region-icon">{region.icon}</span>
              <span className="region-name">{region.name}</span>
            </button>
          ))}
        </div>

        <div className="symptom-matrix-container animate-reveal" style={{animationDelay: '0.2s'}}>
          <div className="matrix-header">
            <h3>Common <span>{symptomsData[activeRegion].name}</span> Symptoms</h3>
            <p>Directly linked to clinical solutions under <strong>{symptomsData[activeRegion].lead}</strong>.</p>
          </div>

          <div className="symptom-cards-grid">
            {filteredIssues.length > 0 ? (
              filteredIssues.map((issue) => (
                <div key={issue.id} className="symptom-card">
                  <div className="card-indicator"></div>
                  <h4>{issue.title}</h4>
                  <p>{issue.summary}</p>
                  <Link to={issue.link} className="symptom-cta">
                    View Solution <ChevronRight size={16} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-results">
                <Info size={48} />
                <p>No symptoms matching your search in this category. Try selecting another region or broaden your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="triage-cta-section container animate-reveal" style={{animationDelay: '0.4s'}}>
        <div className="triage-banner-box">
          <div className="banner-content">
            <AlertCircle className="banner-icon" size={32} />
            <div>
              <h3>Experiencing Acute Trauma?</h3>
              <p>Skip the research. Our Level 1 Trauma center at Apollo Financial District is available 24/7 for emergency surgical intervention.</p>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => document.querySelector('.triage-modal')?.parentElement?.click()}>
            Priority Triage Booking
          </button>
        </div>
      </section>

      <section className="seo-educational container">
        <div className="aeo-answer-block">
          <h2>When should I see an Orthopedic Surgeon?</h2>
          <div className="answer-text">
            <p>
              Orthopedic symptoms generally warrant a specialist consultation when they interfere with daily activities or sleep. <strong>Clinical "Red Flags"</strong> include persistent night pain, night sweats, inability to bear weight, joint locking (mechanical blocking), or radiating numbness. At Precision Orthopaedics, we prioritize early symptom intervention through advanced 3D diagnostics (CT/MRI) before symptoms progress to irreversible joint degeneration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Symptoms;
