import { Activity, Bone, Crosshair, Baby, ShieldAlert, Thermometer } from 'lucide-react';

export const doctors = [
  {
    name: "Dr. Deepthi Nandan Reddy",
    slug: "deepthi-nandan-reddy",
    role: "Lead – Upper Limb & Revision Arthroplasty Program",
    title: "HOD - Senior Consultant Orthopaedic Surgeon",
    specialty: "Upper Extremity",
    filterTags: ["Shoulder & Elbow", "Revision Surgery", "HOD"],
    focus: "Global authority in complex Shoulder & Elbow restoration. NHS ConsultantPedigree.",
    credentials: "MBBS, MS, DNB, FRCS (Ortho) - UK",
    fellowships: "Mayo Clinic Travelling Fellow (USA)",
    experience: "30+ Years",
    procedures: "15,000+",
    location: "Apollo Hospitals – Financial District",
    image: "https://ui-avatars.com/api/?name=Dr+Deepthi+Reddy&background=0D8ABC&color=fff&size=512"
  },
  {
    name: "Dr. Amith Reddy",
    slug: "amith-reddy",
    role: "Lead – Robotic Knee & Hip Arthroplasty Program",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Robotic Arthroplasty",
    filterTags: ["Robotic Knee", "Hip Replacement", "Revision Surgery"],
    focus: "India's pioneer in Stryker Mako 4.0 Sub-millimeter robotic alignment.",
    credentials: "MBBS, MS (Ortho), M.Ch (UK)",
    fellowships: "Swiss Olympic (Switzerland), ISAKOS (Spain)",
    experience: "19+ Years",
    procedures: "10,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_amith.png"
  },
  {
    name: "Dr. Nitish Bhan",
    slug: "nitish-bhan",
    role: "Lead – DAA Hip & Pelvic Reconstruction",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Pelvic & Hip",
    filterTags: ["Hip Replacement", "Pelvic Reconstruction"],
    focus: "Master of muscle-sparing Direct Anterior Approach (DAA) Hip Replacement.",
    credentials: "MBBS, DNB, M.Ch (Ortho), MNAMS",
    fellowships: "Joint Replacement (Singapore & China)",
    experience: "18+ Years",
    procedures: "8,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_nitish.png"
  },
  {
    name: "Dr. Ravi Teja Rudraraju",
    slug: "ravi-teja-rudraraju",
    role: "Lead – Joint Preservation & Ortho-Biologics",
    title: "Chief of Joint Preservation & Sports Medicine",
    specialty: "Joint Preservation",
    filterTags: ["Joint Preservation", "Sports Medicine", "Knee"],
    focus: "Expert in 4K UHD4 Imaging and molecular Joint Restoration therapy.",
    credentials: "MBBS, MS (Ortho), Arthrex Tech Certified",
    fellowships: "Geisinger Clinic (USA)",
    experience: "12+ Years",
    procedures: "5,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_ravi.png"
  },
  {
    name: "Dr. B Harsha Vardhana Reddy",
    slug: "harsha-vardhana-reddy",
    role: "Lead – Sports Traumatology & Athletic Recovery",
    title: "Consultant Orthopaedic & Sports Specialist",
    specialty: "Sports Medicine",
    filterTags: ["Sports Medicine", "Shoulder & Elbow", "VALD Lab"],
    focus: "Bridging surgical repair with data-driven VALD athletic performance.",
    credentials: "MBBS, MS (Ortho), VALD Performance Lead",
    fellowships: "Fellowship in Sports Traumatology",
    experience: "10+ Years",
    procedures: "3,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_harsha.png"
  },
  {
    name: "Dr. Prashanth Reddy A",
    slug: "prashanth-reddy-a",
    role: "Consultant – Hip & Pelvic Reconstruction",
    title: "Consultant Orthopaedic Surgeon",
    specialty: "Hip & Pelvic",
    filterTags: ["Hip Replacement", "Pelvic Reconstruction"],
    focus: "Specialist in complex adult joint & pelvic trauma reconstruction.",
    credentials: "MBBS, DNB, M.Ch (UK)",
    fellowships: "Wrightington Hospital (UK)",
    experience: "13+ Years",
    procedures: "4,000+",
    location: "Apollo Hospitals – Financial District",
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
