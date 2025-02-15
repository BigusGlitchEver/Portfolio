import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import ProjectNav from '../components/ProjectNav';
import Image from 'next/image';
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

export default function SaveYallaProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section - Improved for mobile */}
        <header className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-6">Save Yalla</h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-4 sm:mb-8">
            A documentary project highlighting educational initiatives and community development 
            in Tissamaharama, Sri Lanka
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-12">
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Video Production
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Client Collaboration
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Interview
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">
              Marketing
            </span>
          </div>
          
          {/* Main Image - Responsive container */}
          <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="aspect-video relative rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src="/saveyallacomputer.png"
                alt="girl working on the computer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>

        {/* Project Overview - Improved grid for mobile */}
        <section className="mb-16 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">The Mission</h2>
              <p className="text-base sm:text-xl text-gray-300">
                Save Yalla works to empower their local community through education and sustainable
                development. Our goal was to create a compelling documentary that would bridge
                the gap between their grassroots efforts and potential international supporters,
                helping to secure resources for their educational programs.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">The Approach</h2>
              <p className="text-base sm:text-xl text-gray-300">
                Rather than creating a traditional fundraising video, we chose to tell the story
                through the eyes of the community. We focused on authentic moments, genuine
                interactions, and the real impact of education on daily lives, creating an
                emotional connection with viewers.
              </p>
            </div>
          </div>
        </section>

        {/* Documentary Strategy - Mobile-first grid */}
        <section className="mb-16 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">Storytelling Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-lg sm:text-xl font-medium mb-4">Community Voice</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li>• Interviews with local teachers</li>
                <li>• Student perspectives</li>
                <li>• Parent testimonials</li>
                <li>• Community leader insights</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-lg sm:text-xl font-medium mb-4">Visual Narrative</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li>• Daily life footage</li>
                <li>• Classroom activities</li>
                <li>• Community gatherings</li>
                <li>• Local environment</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-lg sm:text-xl font-medium mb-4">Impact Focus</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li>• Educational outcomes</li>
                <li>• Community development</li>
                <li>• Cultural preservation</li>
                <li>• Future aspirations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Video Showcase - Responsive iframe container */}
        <section className="mb-16 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">The Documentary</h2>
          <div className="bg-gray-800/50 p-4 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="relative aspect-video w-full mb-4 sm:mb-8">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg sm:rounded-xl"
                src="https://www.youtube.com/embed/tcOjjBmDXsc"
                title="Save Yalla Documentary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-xl text-gray-300">
                Through authentic storytelling and intimate cinematography, we created a
                documentary that captures the heart of Save Yalla's mission while highlighting
                the tangible impact of community-driven education initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section - Responsive grid */}
        <section>
          <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-8">Project Impact</h2>
          <div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Immediate Results</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  <li>• Increased donor engagement</li>
                  <li>• Greater community participation</li>
                  <li>• Enhanced global awareness</li>
                  <li>• New partnership opportunities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Long-term Value</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  <li>• Sustainable funding channels</li>
                  <li>• Expanded educational programs</li>
                  <li>• Stronger community bonds</li>
                  <li>• Documentation of progress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8">
          <h2 className="text-4xl font-light">Want to see more?</h2>
          <div className="flex justify-center">
            <a 
              href="/"
              className="px-6 py-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors ring-1 ring-blue-400/60"
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