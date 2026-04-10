import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Bone, Crosshair, Baby, ShieldAlert, Thermometer, ChevronRight } from 'lucide-react';
import './Specialities.css';

const directories = [
  {
    category: "Joint Replacement & Resurfacing",
    icon: <Activity size={32} />,
    treatments: [
      { name: "Total Knee Arthroplasty (MAKO/Robotic)", slug: "robotic-knee-arthroplasty" },
      { name: "Direct Anterior Approach Hip Replacement (DAA)", slug: "daa-hip-replacement" },
      { name: "Shoulder Resurfacing & Replacement", slug: "shoulder-replacement" },
      { name: "Small Joint & Finger Replacements", slug: "small-joint-replacement" }
    ]
  },
  {
    category: "Complex Spine & Deformity",
    icon: <Bone size={32} />,
    treatments: [
      { name: "Minimally Invasive Microdiscectomy", slug: "microdiscectomy" },
      { name: "Multilevel Spinal Fusion", slug: "spinal-fusion" },
      { name: "Cervical Disc Replacement", slug: "cervical-disc-replacement" },
      { name: "Scoliosis Deformity Correction", slug: "scoliosis-correction" }
    ]
  },
  {
    category: "Sports Traumatology & Arthroscopy",
    icon: <Activity size={32} />,
    treatments: [
      { name: "Accelerated ACL/PCL Ligament Reconstruction", slug: "acl-pcl-reconstruction" },
      { name: "Meniscal Repair & Cartilage Vaulting", slug: "meniscal-repair" },
      { name: "Latarjet Shoulder Stabilization", slug: "latarjet-procedure" }
    ]
  },
  {
    category: "Extremity Microsurgery",
    icon: <Crosshair size={32} />,
    treatments: [
      { name: "Hand: Carpal Tunnel & Trigger Finger", slug: "hand-microsurgery" },
      { name: "Hand: Severe Tendon Reconstruction", slug: "tendon-reconstruction" },
      { name: "Foot/Ankle: Complete Ankle Replacement", slug: "ankle-replacement" },
      { name: "Foot/Ankle: Achilles Rupture Repair", slug: "achilles-repair" }
    ]
  },
  {
    category: "Pediatric Orthopedics",
    icon: <Baby size={32} />,
    treatments: [
      { name: "Congenital Limb Deformity Correction", slug: "pediatric-limb-deformity" },
      { name: "Pediatric Scoliosis Monitoring & Care", slug: "pediatric-scoliosis" }
    ]
  },
  {
    category: "Orthopedic Oncology",
    icon: <ShieldAlert size={32} />,
    treatments: [
      { name: "Benign & Malignant Bone Tumor Excision", slug: "bone-tumor-excision" },
      { name: "Limb Salvage Surgeries", slug: "limb-salvage" }
    ]
  },
  {
    category: "Rheumatology & Advanced Diagnostics",
    icon: <Thermometer size={32} />,
    treatments: [
      { name: "DEXA Scans & Bone Densitometry", slug: "dexa-scans" },
      { name: "Nerve Conduction Velocity (NCV) Testing", slug: "ncv-testing" },
      { name: "Non-Operative Arthritis Therapies", slug: "arthritis-management" }
    ]
  }
];

const Specialities = () => {
  return (
    <div className="directory-page">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Precision Orthopaedics Clinical Directory",
          "department": directories.map(dir => ({
            "@type": "MedicalSpecialty",
            "name": dir.category
          }))
        })}
      </script>

      <section className="directory-header">
        <div className="container text-center">
          <h1>Directory of Precision Care</h1>
          <p className="header-subtext">
            Explore our world-class, hyper-specialized clinical verticals. Precision Orthopaedics delivers uncompromising surgical excellence across the entire musculoskeletal spectrum.
          </p>
        </div>
      </section>

      <section className="directory-content container">
        <div className="directory-grid">
          {directories.map((dir, index) => (
            <div key={index} className="directory-card">
              <div className="card-top">
                <div className="dir-icon">{dir.icon}</div>
                <h2>{dir.category}</h2>
              </div>
              <ul className="treatment-list">
                {dir.treatments.map((treatment, tIndex) => (
                  <li key={tIndex}>
                    <Link to={`/specialities/${treatment.slug}`} className="treatment-link">
                      {treatment.name} <ChevronRight size={16} className="t-icon"/>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specialities;
