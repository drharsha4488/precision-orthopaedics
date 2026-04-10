import React, { useState } from 'react';
import { X, Calendar, Activity, Bone, Crosshair, User } from 'lucide-react';
import './TriageForm.css';

const TriageForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ concern: '', patientType: '', name: '', phone: '' });

  if (!isOpen) return null;

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <div className="triage-overlay">
      <div className="triage-modal">
        <button className="close-btn" onClick={onClose}><X size={24} /></button>
        
        <div className="triage-header">
          <h2>Request Priority Consultation</h2>
          <div className="progress-bar">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}></div>
          </div>
        </div>

        <div className="triage-body">
          {step === 1 && (
            <div className="fade-in">
              <h3>What brings you to Precision Orthopaedics today?</h3>
              <div className="concern-grid">
                <button 
                  className={`concern-card ${formData.concern === 'joint' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, concern: 'joint'})}
                >
                  <Activity size={32} className="c-icon" />
                  <span>Joint Replacement</span>
                </button>
                <button 
                  className={`concern-card ${formData.concern === 'spine' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, concern: 'spine'})}
                >
                  <Bone size={32} className="c-icon" />
                  <span>Spine / Back Pain</span>
                </button>
                <button 
                  className={`concern-card ${formData.concern === 'sports' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, concern: 'sports'})}
                >
                  <Crosshair size={32} className="c-icon" />
                  <span>Sports Injury (ACL/PCL)</span>
                </button>
                <button 
                  className={`concern-card ${formData.concern === 'second_opinion' ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, concern: 'second_opinion'})}
                >
                  <User size={32} className="c-icon" />
                  <span>Surgical 2nd Opinion</span>
                </button>
              </div>
              <button 
                className="btn btn-primary w-100 mt-md" 
                onClick={handleNext} 
                disabled={!formData.concern}
              >
                Continue <span style={{marginLeft: '8px'}}>→</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="fade-in">
              <h3>Who is this appointment for?</h3>
              <div className="patient-type-options">
                <label className={`radio-card ${formData.patientType === 'self' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="patientType" 
                    onChange={() => setFormData({...formData, patientType: 'self'})} 
                  />
                  <strong>Myself</strong>
                  <p>I am the patient seeking care.</p>
                </label>
                <label className={`radio-card ${formData.patientType === 'family' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="patientType" 
                    onChange={() => setFormData({...formData, patientType: 'family'})} 
                  />
                  <strong>Family Member</strong>
                  <p>I am booking on behalf of someone else.</p>
                </label>
              </div>
              <div className="form-actions">
                <button className="btn btn-outline" onClick={handlePrev}>Back</button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleNext}
                  disabled={!formData.patientType}
                >
                  Patient Details <span style={{marginLeft: '8px'}}>→</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-in form-step">
              <h3>Patient Information</h3>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Mobile Number (For WhatsApp Updates)</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-actions mt-md">
                  <button type="button" className="btn btn-outline" onClick={handlePrev}>Back</button>
                  <button type="submit" className="btn btn-primary">Submit Request</button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="fade-in success-step text-center">
              <div className="success-icon-wrapper">
                <Calendar size={48} />
              </div>
              <h3>Request Received Successfully!</h3>
              <p>
                Our Clinical Coordinator will contact you shortly at <strong>{formData.phone || "your number"}</strong> to confirm your slot with the appropriate specialist.
              </p>
              <button className="btn btn-outline mt-md w-100" onClick={onClose}>Close</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TriageForm;
