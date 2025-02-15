import React, { useState } from 'react';
import Image from "next/image";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectNav from '../components/ProjectNav';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ZulsCafeProject() {
  const [currentImage, setCurrentImage] = useState(0);
  const menuImages = [
    '/inside1.png',
    '/inside2.png',
    '/inside3.png',
    '/inside4.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % menuImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section - Improved for mobile */}
        <header className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-6">Zul's Highway Cafe</h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-4 sm:mb-8">A Taste of Local Paradise in Karak, Malaysia</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-12">
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Product Design
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Visual Design
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Client Collaboration
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Photo Editing
            </span>
          </div>
        </header>

        {/* Logo Display - Responsive container */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="relative rounded-lg sm:rounded-2xl overflow-hidden" style={{ height: '300px', maxHeight: '60vh' }}>
              <Image 
                src="/cafemenu.png"
                alt="Zul's Highway Cafe Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Project Overview - Responsive grid */}
        <section className="mb-12 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">The Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl sm:text-2xl font-light mb-4">Client's Dream</h3>
              <p className="text-base sm:text-xl text-gray-300">
                Nestled along a rural highway in Karak, Zul and Mel wanted their menu 
                to reflect their cafe's welcoming spirit - a haven for both bikers 
                and families. They dreamed of incorporating their beloved Parrot's 
                Beak flower while keeping things clear for international visitors.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl sm:text-2xl font-light mb-4">The Challenge</h3>
              <p className="text-base sm:text-xl text-gray-300">
                Create a complete menu overhaul that would maintain their established 
                brand while bringing in local elements and ensuring clarity for both 
                local and foreign customers.
              </p>
            </div>
          </div>
        </section>

        {/* Design Elements - Mobile-first grid */}
        <section className="mb-12 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">Design Elements</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-8">
            {/* Photo Editing Process */}
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl sm:text-2xl font-light mb-4">Photo Editing Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Sourcing authentic dish presentations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Integrating natural hand elements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Color correction for appetite appeal</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Maintaining brand consistency</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden">
                  <Image 
                    src="/foodediting.png"
                    alt="Photo Editing Process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Local Elements */}
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl sm:text-2xl font-light mb-4">Local Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Parrot's Beak flower motif</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Traditional dish presentations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Familiar visual elements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <p className="text-base sm:text-lg text-gray-300">Cultural color choices</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden">
                  <Image 
                    src="/flower.png"
                    alt="Local Elements"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Showcase - Responsive gallery */}
        <section className="mb-12 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">The Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                <Image 
                  src="/menucover.png"
                  alt="Menu Cover"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base sm:text-lg text-gray-300">Menu Cover Design</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image 
                    src={menuImages[currentImage]}
                    alt="Menu Spread"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Navigation Arrows - Responsive positioning */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-2 sm:p-4 rounded-full"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-2 sm:p-4 rounded-full"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
                {/* Page Indicator - Mobile-friendly */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {menuImages.map((_, index) => (
                    <span 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentImage === index ? 'bg-white' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-300">Interior Menu Spreads</p>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section>
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">The Result</h2>
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <p className="text-base sm:text-xl text-gray-300">
              Just like a perfectly brewed cup of coffee, this project brought together 
              all the right ingredients - local charm, professional design, and 
              cultural authenticity. The final menu serves up not just food choices, 
              but a taste of the warm, welcoming spirit that makes Zul's Highway 
              Cafe such a special place along that rural Malaysian road.
            </p>
          </div>
        </section>

        {/* Call to Action - Mobile-optimized */}
        <section className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-8">
          <h2 className="text-2xl sm:text-4xl font-light">Want to see more?</h2>
          <div className="flex justify-center">
            <a 
              href="/"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800/50 rounded-full transition-colors ring-1 ring-blue-400/60 text-sm sm:text-base"
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