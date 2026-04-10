import React, { useState, useEffect, useRef } from 'react';
import { Search, Activity, ChevronRight, Info, Accessibility, Microscope, Stethoscope } from 'lucide-react';
import '../pages/TreatmentTemplate.css';
import '../pages/Symptoms.css';

const symptomsData = {
  "knee": {
    name: "Lower Limb",
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
    name: "Pelvic & Hip",
    icon: <Accessibility />,
    lead: "Dr. Nitish Bhan",
    commonIssues: [
      { id: "hip-stiffness", title: "Morning Hip Stiffness", link: "/specialities/daa-hip-replacement", summary: "Difficulty with mobility in the morning, a specialty of Dr. Nitish Bhan's DAA approach." },
      { id: "groin-pain", title: "Deep Groin Pain", link: "/specialities/daa-hip-replacement", summary: "Pain radiating from the groin, common in pelvic and hip degeneration." }
    ]
  },
  "shoulder": {
    name: "Upper Extremity",
    icon: <Microscope />,
    lead: "Dr. Deepthi Nandan Reddy",
    commonIssues: [
      { id: "shoulder-weakness", title: "Overhead Weakness", link: "/specialities/shoulder-replacement", summary: "Inability to lift the arm, requiring Dr. Deepthi's expert upper limb evaluation." },
      { id: "shoulder-click", title: "Clicking & Grinding", link: "/specialities/latarjet-procedure", summary: "Audible sounds requiring Dr. Harsha's sports-focused return-to-sport evaluation." }
    ]
  },
  "spine": {
    name: "Cervical & Lumbar",
    icon: <Stethoscope />,
    lead: "Dr. Prashanth Reddy A",
    commonIssues: [
      { id: "back-numbness", title: "Leg Numbness (Sciatica)", link: "/specialities/microdiscectomy", summary: "Radiating pain travelling from the back, a focus of Dr. Prashanth's spine unit." },
      { id: "spine-stiffness", title: "Inability to Bend", link: "/specialities/spinal-fusion", summary: "Severe restricted motion preventing daily tasks like tying laces." }
    ]
  }
};

const SymptomExplorer = () => {
  const [activeRegion, setActiveRegion] = useState("knee");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIssues = symptomsData[activeRegion].commonIssues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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

      <div className="search-box-container mb-lg">
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

      <div className="symptom-matrix-container animate-reveal">
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
                <a href={issue.link} className="symptom-cta">
                  View Solution <ChevronRight size={16} />
                </a>
              </div>
            ))
          ) : (
            <div className="no-results">
              <Info size={48} />
              <p>No symptoms matching your search in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomExplorer;
