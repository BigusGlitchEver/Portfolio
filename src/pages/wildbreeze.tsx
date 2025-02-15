import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import ProjectNav from '../components/ProjectNav';
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

export default function WildBreezeProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section - Improved for mobile */}
        <header className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-6">Wild Breeze Bungalows</h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-4 sm:mb-8">A Tranquil Haven in Sri Lanka</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-12">
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Video Production
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Narration
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Client Collaboration
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Marketing
            </span>
          </div>
        </header>

        {/* Video Showcase - Moved to top */}
        <section className="mb-12 sm:mb-32">
          <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-blue-400/20 mb-4 sm:mb-8">
              <div className="aspect-video w-full">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/m1-keRN0FCY"
                  title="Wild Breeze Bungalows Infomercial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-base sm:text-xl text-gray-300">
              The final piece invites viewers to experience the tranquility of 
              Wild Breeze Bungalows, where comfort meets culture and nature in 
              perfect harmony. The pacing and tone were carefully crafted to 
              reflect the peaceful atmosphere guests can expect during their stay.
            </p>
          </div>
        </section>

        {/* Project Overview - Responsive grid */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">The Vision</h2>
              <p className="text-base sm:text-xl text-gray-300">
                Create an inviting infomercial that captures the serene essence of 
                Wild Breeze Bungalows while highlighting its perfect location for 
                exploring Sri Lanka's natural and cultural treasures.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">The Approach</h2>
              <p className="text-base sm:text-xl text-gray-300">
                Developed a soothing audiovisual experience that transports viewers 
                to this peaceful retreat, combining gentle narration with carefully 
                captured footage of the property and surroundings.
              </p>
            </div>
          </div>
        </section>

        {/* Creative Elements - Mobile-optimized grid */}
        <section className="mb-12 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">Creative Elements</h2>
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-2xl font-light mb-3 sm:mb-6">Visual Atmosphere</h3>
                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li>• Serene landscape shots</li>
                  <li>• Warm, inviting interiors</li>
                  <li>• Natural lighting</li>
                  <li>• Gentle transitions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-light mb-3 sm:mb-6">Audio Design</h3>
                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li>• Soothing background music</li>
                  <li>• Calming voiceover</li>
                  <li>• Natural ambient sounds</li>
                  <li>• Peaceful pacing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-light mb-3 sm:mb-6">Key Features</h3>
                <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-300">
                  <li>• Local attractions</li>
                  <li>• Cultural heritage</li>
                  <li>• Wildlife proximity</li>
                  <li>• Easy accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location Benefits - Responsive grid layout */}
        <section className="mb-12 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">Location Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Cultural Proximity</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Minutes away from ancient Buddhist temples and archaeological sites 
                dating back to the 2nd and 3rd centuries BCE, offering guests an 
                immersive cultural experience.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Natural Wonders</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Close to Yala National Park, giving guests easy access to Sri Lanka's 
                renowned wildlife and natural beauty while maintaining comfortable 
                accommodation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action - Mobile-optimized */}
        <section className="text-center space-y-4 sm:space-y-8">
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