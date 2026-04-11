import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Activity,
  MessageSquare,
  Filter,
  Stethoscope
} from 'lucide-react';

const specialties = [
  { id: 'all', label: 'All Units' },
  { id: 'Robotic Arthroplasty', label: 'Robotic Unit' },
  { id: 'Hip Replacement', label: 'Hip & Pelvic' },
  { id: 'Sports Medicine', label: 'Sports Medicine' },
  { id: 'Joint Preservation', label: 'Joint Preservation' },
  { id: 'Upper Extremity', label: 'Shoulder & Elbow' }
];

const conditions = [
  { id: 'Knee Arthritis', label: 'Knee Arthritis' },
  { id: 'Hip Replacement', label: 'Hip Replacement' },
  { id: 'Sports Injury', label: 'Sports Injury' },
  { id: 'Shoulder Pain', label: 'Shoulder Pain' },
  { id: 'Revision Surgery', label: 'Revision Surgery' }
];

const RosterFilter = ({ doctors }) => {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  const [activeCondition, setActiveCondition] = useState(null);

  // ══ URL PARAM SYNCING ══
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get('specialty');
    const cond = params.get('condition');
    
    if (spec) {
      const found = specialties.find(s => s.id.toLowerCase().includes(spec.toLowerCase()));
      if (found) setActiveSpecialty(found.id);
    }
    if (cond) {
      const found = conditions.find(c => c.id.toLowerCase().includes(cond.toLowerCase()));
      if (found) setActiveCondition(found.id);
    }
  }, []);

  const filteredDoctors = useMemo(() => {
    let list = doctors;
    if (activeSpecialty !== 'all') {
      list = list.filter(doc => 
        doc.specialty === activeSpecialty || 
        (doc.filterTags && doc.filterTags.includes(activeSpecialty))
      );
    }
    if (activeCondition) {
      list = list.filter(doc => 
        doc.conditions && doc.conditions.includes(activeCondition)
      );
    }
    return list;
  }, [activeSpecialty, activeCondition, doctors]);

  return (
    <div className="roster-hub">
      {/* ══ CONDITION ROUTING (Priority Filter) ══ */}
      <div class="condition-routing-box mb-lg">
        <div class="filter-label"><Filter size={14}/> Identify Your Condition</div>
        <div className="condition-chips mt-sm">
          <button 
            onClick={() => setActiveCondition(null)}
            className={`condition-chip ${!activeCondition ? 'active' : ''}`}
          >
            All Conditions
          </button>
          {conditions.map((cond) => (
            <button
              key={cond.id}
              onClick={() => setActiveCondition(cond.id)}
              className={`condition-chip ${activeCondition === cond.id ? 'active' : ''}`}
            >
              {cond.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══ SPECIALTY TABS ══ */}
      <div className="filter-tabs-container">
        {specialties.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveSpecialty(cat.id);
              setActiveCondition(null); // Clear condition if changing unit
            }}
            className={`filter-tab ${activeSpecialty === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ══ DOCTOR LIST ══ */}
      <div className="roster-grid">
        <AnimatePresence mode='popLayout'>
          {filteredDoctors.map((doc) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              key={doc.slug}
              className="roster-card-horizontal"
            >
              <div className="card-inner">
                {/* Image Section */}
                <div className="doctor-visual">
                  <img src={doc.image} alt={doc.name} className="surgeon-portrait" />
                  <div className="overlay-stats">
                    <span className="stat-pill"><Activity size={12}/> {doc.specificVolume}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="doctor-data">
                  <div className="card-header-main">
                    <div className="unit-label">{doc.unitName}</div>
                    <div className="role-badge">{doc.role}</div>
                    <h3>{doc.name}</h3>
                    <p className="platform-association text-secondary">{doc.platform}</p>
                  </div>

                  <div className="badges-row">
                    <div className="badge-item" title="Experience">
                       <Clock size={16} className="text-secondary" />
                       <span>{doc.experience} Expertise</span>
                    </div>
                    <div className="badge-item" title="Fellowship">
                       <Award size={16} className="text-secondary" />
                       <span>{doc.fellowships}</span>
                    </div>
                    <div className="badge-item" title="Affiliation">
                       <MapPin size={16} className="text-secondary" />
                       <span>Apollo Hospitals</span>
                    </div>
                  </div>

                  <p className="clinical-focus">{doc.focus}</p>

                  <div className="cta-group">
                    <a href={doc.appointmentLink} className="btn btn-primary" target="_blank">
                      Book Appointment <ChevronRight size={16} />
                    </a>
                    <a href="https://wa.me/917842932051" className="btn btn-outline" target="_blank">
                      <MessageSquare size={16} /> Talk to Coordinator
                    </a>
                    <a href={`/doctor/${doc.slug}`} className="view-profile-link">
                      View Clinical Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RosterFilter;
