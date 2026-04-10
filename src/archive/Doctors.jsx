import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Microscope, Stethoscope, ChevronRight, Activity, ShieldCheck, Trophy } from 'lucide-react';
import './Doctors.css';

// Master Surgeon Database - Ordered by Seniority/HOD Status
export const doctors = [
  {
    name: "Dr. Deepthi Nandan Reddy",
    slug: "deepthi-nandan-reddy",
    title: "HOD - Senior Consultant Orthopaedic Surgeon",
    specialty: "Upper Limb & Revision Arthroplasty",
    focus: "Complex Shoulder, Elbow and Revision Joint Replacement. Leading the Upper Limb clinical vertical.",
    credentials: "MBBS, MS (Ortho), DNB (Ortho), FRCS (Ortho) - UK",
    experience: "25+ Years",
    image: `https://ui-avatars.com/api/?name=Deepthi+Nandan+Reddy&background=0A1525&color=00E5FF&size=200`
  },
  {
    name: "Dr. Amith Reddy",
    slug: "amith-reddy",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Lower Limb & Robotic Arthroplasty",
    focus: "Global leader in Mako Robotic Knee & Hip Arthroplasty. Expert in sub-millimeter precision mapping.",
    credentials: "MBBS, MS (Ortho), Fellowship in Robotic Arthroplasty",
    experience: "15+ Years",
    image: `https://ui-avatars.com/api/?name=Amith+Reddy&background=0A1525&color=00E5FF&size=200`
  },
  {
    name: "Dr. Nitish Bhan",
    slug: "nitish-bhan",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Pelvic & Hip Reconstruction",
    focus: "Minimally invasive Hip Replacement (DAA) and Complex Pelvic & Acetabular Trauma. Pioneer in Tactileless Hip Replacement.",
    credentials: "MBBS, DNB, M.Ch (Ortho), MNAMS",
    experience: "18+ Years",
    image: `https://ui-avatars.com/api/?name=Nitish+Bhan&background=0A1525&color=00E5FF&size=200`
  },
  {
    name: "Dr. Ravi Teja Rudraraju",
    slug: "ravi-teja-rudraraju",
    title: "Chief of Joint Preservation & Sports Medicine",
    specialty: "Knee preservation & Ortho-Biologics",
    focus: "Leading the unit for Joint Preservation using PRP, Stem Cell therapies and biological grafting techniques. Specialist in Arthrex Synergy UHD4 4K Imaging.",
    credentials: "MBBS, MS (Ortho), Fellowship in Sports Medicine, Arthrex Tech Certified",
    experience: "12+ Years",
    image: `https://ui-avatars.com/api/?name=Ravi+Teja+Rudraraju&background=0A1525&color=00E5FF&size=200`
  },
  {
    name: "Dr. B Harsha Vardhana Reddy",
    slug: "harsha-vardhana-reddy",
    title: "Consultant Orthopaedic & Sports Specialist",
    specialty: "Upper Limb & Return-to-Sport Protocols",
    focus: "Sports injuries of the Shoulder & Elbow. Specialist in VALD Performance ForceDecks for high-velocity Return-to-Sport clearance.",
    credentials: "MBBS, MS (Ortho), Fellowship in Sports Traumatology, VALD Performance Lead",
    experience: "10+ Years",
    image: `https://ui-avatars.com/api/?name=Harsha+Vardhana+Reddy&background=0A1525&color=00E5FF&size=200`
  },
  {
    name: "Dr. Prashanth Reddy A",
    slug: "prashanth-reddy-a",
    title: "Consultant Spine & Joint Specialist",
    specialty: "Spine, Hip & Knee Surgery",
    focus: "Integrated Spine care and adult joint reconstruction. Extensive UK clinical fellowship training.",
    credentials: "MBBS, DNB, M.Ch (Hip & Knee) - UK, Fellow in Spine Surgery",
    experience: "13+ Years",
    image: `https://ui-avatars.com/api/?name=Prashanth+Reddy&background=0A1525&color=00E5FF&size=200`
  }
];

const Doctors = () => {
  return (
    <div className="doctors-page">
      <section className="doctors-hero animate-reveal">
        <div className="container text-center">
          <div className="hero-badge">Medical Board of Excellence</div>
          <h1>The <span>Precision</span> Roster</h1>
          <p className="header-subtext">
            Our team consists of fellowship-trained specialists from top UK and Global institutes, organized into sub-specialty units to ensure hyper-specialized care.
          </p>
        </div>
      </section>

      <section className="doctors-grid container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card metallic-card">
            <div className="card-top">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-meta">
                <span className="niche-badge">{doctor.specialty}</span>
                <h2>{doctor.name}</h2>
                <p className="doctor-title">{doctor.title}</p>
              </div>
            </div>
            
            <div className="card-body">
              <p className="doctor-focus">{doctor.focus}</p>
              <div className="doctor-stats">
                <div className="doc-stat"><CheckCircle size={14}/> {doctor.experience} Exp.</div>
                <div className="doc-stat"><GraduationCap size={14}/> {doctor.credentials.split(',')[0]}</div>
              </div>
            </div>

            <div className="card-footer">
              <Link to={`/doctor/${doctor.slug}`} className="btn btn-outline w-100">
                View Credentials <ChevronRight size={16}/>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="team-trust-banner container mt-xl mb-xl">
        <div className="bento-card col-span-full border-glow text-center p-xl">
          <div className="trust-icons-row mb-md">
            <ShieldCheck size={40} className="text-secondary" />
            <Activity size={40} className="text-secondary" />
            <Trophy size={40} className="text-secondary" />
          </div>
          <h2>Collaborative Surgical Board</h2>
          <p className="mt-sm body-text" style={{maxWidth: '800px', margin: '0 auto'}}>
            Every complex revision or multi-trauma case is reviewed by our entire surgical board. This collective clinical intelligence ensures we maintain the lowest revision rates in the Financial District ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
