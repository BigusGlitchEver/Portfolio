import React from 'react';

const BackgroundCurve = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark, muted backdrop */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Faint blueprint grid (both directions) */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to_right, rgba(59,130,246,0.08) 1px, transparent 1px),\
             linear-gradient(to_bottom, rgba(59,130,246,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 120% 100% at 10% 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 10% 0%, black 60%, transparent 100%)'
        }}
      />

      {/* Soft vignette and overlay to reduce visual noise */}
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 via-transparent to-transparent" />

      {/* Light radial glows to hint at HUD elements without competing with text */}
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] bottom-[-6rem] w-[28rem] h-[28rem] rounded-full bg-indigo-400/10 blur-3xl" />
    </div>
  );
};

export default BackgroundCurve;