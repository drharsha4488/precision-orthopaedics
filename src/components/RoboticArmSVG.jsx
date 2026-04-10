import React from 'react';

export default function RoboticArmSVG() {
  return (
    <svg 
      width="1000" 
      height="400" 
      viewBox="0 0 1000 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.2))' }}
    >
      {/* Surgical Trajectory Path */}
      <path
        d="M50 350 L150 200 L450 150 L850 50"
        stroke="#00e6ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="robotic-line"
      />
      
      {/* Node Points / Instrumentation Markers */}
      <circle cx="50" cy="350" r="3" fill="#00e6ff" className="marker-dot" />
      <circle cx="150" cy="200" r="3" fill="#00e6ff" className="marker-dot" />
      <circle cx="450" cy="150" r="3" fill="#00e6ff" className="marker-dot" />
      <circle cx="850" cy="50" r="4" fill="#00e6ff" className="marker-dot beacon" />

      <style>{`
        .robotic-line {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawLine 2.4s ease forwards, idlePause 8.4s linear infinite;
        }

        .marker-dot {
          opacity: 0;
          animation: fadeInDot 0.5s ease forwards;
        }

        .marker-dot:nth-child(2) { animation-delay: 0s; }
        .marker-dot:nth-child(3) { animation-delay: 0.6s; }
        .marker-dot:nth-child(4) { animation-delay: 1.4s; }
        .marker-dot:nth-child(5) { animation-delay: 2.4s; }

        .beacon {
          animation: beaconPulse 2s ease-in-out infinite;
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        @keyframes fadeInDot {
          to { opacity: 0.8; }
        }

        @keyframes beaconPulse {
          0%, 100% { opacity: 0.4; r: 4; }
          50% { opacity: 1; r: 6; }
        }

        @keyframes idlePause {
          0% { stroke-dashoffset: 0; }
          28% { stroke-dashoffset: 0; } /* 2.4s of 8.4s */
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
