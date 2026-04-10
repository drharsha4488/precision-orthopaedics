import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, UserCheck, Star, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import './SiloPage.css';

const siloData = {
  "knee": {
    title: "Knee & Leg Excellence Hub",
    leads: [
      { name: "Dr. Amith Reddy", title: "Robotic Arthroplasty Lead", quote: "Precision is not an option; it is the standard." },
      { name: "Dr. Ravi Teja Rudraraju", title: "Joint Preservation Lead", quote: "Natural joint longevity is our primary mission." }
    ],
    description: "The knee joint is the mechanical nexus of human mobility. We specialize in high-velocity recovery and sub-millimeter Mako 4.0 precision.",
    stats: ["15,000+ Successful Procedures", "Stryker Mako 4.0 Certified", "JCI Gold Standards"],
    spotlight: {
      title: "Mako Robotic Total Knee",
      tag: "High-Precision Match",
      description: "For patients with end-stage arthritis seeking 0.01mm accuracy.",
      slug: "robotic-knee-arthroplasty"
    },
    streams: [
      {
        name: "Trauma & Emergency",
        icon: "ShieldAlert",
        color: "var(--error)",
        conditions: [
          { name: "Tibial Plateau Fractures", slug: "specialities" },
          { name: "Patellar Dislocations", slug: "specialities" },
          { name: "Complex Lower Limb Trauma", slug: "specialities" }
        ]
      },
      {
        name: "Sports & Performance",
        icon: "Zap",
        color: "var(--secondary)",
        conditions: [
          { name: "ACL/PCL Reconstruction", slug: "acl-pcl-reconstruction" },
          { name: "Meniscal Root Repairs", slug: "meniscal-repair" },
          { name: "Biological Restoration (BMAC)", slug: "specialities" }
        ]
      },
      {
        name: "Degenerative Precision Aging",
        icon: "Activity",
        color: "var(--white)",
        conditions: [
          { name: "Osteoarthritis Management", slug: "robotic-knee-arthroplasty" },
          { name: "Partial Knee Arthroplasty", slug: "specialities" },
          { name: "Patellofemoral Replacement", slug: "specialities" }
        ]
      }
    ]
  },
  "hip": {
    title: "Pelvic & Hip Reconstruction Hub",
    leads: [
      { name: "Dr. Nitish Bhan", title: "Pelvic & Hip Lead Surgeon", quote: "The Direct Anterior Approach (DAA) is the gold standard for hip restoration." }
    ],
    description: "Specializing in muscle-sparing DAA and complex pelvic trauma. We utilize computer navigation to eliminate disruption and accelerate weight-bearing.",
    stats: ["DAA Specialists", "Tactileless Hip Pioneers", "Pelvic Trauma Tertiary Care"],
    spotlight: {
      title: "Direct Anterior Approach (DAA)",
      tag: "Patient Choice Winner",
      description: "No muscle cutting. Walk the same evening.",
      slug: "daa-hip-replacement"
    },
    streams: [
      {
        name: "Trauma & Emergency",
        icon: "ShieldAlert",
        color: "var(--error)",
        conditions: [
          { name: "Acetabular Fractures", slug: "specialities" },
          { name: "Hip Dislocations", slug: "specialities" },
          { name: "Geriatric Hip Fractures", slug: "specialities" }
        ]
      },
      {
        name: "Sports & Performance",
        icon: "Zap",
        color: "var(--secondary)",
        conditions: [
          { name: "Hip Labral Repairs", slug: "specialities" },
          { name: "FAISH Hip Preservation", slug: "specialities" }
        ]
      },
      {
        name: "Degenerative Precision Aging",
        icon: "Activity",
        color: "var(--white)",
        conditions: [
          { name: "Avascular Necrosis (AVN)", slug: "daa-hip-replacement" },
          { name: "Total Hip Arthroplasty", slug: "daa-hip-replacement" },
          { name: "Revision Hip Surgery", slug: "specialities" }
        ]
      }
    ]
  },
  "shoulder": {
    title: "Upper Limb & Upper Extremity Hub",
    leads: [
      { name: "Dr. Deepthi Nandan Reddy", title: "HOD - Upper Limb Lead", quote: "Shoulder stability requires absolute structural discipline." },
      { name: "Dr. B Harsha Vardhana Reddy", title: "Sports Performance Lead", quote: "Data-driven return-to-sport is the only safe clearance." }
    ],
    description: "A global destination for complex Shoulder and Elbow reconstructions. Utilizing VALD Performance for athlete clearance.",
    stats: ["VALD Performance Centre", "Mayo Clinic Protocols", "4K Synergy Mastery"],
    spotlight: {
      title: "Arthrex 4K Rotator Cuff Repair",
      tag: "Technical Flagship",
      description: "58x more color depth for ultra-precise tissue suturing.",
      slug: "specialities"
    },
    streams: [
      {
        name: "Trauma & Emergency",
        icon: "ShieldAlert",
        color: "var(--error)",
        conditions: [
          { name: "Proximal Humerus Fractures", slug: "specialities" },
          { name: "AC Joint Dislocations", slug: "specialities" },
          { name: "Clavicle Reconstruction", slug: "specialities" }
        ]
      },
      {
        name: "Sports & Performance",
        icon: "Zap",
        color: "var(--secondary)",
        conditions: [
          { name: "Recurrent Dislocations (Latarjet)", slug: "latarjet-procedure" },
          { name: "SLAP & Bankart Repairs", slug: "specialities" },
          { name: "Elite Athlete Shoulder Rehab", slug: "specialities" }
        ]
      },
      {
        name: "Degenerative Precision Aging",
        icon: "Activity",
        color: "var(--white)",
        conditions: [
          { name: "Reverse Shoulder Replacement", slug: "specialities" },
          { name: "Frozen Shoulder (Adhesive Capsulitis)", slug: "specialities" },
          { name: "Arthritic Shoulder Arthroplasty", slug: "specialities" }
        ]
      }
    ]
  },
  "spine": {
    title: "Advanced Spine & Neural Recovery Hub",
    leads: [
      { name: "Dr. Prashanth Reddy A", title: "Spine & Joint Lead", quote: "Spinal health is the foundation of structural mobility." }
    ],
    description: "Integrated spine care focusing on minimally invasive microdiscectomy. UK-trained protocols for neural pathway safety.",
    stats: ["Minimally Invasive Focus", "Neural Pathway Safety", "UK Trained Protocols"],
    spotlight: {
      title: "Micro-Endoscopic Discectomy",
      tag: "Safest Protocol",
      description: "Eliminate nerve compression with 5mm precision.",
      slug: "microdiscectomy"
    },
    streams: [
      {
        name: "Trauma & Emergency",
        icon: "ShieldAlert",
        color: "var(--error)",
        conditions: [
          { name: "Spinal Column Fractures", slug: "specialities" },
          { name: "Acute Disc Prolapse", slug: "microdiscectomy" }
        ]
      },
      {
        name: "Sports & Performance",
        icon: "Zap",
        color: "var(--secondary)",
        conditions: [
          { name: "Spondylolisthesis Management", slug: "specialities" },
          { name: "Athletic Low Back Pain", slug: "specialities" }
        ]
      },
      {
        name: "Degenerative Precision Aging",
        icon: "Activity",
        color: "var(--white)",
        conditions: [
          { name: "Multilevel Spinal Fusion", slug: "spinal-fusion" },
          { name: "Cervical Disc Replacement", slug: "cervical-disc-replacement" },
          { name: "Spinal Stenosis Decompression", slug: "specialities" }
        ]
      }
    ]
  }
};

