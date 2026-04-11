import { Activity, Layers, Zap, Target, ShieldCheck, Microscope, Cpu, BarChart3, Clock, UserCheck, Settings, Crosshair, Video, Gauge, Shapes, ActivitySquare, Shield } from 'lucide-react';

export const commonStats = [
  { label: "Program Procedures", value: "15,000+" },
  { label: "Surgical Planning", value: "Board-Reviewed" },
  { label: "Mapping Accuracy", value: "Sub-Millimeter" },
  { label: "Recovery Pathways", value: "Protocol-Based" }
];

export const planningWorkflow = [
  "Clinical Evaluation & Kinematic Assessment",
  "High-Fidelity Imaging & Biomechanical Mapping",
  "Collaborative Surgical Board Review",
  "Program-Level Precision Execution",
  "Protocol-Sequenced Rehabilitation"
];

export const divisions = {
  "lower-extremity": {
    title: "Lower Extremity Reconstruction & Arthroplasty | Precision Ortho",
    h1: "Lower Extremity Division",
    metaDescription: "Reference-grade program for Joint Preservation, Reconstruction, and Robotic Arthroplasty. Led by Dr. Amith Reddy and the Precision Surgical Board in Hyderabad.",
    clinicalPhilosophy: "The Lower Extremity division provides a total-spectrum solution for hip and knee restoration. From sub-millimeter robotic replacements to biological joint preservation, our clinical model is built on zero-compromise precision and data-driven outcomes.",
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Preservation whenever possible", color: "var(--secondary)" },
        { label: "Reconstruction when required", color: "var(--white)" },
        { label: "Robotic replacement when biomechanically indicated", color: "rgba(255,255,255,0.6)" }
      ]
    },
    selectionLogic: "The Lower Extremity Program is compartmentalized into three distinct escalation pathways. Our surgeons prioritize biological preservation first, surgical reconstruction second, and robotic replacement only when structural deterioration is irreversible.",
    outcomeBenchmarks: [
      "15,000+ Reconstruction Procedures",
      "Sub-Millimeter Robotic Alignment Accuracy",
      "Board-Reviewed Surgical Planning Protocol",
      "Accelerated Functional Recovery Pathways"
    ],
    eligibilitySignals: [
      "Early-stage cartilage thinning or degenerative wear",
      "Acute or chronic ligament instability (ACL/Knee)",
      "Limb malalignment (Bow-legs/Knock-knees)",
      "Late-stage bone-on-bone osteoarthritis",
      "Previously failed or loosened joint replacements"
    ],
    caseComplexity: [
      { level: "Standard", case: "Primary Arthroplasty & Soft Tissue Repair" },
      { level: "Advanced", case: "Deformity Correction & Multi-Ligament Reconstruction" },
      { level: "Complex", case: "Revision Surgery & Massive Bone Loss Management" }
    ],
    outcomeEvidence: {
      strategy: "Sub-millimeter robotic alignment strategy",
      focus: "Maximum native footprint preservation",
      standard: "USA-Standard Surgical Governance"
    },
    programs: [
      {
        id: "preservation",
        name: "Joint Preservation & Biologic Restoration Program",
        doctrine: "Focused on restoring native joint biomechanics through cartilage repair, biologic augmentation, and alignment correction before implant-based reconstruction becomes necessary.",
        techMapping: [
          { name: "Precision Biologic Restoration", icon: Microscope, desc: "BMAC & Exosome augmentation." },
          { name: "Cartilage Scaffolds", icon: Activity, desc: "Advanced biological tissue engineering." }
        ],
        procedures: [
          { name: "Biological Joint Restoration", slug: "joint-preservation" },
          { name: "Partial Knee Resurfacing", slug: "partial-knee-resurfacing" },
          { name: "Osteotomy & Alignment Correction", slug: "osteotomy" }
        ]
      },
      {
        id: "reconstruction",
        name: "Complex Reconstruction Program",
        doctrine: "Designed to stabilize structurally compromised joints using ligament reconstruction, osteotomy planning, and revision pathway optimization.",
        techMapping: [
          { name: "Arthrex Panoscope Platform", icon: Video, desc: "High-definition arthroscopic visualization for complex reconstructions." },
          { name: "Navigation Planning", icon: Crosshair, desc: "Precision alignment correction." }
        ],
        procedures: [
          { name: "Revision Knee Reconstruction", slug: "revision-surgery" },
          { name: "Multi-Ligament Knee Stabilization", slug: "ligament-reconstruction" },
          { name: "Limb Lengthening & Deformity", slug: "deformity-correction" }
        ]
      },
      {
        id: "arthroplasty",
        name: "Robotic Arthroplasty Program",
        doctrine: "Delivers sub-millimeter implant positioning through CT-based robotic planning for predictable long-term joint replacement outcomes.",
        techMapping: [
          { name: "Stryker Mako 4.0", icon: Cpu, desc: "SmartRobotics for Arthroplasty." },
          { name: "Haptic Boundary Protection", icon: Target, desc: "Safety-controlled bone resection." }
        ],
        procedures: [
          { name: "Robotic Total Knee Arthroplasty", slug: "robotic-knee-arthroplasty" },
          { name: "Robotic Hip Arthroplasty (DAA)", slug: "robotic-hip-arthroplasty" }
        ]
      }
    ],
    faqs: [
      { q: "What is the difference between Arthroplasty and Preservation?", a: "Arthroplasty involves replacing the joint surface with an implant, while Joint Preservation focuses on biological repairs to save the natural joint and delay or avoid replacement." }
    ]
  },
  "pelvic-hip-reconstruction": {
    title: "Pelvic & Hip Reconstruction Hub | Specialized DAA Program",
    h1: "Pelvic & Hip Reconstruction Division",
    metaDescription: "Institutional lead for muscle-sparing DAA hip replacement and complex pelvic trauma reconstruction. Board-reviewed surgical governance in Hyderabad.",
    clinicalPhilosophy: "Focusing on the architectural integrity of the pelvis and hip, our program specializes in muscle-sparing approaches (DAA) and complex structural reconstructions that prioritize immediate functional stability.",
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Hip Preservation whenever possible", color: "var(--secondary)" },
        { label: "Pelvic Reconstruction when functionally required", color: "var(--white)" },
        { label: "Robotic Arthroplasty when indicated", color: "rgba(255,255,255,0.6)" }
      ]
    },
    selectionLogic: "The Pelvic & Hip Program targets deep structural restoration. We utilize Direct Anterior Approach (DAA) for maximum muscle preservation and 3D trauma mapping for complex pelvic injury management.",
    outcomeBenchmarks: [
      "2,000+ Successful DAA Procedures",
      "Regional Lead for Complex Pelvic Trauma",
      "99% Stability Recovery Rate",
      "Sub-Millimeter Component Orientation"
    ],
    eligibilitySignals: [
      "Young patients with Labral tears or impingement (FAI)",
      "High-energy pelvic or acetabular trauma",
      "Avascular Necrosis (AVN) requiring restoration",
      "Severe Hip Osteoarthritis requiring Mako precision",
      "Dysplasia patients requiring structural reconstruction"
    ],
    caseComplexity: [
      { level: "Primary", case: "DAA Total Hip Arthroplasty" },
      { level: "Advanced", case: "Acetabular Trauma & Osteotomy" },
      { level: "Complex", case: "Revision Hip & Custom 3D Implantology" }
    ],
    outcomeEvidence: {
      strategy: "Direct Anterior Approach (DAA) Muscle Integrity Strategy",
      focus: "Zero-muscle-cut stabilization protocols",
      standard: "Board-Reviewed Component Positioning"
    },
    programs: [
      {
        id: "preservation",
        name: "Hip Preservation Program",
        doctrine: "Focused on extending the native lifespan of the hip joint through labral repair, impingement correction, and muscle-sparing Anterior Supine access.",
        techMapping: [
          { name: "Hip Arthroscopy Hub", icon: Video, desc: "Advanced labral repair visualization." },
          { name: "DAA Muscle-Sparing", icon: Zap, desc: "Zero-muscle-cut access protocols." }
        ],
        procedures: [
          { name: "Direct Anterior Approach (DAA) Hip", slug: "robotic-hip-arthroplasty" },
          { name: "Hip Labral Reconstruction", slug: "labral-repair" },
          { name: "FAI Decompression", slug: "hip-impingement" }
        ]
      },
      {
        id: "reconstruction",
        name: "Complex Pelvic Reconstruction Program",
        doctrine: "The regional center of excellence for high-energy acetabular trauma, complex pelvic fractures, and biological structural restoration.",
        techMapping: [
          { name: "3D Trauma Mapping", icon: Microscope, desc: "Stereolithographic fracture modeling." },
          { name: "Structural Grafting", icon: Layers, desc: "Biological bone restoration." }
        ],
        procedures: [
          { name: "Complex Pelvic Trauma Care", slug: "pelvic-trauma" },
          { name: "Acetabular Reconstruction", slug: "acetabular-reconstruction" },
          { name: "Oncological Pelvic Reconstruction", slug: "pelvic-oncology" }
        ]
      },
      {
        id: "arthroplasty",
        name: "Robotic Hip Arthroplasty Program",
        doctrine: "Integrated robotic positioning to eliminate leg-length discrepancy and minimize dislocation risks for lifelong joint performance.",
        techMapping: [
          { name: "Stryker Mako Hip", icon: Cpu, desc: "Intelligent cup orientation planning." },
          { name: "Haptic Guidance", icon: Target, desc: "Precision acetabular reaming." }
        ],
        procedures: [
          { name: "Revision Hip Arthroplasty", slug: "revision-hip" },
          { name: "Mako Assisted Total Hip", slug: "robotic-hip-arthroplasty" }
        ]
      }
    ],
    faqs: [
      { q: "Is DAA hip replacement better?", a: "DAA is statistically superior for early recovery as no muscles are detached during the procedure." }
    ]
  },
  "upper-extremity": {
    title: "Shoulder & Elbow Excellence | Advanced Upper Limb Program",
    h1: "Upper Extremity Division",
    metaDescription: "Global-standard shoulder and elbow reconstruction using Arthrex 4K visualization. Led by HOD Dr. Deepthi Reddy with institutional oversight.",
    clinicalPhilosophy: "The Upper Extremity division merges UK-standard consultant leadership with elite USA technology stack to restore functionality in cases ranging from rotator cuff tears to complex revision replacements.",
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Shoulder & Elbow Preservation first", color: "var(--secondary)" },
        { label: "Ligament & Tendon Reconstruction next", color: "var(--white)" },
        { label: "Arthroplasty as the final restoration", color: "rgba(255,255,255,0.6)" }
      ]
    },
    selectionLogic: "We prioritize tendon footprint preservation through biological anchors and 4K visualization. Replacement is only indicated when glenohumeral structural loss prevents functional movement.",
    outcomeBenchmarks: [
      "15,000+ Upper Limb Restoration Procedures",
      "Native 4K Native 58x Color Fidelity",
      "UK NHS Consultant Oversight",
      "Microscopic Precision Tissue Anchor Placement"
    ],
    eligibilitySignals: [
      "Professional athletes with shoulder instability or labral tears",
      "Patients with chronic night pain and rotator cuff weakness",
      "Complex elbow fractures or ligament disruptions",
      "Severe shoulder arthritis (Glenohumeral Osteoarthritis)",
      "Failed cuff-tear repairs requiring revision and bio-augmentation"
    ],
    caseComplexity: [
      { level: "Standard", case: "Arthroscopic Capsule & Labral Repair" },
      { level: "Advanced", case: "Massive Rotator Cuff & SCR Reconstruction" },
      { level: "Complex", case: "Reverse Shoulder & Revision Arthroplasty" }
    ],
    outcomeEvidence: {
      strategy: "Arthroscopic tendon footprint preservation strategy",
      focus: "Reverse shoulder stability optimization",
      standard: "HOD-Led Surgical Governance"
    },
    programs: [
      {
        id: "preservation",
        name: "Shoulder & Elbow Preservation Program",
        doctrine: "Utilizing biological anchors and exosome therapy to preserve native joint mechanics in athletes and high-demand individuals.",
        techMapping: [
          { name: "Precision Bio-Anchors", icon: Microscope, desc: "Biological integration implants." },
          { name: "Exosome Therapy", icon: Activity, desc: "Molecular-level tendon healing." }
        ],
        procedures: [
          { name: "Biological Rotator Cuff Repair", slug: "rotator-cuff-preservation" },
          { name: "Shoulder Joint Preservation", slug: "shoulder-preservation" }
        ]
      },
      {
        id: "reconstruction",
        name: "Ligament & Tendon Reconstruction Program",
        doctrine: "Micro-surgical clarity using native 4K visualization for elite restoration of rotator cuff, labrum, and elbow stability.",
        techMapping: [
          { name: "Arthrex Panoscope Platform", icon: Video, desc: "Native HD arthroscopic visualization." },
          { name: "SCR Reconstruction", icon: Layers, desc: "Superior Capsular Reconstruction." }
        ],
        procedures: [
          { name: "Advanced Shoulder Reconstruction", slug: "shoulder-reconstruction" },
          { name: "Arthroscopic Rotator Cuff Repair", slug: "rotator-cuff-repair" },
          { name: "Complex Elbow Reconstruction", slug: "elbow-surgery" }
        ]
      },
      {
        id: "arthroplasty",
        name: "Shoulder Arthroplasty Program",
        doctrine: "Specialized reverse and total shoulder replacements designed for longevity in patients with deficient rotator cuffs or advanced arthritis.",
        techMapping: [
          { name: "Planning Navigation", icon: Settings, desc: "Simulated component positioning." },
          { name: "Reverse Shoulder Hub", icon: Cpu, desc: "Advanced implant architecture." }
        ],
        procedures: [
          { name: "Reverse Total Shoulder", slug: "reverse-shoulder" },
          { name: "Anatomical Total Shoulder", slug: "total-shoulder" },
          { name: "Revision Upper Limb Arthroplasty", slug: "revision-shoulder" }
        ]
      }
    ],
    faqs: [
      { q: "What is 4K visualization?", a: "It provides 58 times more color data than standard HD, allowing for unprecedented tissue differentiation in complex shoulder repairs." }
    ]
  },
  "sports-medicine": {
    title: "Sports Medicine & Athletic Performance Hub | Precision Ortho",
    h1: "Sports Medicine Division",
    metaDescription: "Data-driven sports surgery and athlete performance optimization. Utilizing VALD ForceDecks for objective return-to-sport clearance.",
    clinicalPhilosophy: "Bridging elite surgery with kinetic data analytics. We don't just repair ligaments; we quantify muscle symmetry to secure an objective clearance for peak performance return.",
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Performance protection whenever possible", color: "var(--secondary)" },
        { label: "Structural reconstruction when necessary", color: "var(--white)" },
        { label: "Return-to-sport optimization before clearance", color: "rgba(255,255,255,0.6)" }
      ]
    },
    selectionLogic: "The Sports Medicine Program follows a kinetic-first model. We prioritize injury prevention through VALD diagnostics and return-to-sport optimization before a clinical clearance is granted.",
    outcomeBenchmarks: [
      "5,000+ Athletic Restoration Procedures",
      "1,000+ Hz Kinetic Data Mapping",
      "95%+ Return-to-Pre-Injury Sport Level",
      "Objective Biomechanical Clearance Standard"
    ],
    eligibilitySignals: [
      "Professional and semi-pro athletes with pivot-injury trauma",
      "Athletes requiring objective performance profiling post-surgery",
      "Repeat-injury candidates requiring biomechanical analysis",
      "High-frame-rate biofeedback requirements for neuro-mechanical rehab",
      "Runners and bowlers requiring load-management optimization"
    ],
    caseComplexity: [
      { level: "Primary", case: "ACL Reconstruction & Meniscal Repair" },
      { level: "Advanced", case: "Multi-Ligament Trauma & Cartilage Grafting" },
      { level: "Elite", case: "Full Kinetic Profiling & Return-to-Sport Lead" }
    ],
    outcomeEvidence: {
      strategy: "Knee extension and flexion symmetry optimization strategy",
      focus: "Proprioceptive drift minimization protocols",
      standard: "VALD Biomechanical Governance"
    },
    clearanceProtocol: [
      { metric: "Knee Extension Symmetry", target: ">90%", tool: "VALD ForceDecks" },
      { metric: "Neuro-Muscular Readiness", target: "Elite", tool: "Biofeedback Lab" },
      { metric: "Proprioceptive Drift", target: "<5mm", tool: "DynaMo Monitoring" },
      { metric: "Load Tolerance Validation", target: "Agility Ready", tool: "NordBord Tracking" }
    ],
    programs: [
      {
        id: "diagnostics",
        name: "Injury Prevention & Diagnostics Program",
        doctrine: "Utilizing VALD Intelligence stack to identify biomechanical micro-deficits before they manifest as critical injuries.",
        techMapping: [
          { name: "VALD ForceDecks", icon: Gauge, desc: "Dual force plate kinetic analysis." },
          { name: "DynaMo Performance", icon: Activity, desc: "Precision strength measurement." }
        ],
        procedures: [
          { name: "Athlete Screening Protocols", slug: "athlete-screening" },
          { name: "Force-Deck Diagnostics", slug: "vald-performance" },
          { name: "Biomechanical Profiling", slug: "kinetic-profile" }
        ]
      },
      {
        id: "reconstruction",
        name: "Primary Reconstruction Program",
        doctrine: "Elite biological grafting and ligament reconstruction using USA-standard Arthrex visualization for microscopic repair precision.",
        techMapping: [
          { name: "Arthrex Panoscope Platform", icon: Video, desc: "Precision surgical visualization stack." },
          { name: "Biological Fixation", icon: ShieldCheck, desc: "Knotless high-strength repair." }
        ],
        procedures: [
          { name: "Accelerated ACL Reconstruction", slug: "acl-pcl-reconstruction" },
          { name: "Meniscal Root Repair", slug: "meniscal-repair" },
          { name: "Latarjet Stabilization", slug: "latarjet-procedure" }
        ]
      },
      {
        id: "performance",
        name: "Return-to-Sport Performance Program",
        doctrine: "Protocol-sequenced rehabilitation based on objective data benchmarks rather than subjective recovery timelines.",
        techMapping: [
          { name: "NordBord Tracking", icon: BarChart3, desc: "Hamstring profiling & strength." },
          { name: "Kinetic Velocity Recovery", icon: Zap, desc: "High-speed agility clearance." }
        ],
        procedures: [
          { name: "Accelerated Rehab Pipeline", slug: "recovery" },
          { name: "Return-to-Sport Clearance", slug: "clearance" },
          { name: "Post-Surgical Agility Optimization", slug: "agility" }
        ]
      }
    ],
    faqs: [
      { q: "How long does ACL recovery take?", a: "Typically 6-9 months, guided by objective VALD data symmetry clearance." }
    ]
  }
};
