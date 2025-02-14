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

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-light mb-6">Wild Breeze Bungalows</h1>
          <p className="text-2xl text-gray-300 mb-8">A Tranquil Haven in Sri Lanka</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Video Production</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Narration</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Client Collaboration</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Marketing</span>
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-2xl font-light mb-6">The Vision</h2>
              <p className="text-xl text-gray-300">
                Create an inviting infomercial that captures the serene essence of 
                Wild Breeze Bungalows while highlighting its perfect location for 
                exploring Sri Lanka's natural and cultural treasures.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-2xl font-light mb-6">The Approach</h2>
              <p className="text-xl text-gray-300">
                Developed a soothing audiovisual experience that transports viewers 
                to this peaceful retreat, combining gentle narration with carefully 
                captured footage of the property and surroundings.
              </p>
            </div>
          </div>
        </section>

        {/* Creative Strategy */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Creative Elements</h2>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-light mb-6">Visual Atmosphere</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Serene landscape shots</li>
                  <li>• Warm, inviting interiors</li>
                  <li>• Natural lighting</li>
                  <li>• Gentle transitions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6">Audio Design</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Soothing background music</li>
                  <li>• Calming voiceover</li>
                  <li>• Natural ambient sounds</li>
                  <li>• Peaceful pacing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6">Key Features</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Local attractions</li>
                  <li>• Cultural heritage</li>
                  <li>• Wildlife proximity</li>
                  <li>• Easy accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location Highlights */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Location Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl font-medium mb-4">Cultural Proximity</h3>
              <p className="text-gray-300">
                Minutes away from ancient Buddhist temples and archaeological sites 
                dating back to the 2nd and 3rd centuries BCE, offering guests an 
                immersive cultural experience.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl font-medium mb-4">Natural Wonders</h3>
              <p className="text-gray-300">
                Close to Yala National Park, giving guests easy access to Sri Lanka's 
                renowned wildlife and natural beauty while maintaining comfortable 
                accommodation.
              </p>
            </div>
          </div>
        </section>

        {/* Location Gallery */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Location Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-blue-400/20">
              <img
                src="/wildbreeze.png"
                alt="Wild Breeze Location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-blue-400/20">
              <img
                src="/wildbreeze.png"
                alt="Property Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section>
          <h2 className="text-4xl font-light mb-8">The Infomercial</h2>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-blue-400/20 mb-8">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/m1-keRN0FCY"
                  title="Wild Breeze Bungalows Infomercial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-xl text-gray-300">
              The final piece invites viewers to experience the tranquility of 
              Wild Breeze Bungalows, where comfort meets culture and nature in 
              perfect harmony. The pacing and tone were carefully crafted to 
              reflect the peaceful atmosphere guests can expect during their stay.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16 space-y-8">
          <h2 className="text-4xl font-light">Want to see more?</h2>
          <div className="flex justify-center">
            <a 
              href="/"
              className="px-6 py-3 bg-gray-800/50 rounded-full transition-colors ring-1 ring-blue-400/20"
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