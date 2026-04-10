import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Activity, Beaker, CheckCircle, CheckSquare, Clock, Crosshair, ShieldAlert, Award, PlayCircle, ArrowRight, ActivitySquare, UserCheck, BarChart3, Upload, FileCheck, CalendarCheck, Stethoscope, IndianRupee, Cpu, ShieldCheck, Syringe, MessageCircle, ChevronRight, Video, HelpCircle } from 'lucide-react';
import StructuredData from '../components/StructuredData';
import './TreatmentTemplate.css';

// ══════════════════════════════════════════════════════════════════
// TREATMENT DATABASE — Massively Expanded Schema
// ══════════════════════════════════════════════════════════════════
const treatmentDatabase = {
  "robotic-knee-arthroplasty": {
    category: "Robotic Surgery",
    title: "Stryker Mako 4.0 Robotic Knee Arthroplasty",
    subtitle: "Absolute sub-millimeter precision mapping for zero-compromise joint preservation.",
    seoKeywords: "robotic knee replacement Hyderabad, Mako knee surgery Hyderabad, robotic arthroplasty specialist Hyderabad, minimally invasive knee replacement India, CT-based knee replacement planning",
    stats: { volume: "15,000+", accuracy: "0.01mm", recovery: "2x Faster" },
    videoTarget: "Dr. Amith Reddy",
    surgeonId: "dr-amith-reddy",
    surgeonName: "Dr. Amith Reddy",
    surgeonTitle: "Senior Consultant Orthopaedics & Mako Master Surgeon",
    surgeonCredentials: [
      "10,000+ successful joint replacements",
      "Stryker Mako 4.0 Certified Master",
      "Swiss Olympic & ISAKOS Certified",
      "Specialist in Robotic Sub-millimeter Mapping"
    ],
    anatomyText: "Mako SmartRobotics combines 3D CT-based planning with data-driven haptics. By generating a perfect digital twin of your knee, we preserve the maximum amount of native healthy bone, limiting the intervention completely to the pathologic quadrant.",
    eligibility: [
      "Severe osteoarthritis (Grade 3–4 Kellgren-Lawrence)",
      "Knee deformity (varus / valgus malalignment)",
      "Failed conservative treatment (6+ months physiotherapy)",
      "Age 50–80 (flexible based on bone quality)",
      "Active lifestyle expectations post-surgery",
      "Persistent night pain disrupting sleep"
    ],
    comparison: [
      { feature: "Imaging Precision", conventional: "HD Arthrocopy", robotic: "Arthrex Synergy UHD4 (4K)" },
      { feature: "Bone Preservation", conventional: "Moderate resection", robotic: "Maximum preservation" },
      { feature: "Recovery Timeline", conventional: "8–12 weeks standard", robotic: "4–6 weeks accelerated" },
      { feature: "Alignment Accuracy", conventional: "Surgeon-dependent", robotic: "Software-assisted haptics" },
      { feature: "Implant Lifespan", conventional: "15–20 years", robotic: "20–30 years projected" },
      { feature: "Soft Tissue Trauma", conventional: "Standard exposure", robotic: "Minimized via haptic boundary" }
    ],
    timeline: [
      { day: "Pre-Op", action: "Ultra-HD 3D CT Mapping", detail: "Full-leg CT scan + surgical simulation | 1 day" },
      { day: "Day 0", action: "Haptic-Guided Precision Surgery", detail: "Robotic-arm assisted procedure | 60–90 mins" },
      { day: "Day 1", action: "Immediate Assisted Mobilization", detail: "Walking with support within 24 hours" },
      { day: "Week 4", action: "Complete Return to Activity", detail: "Return to routine mobility & stair climbing" }
    ],
    costRange: "₹2.8L – ₹4.5L",
    costNote: "starting price including Stryker Triathlon implants and 3-day recovery stay",
    implantBrands: ["Stryker Triathlon CR/PS", "Stryker Mako-compatible Cementless", "Zimmer Persona (select cases)"],
    infectionSafety: [
      "Class 100 Laminar Airflow (<0.05% infection rate)",
      "Antibiotic-loaded cement protocols",
      "Navigation sterility isolation workflow",
      "Peri-operative infection audit compliance (NAQI)"
    ],
    mriWorkflow: [
      { step: 1, title: "Upload MRI/X-Ray", desc: "Via Secure WhatsApp or Email" },
      { step: 2, title: "Senior Surgeon Review", desc: "Board-level evaluation within 24 hrs" },
      { step: 3, title: "Eligibility Report", desc: "Personalized surgical candidacy analysis" },
      { step: 4, title: "Surgery Roadmap", desc: "Date, implant choice & cost estimate" }
    ],
    recoveryChart: {
      conventional: { label: "Conventional", weeks: 12 },
      robotic: { label: "Mako Robotic", weeks: 5 }
    },
    faqs: [
      { 
        q: "What is the cost of Mako Robotic Knee Surgery in Hyderabad?", 
        a: "At Precision Orthopaedics (Apollo Hospitals), the robotic knee replacement package starts at approximately ₹2.8 Lakhs. This includes the Stryker Mako 4.0 system usage, senior surgical fees, and standard implant costs. Final pricing depends on the complexity of the case and the specific implant chosen.",
        hasVideo: true 
      },
      { 
        q: "Is the robot performing the surgery?", 
        a: "No. The Mako robotic-arm does not make decisions on its own. It empowers the human surgeon, providing haptic resistance to ensure they stay entirely within the pre-planned surgical boundary. Dr. Amith Reddy remains in 100% control of the procedure at all times.",
        hasVideo: true
      },
      { 
        q: "How long does a robotic implant last?", 
        a: "Because robotic alignment reduces asymmetric wear by up to 40%, modern highly cross-linked polyethylene implants are projected to survive 20 to 30 years—significantly longer than conventional manual replacements.",
        hasVideo: false
      },
      { 
        q: "Can I walk on the same day after surgery?", 
        a: "Yes. Due to the minimally invasive, 'muscle-sparing' nature of the robotic approach, most of our patients are mobilized within 6 to 12 hours of the procedure.",
        hasVideo: true
      }
    ],
    candidateSymptoms: [
      "Morning stiffness lasting >30 minutes",
      "Pain climbing stairs or rising from a chair",
      "Grinding or crepitus sensation in the knee",
      "Swelling that persists after rest",
      "Night pain that disrupts your sleep",
      "Walking distance reduced below 500 meters"
    ]
  },
  "acl-pcl-reconstruction": {
    category: "Sports Traumatology",
    title: "Accelerated ACL/PCL Ligament Reconstruction",
    subtitle: "Elite biological grafting combined with aggressive rehabilitation pipelines to return athletes to peak velocity.",
    seoKeywords: "ACL reconstruction Hyderabad, PCL surgery specialist Hyderabad, sports knee surgery India, arthroscopic knee surgery Hyderabad",
    stats: { volume: "5,000+", accuracy: "Elite", recovery: "Sports Clear" },
    videoTarget: "Dr. Ravi Teja Rudraraju",
    surgeonCredentials: [
      "Chief of Joint Preservation & Sports Medicine",
      "Geisinger Clinic (USA) Trained Specialist",
      "Expert in Ortho-Biologics & Regenerative Tissue",
      "High-Performance Return-to-Sport Lead"
    ],
    anatomyText: "Utilizing advanced quadrupled hamstring or bone-patellar tendon autografts, we reconstruct the biomechanical nexus of the knee. The procedure is executed entirely arthroscopically via dual pinpoint incisions to massively accelerate healing.",
    eligibility: [
      "Confirmed ACL/PCL tear on MRI",
      "Knee instability or 'giving way' episodes",
      "Athletes requiring return to pivoting sports",
      "Failed bracing or conservative management",
      "Multi-ligament knee injuries",
      "Associated meniscal tears requiring repair"
    ],
    comparison: [
      { feature: "Imaging Fidelity", conventional: "Standard 1080p", robotic: "Arthrex Synergy UHD4 (4K)" },
      { feature: "Functional Readiness", conventional: "Subjective testing", robotic: "VALD Performance ForceDecks" },
      { feature: "Return to Sport", conventional: "9–12 months", robotic: "6–9 months accelerated" },
      { feature: "Re-tear Rate", conventional: "8–12%", robotic: "<5% with rehab compliance" },
      { feature: "Scar Size", conventional: "6–8 cm incision", robotic: "2 x 1cm portals" },
      { feature: "Post-op Pain", conventional: "Significant", robotic: "Minimal (nerve-sparing)" }
    ],
    timeline: [
      { day: "Day 0", action: "Arthroscopic Grafting & Fixation", detail: "All-inside technique | 45–60 mins" },
      { day: "Week 2", action: "Suture Removal & Closed Chain ROM", detail: "Begin physiotherapy protocol" },
      { day: "Month 3", action: "Linear Progression Jogging", detail: "Muscle strength >70% of contralateral" },
      { day: "Month 6", action: "High-Pivot Sports Clearance", detail: "Isokinetic testing + functional assessment" }
    ],
    costRange: "₹1.5L – ₹3.0L",
    costNote: "depending on graft choice (autograft vs allograft) and associated procedures",
    implantBrands: ["Smith & Nephew ENDOBUTTON CL", "Arthrex TightRope RT", "DePuy MILAGRO Interference Screws"],
    infectionSafety: [
      "Class 100 Laminar Airflow operating suite",
      "Single-use arthroscopic shaver blades",
      "Prophylactic IV antibiotics protocol",
      "Sterility audit compliance (NABH)"
    ],
    mriWorkflow: [
      { step: 1, title: "Upload MRI", desc: "Via Secure WhatsApp or Email" },
      { step: 2, title: "Sports Medicine Review", desc: "ACL grading and graft planning" },
      { step: 3, title: "Surgical Plan", desc: "Graft selection & rehab roadmap" },
      { step: 4, title: "Priority Scheduling", desc: "Surgery within 2 weeks if urgent" }
    ],
    recoveryChart: {
      conventional: { label: "Conventional Open", weeks: 12 },
      robotic: { label: "Arthroscopic", weeks: 7 }
    },
    faqs: [
      { q: "Will I need a brace?", a: "Post-operative bracing depends on meniscal involvement. For isolated ACL reconstructions, early range of motion is prioritized over rigid immobilization." },
      { q: "What is an autograft vs allograft?", a: "An autograft utilizes tissue from your own body (highest integration success), whereas an allograft utilizes donor tissue (faster immediate surgery but slightly longer biological incorporation)." },
      { q: "Can I play sports again?", a: "Yes. With proper rehabilitation, over 90% of athletes return to their pre-injury sport level within 9 months." },
      { q: "How long will I be on crutches?", a: "Typically 2–4 weeks. Weight-bearing progresses from toe-touch to full weight as tolerated." },
      { q: "Is physiotherapy mandatory?", a: "Absolutely critical. The success of ACL reconstruction is 50% surgery and 50% structured rehabilitation." }
    ],
    candidateSymptoms: [
      "Knee 'giving way' during pivoting or cutting",
      "Audible 'pop' at time of injury",
      "Rapid swelling within 2–4 hours of injury",
      "Difficulty bearing weight on the injured leg",
      "Instability walking on uneven surfaces",
      "Unable to return to sport despite rest"
    ]
  }
};

