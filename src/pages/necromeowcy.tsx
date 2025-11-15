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

export default function NecromeowcyProject() {
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
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
              >
                Email
              </a>
              <a 
                href="/cv" 
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
          <div className="aspect-video w-full mb-6 sm:mb-8 relative bg-[#1b2838] rounded overflow-hidden">
            <Image 
              src="/NecroMeowcyGame.png" 
              alt="Necromeowcy Game" 
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Necromeowcy</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-4 sm:mb-6">Art Producer & Game Jam Lead</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Game Jam</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">City Builder</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Team Leadership</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">7 Days</span>
          </div>
        </header>

        {/* My Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As the Art Producer for Necromeowcy, a 7-day Game Jam project, I worked in conjunction with another producer to lead the development of this city builder cat necromancer game. Here are my key contributions:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Led meetings and coordinated the art team to ensure timely delivery of assets within the tight 7-day timeline</li>
              <li>Managed the art production pipeline, working closely with artists to maintain quality and consistency</li>
              <li>Facilitated communication between the art team and other disciplines (design, programming) to ensure smooth integration</li>
              <li>Helped establish and maintain the game's visual identity for the city builder necromancer theme</li>
            </ul>
          </div>
        </section>

        {/* Game Jam Context */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Game Jam Development</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Necromeowcy was developed during a Game Jam, a challenging 7-day sprint that required rapid iteration and efficient team coordination:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Successfully delivered a complete playable game within the 7-day constraint</li>
              <li>Managed production workflow to ensure all disciplines stayed aligned despite the intense timeline</li>
              <li>Balanced creative vision with practical production constraints to deliver a cohesive experience</li>
              <li>Facilitated cross-cultural collaboration with team members across multiple countries</li>
            </ul>
          </div>
        </section>

        {/* Game Description */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">About the Game</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Necromeowcy is a city builder game with a unique twist - you play as a cat necromancer managing a settlement. Players use the Purr (expected life of peasants) to produce resources necessary for constructing a Time Portal, while managing resources to keep peasants alive and Dread levels low. Every 5 days, cat-astrophes can occur, requiring strategic resource management.
            </p>
          </div>
        </section>

        {/* Itch.io Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://pandagp.itch.io/necromeowcy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-[#FFFFFF] text-sm sm:text-base transition-colors"
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

