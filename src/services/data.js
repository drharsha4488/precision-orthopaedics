import { Activity, Bone, Crosshair, Baby, ShieldAlert, Thermometer } from 'lucide-react';

export const doctors = [
  {
    name: "Dr. Deepthi Nandan Reddy",
    slug: "deepthi-nandan-reddy",
    title: "HOD - Senior Consultant Orthopaedic Surgeon",
    specialty: "Upper Limb & Revision Arthroplasty",
    focus: "Complex Shoulder, Elbow and Revision Joint Replacement. Leading the Upper Limb clinical vertical.",
    credentials: "MBBS, MS (Ortho), DNB (Ortho), FRCS (Ortho) - UK",
    experience: "25+ Years",
    image: "https://ui-avatars.com/api/?name=Dr+Deepthi+Reddy&background=0D8ABC&color=fff&size=512"
  },
  {
    name: "Dr. Amith Reddy",
    slug: "amith-reddy",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Lower Limb & Robotic Arthroplasty",
    focus: "Global leader in Mako Robotic Knee & Hip Arthroplasty. Expert in sub-millimeter precision mapping.",
    credentials: "MBBS, MS (Ortho), Fellowship in Robotic Arthroplasty",
    experience: "15+ Years",
    image: "/doctors/doc_amith.png"
  },
  {
    name: "Dr. Nitish Bhan",
    slug: "nitish-bhan",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Pelvic & Hip Reconstruction",
    focus: "Minimally invasive Hip Replacement (DAA) and Complex Pelvic & Acetabular Trauma. Pioneer in Tactileless Hip Replacement.",
    credentials: "MBBS, DNB, M.Ch (Ortho), MNAMS",
    experience: "18+ Years",
    image: "/doctors/doc_nitish.png"
  },
  {
    name: "Dr. Ravi Teja Rudraraju",
    slug: "ravi-teja-rudraraju",
    title: "Chief of Joint Preservation & Sports Medicine",
    specialty: "Knee preservation & Ortho-Biologics",
    focus: "Leading the unit for Joint Preservation using PRP, Stem Cell therapies and biological grafting techniques. Specialist in Arthrex Synergy UHD4 4K Imaging.",
    credentials: "MBBS, MS (Ortho), Fellowship in Sports Medicine, Arthrex Tech Certified",
    experience: "12+ Years",
    image: "/doctors/doc_ravi.png"
  },
  {
    name: "Dr. B Harsha Vardhana Reddy",
    slug: "harsha-vardhana-reddy",
    title: "Consultant Orthopaedic & Sports Specialist",
    specialty: "Upper Limb & Return-to-Sport Protocols",
    focus: "Sports injuries of the Shoulder & Elbow. Specialist in VALD Performance ForceDecks for high-velocity Return-to-Sport clearance.",
    credentials: "MBBS, MS (Ortho), Fellowship in Sports Traumatology, VALD Performance Lead",
    experience: "10+ Years",
    image: "/doctors/doc_harsha.png"
  },
  {
    name: "Dr. Prashanth Reddy A",
    slug: "prashanth-reddy-a",
    title: "Consultant – Hip & Pelvic Reconstruction",
    specialty: "Hip & Pelvic Reconstruction",
    focus: "Specialist in Adult Joint & Pelvic Reconstruction. Extensive UK clinical fellowship training.",
    credentials: "MBBS, DNB, M.Ch (Hip & Knee) - UK, Complex Arthroplasty Fellow",
    experience: "13+ Years",
    image: "/doctors/doc_prashanth.png"
  }
];

export const directories = [
  {
    category: "Joint Replacement & Resurfacing",
    icon: Activity,
    treatments: [
      { name: "Total Knee Arthroplasty (MAKO/Robotic)", slug: "robotic-knee-arthroplasty" },
      { name: "Mako Robotic Hip Arthroplasty (DAA)", slug: "robotic-hip-arthroplasty" },
      { name: "Advanced Shoulder Reconstruction", slug: "shoulder-reconstruction" },
      { name: "Small Joint & Finger Replacements", slug: "small-joint-replacement" }
    ]
  },
  {
    category: "Sports Traumatology & Arthroscopy",
    icon: Activity,
    treatments: [
      { name: "Accelerated ACL/PCL Ligament Reconstruction", slug: "acl-pcl-reconstruction" },
      { name: "Meniscal Repair & Cartilage Vaulting", slug: "meniscal-repair" },
      { name: "Latarjet Shoulder Stabilization", slug: "latarjet-procedure" }
    ]
  },
  {
    category: "Extremity Microsurgery",
    icon: Crosshair,
    treatments: [
      { name: "Hand: Carpal Tunnel & Trigger Finger", slug: "hand-microsurgery" },
      { name: "Hand: Severe Tendon Reconstruction", slug: "tendon-reconstruction" },
      { name: "Foot/Ankle: Complete Ankle Replacement", slug: "ankle-replacement" },
      { name: "Foot/Ankle: Achilles Rupture Repair", slug: "achilles-repair" }
    ]
  },
  {
    category: "Pediatric Orthopedics",
    icon: Baby,
    treatments: [
      { name: "Congenital Limb Deformity Correction", slug: "pediatric-limb-deformity" },
      { name: "Pediatric Scoliosis Monitoring & Care", slug: "pediatric-scoliosis" }
    ]
  },
  {
    category: "Orthopedic Oncology",
    icon: ShieldAlert,
    treatments: [
      { name: "Benign & Malignant Bone Tumor Excision", slug: "bone-tumor-excision" },
      { name: "Limb Salvage Surgeries", slug: "limb-salvage" }
    ]
  },
  {
    category: "Rheumatology & Advanced Diagnostics",
    icon: Thermometer,
    treatments: [
      { name: "DEXA Scans & Bone Densitometry", slug: "dexa-scans" },
      { name: "Nerve Conduction Velocity (NCV) Testing", slug: "ncv-testing" },
      { name: "Non-Operative Arthritis Therapies", slug: "arthritis-management" }
    ]
  }
];