// ══════════════════════════════════════════════════════════════════
// SCROLLSPY NAV SECTIONS
// ══════════════════════════════════════════════════════════════════
const scrollSections = [
  { id: "hero", label: "Overview" },
  { id: "anatomy", label: "Pathology" },
  { id: "eligibility", label: "Eligibility" },
  { id: "comparison", label: "Comparison" },
  { id: "radiology", label: "Before & After" },
  { id: "pipeline", label: "Pipeline" },
  { id: "cost", label: "Pricing" },
  { id: "trust", label: "Trust & Safety" }
];

// ══════════════════════════════════════════════════════════════════
// BEFORE & AFTER SLIDER COMPONENT
// ══════════════════════════════════════════════════════════════════
const RadiologySlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, pos)));
  };

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="radiology-slider" ref={containerRef}>
      <div className="slider-image after-image">
        <img src="/xray_after.png" alt="Post-operative robotic knee replacement X-ray" />
        <span className="slider-label after-label">AFTER — Mako Robotic</span>
      </div>
      <div className="slider-image before-image" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src="/xray_before.png" alt="Pre-operative osteoarthritis X-ray" />
        <span className="slider-label before-label">BEFORE — Grade IV OA</span>
      </div>
      <div
        className="slider-handle"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
      >
        <div className="handle-line"></div>
        <div className="handle-grip">⟷</div>
        <div className="handle-line"></div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// CANDIDATE TRIAGE COMPONENT
