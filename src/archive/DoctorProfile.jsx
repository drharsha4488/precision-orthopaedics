import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, MapPin, CheckCircle, Calendar, ChevronLeft, Globe } from 'lucide-react';
import './DoctorProfile.css';

const doctorDatabase = {
  "deepthi-nandan-reddy": {
    name: "Dr. Deepthi Nandan Reddy",
    title: "HOD - Senior Consultant Orthopaedic Surgeon",
    focus: "Global Expert in Upper Limb & Revision Arthroplasty",
    bio: "Dr. Deepthi Nandan Reddy is the Head of the Department and a clinical powerhouse with over three decades of international experience. As one of the most decorated upper limb surgeons globally and a former NHS Consultant, he sets the international standard for complex Shoulder and Elbow reconstructions. He was awarded the prestigious Mayo Clinic Travelling Fellowship, marking him as a leader in structural joint repairs.",
    experience: "30+ Years | 15,000+ Patients",
    fellowships: "Mayo Clinic Travelling Fellowship (USA), FRCS (UK).",
    qualifications: "FRCS (UK), CCT (UK), MSc Ortho Engineering, MS Ortho, MBBS.",
    specialties: [
      "Advanced Latarjet Procedures (Shoulder)",
      "Complex Multiligament Elbow Reconstructions",
      "Revision Joint Replacement Mastery",
      "Structural Hand & Wrist Reconstruction"
    ]
  },
  "amith-reddy": {
    name: "Dr. Amith Reddy",
    title: "Senior Consultant – Lower Limb & Robotic Arthroplasty",
    focus: "Master of Stryker Mako 4.0 & Advanced Robotic Alignment",
    bio: "Dr. Amith Reddy is the lead architect of robotic surgical precision at Apollo Hospitals. Specializing in the lower limb (Hip & Knee), he brings a staggering record of over 10,000 successful procedures. His clinical discipline is defined by dual certifications from Swiss Olympic (Switzerland) and ISAKOS (Spain), ensuring high-velocity recovery for arthroplasty patients.",
    experience: "19+ Years | 10,000+ Successful Surgeries.",
    fellowships: "FIJR (Swiss Olympic), FSM (ISAKOS Spain).",
    qualifications: "MBBS, PGD, DNB, MNAMS, M.Ch (Orthopaedic Surgery).",
    specialties: [
      "Stryker Mako 4.0 Robotic-Arm Assisted Surgery",
      "Total Knee & Hip Arthroplasty",
      "Virtual Range of Motion (vROM) Simulation",
      "Advanced Revision Total Joints"
    ]
  },
  "nitish-bhan": {
    name: "Dr. Nitish Bhan",
    title: "Senior Consultant – Pelvic & Hip Reconstruction",
    focus: "Pioneer in Direct Anterior Approach & Pelvic Trauma care",
    bio: "Dr. Nitish Bhan specializes in the most complex quadrant of the human frame: the Pelvis and Hip. He is renowned for introducing advanced minimally invasive protocols, including the Direct Anterior Approach (DAA) Hip Replacement, which eliminates muscle damage. His expertise in pelvic and acetabular trauma care is recognized across the national healthcare landscape.",
    experience: "18+ Years specializing in Pelvic and Hip Mastery.",
    fellowships: "Joint Replacement Fellowships (Singapore & China).",
    qualifications: "MBBS, DNB, M.Ch, MNAMS.",
    specialties: [
      "Pelvic & Acetabular Trauma Reconstruction",
      "Direct Anterior Approach (DAA) Hip Replacement",
      "Tactileless & Computer Navigated Hip Surgery",
      "Complex Revision Hip Arthroplasty"
    ]
  },
  "ravi-teja-rudraraju": {
    name: "Dr. Ravi Teja Rudraraju",
    title: "Chief of Joint Preservation & Sports Medicine",
    focus: "Expert in Arthrex Synergy UHD4 Imaging & Ortho-Biologics",
    bio: "Dr. Ravi Teja Rudraraju leads the Joint Preservation unit, specializing in high-definition arthroscopic reconstruction using the Arthrex Synergy UHD4 4K system. His practice focuses on biological restoration using high-concentration PRP and Stem Cell therapies to delay or avoid artificial joint replacement. Extensively trained at the Geisinger Clinic (USA), he is at the forefront of regenerative tissue engineering.",
    experience: "12+ Years focused on Preservation & Biologics.",
    fellowships: "Sports Medicine Fellow (Geisinger, USA), Arthrex Technology Lead.",
    qualifications: "MBBS, MS (Orthopedics), Arthrex Synergy SDK Specialist.",
    specialties: [
      "Arthrex Synergy UHD4 4K Visualization",
      "Ortho-Biologics (PRP, BMAC & Stem Cell Therapy)",
      "Biological Joint Preservation (Knee)",
      "High-Performance Sports Medicine"
    ]
  },
  "b-harsha-vardhana-reddy": {
    name: "Dr. B. Harsha Vardhana Reddy",
    title: "Consultant – Upper Limb & Sports Performance",
    focus: "VALD Performance Lead for Athletic Recovery & Restoration",
    bio: "Dr. Harsha Vardhana Reddy bridges the gap between surgical repair and elite athletic performance. He is the lead surgeon for the VALD Performance Centre at Precision Orthopaedics, utilizing ForceDecks and DynaMo data to ensure zero-compromise return-to-sport clearance. He specializes in Upper Limb sports injuries and highly precise arthroscopic repairs.",
    experience: "10+ Years in Sports Traumatology.",
    fellowships: "Fellowship in Arthroplasty, VALD Performance Certified Lead.",
    qualifications: "MBBS, MS (Ortho), Fellowship in Sports Medicine.",
    specialties: [
      "VALD ForceDecks Biomechanical Assessment",
      "Upper Limb Sports Traumatology",
      "Athletic Return-to-Sport Protocols",
      "Computer-Assisted Ligament Reconstruction"
    ]
  },
  "prashanth-reddy-a": {
    name: "Dr. Prashanth Reddy A",
    title: "Consultant Spine, Hip & Knee Surgeon",
    focus: "UK-Trained Specialist in Spine & Adult Reconstruction",
    bio: "Dr. Prashanth Reddy A is a multi-specialty surgeon with deep expertise in Spine, Hip, and Knee surgical interventions. Having served as a Senior Clinical Fellow at Wrightington Hospital (UK), he integrates elite Western trauma protocols into complex adult reconstructions, offering a comprehensive solution for patients with combined spine and joint degeneration.",
    experience: "13+ Years in International Orthopaedics.",
    fellowships: "Senior Clinical Fellow (Wrightington Hospital, UK), Spine Fellow (2024).",
    qualifications: "MBBS, DNB Ortho, M.Ch (Hip & Knee Surgery - UK).",
    specialties: [
      "Integrated Spine Surgery & Care",
      "Complex Hip and Knee Replacement",
      "Adult Joint Reconstruction",
      "Musculoskeletal Trauma Care"
    ]
  }
};