const SiloPage = () => {
  const { hubSlug } = useParams();
  const data = siloData[hubSlug] || siloData["knee"];

  return (
    <div className="directory-page silo-page">
      <section className="directory-header silo-hero animate-reveal">
        <div className="container">
          <div className="silo-meta">
            <span className="silo-badge">Precision {hubSlug.toUpperCase()} Hub</span>
            <h1>{data.title}</h1>
            <p className="header-subtext">{data.description}</p>
            
            <div className="silo-stats-strip">
              {data.stats.map((s, i) => (
                <div key={i} className="silo-stat">
                  <CheckCircle size={16} /> {s}
                </div>
              ))}
            </div>
          </div>
          
          <div className="silo-leads-container">
            {data.leads.map((lead, idx) => (
              <div key={idx} className="silo-surgeon-card border-glow mb-sm">
                <div className="s-card-top">
                  <UserCheck className="text-secondary" size={32} />
                  <div>
                    <h4>{lead.name}</h4>
                    <p>{lead.title}</p>
                  </div>
                </div>
                <p className="s-card-note">"{lead.quote}"</p>
                <Link to={`/doctor/${lead.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`} className="btn btn-outline w-100">Consult Specialist</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="directory-content container mt-xl">
        {/* HIGH-PRECISION SPOTLIGHT */}
        <div className="silo-spotlight-card border-glow mb-xl">
          <div className="spotlight-badge">{data.spotlight.tag}</div>
          <div className="spotlight-grid">
            <div className="spotlight-text">
              <h2>{data.spotlight.title}</h2>
              <p>{data.spotlight.description}</p>
              <Link to={`/treatment/${data.spotlight.slug}`} className="btn btn-primary mt-md">View 3D Protocol <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>

        <h2 className="section-title mb-lg">Clinical Taxonomy & Specialities</h2>
        
        <div className="clinical-stream-grid">
          {data.streams.map((stream, index) => (
            <div key={index} className="stream-bucket">
              <div className="stream-header" style={{ borderLeftColor: stream.color }}>
                <h3>{stream.name}</h3>
              </div>
              <div className="stream-conditions">
                {stream.conditions.map((c, idx) => (
                  <Link key={idx} to={`/treatment/${c.slug}`} className="condition-pill-box">
                    <span>{c.name}</span>
                    <ChevronRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="silo-trust-belt container mt-xl mb-xl">
        <div className="trust-grid">
           <div className="trust-item">
             <ShieldCheck size={24} className="text-secondary" />
             <span>Apollo Ecosystem Reliability</span>
           </div>
           <div className="trust-item">
             <Star size={24} className="text-secondary" />
             <span>JCI Gold Standard Care</span>
           </div>
           <div className="trust-item">
             <Activity size={24} className="text-secondary" />
             <span>Advanced 3D Mapping Technology</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SiloPage;
