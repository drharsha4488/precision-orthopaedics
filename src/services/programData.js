import { Microscope, Zap, Cpu, Target, Layers, Activity, Video, Crosshair } from 'lucide-react';

export const programData = {
  "joint-preservation": {
    title: "Joint Preservation & Biologic Restoration Program | Institutional Hub",
    h1: "Joint Preservation Program",
    doctrine: "Prioritizing structural and biological restoration of native joint tissue to delay or avoid replacement. Our preservation model utilizes advanced exosome therapy, bone-marrow aspirate (BMAC), and alignment correction (Osteotomy).",
    clinicalObjective: "To extend the functional lifespan of the native joint through sub-millimeter alignment correction and molecular-level biological augmentation.",
    decisionCriteria: [
      "Grade 1-3 cartilage wear (Kellgren-Lawrence)",
      "Partial meniscus loss with preservation potential",
      "Younger patients (under 50) with alignment-driven pain",
      "Athletes requiring biological tissue integration"
    ],
    technology: [
      { name: "BMAC/PRP Lab", icon: Microscope, desc: "On-site biological processing." },
      { name: "Arthrex Synergy SDK", icon: Video, desc: "High-definition tissue mapping." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Ravi Teja Rudraraju", role: "Lead – Joint Preservation & Ortho-Biologics" },
        { name: "Dr. Amith Reddy", role: "Lead – Robotic Reconstruction" }
      ],
      boardSupport: [
        { name: "Dr. Deepthi Nandan Reddy (HOD)", role: "Surgical Governance Oversight" }
      ],
      technologyOversight: [
        { name: "Precision Bio-Engineering Team", role: "Molecular Laboratory Lead" }
      ]
    },
    procedures: [
      { name: "Biological Rotator Cuff Repair", slug: "rotator-cuff-repair" },
      { name: "High Tibial Osteotomy (HTO)", slug: "high-tibial-osteotomy" },
      { name: "Meniscal Root Repair", slug: "meniscal-root-repair" },
      { name: "Cartilage Scaffold Grafting", slug: "cartilage-restoration" }
    ],
    heroImage: "/joint_preservation_hero_1775994583309.webp",
    institutionalStats: { volume: "2,500+", precision: "Micro-Alignment", integration: "Biological" },
    canonicalParent: { division: "lower-extremity" }
  },
  "complex-trauma-reconstruction": {
    title: "Complex Pelvic & Multi-Ligament Trauma Program | Institutional Hub",
    h1: "Complex Trauma Hub",
    doctrine: "Specialized in high-energy structural failures and multi-system orthopaedic trauma. We utilize 3D fracture mapping and fixation construct schematics for precision limb salvage and pelvic stabilization.",
    clinicalObjective: "Rapid structural stabilization and anatomical restoration of complex pelvic, acetabular, and multi-ligament extremity failures.",
    decisionCriteria: [
      "High-energy high-displacement pelvic fractures",
      "Multi-ligament knee disruptions (ACL/PCL/MCL/LCL)",
      "Complex periarticular intra-articular fractures",
      "Failed previous fracture fixation requiring revision"
    ],
    technology: [
      { name: "3D Trauma Mapping", icon: Layers, desc: "Stereolithographic fracture modeling." },
      { name: "Fixation Schematics", icon: Target, desc: "Precision construct planning software." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Nitish Bhan", role: "Lead – Pelvic & Hip Reconstruction" },
        { name: "Dr. Prashanth Reddy A", role: "Lead – Complex Trauma Unit" }
      ],
      boardSupport: [
        { name: "Dr. Amith Reddy", role: "Robotic Alignment Verification" }
      ],
      technologyOversight: [
        { name: "Structural Engineering Board", role: "Construct Modeling Support" }
      ]
    },
    procedures: [
      { name: "Acetabular Reconstruction", slug: "acetabular-reconstruction" },
      { name: "Complex Pelvic Trauma Care", slug: "pelvic-trauma-care" },
      { name: "Multi-Ligament Knee Stabilization", slug: "multi-ligament-reconstruction" }
    ],
    heroImage: "/complex_trauma_hero_1775994599554.webp",
    institutionalStats: { volume: "1,200+", precision: "Structural Salvage", integration: "Fixation" },
    canonicalParent: { division: "pelvic-hip-reconstruction" }
  },
  "musculoskeletal-oncology": {
    title: "Orthopaedic Oncology & Bone Tumor Program | Institutional Hub",
    h1: "Musculoskeletal Oncology Hub",
    doctrine: "Board-reviewed management of benign and malignant bone and soft tissue tumors. Our approach focuses on margin-controlled excision and complex segmental reconstruction.",
    clinicalObjective: "Zero-margin resection combined with durable segmental limb salvage utilizing custom implantology or structural grafting.",
    decisionCriteria: [
      "Suspected bone or soft tissue mass",
      "Known primary bone malignancies (Osteosarcoma, Ewing's)",
      "Benign aggressive tumors requiring reconstruction",
      "Metastatic bone disease requiring stabilization"
    ],
    technology: [
      { name: "Navigation Margin Control", icon: Crosshair, desc: "Precision excision mapping." },
      { name: "Custom Segmental Implants", icon: Cpu, desc: "Patient-specific limb salvage." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Nitish Bhan", role: "Lead – Oncological Reconstruction" },
        { name: "Dr. Prashanth Reddy A", role: "Senior Trauma Consultant" }
      ],
      boardSupport: [
        { name: "Multidisciplinary Tumor Board", role: "External Ethics & Pathology Board" },
        { name: "Dr. Deepthi Nandan Reddy (HOD)", role: "Institutional Governance" }
      ]
    },
    procedures: [
      { name: "Bone Tumor Excision", slug: "bone-tumor-excision" },
      { name: "Limb Salvage Reconstruction", slug: "limb-salvage" }
    ],
    heroImage: "/ortho_oncology_hero_1775994614277.webp",
    institutionalStats: { volume: "450+", precision: "Zero-Margin", integration: "Custom Segmental" },
    canonicalParent: { division: "pelvic-hip-reconstruction" }
  },
  "revision-arthroplasty": {
    title: "Revision Joint Arthroplasty Program | Tertiary Hub",
    h1: "Revision Arthroplasty Hub",
    doctrine: "The definitive referral center for failed, loosened, or infected joint replacements. We utilize complex bone-loss compensation, 2-stage infection protocols, and constraint-based robotic mapping.",
    clinicalObjective: "To restore functional stability and eliminate pain in patients with previously failed anatomical or robotic joint replacements.",
    decisionCriteria: [
      "Aseptic loosening of existing implant",
      "Periprosthetic infection requiring washout or exchange",
      "Recurrent dislocation or malalignment",
      "Severe periprosthetic fracture management"
    ],
    technology: [
      { name: "Mako Revision Planning", icon: Cpu, desc: "Robotic mapping for complex bone loss." },
      { name: "Advanced Spacer Lab", icon: Microscope, desc: "Antibiotic delivery systems." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Amith Reddy", role: "Lead – Revision Arthroplasty Program" },
        { name: "Dr. Nitish Bhan", role: "Lead – Complex Pelvic & Hip Revision" }
      ],
      boardSupport: [
        { name: "Dr. Deepthi Nandan Reddy (HOD)", role: "Upper Limb Revision Lead" }
      ],
      technologyOversight: [
        { name: "Stryker Mako Technical R&D", role: "Case-Specific Alignment Planning" }
      ]
    },
    procedures: [
      { name: "Revision Knee Arthroplasty", slug: "revision-knee-replacement" },
      { name: "Revision Hip Arthroplasty", slug: "revision-hip-replacement" },
      { name: "Revision Shoulder Arthroplasty", slug: "revision-shoulder" }
    ],
    heroImage: "/revision_arthroplasty_hero_1775994636112.webp",
    institutionalStats: { volume: "1,800+", precision: "Robotic Mapping", integration: "Bone-Loss Compensation" },
    canonicalParent: { division: "lower-extremity" }
  },
  "spine-care": {
    title: "Complex Spine & Neural Restoration Program | Institutional Hub",
    h1: "Spine Care Hub",
    doctrine: "Advanced surgical and non-surgical management of spinal pathologies. We prioritize motion-preserving technology and minimally invasive decompression to restore neural function.",
    clinicalObjective: "Neural decompression and structural stabilization of the cervical and lumbar spine with absolute precision.",
    decisionCriteria: [
      "Chronic radiating nerve pain (Sciatica)",
      "Complex spinal deformities (Scoliosis/Kyphosis)",
      "Segmental instability and degenerative wear",
      "Failed previous back surgery syndrome"
    ],
    technology: [
      { name: "Micro-Decompression", icon: Microscope, desc: "Sub-millimeter neural visualization." },
      { name: "Precision Navigation", icon: Crosshair, desc: "Digital hardware mapping." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Prashanth Reddy A", role: "Lead – Spine Reconstruction" }
      ],
      boardSupport: [
        { name: "Precision Surgical Board", role: "Interdisciplinary Ethics Audit" }
      ]
    },
    procedures: [
      { name: "Microdiscectomy", slug: "microdiscectomy" },
      { name: "Spinal Fusion", slug: "spinal-fusion" },
      { name: "Cervical Disc Replacement", slug: "cervical-disc-replacement" },
      { name: "Scoliosis Correction", slug: "scoliosis-correction" }
    ],
    heroImage: "/spine_care_hero_1775994652936.webp",
    institutionalStats: { volume: "3,100+", precision: "Neural Restoration", integration: "Motion-Preserving" },
    canonicalParent: { division: "lower-extremity" }
  },
  "diagnostics": {
    title: "Performance Diagnostics & Kinetic Profiling | Precision Lab",
    h1: "Diagnostics Hub",
    doctrine: "Utilizing elite-grade sensor technology (VALD) to quantify human movement. We replace subjective assessment with objective data to ensure safe return-to-sport clearance.",
    clinicalObjective: "Quantifying kinetic asymmetry and metabolic deficit to optimize rehabilitation and prevent catastrophic injury.",
    decisionCriteria: [
      "Athletes in end-stage post-surgical rehab",
      "Pre-season injury risk profiling",
      "Professional athletic recruitment verification",
      "Chronic movement inefficiency analysis"
    ],
    technology: [
      { name: "VALD ForceDecks", icon: Zap, desc: "1,000Hz kinetic sampling." },
      { name: "Gait Mapping", icon: Activity, desc: "3D movement topology." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Harsha Vardhana Reddy", role: "Lead – Athletic Performance" }
      ],
      boardSupport: [
        { name: "Precision Surgical Board", role: "Biomechanical Governance Audit" }
      ]
    },
    procedures: [
      { name: "VALD Kinetic Profiling", slug: "vald-performance" },
      { name: "Advanced Movement Scan", slug: "kinetic-profile" },
      { name: "Pre-Season Screening", slug: "athlete-screening" }
    ],
    recoveryTimeline: "Immediate (Diagnostic results delivered within 24 hours).",
    heroImage: "/performance_diagnostics_hero_1775994670949.webp",
    institutionalStats: { volume: "5,000+", precision: "1,000Hz Sampling", integration: "Objective Kinetic" },
    canonicalParent: { division: "sports-medicine" }
  }
};
