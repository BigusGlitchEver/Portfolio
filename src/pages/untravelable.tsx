import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { Youtube } from 'lucide-react';
import ProjectNav from '../components/ProjectNav';

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

export default function UntravelablePage() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-white`}>
      {/* Navigation */}
      <ProjectNav />

      <main>
        {/* Hero Section with Background Image */}
        <div className="relative h-[500px] mb-16">
          <div className="absolute inset-0">
            <Image
              src="/haircut.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-gray-900/80 backdrop-blur-sm px-8 py-6 rounded-lg">
              <h1 className="text-5xl font-light mb-6 text-center">Untravelable??</h1>
              <a 
                href="https://www.youtube.com/watch?v=clPjsLi9g3Q&t=29s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Youtube className="w-6 h-6" />
                Watch Our Journey
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* Overview and Content Grid Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project Overview */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Project Overview</h2>
                <div className="space-y-4 text-gray-400">
                  <p>The Untravelable?? blog emerged from our adventures across Southeast Asia, challenging the notion that certain places are "untravelable." Through compelling visuals and storytelling, we share authentic experiences that bridge cultural gaps and inspire others to explore beyond their comfort zones.</p>
                  <p>Unlike typical travel content creators, we focused on creating an episodic, natural-styled commentary that makes viewers feel like they're traveling alongside friends rather than following a polished influencer. Our approach emphasizes genuine reactions, real-time discoveries, and authentic connections, allowing our audience to experience each moment as it naturally unfolds.</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Content</h2>
                <div className="space-y-4 text-gray-400">
                  <p>Our content focuses on:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Local cultural immersion and authentic experiences</li>
                    <li>Off-the-beaten-path destinations and hidden gems</li>
                    <li>Practical travel tips and cultural insights</li>
                    <li>Personal stories and connections made along the way</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        
          {/* Main Image and Analysis */}
          <section className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Main Project Image */}
              <div className="space-y-8">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative">
                  <Image
                    src="/untravelable.png"
                    alt="Untravelable Blog Header"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image Analysis and Design Approach */}
              <div className="space-y-8">
                <h2 className="text-2xl font-light">Visual Design</h2>
                <div className="bg-gray-800/30 p-6 rounded-lg space-y-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-blue-400">Design Approach</h3>
                    <div className="space-y-2 text-gray-300 mb-8">
                      <p>Our visual identity balances authenticity with relatability, focusing on:</p>
                      <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Natural, unscripted moments that capture genuine experiences</li>
                        <li>Conversational storytelling that feels like chatting with friends</li>
                        <li>Real-time reactions and discoveries</li>
                        <li>Personal connections with local communities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Examples */}
          <section className="mb-32">
            <h2 className="text-4xl font-light mb-8">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                  <Image
                    src="/coolshmoo.png"
                    alt="Ancient Temples"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-light">Ancient Temples</h3>
                <p className="text-gray-400">Exploring sacred spaces and discovering the spiritual heritage of Southeast Asia</p>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                  <Image
                    src="/sunset.png"
                    alt="Beautiful Sunsets"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-light">Beautiful Sunsets</h3>
                <p className="text-gray-400">Capturing magical moments as day turns to night in stunning locations</p>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                  <Image
                    src="/togethertrip.png"
                    alt="Ancient Cities"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-light">Ancient Cities</h3>
                <p className="text-gray-400">Walking through history in the preserved streets of Asia's most remarkable urban centers</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <a 
              href="/"
              className="px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors inline-block"
            >
              View More Projects
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}