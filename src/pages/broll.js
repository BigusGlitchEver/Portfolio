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

export default function BrollProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#171a21]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors">
              <Image src="/logo.png" alt="Portfolio Logo" width={32} height={32} />
              <span className="text-base sm:text-xl font-medium">Back to Portfolio</span>
            </a>
            <div className="hidden md:block text-2xl font-light text-white">Samuel Shmoo Bigus</div>
            <div className="flex gap-4 sm:gap-8">
              <a 
                href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
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
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://video.fastly.steamstatic.com/store_trailers/256841789/movie480_vp9.webm?t=1625575060" type="video/webm" />
            </video>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Broll</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-4 sm:mb-6">Level Designer</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Game Design</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Level Design</span>
          </div>
        </header>

        {/* My Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As the Level Designer for Broll, I was responsible for creating engaging and challenging levels 
              that showcase the game's unique physics-based gameplay mechanics. Here are my key contributions:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Designed levels that progressively introduce and challenge players with the ragdoll physics system</li>
              <li>Created strategic layouts that encourage experimentation with the physics mechanics</li>
              <li>Implemented multiple path solutions to accommodate different play styles</li>
              <li>Balanced difficulty progression throughout the game's levels</li>
            </ul>
          </div>
        </section>

        {/* Level Design */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Level Design Philosophy</h2>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl text-[#66c0f4]">Strategic Planning</h3>
            <p className="text-sm sm:text-base">
              My approach to level design focused on creating intuitive yet challenging experiences:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Carefully calculated launch points and landing zones for optimal physics interactions</li>
              <li>Strategic placement of interactive surfaces to create engaging gameplay moments</li>
              <li>Clear visual communication of level mechanics and objectives</li>
            </ul>
          </div>
        </section>

        {/* Player Experience */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Player Experience Design</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              Created levels that focus on player satisfaction and engagement:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Balanced difficulty curves that maintain challenge while avoiding frustration</li>
              <li>Designed multiple solution paths to encourage player creativity</li>
              <li>Implemented clear visual language for gameplay elements</li>
              <li>Created natural progression of mechanical complexity across levels</li>
            </ul>
          </div>
        </section>

        {/* Steam Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://store.steampowered.com/app/1265300/Broll/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-[#FFFFFF] text-sm sm:text-base transition-colors"
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