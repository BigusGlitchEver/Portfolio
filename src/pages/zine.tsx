import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function ZineProject() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`${playfair.variable} min-h-screen bg-[#E5E5E5] text-black font-serif`}>
      {/* Custom Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mx-auto border-8 border-[#FF8C00]">
            {/* Left side - Logo and Back button */}
            <div className="flex items-center gap-2 sm:gap-4 pl-2 sm:pl-4">
              <Link 
                href="/" 
                className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl hover:bg-[#FF8C00] transition-colors whitespace-nowrap"
              >
                Back to Portfolio
              </Link>
            </div>

            {/* Right side - Links */}
            <div className="flex gap-2 sm:gap-8 p-2 sm:p-4">
              <a 
                href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl hover:bg-[#FF8C00] transition-colors whitespace-nowrap"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl hover:bg-[#FF8C00] transition-colors whitespace-nowrap"
              >
                Email
              </a>
              <Link 
                href="/cv" 
                className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl hover:bg-[#FF8C00] transition-colors"
              >
                CV
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-8 sm:mb-16">
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-8">
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl sm:text-5xl mb-4 sm:mb-6">The Zine Bathroom Reader #4</h1>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8">
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Product Design</span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Visual Design</span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Research</span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Game Design</span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Publications</span>
                <span className="px-2 py-1 sm:px-4 sm:py-2 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-sm sm:text-xl">Photo Editing</span>
              </div>
              
              {/* Bang Bang Zine Collaboration Box */}
              <div className="relative max-w-full sm:max-w-[600px]">
                <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-6">
                  <p className="text-base sm:text-xl mb-4">
                    Published in collaboration with Bang Bang Zine as a winning submission for their Zinemate Publishing Project - 
                    a platform dedicated to supporting creators in self-publishing through risograph printing.
                  </p>
                  <a 
                    href="https://www.bangbangzine.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FF8C00] border-2 sm:border-4 border-[#FF69B4] px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg hover:bg-[#FFD700] transition-colors"
                  >
                    Visit Bang Bang Zine
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 border-4 sm:border-8 border-[#FF69B4] self-start">
              <Image 
                src="/zinetoilet.png"
                alt="Zine Toilet"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-8 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6">The Context</h2>
              <p className="text-base sm:text-xl">
                As part of Malaysia's underground zine community, I created this zine 
                to bring artistic expression and social commentary to art markets in 
                Georgetown. The goal was to make complex social issues accessible 
                through playful, engaging content.
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6">The Approach</h2>
              <p className="text-base sm:text-xl">
                I structured the zine using the classic journalistic principles of 
                "Who, What, When, Where, Why, How" while incorporating illustration, 
                humor, and an interactive board game component.
              </p>
            </div>
          </div>
        </section>

        {/* Physical Components and Character */}
        <section className="mb-8 sm:mb-16">
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-8">
            {mounted && (
              <div className="flex justify-center">
                <Image 
                  src="/zineguy.png"
                  alt="Zine Character"
                  width={150}
                  height={150}
                  className="w-auto h-auto"
                />
              </div>
            )}
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8 w-full">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Physical Components</h3>
              <ul className="space-y-2 sm:space-y-4 text-base sm:text-xl">
                <li>• 4C Risograph printed game board</li>
                <li>• Illustrated rule card</li>
                <li>• 8 unique player pieces</li>
                <li>• 16-page saddle-stitched zine</li>
                <li>• First edition of 100 copies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Board Game */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-8">The Board Game</h2>
          <div className="border-4 sm:border-8 border-[#FF69B4] mb-4 sm:mb-8">
            <Image 
              src="/zine.png"
              alt="Zine Board Game"
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
        </section>

        {/* Game Design and Bird */}
        <section className="mb-16 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {mounted && (
              <div className="flex justify-center">
                <Image 
                  src="/zinebird.png"
                  alt="Zine Bird"
                  width={300}
                  height={300}
                  className="w-auto h-auto"
                />
              </div>
            )}
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Game Design</h3>
              <p className="text-base sm:text-xl mb-4 sm:mb-6">
                A reimagining of Snakes and Ladders that illustrates wealth inequality:
              </p>
              <ul className="space-y-2 sm:space-y-4 text-base sm:text-xl">
                <li>• Rich players start higher on the board</li>
                <li>• More ladders for the wealthy, more snakes for the poor</li>
                <li>• Poor players can form unions to help each other advance</li>
                <li>• 24cm x 26.5cm board with 8 custom player pieces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="mb-16 sm:mb-32">
          <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl">Production Process</h2>
            {mounted && (
              <Image 
                src="/zinebunny.png"
                alt="Zine Bunny"
                width={150}
                height={150}
                className="w-auto h-auto"
              />
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl mb-4">Content Creation</h3>
              <p className="text-base sm:text-xl">
                Blending satire, allegories, and fun facts with serious social commentary
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl mb-4">Design</h3>
              <p className="text-base sm:text-xl">
                4-color Risograph printing process with careful color separation
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl mb-4">Game Testing</h3>
              <p className="text-base sm:text-xl">
                Playtesting to ensure game mechanics reinforce the social message
              </p>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-16 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl mb-4 sm:mb-8">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="border-4 sm:border-8 border-[#FF69B4]">
              <Image 
                src="/zine1.png"
                alt="Design Process"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="border-4 sm:border-8 border-[#FF69B4]">
              <Image 
                src="/zine2.png"
                alt="Printing Process"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="border-4 sm:border-8 border-[#FF69B4]">
              <Image 
                src="/zine3.png"
                alt="Final Assembly"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Distribution Section */}
        <section className="mb-16 sm:mb-32">
          <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl">Distribution</h2>
            {mounted && (
              <Image 
                src="/zinepaper.png"
                alt="Zine Paper"
                width={150}
                height={150}
                className="w-auto h-auto"
              />
            )}
          </div>
          <div className="flex justify-center">
            <div className="bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] p-4 sm:p-8 w-full">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">Available through:</h3>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-xl">
                <li>• GMBB.KL Store in Kuala Lumpur</li>
                <li>• Art markets in Georgetown, Penang</li>
                <li>• Select consignment stores across Malaysia</li>
                <li>• Direct orders via social media</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Equality Image */}
        <div className="flex justify-center mb-16">
          <Image 
            src="/zineequality.png"
            alt="Zine Equality"
            width={400}
            height={200}
            className="w-auto h-auto"
          />
        </div>

        {/* Call to Action */}
        <section className="text-center space-y-8">
          <h2 className="text-2xl sm:text-4xl">Want to see more?</h2>
          <div className="flex justify-center">
            <Link 
              href="/"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-[#FFE144] border-4 sm:border-8 border-[#FF69B4] text-base sm:text-xl hover:bg-[#FF8C00] transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}