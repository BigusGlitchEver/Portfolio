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

export default function WhimpactProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#171a21]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors">
            <Image src="/logo.png" alt="Portfolio Logo" width={32} height={32} />
            <span className="text-base sm:text-xl font-medium">Back to Portfolio</span>
          </a>
          <div className="hidden md:block text-2xl font-light text-white">Samuel Shmoo Bigus</div>
          <div className="flex gap-4 sm:gap-8 text-[#dcdedf] text-sm sm:text-base">
            <a href="https://www.linkedin.com/in/shmoogames" target="_blank" rel="noopener noreferrer" className="hover:text-[#66c0f4] hover:underline">LinkedIn</a>
            <a href="mailto:samuelshmoobigus@yahoo.com" className="hover:text-[#66c0f4] hover:underline">Email</a>
            <a href="/ShmooCV.pdf" className="hover:text-[#66c0f4] hover:underline">CV</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">

        {/* Hero / Cover Image */}
        <header className="mb-8 sm:mb-16">
          <div className="aspect-video w-full mb-6 sm:mb-8 relative bg-[#1b2838] rounded overflow-hidden">
            <Image src="/WhimpactCover.png" alt="Whimpact Cover" fill className="object-cover" priority />
          </div>
          <h1 className="text-3xl sm:text-5xl font-light mb-2">Whimpact!</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-4">Producer Intern — Online Multiplayer Game Launch Prep</div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Game Testing</span>
            <span className="px-2 py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Strategy</span>
            <span className="px-2 py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Steam Launch</span>
          </div>
        </header>

        {/* About the Game */}
        <section className="mb-8 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-3">About the Project</h2>
          <p className="text-sm sm:text-base">
            Whimpact! is an upcoming online multiplayer game preparing for its launch on Steam. Players engage in competitive, cooperative, and strategic gameplay across dynamic environments, using coordinated systems and real-time decision making. The team is focused on delivering an engaging, replayable multiplayer experience that balances skill, narrative, and cooperative strategy.
          </p>
        </section>

        {/* My Role & Contributions */}
        <section className="mb-8 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Key Contributions</h2>
          <p className="text-sm sm:text-base mb-3">
            As a Producer Intern, I contribute directly to production execution and strategic planning across the Whimpact! project. My responsibilities span coordination, testing, strategy, and preparation for the final Steam release.
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>Facilitate action on in-game items and track progress across development teams</li>
            <li>Participate in regular development meetings to align priorities and expectations</li>
            <li>Strategize directly with CEO/Producer Leah Hoyer on vision, priorities, and execution</li>
            <li>Organize and coordinate structured game testing sessions across internal teams</li>
            <li>Support release readiness by preparing documentation, builds, and coordination workflows</li>
          </ul>
        </section>

        {/* Production Coordination */}
        <section className="mb-8 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Production Coordination & Strategy</h2>
          <p className="text-sm sm:text-base">
            I help maintain clarity and forward momentum by organizing workflows and keeping cross-functional teams aligned toward shared goals:
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>Maintain sprint organization and task tracking to ensure deliverables remain on schedule</li>
            <li>Coordinate communication and dependencies between design, development, testing, and leadership</li>
            <li>Support creation of frameworks that translate strategic goals into development action</li>
            <li>Facilitate iteration loops based on testing feedback and production milestones</li>
          </ul>
        </section>

        {/* Launch Readiness */}
        <section className="mb-8 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Launch Readiness & Testing</h2>
          <p className="text-sm sm:text-base">
            With the Steam launch approaching, I support stages of hardening, testing, and preparation for public release:
          </p>
          <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>Organize and analyze structured playtests to identify issues and improvement areas</li>
            <li>Coordinate internal feedback cycles to improve balance, quality, and overall user experience</li>
            <li>Prepare release checklists, documentation, and builds necessary for Steam submission</li>
            <li>Collaborate with leadership to ensure target milestones are achieved prior to launch</li>
          </ul>
        </section>

        {/* External Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a
              href="https://store.steampowered.com/app/3131260/Whimpact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-[#FFFFFF] text-sm sm:text-base transition-colors"
            >
              Visit Steam Store
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}