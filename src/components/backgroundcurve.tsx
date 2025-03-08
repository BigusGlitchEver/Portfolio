import React from 'react';

const BackgroundCurve = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-gray-900" />
      
      {/* Top-left corner bright spot with stronger gradient */}
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-gradient-to-br from-white via-white/50 to-transparent rounded-full blur-3xl" />
      
      {/* Curves with pulsing neon outline - opacity reduced */}
      <div className="absolute w-full h-full">
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for the background fill */}
            <linearGradient id="fade-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Subtle background fill - opacity reduced */}
          <path
            d="M0,600 C300,400 600,300 1200,200 L1200,0 L0,0 Z"
            fill="url(#fade-gradient)"
            className="opacity-20"
          />

          {/* Pulsing neon outline - opacity reduced */}
          <path
            d="M0,600 C300,400 600,300 1200,200"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            filter="url(#neon-glow)"
            className="animate-[pulse_4s_ease-in-out_infinite] origin-center opacity-30"
            style={{
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        </svg>

        <style>{`
          @keyframes pulse {
            0% {
              opacity: 0.1;
              stroke: #3B82F6;
            }
            50% {
              opacity: 0.5;
              stroke: #60A5FA;
            }
            100% {
              opacity: 0.1;
              stroke: #3B82F6;
            }
          }
        `}</style>
      </div>
      
      {/* Gradient overlay for depth - fading from top-left */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default BackgroundCurve;