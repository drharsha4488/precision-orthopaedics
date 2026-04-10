import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  Trophy, 
  ChevronRight, 
  Clock, 
  MapPin, 
  BriefcaseMedical,
  Stethoscope
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Specialities' },
  { id: 'Robotic Arthroplasty', label: 'Robotic Arthroplasty' },
  { id: 'Hip Replacement', label: 'Hip & Pelvic' },
  { id: 'Sports Medicine', label: 'Sports Medicine' },
  { id: 'Joint Preservation', label: 'Joint Preservation' },
  { id: 'Upper Extremity', label: 'Shoulder & Elbow' }
];

const RosterFilter = ({ doctors }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDoctors = useMemo(() => {
    if (activeFilter === 'all') return doctors;
    return doctors.filter(doc => 
      doc.specialty === activeFilter || 
      (doc.filterTags && doc.filterTags.includes(activeFilter))
    );
  }, [activeFilter, doctors]);

  return (
    <div className="roster-hub">
      {/* ══ FILTER TABS ══ */}
      <div className="filter-tabs-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
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
                    <span className="stat-pill"><Activity size={12}/> {doc.procedures} Procedures</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="doctor-data">
                  <div className="card-header-main">
                    <div className="role-badge">{doc.role}</div>
                    <h3>{doc.name}</h3>
                    <p className="designation-text">{doc.title}</p>
                  </div>

                  <div className="badges-row">
                    <div className="badge-item" title="Experience">
                       <Clock size={16} className="text-secondary" />
                       <span>{doc.experience} Experience</span>
                    </div>
                    <div className="badge-item" title="Fellowship">
                       <Award size={16} className="text-secondary" />
                       <span>{doc.fellowships}</span>
                    </div>
                    <div className="badge-item" title="Location">
                       <MapPin size={16} className="text-secondary" />
                       <span>Apollo Hospitals</span>
                    </div>
                  </div>

                  <p className="clinical-focus">{doc.focus}</p>

                  <div className="cta-group">
                    <a href="/symptoms" className="btn btn-primary">
                      Book Appointment <ChevronRight size={16} />
                    </a>
                    <a href={`/doctor/${doc.slug}`} className="btn btn-outline">
                      View Profile
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
