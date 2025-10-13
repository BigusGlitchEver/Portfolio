// ProjectNav.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="grid grid-cols-3 items-center">
          {/* Left: Logo and Back Link */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-800">
                <Image 
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                  className="rounded-full"
                />
              </div>
              <span className="text-white/90 group-hover:text-white transition-colors">
                Back to Portfolio
              </span>
            </Link>
          </div>

          {/* Center: Empty space */}
          <div />

          {/* Right: Navigation Links */}
          <div className="flex items-center justify-end gap-6">
            <a 
              href="https://www.linkedin.com/in/shmoogames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:shmoogames@yahoo.com"
              className="text-white/90 hover:text-white transition-colors"
            >
              Email
            </a>
            <Link 
              href="/cv"
              className="text-white/90 hover:text-white transition-colors"
            >
              CV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ProjectNav;