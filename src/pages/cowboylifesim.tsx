import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Footer from '@/components/Footer';
import ProjectNav from '@/components/ProjectNav';

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

const HEADER_ART =
  'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151380/1d5a4da08989c4c3aadd687597b2bd38602e61f9/header.jpg';

export default function CowboyLifeSimulatorProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-8 sm:mb-16">
          <div className="aspect-video w-full mb-6 sm:mb-8 relative bg-[#1b2838] rounded overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HEADER_ART} alt="Cowboy Life Simulator" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Cowboy Life Simulator</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-2">Producer</div>
          <div className="text-sm sm:text-base text-[#acb2b8] mb-4 sm:mb-6">Odd Qubit, published by RockGame S.A. | Team of 17</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Milestone Planning</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Team Leadership</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Onboarding</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Live Service</span>
          </div>
        </header>

        {/* My Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As a Producer on Cowboy Life Simulator, a Very Positive rated Wild West ranching sim with 1,151 positive Steam reviews, I lead production planning for a 17 person cross discipline team. My focus is keeping a live, growing title on schedule while supporting the people who build it.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Lead the distribution of work across the team, planning tasks up to 4 months in advance to meet publisher milestones</li>
              <li>Consistently met every milestone the team was given throughout the production cycle</li>
              <li>Coordinate a 17 person team across disciplines, keeping production focused and cohesive</li>
              <li>Onboard new interns and employees and help them ramp up quickly</li>
              <li>Scout and recruit voice acting talent to bring the game cast to life</li>
              <li>Mentored directly by the studio CEO as part of my production development</li>
            </ul>
          </div>
        </section>

        {/* Production Management */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Production Management</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              I established a forward looking planning framework for a title that ships updates to a live audience:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Built a rolling 4 month plan so the team always knew what was coming next</li>
              <li>Tracked milestone markers and progress to keep delivery on schedule</li>
              <li>Identified blockers early and adjusted priorities to maintain momentum</li>
              <li>Coordinated communication across art, design, and engineering disciplines</li>
            </ul>
          </div>
        </section>

        {/* Team & Talent */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Team & Talent</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Supporting a 17 person team meant investing in both onboarding and casting:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Onboarded new interns and employees with clear expectations and support</li>
              <li>Scouted and recruited voice acting talent to match the tone of the world</li>
              <li>Fostered accountability and shared ownership across the team</li>
            </ul>
          </div>
        </section>

        {/* Live Production */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Live Production</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Cowboy Life Simulator is in Early Access and continues to grow with its community:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Support live production of a title holding a Very Positive rating, with 1,151 positive reviews out of 1,293 total (89% positive)</li>
              <li>Help prioritize the roadmap so new content lands at a steady, sustainable pace</li>
              <li>Keep the production process aligned with player feedback and studio goals</li>
            </ul>
          </div>
        </section>

        {/* Steam Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a
              href="https://store.steampowered.com/app/1151380/Cowboy_Life_Simulator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded bg-[#66c0f4] hover:bg-[#7dd3ff] text-[#171a21] font-medium text-sm sm:text-base transition-colors"
            >
              View Game on Steam
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
