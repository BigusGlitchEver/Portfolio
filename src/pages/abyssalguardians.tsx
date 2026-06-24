import React from 'react';
import Image from "next/image";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LOGO_ART = 'https://www.abyssalguardians.com/assets/abyssal-guardians-logo.svg';

export default function AbyssalGuardiansProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#171a21]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors">
              <Image src="/logo.png" alt="Portfolio Logo" width={32} height={32} style={{ width: "auto", height: "auto" }} />
              <span className="text-base sm:text-xl font-medium">Back to Portfolio</span>
            </a>
            <div className="hidden md:block text-2xl font-light text-white">Samuel Shmoo Bigus</div>
            <div className="flex gap-4 sm:gap-8">
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
                className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-8 sm:mb-16">
          <div className="aspect-video w-full mb-6 sm:mb-8 relative bg-[#10161d] rounded overflow-hidden flex items-center justify-center p-8 sm:p-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_ART} alt="Abyssal Guardians" className="max-h-full max-w-full object-contain" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Abyssal Guardians</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-2">Producer</div>
          <div className="text-sm sm:text-base text-[#acb2b8] mb-4 sm:mb-6">Smoothie Studio | Team of 5</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Scheduling</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Outsourcing</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Onboarding</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Co-op Shooter</span>
          </div>
          <p className="text-sm sm:text-base text-[#acb2b8]">
            A 1 to 4 player co op survival shooter set on humanity&apos;s last oil rig. Fuel the elevator, unlock the rig, and descend until the platform gives way to the ocean floor.
          </p>
        </header>

        {/* My Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As Producer on Abyssal Guardians, I came into a 5 person team and rebuilt how work is organized and scheduled, then put staffing and onboarding in place to scale the project toward its public reveal.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Restructured the organization of tasks and scheduling around a 2 week cycle</li>
              <li>Manage outsourcing and freelance staffing to bring the best value to the project</li>
              <li>Onboard new interns and employees as the team grows</li>
              <li>Supporting the public reveal and the start of the marketing push for the game</li>
            </ul>
          </div>
        </section>

        {/* Production Management */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Production Management</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              I brought a clear, repeatable rhythm to a small and fast moving team:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Restructured task organization so priorities are visible and actionable</li>
              <li>Moved the team onto a 2 week scheduling cycle for steady, predictable progress</li>
              <li>Balanced scope and timeline to keep a 5 person team focused on what matters</li>
            </ul>
          </div>
        </section>

        {/* Outsourcing & Staffing */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Outsourcing & Staffing</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              With a lean core team, getting the right help at the right time is essential:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Manage outsourcing and freelance relationships to maximize value for the studio</li>
              <li>Onboard new interns and employees and integrate them into the workflow</li>
            </ul>
          </div>
        </section>

        {/* Reveal & Marketing */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Reveal & Marketing</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              The project is moving from internal development into the public eye:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Supporting the public reveal of the title and the launch of its recruit portal</li>
              <li>Helping coordinate the start of the marketing effort as the game goes public</li>
            </ul>
          </div>
        </section>

        {/* Site Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a
              href="https://abyssalguardians.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-[#FFFFFF] text-sm sm:text-base transition-colors"
            >
              Visit the Recruit Portal
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
