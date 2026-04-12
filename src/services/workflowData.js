import { Settings, UserCheck, Zap, Activity, ShieldCheck, Video, Gauge } from 'lucide-react';

export const workflowData = {
  "robotic-arthroplasty-planning": {
    title: "Institutional Robotic Arthroplasty Planning Workflow | Precision Ortho",
    h1: "Robotic Planning Protocol",
    clinicalObjective: "To transform static anatomical imaging into a dynamic 3D surgical blueprint, ensuring sub-millimeter component alignment and soft-tissue balance.",
    decisionCriteria: [
      "Patients with complex anatomical landmarks or previous deformities",
      "High-demand individuals requiring maximized implant longevity",
      "Cases requiring sub-millimeter precision for leg-length restoration"
    ],
    technology: [
      { name: "Stryker Mako 4.0", icon: Settings, desc: "Digital twin generation." },
      { name: "CT-Based Mapping", icon: Video, desc: "Pre-operative structural analysis." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Amith Reddy", role: "Robotic Arthroplasty Master Lead" },
        { name: "Dr. Nitish Bhan", role: "DAA Integration Specialist" }
      ],
      boardSupport: [
        { name: "Mako Technical Board", role: "Biomechanical Engineering Support" }
      ]
    },
    protocolSteps: [
      { step: "T-Minus 10 Days", action: "CT-Based 3D Mapping", detail: "Generation of the knee/hip virtual model." },
      { step: "Pre-Op Board", action: "Virtual Balancing & Sizing", detail: "Component orientation is finalized virtually." },
      { step: "Intra-Op", action: "Haptic-Guided Execution", detail: "Robot ensures the plan is executed within 0.01mm." },
      { step: "Post-Op", action: "Alignment Verification", detail: "Radiographic proof of plan adherence." }
    ],
    relatedPrograms: ["robotic-arthroplasty", "revision-arthroplasty"],
    canonicalParent: { division: "lower-extremity" }
  },
  "return-to-sport-clearance": {
    title: "VALD Evidence-Based Return-to-Sport Clearance Protocol | Precision Ortho",
    h1: "Return-to-Sport Clearance",
    clinicalObjective: "To eliminate subjective 'feel' and replace it with objective kinetic data to safely clear athletes for maximum-velocity competition.",
    decisionCriteria: [
      "Athletes post-ACL/PCL reconstruction (>6 months)",
      "Shoulder instability patients requiring contact-sport clearance",
      "Performance optimization candidates requiring symmetry mapping"
    ],
    technology: [
      { name: "VALD ForceDecks", icon: Gauge, desc: "Dual force plate kinetic symmetry." },
      { name: "DynaMo Monitoring", icon: Activity, desc: "Isometric and eccentric strength testing." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Harsha Vardhana Reddy", role: "Sports Medicine Clearance Lead" },
        { name: "Dr. Ravi Teja Rudraraju", role: "Biological Restoration Lead" }
      ],
      boardSupport: [
        { name: "Dr. Deepthi Nandan Reddy (HOD)", role: "Shoulder Integrity Review" }
      ]
    },
    protocolSteps: [
      { step: "Phase 1", action: "Force-Deck Symmetry Landing", detail: "Measuring deceleration and impact absorption." },
      { step: "Phase 2", action: "Neuro-Muscular Drift Analysis", detail: "Checking for proprioceptive deficits during pivot." },
      { step: "Phase 3", action: "Peak Velocity Stress Test", detail: "Simulated match-play velocity clearance." },
      { step: "Final Clearance", action: "Board Review of Kinetic Data", detail: "Formal sign-off for return-to-play." }
    ],
    relatedPrograms: ["sports-medicine", "joint-preservation"],
    canonicalParent: { division: "sports-medicine" }
  },
  "joint-preservation-pathway": {
    title: "Biological Joint Preservation Care Pathway | Precision Ortho",
    h1: "Joint Preservation Pathway",
    clinicalObjective: "A sequenced protocol designed to shift the surgical goal from 'replace' to 'preserve' using a multi-modal biological approach.",
    decisionCriteria: [
      "Early-stage osteoarthritis in active patients",
      "Persistent pain following traditional non-operative therapy",
      "Candidates for biological scaffolds or exosome therapy"
    ],
    technology: [
      { name: "Arthrex Synergy UHD4", icon: Video, desc: "Micro-surgical clarity." },
      { name: "Precision Bio-Anchor", icon: ShieldCheck, desc: "Biological integration stack." }
    ],
    leadership: {
      primary: [
        { name: "Dr. Ravi Teja Rudraraju", role: "Preservation Pathway Lead" },
        { name: "Dr. Deepthi Nandan Reddy (HOD)", role: "Shoulder Biological Lead" }
      ],
      boardSupport: [
        { name: "Dr. Harsha Vardhana Reddy", role: "Kinetic Integrity Review" }
      ]
    },
    protocolSteps: [
      { step: "Stage 1", action: "Biological Triage", detail: "Mapping cartilage-loss volume and tissue quality." },
      { step: "Stage 2", action: "Exosome/PRP Priming", detail: "Pre-conditioning the joint environment." },
      { step: "Stage 3", action: "Arthroscopic Restoration", detail: "Minimal-access biological repair." },
      { step: "Stage 4", action: "Biomechanical Loading", detail: "Graduated weight-bearing protocol." }
    ],
    relatedPrograms: ["joint-preservation", "upper-extremity"],
    canonicalParent: { division: "lower-extremity" }
  }
};
