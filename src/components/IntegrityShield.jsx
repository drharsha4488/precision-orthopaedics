import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Info, X, ChevronRight, Activity } from 'lucide-react';
import useClinicalAuditor from '../services/ClinicalAuditor';
import './IntegrityShield.css';

const IntegrityShield = () => {
  const { score, violations } = useClinicalAuditor();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getStatusColor = () => {
    if (score === 100) return 'status-perfect';
    if (score > 75) return 'status-good';
    return 'status-warning';
  };

  return (
    <div className={`integrity-shield-wrap ${isOpen ? 'expanded' : 'collapsed'} ${getStatusColor()}`}>
      {/* SHIELD TRIGGER */}
      <div className="shield-trigger" onClick={() => setIsOpen(!isOpen)}>
        {score === 100 ? (
          <ShieldCheck size={20} className="shield-icon text-secondary" />
        ) : (
          <ShieldAlert size={20} className="shield-icon text-warning" />
        )}
        <span className="shield-score">{score}% Clinical Integrity</span>
      </div>

      {/* AUDIT PANEL */}
      {isOpen && (
        <div className="audit-panel animate-reveal">
          <div className="panel-header">
            <h3><Activity size={18}/> Precision Clinical Auditor</h3>
            <button onClick={() => setIsOpen(false)}><X size={16}/></button>
          </div>
          
          <div className="scroll-content">
            <div className={`score-banner ${getStatusColor()}`}>
               <div className="score-main">{score}<span>%</span></div>
               <p>{score === 100 ? 'Compliant with JCI & YMYL standards.' : 'Gaps detected in authority markers.'}</p>
            </div>

            <div className="audit-sections">
              {violations.length > 0 ? (
                violations.map((v, i) => (
                  <div key={i} className="audit-item">
                    <div className="item-meta">
                      <span className="cat-badge">{v.category}</span>
                      <h4>{v.name}</h4>
                    </div>
                    <p>{v.description}</p>
                  </div>
                ))
              ) : (
                <div className="audit-perfect">
                   <ShieldCheck size={40} className="text-secondary mb-sm" />
                   <h4>Absolute Precision</h4>
                   <p>All clinical authority signals, schematics, and credentialing markers are verified for this route.</p>
                </div>
              )}
            </div>
            
            <div className="panel-footer">
               <button className="btn btn-outline w-100" onClick={() => setIsVisible(false)}>
                 Hide for this Session
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrityShield;
