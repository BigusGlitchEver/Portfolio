import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function ZineProject() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#E5E5E5] text-black font-serif`}>
      {/* Custom Navigation */}
{/* Custom Navigation */}
<nav className="fixed w-full top-0 z-50 bg-[#E5E5E5]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center mx-auto border-8 border-[#FF8C00]">
      {/* Left side - Logo and Back button */}
      <div className="flex items-center gap-4 pl-4">
        <Image
          src="/zinepaper.png"
          alt="Zine Paper"
          width={80}
          height={80}
          className="w-auto h-auto"
        />
        <Link 
          href="/" 
          className="bg-[#FFE144] border-8 border-[#FF69B4] px-4 py-2 text-xl hover:bg-[#FF8C00] transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
      {/* Middle - Name */}
      <div className="hidden md:block">
        <span className="text-2xl">Samuel Shmoo Bigus</span>
      </div>
      {/* Right side - Links */}
      <div className="flex gap-8 p-4">
        <a 
          href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FFE144] border-8 border-[#FF69B4] px-4 py-2 text-xl hover:bg-[#FF8C00] transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:samuelshmoobigus@yahoo.com" 
          className="bg-[#FFE144] border-8 border-[#FF69B4] px-4 py-2 text-xl hover:bg-[#FF8C00] transition-colors"
        >
          Email
        </a>
        <Link 
          href="/cv" 
          className="bg-[#FFE144] border-8 border-[#FF69B4] px-4 py-2 text-xl hover:bg-[#FF8C00] transition-colors"
        >
          CV
        </Link>
      </div>
    </div>
  </div>
</nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
{/* Hero Section */}
<header className="mb-16">
  <div className="flex items-start gap-8">
    <div>
      <h1 className="text-5xl mb-6">The Zine Bathroom Reader #4</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Product Design</span>
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Visual Design</span>
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Research</span>
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Game Design</span>
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Publications</span>
        <span className="px-4 py-2 bg-[#FFE144] border-8 border-[#FF69B4] text-xl">Photo Editing</span>
      </div>
      
      {/* Bang Bang Zine Collaboration Box */}
      <div className="relative max-w-[600px]">
        <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-6">
          <p className="text-xl mb-4">
            Published in collaboration with Bang Bang Zine as a winning submission for their Zinemate Publishing Project - 
            a platform dedicated to supporting creators in self-publishing through risograph printing.
          </p>
          <a 
            href="https://www.bangbangzine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF8C00] border-4 border-[#FF69B4] px-4 py-2 text-lg hover:bg-[#FFD700] transition-colors"
          >
            Visit Bang Bang Zine
          </a>
        </div>
      </div>
    </div>
    
    <div className="border-8 border-[#FF69B4] mb-8">
      <Image 
        src="/zinetoilet.png"
        alt="Zine Toilet"
        width={500}
        height={500}
        className="w-auto h-auto"
      />
    </div>
  </div>
</header>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h2 className="text-2xl mb-6">The Context</h2>
              <p className="text-xl">
                As part of Malaysia's underground zine community, I created this zine 
                to bring artistic expression and social commentary to art markets in 
                Georgetown. The goal was to make complex social issues accessible 
                through playful, engaging content.
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h2 className="text-2xl mb-6">The Approach</h2>
              <p className="text-xl">
                I structured the zine using the classic journalistic principles of 
                "Who, What, When, Where, Why, How" while incorporating illustration, 
                humor, and an interactive board game component.
              </p>
            </div>
          </div>
        </section>

{/* Physical Components and Character */}
<section className="mb-16">
  <div className="flex justify-center items-center gap-8">
    <div className="w-fit mx-auto flex items-center gap-8">
      <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8 w-fit">
        <h3 className="text-2xl mb-6">Physical Components</h3>
        <ul className="space-y-4 text-xl">
          <li>• 4C Risograph printed game board</li>
          <li>• Illustrated rule card</li>
          <li>• 8 unique player pieces</li>
          <li>• 16-page saddle-stitched zine</li>
          <li>• First edition of 100 copies</li>
        </ul>
      </div>
      <Image 
        src="/zineguy.png"
        alt="Zine Character"
        width={150}
        height={150}
        className="w-auto h-auto"
      />
    </div>
  </div>
</section>

        {/* Board Game */}
        <section className="mb-8">
          <h2 className="text-4xl mb-8">The Board Game</h2>
          <div className="border-8 border-[#FF69B4] mb-8">
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
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <Image 
                src="/zinebird.png"
                alt="Zine Bird"
                width={300}
                height={300}
                className="w-auto h-auto"
              />
            </div>
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h3 className="text-2xl mb-6">Game Design</h3>
              <p className="text-xl mb-6">
                A reimagining of Snakes and Ladders that illustrates wealth inequality:
              </p>
              <ul className="space-y-4 text-xl">
                <li>• Rich players start higher on the board</li>
                <li>• More ladders for the wealthy, more snakes for the poor</li>
                <li>• Poor players can form unions to help each other advance</li>
                <li>• 24cm x 26.5cm board with 8 custom player pieces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Production Process and Bunny */}
        <section className="mb-32">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-4xl">Production Process</h2>
            <Image 
              src="/zinebunny.png"
              alt="Zine Bunny"
              width={150}
              height={150}
              className="w-auto h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h3 className="text-2xl mb-4">Content Creation</h3>
              <p className="text-xl">
                Blending satire, allegories, and fun facts with serious social commentary
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h3 className="text-2xl mb-4">Design</h3>
              <p className="text-xl">
                4-color Risograph printing process with careful color separation
              </p>
            </div>
            
            <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8">
              <h3 className="text-2xl mb-4">Game Testing</h3>
              <p className="text-xl">
                Playtesting to ensure game mechanics reinforce the social message
              </p>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-32">
          <h2 className="text-4xl mb-8">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-8 border-[#FF69B4]">
              <Image 
                src="/zine1.png"
                alt="Design Process"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="border-8 border-[#FF69B4]">
              <Image 
                src="/zine2.png"
                alt="Printing Process"
                width={600}
                height={600}
                className="w-full"
              />
            </div>
            <div className="border-8 border-[#FF69B4]">
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

        {/* Distribution and Paper */}
<section className="mb-32">
  <div className="flex justify-center items-center gap-8 mb-8">
    <h2 className="text-4xl">Distribution</h2>
    <Image 
      src="/zinepaper.png"
      alt="Zine Paper"
      width={150}
      height={150}
      className="w-auto h-auto ml-4"
    />
  </div>
  <div className="flex justify-center">
    <div className="bg-[#FFE144] border-8 border-[#FF69B4] p-8 w-fit">
      <h3 className="text-2xl mb-6">Available through:</h3>
      <ul className="space-y-3 text-xl">
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
          <h2 className="text-4xl">Want to see more?</h2>
          <div className="flex justify-center">
            <a 
              href="/"
              className="px-6 py-3 bg-[#FFE144] border-8 border-[#FF69B4] text-xl hover:bg-[#FF8C00] transition-colors"
            >
              View More Projects
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}