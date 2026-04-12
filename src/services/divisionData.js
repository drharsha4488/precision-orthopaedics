import { Activity, Layers, Zap, Target, ShieldCheck, Microscope, Cpu, BarChart3, Clock, UserCheck, Settings, Crosshair, Video, Gauge, Shapes, ActivitySquare } from 'lucide-react';

export const commonStats = [
  { label: "Program Procedures", value: "15,000+" },
  { label: "Surgical Planning", value: "Board-Reviewed" },
  { label: "Mapping Accuracy", value: "Sub-Millimeter" },
  { label: "Recovery Pathways", value: "Protocol-Based" }
];

export const divisions = {
  "lower-extremity": {
    title: "Lower Extremity Reconstruction & Arthroplasty | Precision Ortho",
    h1: "Lower Extremity Reconstruction & Robotic Arthroplasty",
    portalLabel: "Lower Limb Alignment Surgery",
    divisionIdentityStatement: "Mechanical axis restoration across biologic preservation, ligament reconstruction, and robotic arthroplasty escalation pathways",
    metaDescription: "Reference-grade program for Joint Preservation, Reconstruction, and Robotic Arthroplasty. Led by Dr. Amith Reddy and the Precision Surgical Board in Hyderabad.",
    clinicalPhilosophy: "Mechanical alignment restoration across preservation, ligament reconstruction, and robotic arthroplasty escalation pathways.",
    decisionThresholdLogic: [
      "Alignment correction for physiologic unloading",
      "Biological reconstruction for joint stability",
      "Robotic Arthroplasty for structural end-state"
    ],
    divisionProtocols: [
      "Mechanical axis restoration planning",
      "Osteotomy correction pathways",
      "Ligament stability ladders",
      "Robotic arthroplasty thresholds"
    ],
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Anatomical Alignment first", color: "var(--secondary)" },
        { label: "Functional Stabilization next", color: "var(--white)" },
        { label: "Robotic Reconstruction finally", color: "rgba(255,255,255,0.6)" }
      ]
    },
    localAuthority: "Mechanical Alignment Research Group Oversight",
    selectionLogic: "The Lower Extremity Department focuses on the restoration of the mechanical axis. We utilize a graduated escalation model that prioritizes realignment osteotomy and ligament stability before progressing to robotic implantology.",
    outcomeBenchmarks: [
      "15,000+ Reconstruction Procedures",
      "Sub-Millimeter Robotic Alignment Accuracy",
      "Board-Reviewed Surgical Planning Protocol",
      "Accelerated Functional Recovery Pathways"
    ],
    eligibilitySignals: [
      "Varus deformity / Alignment failure",
      "ACL failure or multi-ligament instability",
      "Advanced cartilage loss / BMI indicated replacement",
      "Ligament insufficiency in young patients",
      "Previously failed or loosened joint replacements"
    ],
    planningWorkflow: [
      { step: 1, label: "Clinical Evaluation", desc: "Kinematic and gait assessment." },
      { step: 2, label: "Alignment & Mechanical Axis Mapping", desc: "CT-based robotic mapping for alignment." },
      { step: 3, label: "Board Review", desc: "Collaborative surgical strategy." },
      { step: 4, label: "Program Execution", desc: "Mako 4.0 or reconstruction protocol." },
      { step: 5, label: "Protocol Rehab", desc: "Sequenced kinetic recovery." }
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
        techBinding: "BIOCENTRICS",
        doctrine: "Focused on restoring native joint biomechanics through cartilage repair, biologic augmentation, and alignment correction before implant-based reconstruction becomes necessary.",
        techMapping: [
          { name: "Precision Biologic Restoration", icon: Microscope, desc: "BMAC & Exosome augmentation." },
          { name: "Cartilage Scaffolds", icon: Activity, desc: "Advanced biological tissue engineering." }
        ],
        procedures: [
          { name: "Biological Joint Restoration", slug: "cartilage-restoration" },
          { name: "Partial Knee Resurfacing", slug: "partial-knee-resurfacing" },
          { name: "High Tibial Osteotomy (HTO)", slug: "high-tibial-osteotomy" }
        ]
      },
      {
        id: "reconstruction",
        name: "Complex Reconstruction Program",
        techBinding: "PANOSCOPE",
        doctrine: "Designed to stabilize structurally compromised joints using ligament reconstruction, osteotomy planning, and revision pathway optimization.",
        techMapping: [
          { name: "Arthrex Panoscope Platform", icon: Video, desc: "High-definition arthroscopic visualization for complex reconstructions." },
          { name: "Navigation Planning", icon: Crosshair, desc: "Precision alignment correction." }
        ],
        procedures: [
          { name: "Revision Knee Reconstruction", slug: "revision-knee-replacement" },
          { name: "Multi-Ligament Knee Stabilization", slug: "multi-ligament-reconstruction" },
          { name: "Acetabular Reconstruction", slug: "acetabular-reconstruction" }
        ]
      },
      {
        id: "arthroplasty",
        name: "Robotic Arthroplasty Program",
        techBinding: "MAKO",
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
    boardMembers: ["Dr. Amith Reddy (Program Lead)", "Dr. Ravi Teja", "Dr. Deepthi Nandan Reddy (HOD)", "Precision Surgical Board"],
    faqs: [
      { q: "What is the difference between Arthroplasty and Preservation?", a: "Arthroplasty involves replacing the joint surface with an implant, while Joint Preservation focuses on biological repairs to save the natural joint and delay or avoid replacement." }
    ]
  },
  "pelvic-hip-reconstruction": {
    title: "Pelvic & Hip Reconstruction Hub | Specialized DAA Program",
    h1: "Pelvic & Hip Reconstruction Hub",
    portalLabel: "Pelvic Architecture Restoration",
    divisionIdentityStatement: "Architectural pelvic stability restoration using DAA access planning and acetabular reconstruction workflows",
    metaDescription: "Institutional lead for muscle-sparing DAA hip replacement and complex pelvic trauma reconstruction. Board-reviewed surgical governance in Hyderabad.",
    clinicalPhilosophy: "Architectural pelvic stability restoration using DAA access planning, acetabular reconstruction pathways, and complex trauma sequencing.",
    decisionThresholdLogic: [
      "DAA Access for early joint preservation",
      "Structural reconstruction for acetabular loss",
      "Revision pathways for failed implant stability"
    ],
    divisionProtocols: [
      "DAA access protocols",
      "Pelvic ring reconstruction planning",
      "Acetabular defect classification workflows",
      "Revision hip stability algorithms"
    ],
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Muscle-Sparing DAA Integrity", color: "var(--secondary)" },
        { label: "Acetabular Structural Restoration", color: "var(--white)" },
        { label: "Complex Revision Stabilization", color: "rgba(255,255,255,0.6)" }
      ]
    },
    localAuthority: "Pelvic trauma & Revision Arthroplasty Lab",
    selectionLogic: "The Pelvic & Hip Department specializes in architectural integrity. Our surgeons utilize muscle-sparing DAA entry for primary cases and advanced 3D structural mapping for complex pelvic failures.",
    outcomeBenchmarks: [
      "2,000+ Successful DAA Procedures",
      "Regional Lead for Complex Pelvic Trauma",
      "99% Stability Recovery Rate",
      "Sub-Millimeter Component Orientation"
    ],
    eligibilitySignals: [
      "FAI syndrome / Labral tears",
      "Acetabular fractures / Pelvic trauma",
      "Avascular Necrosis requires restoration",
      "Severe osteoarthritis requiring DAA",
      "Revision hip instability / Malalignment"
    ],
    planningWorkflow: [
      { step: 1, label: "Clinical Evaluation", desc: "Gait analysis and structural assessment." },
      { step: 2, label: "CT Acetabular Architecture Modeling", desc: "3D mapping of the pelvic vault." },
      { step: 3, label: "Board Review", desc: "Joint surgical planning session." },
      { step: 4, label: "Program Execution", desc: "DAA hip or pelvic structural repair." },
      { step: 5, label: "Protocol Rehab", desc: "Immediate weight-bearing sequencing." }
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
        techBinding: "BIOCENTRICS",
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
        techBinding: "PANOSCOPE",
        doctrine: "The regional center of excellence for high-energy acetabular trauma, complex pelvic fractures, and biological structural restoration.",
        techMapping: [
          { name: "3D Trauma Mapping", icon: Microscope, desc: "Stereolithographic fracture modeling." },
          { name: "Structural Grafting", icon: Layers, desc: "Biological bone restoration." }
        ],
        procedures: [
          { name: "Complex Pelvic Trauma Care", slug: "pelvic-trauma-care" },
          { name: "Acetabular Reconstruction", slug: "acetabular-reconstruction" },
          { name: "Oncological Bone Tumor Hub", slug: "bone-tumor-excision" }
        ]
      },
      {
        id: "arthroplasty",
        name: "Robotic Hip Arthroplasty Program",
        techBinding: "MAKO",
        doctrine: "Integrated robotic positioning to eliminate leg-length discrepancy and minimize dislocation risks for lifelong joint performance.",
        techMapping: [
          { name: "Stryker Mako Hip", icon: Cpu, desc: "Intelligent cup orientation planning." },
          { name: "Haptic Guidance", icon: Target, desc: "Precision acetabular reaming." }
        ],
        procedures: [
          { name: "Revision Hip Arthroplasty", slug: "revision-hip-replacement" },
          { name: "Mako Assisted Total Hip", slug: "robotic-hip-arthroplasty" }
        ]
      }
    ],
    boardMembers: ["Dr. Nitish Bhan (Program Lead)", "Dr. Prashanth Reddy", "Dr. Amith Reddy", "Precision Surgical Board"],
    faqs: [
      { q: "Is DAA hip replacement better?", a: "DAA is statistically superior for early recovery as no muscles are detached during the procedure." }
    ]
  },
  "upper-extremity": {
    title: "Shoulder & Elbow Excellence | Advanced Upper Limb Program",
    h1: "Upper Extremity & Biological Reconstruction",
    portalLabel: "Upper Limb Reconstruction",
    divisionIdentityStatement: "Soft-tissue preservation and anchor-based reconstruction across instability, cuff failure, and revision shoulder states",
    metaDescription: "Global-standard shoulder and elbow reconstruction using Arthrex 4K visualization. Led by HOD Dr. Deepthi Reddy with institutional oversight.",
    clinicalPhilosophy: "Soft-tissue preservation and anchor-based reconstruction strategies for rotator cuff failure, instability, and complex shoulder arthropathy.",
    decisionThresholdLogic: [
      "4K Micro-Repairs for tendon footprints",
      "Mechanical stabilization for recurrent laxity",
      "Reverse Arthroplasty for cuff-deficient state"
    ],
    divisionProtocols: [
      "Rotator cuff preservation algorithms",
      "Anchor-based reconstruction planning",
      "Revision shoulder workflows",
      "Scapular biomechanics mapping"
    ],
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Footprint Preservation Standard", color: "var(--secondary)" },
        { label: "Structural Anchor Reconstruction", color: "var(--white)" },
        { label: "Reverse Biomechanical Restoration", color: "rgba(255,255,255,0.6)" }
      ]
    },
    localAuthority: "UK-Standard Upper Limb Governance Board",
    selectionLogic: "The Upper Extremity Department prioritizes the biological footprint. We leverage elite 4K visualization and micro-anchor technology to restore native shoulder and elbow mechanics.",
    outcomeBenchmarks: [
      "15,000+ Upper Limb Restoration Procedures",
      "Native 4K Native 58x Color Fidelity",
      "UK NHS Consultant Oversight",
      "Microscopic Precision Tissue Anchor Placement"
    ],
    eligibilitySignals: [
      "Rotator cuff tear progression / weakness",
      "Shoulder instability recurrence / Labral pathology",
      "Complex elbow fractures or ligament disruptions",
      "Reverse shoulder indications / arthritis",
      "Failed cuff repair / Revision shoulder failure"
    ],
    planningWorkflow: [
      { step: 1, label: "Clinical Evaluation", desc: "Anatomical movement mapping." },
      { step: 2, label: "Arthrex Panoscope Visualization", desc: "High-fidelity internal joint mapping." },
      { step: 3, label: "Board Review", desc: "Subspecialty board strategy." },
      { step: 4, label: "Program Execution", desc: "Anchor-based repair or replacement." },
      { step: 5, label: "Protocol Rehab", desc: "Biological healing-sequenced recovery." }
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
        techBinding: "BIOCENTRICS",
        doctrine: "Utilizing biological anchors and exosome therapy to preserve native joint mechanics in athletes and high-demand individuals.",
        techMapping: [
          { name: "Precision Bio-Anchors", icon: Microscope, desc: "Biological integration implants." },
          { name: "Exosome Therapy", icon: Activity, desc: "Molecular-level tendon healing." }
        ],
        procedures: [
          { name: "Biological Rotator Cuff Repair", slug: "rotator-cuff-repair" },
          { name: "Shoulder Joint Preservation", slug: "rotator-cuff-repair" }
        ]
      },
      {
        id: "reconstruction",
        name: "Ligament & Tendon Reconstruction Program",
        techBinding: "PANOSCOPE",
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
        techBinding: "MAKO",
        doctrine: "Specialized reverse and total shoulder replacements designed for longevity in patients with deficient rotator cuffs or advanced arthritis.",
        techMapping: [
          { name: "Planning Navigation", icon: Settings, desc: "Simulated component positioning." },
          { name: "Reverse Shoulder Hub", icon: Cpu, desc: "Advanced implant architecture." }
        ],
        procedures: [
          { name: "Reverse Total Shoulder", slug: "reverse-total-shoulder" },
          { name: "Anatomical Total Shoulder", slug: "total-shoulder" },
          { name: "Revision Upper Limb Arthroplasty", slug: "revision-shoulder" }
        ]
      }
    ],
    boardMembers: ["Dr. Deepthi Nandan Reddy (HOD / Program Lead)", "Dr. Harsha Vardhana", "Dr. Ravi Teja", "Precision Surgical Board"],
    faqs: [
      { q: "What is 4K visualization?", a: "It provides 58 times more color data than standard HD, allowing for unprecedented tissue differentiation in complex shoulder repairs." }
    ]
  },
  "sports-medicine": {
    title: "Sports Medicine & Athletic Performance Hub | Precision Ortho",
    h1: "Sports Medicine & High-Performance Restoration",
    portalLabel: "Athletic Performance Surgery",
    divisionIdentityStatement: "Objective return-to-sport clearance through symmetry analytics and ligament reconstruction sequencing",
    metaDescription: "Data-driven sports surgery and athlete performance optimization. Utilizing VALD ForceDecks for objective return-to-sport clearance.",
    clinicalPhilosophy: "Objective biomechanical clearance using kinetic symmetry analytics, ligament reconstruction protocols, and VALD-driven return-to-sport validation.",
    decisionThresholdLogic: [
      "VALD Profiling for injury risk prevention",
      "Ligament Reconstruction for structural repair",
      "Kinetic Symmetry validation for return-to-play"
    ],
    divisionProtocols: [
      "VALD clearance thresholds",
      "Return-to-sport symmetry testing",
      "Kinetic chain profiling",
      "ForceDeck asymmetry benchmarks"
    ],
    pathwayLogic: {
      type: "ladder",
      steps: [
        { label: "Kinetic Chain Protection", color: "var(--secondary)" },
        { label: "Structural Bio-Grafting", color: "var(--white)" },
        { label: "Objective High-Alpha Clearance", color: "rgba(255,255,255,0.6)" }
      ]
    },
    localAuthority: "VALD Analytics & Performance Audit Unit",
    selectionLogic: "The Sports Medicine Department utilizes a performance-first methodology. We ensure every athlete meets objective kinetic benchmarks before transitioning from surgery back to elite performance.",
    outcomeBenchmarks: [
      "5,000+ Athletic Restoration Procedures",
      "1,000+ Hz Kinetic Data Mapping",
      "95%+ Return-to-Pre-Injury Sport Level",
      "Objective Biomechanical Clearance Standard"
    ],
    eligibilitySignals: [
      "Pivot-shift instability athletes",
      "Athletic ACL / PCL tears",
      "Meniscal root injuries",
      "Shoulder instability in contact athletes",
      "Failed return-to-sport clearance candidates"
    ],
    planningWorkflow: [
      { step: 1, label: "Clinical Evaluation", desc: "Kinetic performance assessment." },
      { step: 2, label: "VALD Kinetic Profiling", desc: "ForceDeck dual-plate mapping." },
      { step: 3, label: "Board Review", desc: "Performance & surgery strategy review." },
      { step: 4, label: "Program Execution", desc: "Ligament repair or stabilization." },
      { step: 5, label: "Protocol Rehab", desc: "Symmetry-driven agility clearance." }
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
        techBinding: "VALD",
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
        techBinding: "PANOSCOPE",
        doctrine: "Elite biological grafting and ligament reconstruction using USA-standard Arthrex visualization for microscopic repair precision.",
        techMapping: [
          { name: "Arthrex Panoscope Platform", icon: Video, desc: "Precision surgical visualization stack." },
          { name: "Biological Fixation", icon: ShieldCheck, desc: "Knotless high-strength repair." }
        ],
        procedures: [
          { name: "Accelerated ACL Reconstruction", slug: "acl-pcl-reconstruction" },
          { name: "Meniscal Root Repair", slug: "meniscal-root-repair" },
          { name: "Latarjet Stabilization", slug: "latarjet-procedure" }
        ]
      },
      {
        id: "performance",
        name: "Return-to-Sport Performance Program",
        techBinding: "VALD",
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
    boardMembers: ["Dr. Harsha Vardhana (Program Lead)", "Dr. Ravi Teja", "Dr. Deepthi Nandan Reddy (HOD)", "Precision Surgical Board"],
    faqs: [
      { q: "How long does ACL recovery take?", a: "Typically 6-9 months, guided by objective VALD data symmetry clearance." }
    ]
  }
};