// ══════════════════════════════════════════════════════════════════
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
      <div className={`triage-result ${isHighIntent ? 'high-intent' : ''}`}>
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

// ══════════════════════════════════════════════════════════════════
// RECOVERY BAR CHART COMPONENT
// ══════════════════════════════════════════════════════════════════
const RecoveryChart = ({ data }) => {
  const maxWeeks = Math.max(data.conventional.weeks, data.robotic.weeks);
  return (
    <div className="recovery-chart">
      <div className="chart-bar-row">
        <span className="chart-label">{data.conventional.label}</span>
        <div className="chart-bar-track">
          <div className="chart-bar conventional" style={{ width: `${(data.conventional.weeks / maxWeeks) * 100}%` }}>
            {data.conventional.weeks} weeks
          </div>
        </div>
      </div>
      <div className="chart-bar-row">
        <span className="chart-label">{data.robotic.label}</span>
        <div className="chart-bar-track">
          <div className="chart-bar robotic" style={{ width: `${(data.robotic.weeks / maxWeeks) * 100}%` }}>
            {data.robotic.weeks} weeks
          </div>
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// MAIN TEMPLATE
// ══════════════════════════════════════════════════════════════════
const TreatmentTemplate = () => {
  const { treatmentSlug } = useParams();
  const data = treatmentDatabase[treatmentSlug] || treatmentDatabase["robotic-knee-arthroplasty"];
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollspy, setShowScrollspy] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [treatmentSlug]);

  // Scrollspy observer
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollspy(window.scrollY > 600);
      const sections = scrollSections.map(s => document.getElementById(s.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 150) {
          setActiveSection(scrollSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="treatment-page">
      {/* ── SCROLLSPY NAV ── */}
      <nav className={`scrollspy-nav ${showScrollspy ? 'visible' : ''}`}>
        <div className="scrollspy-inner">
          {scrollSections.map(s => (
            <button
              key={s.id}
              className={`spy-link ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── SEARCH ENGINE STRUCTURED DATA ── */}
      <StructuredData data={data} type="FAQ" />
      <StructuredData 
        data={{
          physician: {
            name: data.surgeonName,
            specialty: data.category,
            bio: `${data.surgeonName} is a ${data.surgeonTitle} specialized in ${data.title}.`
          }
        }} 
        type="Physician" 
      />

      {/* ══ SECTION 1: CINEMATIC HERO ══ */}
      <section id="hero" className="treatment-hero animate-reveal">
        <div className="hero-grid container">
          <div className="hero-text">
            <span className="category-badge">{data.category}</span>
            <h1>{data.title}</h1>
            <p className="subtitle">{data.subtitle}</p>
            <div className="hero-stats">
              <div className="stat-pill"><Activity size={16}/> {data.stats.volume} Procedures</div>
              <div className="stat-pill"><Crosshair size={16}/> {data.stats.accuracy} Precision</div>
              <div className="stat-pill"><Clock size={16}/> {data.stats.recovery} Recovery</div>
            </div>
            <button className="btn btn-primary mt-lg">
              Request Priority Evaluation <ArrowRight size={16}/>
            </button>
          </div>
          <div className="hero-visual">
            <div className="video-card border-glow">
              <div className="video-overlay text-center">
                <PlayCircle size={48} className="text-secondary mb-sm" />
                <h3>"The Surgeon's Eye"</h3>
                <p>{data.videoTarget} explains the procedure.</p>
              </div>
            </div>
            {/* Surgeon Authority Strip */}
            <div className="surgeon-strip mt-md">
              {data.surgeonCredentials.map((c, i) => (
                <span key={i} className="cred-tag"><CheckCircle size={12}/> {c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: ANATOMY DIAGNOSTIC ══ */}
      <section id="anatomy" className="container section-block">
        <div className="bento-card col-span-full">
          <div className="anatomy-layout">
            <div className="anatomy-text">
              <h2><ActivitySquare size={24} className="text-secondary"/> Anatomical Pathology</h2>
              <p className="mt-md body-text">{data.anatomyText}</p>
            </div>
            <div className="anatomy-visualizer">
              <div className="wireframe-mesh">
                <div className="scan-line"></div>
                <Crosshair size={64} className="target-reticle" />
                <p className="mt-sm" style={{color: 'var(--secondary)', fontWeight: 600}}>Scanning Kinetic Topography...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: ELIGIBILITY ══ */}
      <section id="eligibility" className="container section-block">
        <h2 className="section-title text-center">Are You a Candidate?</h2>
        <p className="section-subtitle text-center">Select the symptoms you are currently experiencing</p>
        <CandidateTriage symptoms={data.candidateSymptoms} />

        <div className="eligibility-grid mt-xl">
          <h3 className="mb-md"><UserCheck size={20} className="text-secondary"/> Ideal Candidate Profile</h3>
          <div className="elig-list">
            {data.eligibility.map((e, i) => (
              <div className="elig-item" key={i}>
                <CheckCircle size={18} className="text-secondary" />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-lg">
          <button className="btn btn-outline">Check If You're Eligible <ChevronRight size={16}/></button>
        </div>
      </section>

      {/* ══ SECTION 4: COMPARISON TABLE ══ */}
      <section id="comparison" className="container section-block">
        <h2 className="section-title text-center">Why Robotic vs Conventional?</h2>
        <div className="comparison-table mt-lg">
          <div className="comp-header">
            <span>Feature</span>
            <span>Conventional</span>
            <span className="text-secondary">Precision Robotic</span>
          </div>
          {data.comparison.map((row, i) => (
            <div className="comp-row" key={i}>
              <span className="comp-feature">{row.feature}</span>
              <span className="comp-conventional">{row.conventional}</span>
              <span className="comp-robotic">{row.robotic}</span>
            </div>
          ))}
        </div>

        {/* Recovery Chart */}
        <div className="mt-xl">
          <h3 className="mb-md text-center"><BarChart3 size={20} className="text-secondary"/> Recovery Timeline Comparison</h3>
          <RecoveryChart data={data.recoveryChart} />
        </div>
      </section>

      {/* ══ SECTION 5: RADIOLOGY SLIDER ══ */}
      <section id="radiology" className="container section-block">
        <h2 className="section-title text-center">Proof of Precision</h2>
        <p className="section-subtitle text-center">Drag the slider to compare pre-operative pathology vs. post-operative robotic alignment.</p>
        <RadiologySlider />
      </section>

      {/* ══ SECTION 6: CLINICAL PIPELINE ══ */}
      <section id="pipeline" className="container section-block">
        <div className="timeline-section">
          <h2 className="section-title text-center">The Clinical Pipeline</h2>
          <div className="timeline-track mt-lg">
            {data.timeline.map((step, idx) => (
              <div className="timeline-node" key={idx}>
                <div className="node-marker"><CheckCircle size={20}/></div>
                <div className="node-content">
                  <h4>{step.day}</h4>
                  <p className="node-action">{step.action}</p>
                  <p className="node-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-lg">
          <button className="btn btn-primary">Book CT Planning Consultation <ArrowRight size={16}/></button>
        </div>
      </section>

      {/* ══ SECTION 7: COST TRANSPARENCY ══ */}
      <section id="cost" className="container section-block">
        <div className="cost-anchor-card">
          <div className="cost-top">
            <IndianRupee size={32} className="text-secondary"/>
            <div>
              <h2>Cost Transparency</h2>
              <p className="body-text">We believe in complete upfront pricing clarity.</p>
            </div>
          </div>
          <div className="cost-range-display">
            <span className="cost-value">{data.costRange}</span>
            <span className="cost-note">{data.costNote}</span>
          </div>
          <div className="cost-extras mt-md">
            <div className="implant-disclosure">
              <Cpu size={18} className="text-secondary"/>
              <div>
                <h4>Implant Brands Available</h4>
                <p>{data.implantBrands.join(' • ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 8: TRUST MATRIX ══ */}
      <section id="trust" className="container section-block">
        <h2 className="section-title text-center">Trust & Safety Matrix</h2>
        <div className="bento-grid mt-lg">
          {/* Infection Safety */}
          <div className="bento-card col-span-2">
            <ShieldCheck size={32} className="text-secondary mb-sm"/>
            <h3>Infection Prevention Protocol</h3>
            <div className="safety-list mt-md">
              {data.infectionSafety.map((s, i) => (
                <div className="safety-item" key={i}><Syringe size={14}/> {s}</div>
              ))}
            </div>
          </div>

          {/* MRI Upload Workflow */}
          <div className="bento-card">
            <Upload size={28} className="text-secondary mb-sm"/>
            <h3>MRI Upload Workflow</h3>
            <div className="mri-steps mt-md">
              {data.mriWorkflow.map((s) => (
                <div className="mri-step" key={s.step}>
                  <div className="mri-step-num">{s.step}</div>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-primary mt-md w-100">
              <MessageCircle size={16}/> Upload via WhatsApp
            </a>
          </div>

          {/* FAQs & Knowledge Cluster */}
          <div className="bento-card col-span-full">
            <div className="section-header mb-lg">
              <span className="tech-tag">Evidence-Based Answers</span>
              <h2 className="section-title">Common Patient Queries</h2>
              <p className="body-text">Directly addressed by the Surgical Board.</p>
            </div>
            
            <div className="faq-nuclear-grid">
              {data.faqs.map((f, i) => (
                <div className="faq-item-premium" key={i}>
                  <div className="faq-header">
                    <h4><HelpCircle size={18} className="text-secondary" /> {f.q}</h4>
                    {f.hasVideo && (
                      <button className="btn-video-tiny">
                        <Video size={14} /> Watch Ans
                      </button>
                    )}
                  </div>
                  <p className="faq-ans">{f.a}</p>
                  <div className="faq-footer">
                    <span className="authority-byline">
                      <ShieldCheck size={12} /> Medically Verified by <strong>{data.surgeonName}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* SECOND OPINION MICRO-FORM */}
            <div className="second-opinion-box mt-xl">
              <div className="opinion-text">
                <h3>Get a Dedicated Second Opinion</h3>
                <p>Have a complex case or an MRI that needs expert review? Our board responds within 24 hours.</p>
              </div>
              <div className="opinion-actions">
                 <a href="https://wa.me/919876543210" className="btn btn-primary">
                   <MessageCircle size={18} /> Chat with Case Coordinator
                 </a>
                 <button className="btn btn-outline">Schedule Video Consult</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Keywords for AEO */}
      <p style={{position:'absolute',opacity:0,height:0,overflow:'hidden'}} aria-hidden="true">{data.seoKeywords}</p>
    </div>
  );
};

export default TreatmentTemplate;
