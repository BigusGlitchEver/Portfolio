// ProjectNav.tsx
// Shared nav for every individual project page (Cowboy, Abyssal Guardians,
// Whimpact, Poly Plaza, Wastemancer, Necromeowcy). Wraps onto a second line
// instead of overflowing on narrow screens.
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectNav = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#171a21]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
          >
            <Image
              src="/logo.png"
              alt="Portfolio Logo"
              width={32}
              height={32}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-base sm:text-xl font-medium">Back to Portfolio</span>
          </Link>

          <div className="hidden md:block text-2xl font-light text-white">Samuel Shmoo Bigus</div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-8">
            <a
              href="https://www.linkedin.com/in/shmoogames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shmoogames@yahoo.com"
              className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
            >
              Email
            </a>
            <a
              href="/ShmooCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
            >
              CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ProjectNav;
