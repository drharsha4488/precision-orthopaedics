import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import '../pages/TreatmentTemplate.css';

const CandidateTriage = ({ symptoms }) => {
  const [checked, setChecked] = useState({});
  const score = Object.values(checked).filter(Boolean).length;
  const isHighIntent = score >= 3;

  const toggle = (idx) => {
    setChecked(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="triage-matrix">
      <div className="triage-checklist">
        {symptoms.map((s, i) => (
          <button
            key={i}
            className={`triage-item ${checked[i] ? 'active' : ''}`}
            onClick={() => toggle(i)}
          >
            <CheckSquare size={20} />
            <span>{s}</span>
          </button>
        ))}
      </div>
      <div class={`triage-result ${isHighIntent ? 'high-intent' : ''}`}>
        <div className="score-ring">
          <span className="score-value">{score}</span>
          <span className="score-label">/ {symptoms.length}</span>
        </div>
        <div className="score-text">
          {isHighIntent ? (
            <>
              <h4>High Surgical Candidacy Detected</h4>
              <p>Your symptom profile strongly indicates eligibility for advanced intervention.</p>
              <button className="btn btn-primary mt-md">Book Priority CT Planning</button>
            </>
          ) : (
            <>
              <h4>Select Your Symptoms Above</h4>
              <p>Check all symptoms that currently apply to you. 3+ markers indicate potential surgical candidacy.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateTriage;
