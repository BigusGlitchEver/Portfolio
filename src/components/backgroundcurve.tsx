import React from 'react';

const BackgroundCurve = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-gray-900" />
      
      {/* Top-left corner bright spot */}
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl" />
      
      {/* Additional glow for richness */}
      <div className="absolute -left-16 -top-16 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl" />
      
      {/* Tech-style curved streaks */}
      <div className="absolute w-full h-full">
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full opacity-[0.07]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 600,600 1200,400 L1200,0 L0,0 Z"
            fill="white"
          />
          <path
            d="M0,500 C400,450 800,650 1200,500 L1200,100 L0,100 Z"
            fill="white"
            className="opacity-50"
          />
        </svg>
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      {/* Subtle grid pattern for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default BackgroundCurve;