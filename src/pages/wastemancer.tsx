import React from 'react';
import Image from "next/image";
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

export default function WastemancerProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-8 sm:mb-16">
          <div className="w-full mb-6 sm:mb-8 relative bg-[#1b2838] rounded overflow-hidden">
            <Image 
              src="/WastemancerBanner.png" 
              alt="Wastemancer Banner" 
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Wastemancer</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-4 sm:mb-6">Producer & Team Lead</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Team Leadership</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Project Management</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Coaching</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Cross-Cultural Collaboration</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">3 Weeks</span>
          </div>
        </header>

        {/* Game Description */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">About the Game</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Wastemancer is a combo-hitting, high-scoring competitive game where players use QWER keys to select spells, then cast them with combinations of the 4 arrow keys. Players are rewarded for perfect combos as they battle trash amalgamations.
            </p>
            <p className="text-sm sm:text-base">
              Set in a magical future where magic has made life easier, trash is now starting to come to life. You play as part of the Magical Recycling Department, a magical possum sent out to defeat the trash and turn it into recycling.
            </p>
          </div>
        </section>

        {/* My Role & Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As Producer for Wastemancer, I brought together a diverse international team from Poland, Sweden, and China to create a complete game within 3 weeks. Here are my key contributions:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Assembled and coordinated an international team across three countries (Poland, Sweden, China) with different time zones and cultural backgrounds</li>
              <li>Adopted a "leading from behind" leadership style, empowering team members while maintaining project vision and momentum</li>
              <li>Coached the Audio Designer, providing guidance and mentorship throughout development</li>
              <li>Utilized Notion and Jira for comprehensive project management, tracking tasks, milestones, and team progress</li>
              <li>Used Miro for design collaboration and maintaining consistency between disciplines (art, design, programming, audio)</li>
              <li>Facilitated vision alignment across the team, ensuring everyone understood and contributed to the single unified game vision</li>
            </ul>
          </div>
        </section>

        {/* Team Vision */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Establishing Team Vision</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              One of the critical challenges in a 3-week development cycle with an international team was ensuring everyone understood and worked toward the same vision. The concept art process was instrumental in achieving this alignment:
            </p>
            <div className="aspect-video w-full mb-4 relative bg-[#1b2838] rounded overflow-hidden">
              <video 
                controls 
                className="w-full h-full object-contain"
              >
                <source src="/ConceptArt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm sm:text-base">
              Through collaborative concept art sessions on Miro, we established visual language and design principles that guided every discipline. This shared visual foundation helped bridge language barriers and time zone differences, ensuring that whether someone was working in Poland, Sweden, or China, they were creating assets that felt cohesive and aligned with our magical recycling department world.
            </p>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Development Process</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Managing a 3-week game development project across three countries required careful coordination and the right tools:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li><strong>Notion & Jira:</strong> Managed project documentation, task tracking, and sprint planning across all disciplines and time zones</li>
              <li><strong>Miro:</strong> Created shared design spaces where the team could collaborate on visual concepts, game design, and maintain consistency between disciplines</li>
              <li><strong>Leading from Behind:</strong> Empowered team members to take ownership of their work while providing support, guidance, and removing blockers</li>
              <li><strong>Coaching:</strong> Provided one-on-one mentorship to the Audio Designer, helping them grow professionally while contributing to the project</li>
              <li><strong>Vision Alignment:</strong> Used concept art and visual references to ensure everyone, regardless of language or discipline, understood the game's core identity</li>
            </ul>
          </div>
        </section>

        {/* Main Image */}
        <section className="mb-8 sm:mb-12">
          <div className="w-full mb-4 relative bg-[#1b2838] rounded overflow-hidden">
            <Image 
              src="/WastemancerPoster.png" 
              alt="Wastemancer Poster" 
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Itch.io Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://shmoogames.itch.io/wastemancer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded bg-[#66c0f4] hover:bg-[#7dd3ff] text-[#171a21] font-medium text-sm sm:text-base transition-colors"
            >
              View Game on itch.io
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