const DoctorProfile = () => {
  const { slug } = useParams();
  const doctor = doctorDatabase[slug];

  if (!doctor) {
    return (
      <div className="container" style={{padding: '5rem 0', textAlign: 'center'}}>
        <h2>Profile currently being updated...</h2>
        <Link to="/doctors" className="btn btn-outline" style={{marginTop: '2rem'}}>Back to Roster</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": doctor.name,
          "medicalSpecialty": doctor.focus,
          "affiliation": {
            "@type": "MedicalClinic",
            "name": "Precision Orthopaedics"
          },
          "telephone": "+91 40 2360 7777"
        })}
      </script>

      <div className="container profile-layout">
        <div className="profile-sidebar">
          <Link to="/doctors" className="back-link mb-sm" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)'}}>
            <ChevronLeft size={16} /> Back to Directory
          </Link>
          <div className="profile-avatar-card">
            <div className="avatar-large">
               <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0A1525&color=00E5FF&size=200`} alt={doctor.name} />
            </div>
            <h2>{doctor.name}</h2>
            <p className="profile-subtitle">{doctor.title}</p>
            <p className="profile-focus">{doctor.focus}</p>
            
            <div className="profile-ctas">
              <button className="btn btn-primary w-100 mb-sm">
                <Calendar size={16} /> Book Appointment
              </button>
              <button className="btn btn-outline w-100">
                Request Second Opinion
              </button>
            </div>
          </div>

          <div className="profile-info-box">
            <h4>Global Training Hub</h4>
            <div className="location-item">
              <Globe size={16} />
              <div>
                <strong>Clinical Pedigree</strong>
                <p>Advanced surgical protocols integrated from leading UK and US institutes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-main">
          <section className="bio-section">
            <h3>Specialist Overview</h3>
            <p className="bio-text">{doctor.bio}</p>
          </section>

          <div className="credentials-grid">
            <div className="cred-card">
              <Briefcase className="cred-icon" />
              <h4>Seniority</h4>
              <p>{doctor.experience}</p>
            </div>
            <div className="cred-card">
              <Award className="cred-icon" />
              <h4>Authority</h4>
              <p>{doctor.fellowships}</p>
            </div>
            <div className="cred-card">
              <GraduationCap className="cred-icon" />
              <h4>Credentials</h4>
              <p>{doctor.qualifications}</p>
            </div>
          </div>

          <section className="specialties-section">
            <h3>Focus Areas</h3>
            <ul className="specialty-checklist">
              {doctor.specialties.map((spec, index) => (
                <li key={index}><CheckCircle size={18} className="check-icon" /> {spec}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
