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

export const directories = [
  {
    category: "Joint Replacement & Resurfacing",
    icon: Activity,
    treatments: [
      { name: "Total Knee Arthroplasty (MAKO/Robotic)", slug: "robotic-knee-arthroplasty" },
      { name: "Direct Anterior Approach Hip Replacement (DAA)", slug: "daa-hip-replacement" },
      { name: "Shoulder Resurfacing & Replacement", slug: "shoulder-replacement" },
      { name: "Small Joint & Finger Replacements", slug: "small-joint-replacement" }
    ]
  },
  {
    category: "Complex Spine & Deformity",
    icon: Bone,
    treatments: [
      { name: "Minimally Invasive Microdiscectomy", slug: "microdiscectomy" },
      { name: "Multilevel Spinal Fusion", slug: "spinal-fusion" },
      { name: "Cervical Disc Replacement", slug: "cervical-disc-replacement" },
      { name: "Scoliosis Deformity Correction", slug: "scoliosis-correction" }
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
