import { Activity, Bone, Crosshair, Baby, ShieldAlert, Thermometer } from 'lucide-react';

export const doctors = [
  {
    name: "Dr. Deepthi Nandan Reddy",
    slug: "deepthi-nandan-reddy",
    role: "Lead – Upper Limb & Revision Arthroplasty Program",
    unitName: "Upper Extremity & Revision Unit",
    platform: "Mayo Clinic Faculty | NHS Consultant Pedigree",
    specificVolume: "4,000+ Complex Shoulder Reconstructions",
    title: "HOD - Senior Consultant Orthopaedic Surgeon",
    specialty: "Upper Extremity",
    filterTags: ["Shoulder & Elbow", "Revision Surgery", "HOD"],
    conditions: ["Shoulder Pain", "Elbow Injury", "Revision Surgery"],
    focus: "Global authority in complex Shoulder & Elbow restoration. NHS Consultant Pedigree.",
    credentials: "MBBS, MS, DNB, FRCS (Ortho) - UK",
    fellowships: "Mayo Clinic Travelling Fellow (USA)",
    experience: "30+ Years",
    procedures: "15,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_deepthi.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-deepthi-nandan-reddy-eccd06f7-a7c4-4f40-a212-63a2d62450c7?source=Listing_Page"
  },
  {
    name: "Dr. Amith Reddy",
    slug: "amith-reddy",
    role: "Lead – Robotic Knee & Hip Arthroplasty Program",
    unitName: "Robotic Arthroplasty Unit",
    platform: "MAKO Robotic Arthroplasty Specialist",
    specificVolume: "3,500+ Robotic Knee Replacements",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Robotic Arthroplasty",
    filterTags: ["Robotic Knee", "Hip Replacement", "Revision Surgery"],
    conditions: ["Knee Arthritis", "Hip Replacement", "Robotic Surgery"],
    focus: "India's pioneer in Stryker Mako 4.0 Sub-millimeter robotic alignment.",
    credentials: "MBBS, MS (Ortho), M.Ch (UK)",
    fellowships: "Swiss Olympic (Switzerland), ISAKOS (Spain)",
    experience: "19+ Years",
    procedures: "10,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_amith.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-amith-reddy-2e52461a-23f3-4eb6-bc09-8d3e6c93bdeb?source=Listing_Page"
  },
  {
    name: "Dr. Nitish Bhan",
    slug: "nitish-bhan",
    role: "Lead – DAA Hip & Pelvic Reconstruction",
    unitName: "Robotic Arthroplasty Unit",
    platform: "DAA Muscle-Sparing Specialist",
    specificVolume: "2,000+ Direct Anterior Hip Replacements",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Pelvic & Hip",
    filterTags: ["Hip Replacement", "Pelvic Reconstruction"],
    conditions: ["Hip Replacement", "Pelvic Pain", "Knee Arthritis"],
    focus: "Master of muscle-sparing Direct Anterior Approach (DAA) Hip Replacement.",
    credentials: "MBBS, DNB, M.Ch (Ortho), MNAMS",
    fellowships: "Joint Replacement (Singapore & China)",
    experience: "18+ Years",
    procedures: "8,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_nitish.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-nitish-bhan-13ebe5f0-8b45-4996-b5bb-dd75bf0b2701?source=Listing_Page"
  },
  {
    name: "Dr. Ravi Teja Rudraraju",
    slug: "ravi-teja-rudraraju",
    role: "Lead – Joint Preservation & Ortho-Biologics",
    unitName: "Joint Preservation & Sports Medicine Unit",
    platform: "Arthrex Synergy UHD4 Faculty",
    specificVolume: "1,500+ Biological Joint Restorations",
    title: "Chief of Joint Preservation & Sports Medicine",
    specialty: "Joint Preservation",
    filterTags: ["Joint Preservation", "Sports Medicine", "Knee"],
    conditions: ["Sports Injury", "Knee Pain", "Joint Preservation"],
    focus: "Expert in 4K UHD4 Imaging and molecular Joint Restoration therapy.",
    credentials: "MBBS, MS (Ortho), Arthrex Tech Certified",
    fellowships: "Geisinger Clinic (USA)",
    experience: "12+ Years",
    procedures: "5,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_ravi.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-ravi-teja-rudraraju-247ed099-b1e4-4fb0-89e6-93212cc819eb?source=Listing_Page"
  },
  {
    name: "Dr. B Harsha Vardhana Reddy",
    slug: "harsha-vardhana-reddy",
    role: "Lead – Sports Traumatology & Athletic Recovery",
    unitName: "Joint Preservation & Sports Medicine Unit",
    platform: "VALD Performance Lead",
    specificVolume: "800+ Athletic Shoulder Repairs",
    title: "Consultant Orthopaedic & Sports Specialist",
    specialty: "Sports Medicine",
    filterTags: ["Sports Medicine", "Shoulder & Elbow", "VALD Lab"],
    conditions: ["Sports Injury", "Shoulder Pain", "Elbow Injury"],
    focus: "Bridging surgical repair with data-driven VALD athletic performance.",
    credentials: "MBBS, MS (Ortho), VALD Performance Lead",
    fellowships: "Fellowship in Sports Traumatology",
    experience: "10+ Years",
    procedures: "3,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_harsha.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-b-harsha-vardhana-reddy-51807eec-1507-467c-91fb-4c6b2cb599ff?source=Listing_Page"
  },
  {
    name: "Dr. Prashanth Reddy A",
    slug: "prashanth-reddy-a",
    role: "Consultant – Hip & Pelvic Reconstruction",
    unitName: "Robotic Arthroplasty Unit",
    platform: "Wrightington UK Trauma Protocol faculty",
    specificVolume: "1,200+ Complex Pelvic Reconstructions",
    title: "Consultant Orthopaedic Surgeon",
    specialty: "Hip & Pelvic",
    filterTags: ["Hip Replacement", "Pelvic Reconstruction"],
    conditions: ["Hip Replacement", "Pelvic Pain", "Trauma"],
    focus: "Specialist in complex adult joint & pelvic trauma reconstruction.",
    credentials: "MBBS, DNB, M.Ch (UK)",
    fellowships: "Wrightington Hospital (UK)",
    experience: "13+ Years",
    procedures: "4,000+",
    location: "Apollo Hospitals – Financial District",
    image: "/doctors/doc_prashanth.png",
    appointmentLink: "https://www.apollo247.com/doctors/dr-prashanth-reddy-a-3d44af2a-78a0-4980-a3ce-f504d0b818d3?source=Listing_Page"
  }
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
