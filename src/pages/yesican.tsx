import React from 'react';
import Image from "next/image";
import { Poppins, JetBrains_Mono } from "next/font/google";
import ProjectNav from '../components/ProjectNav';

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

export default function BookCoverProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-light mb-6">"Yes, I Can" Book Cover</h1>
          <p className="text-2xl text-gray-300 mb-8">A Visual Journey Through Metaphor</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Product Design</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Visual Design</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Client Collaboration</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Photo Editing</span>
          </div>

          {/* Main Image Container */}
<div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-sm ring-1 ring-blue-400/20 mx-auto" style={{ width: 'fit-content' }}>
  <div className="relative rounded-3xl overflow-hidden mx-auto" style={{ width: '600px' }}>
    <Image 
      src="/yesican.png"
      alt="Yes I Can Book Cover"
      width={1500}
      height={1800}
      className="w-full h-auto rounded-3xl"
      priority
    />
  </div>
</div>
        </header>

        {/* Design Philosophy */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-2xl font-light mb-6">The Vision</h3>
              <p className="text-xl text-gray-300">
                Like mixing different spices to create the perfect dish, this cover 
                blends contrasting elements - water and fire, sketched and vectorized - 
                to represent how our surroundings shape who we become.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-2xl font-light mb-6">Poetic Inspiration</h3>
              <blockquote className="text-xl text-gray-300">
                "I am like water. If I am in a pot; I'll become a pot. If I am in 
                glass; I'll become a glass. No matter in what I am; I'll take that form."
              </blockquote>
              <p className="text-xl text-gray-300">
                The design mirrors the author's use of natural elements as metaphors 
                for human adaptability and strength.
              </p>
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Creative Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-2xl font-light mb-6">Color Choice</h3>
              <div className="h-24 bg-yellow-400 rounded-2xl ring-1 ring-blue-400/20 mb-4"></div>
              <p className="text-xl text-gray-300">
                Yellow brings excitement, happiness, and optimism - reflecting the 
                book's inspiring message.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-2xl font-light mb-6">Contrasting Styles</h3>
              <p className="text-xl text-gray-300">
                Blending sketched natural elements with vectorized human forms 
                creates a visual metaphor for how nature's wisdom shapes our reality.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-2xl font-light mb-6">Typography</h3>
              <p className="text-xl text-gray-300">
                Clear, confident text arrangement emphasizes the book's 
                empowering message: "Yes, I Can."
              </p>
            </div>
          </div>
        </section>

        {/* Poetry Selection */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Featured Poetry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl font-medium mb-4">Water's Form</h3>
              <p className="text-xl text-gray-300 italic">
                "Like water in a vessel,
                I take the shape that holds me.
                Not bound, but flowing free,
                Adapting endlessly..."
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h3 className="text-xl font-medium mb-4">Inner Fire</h3>
              <p className="text-xl text-gray-300 italic">
                "The flame within me burns bright,
                Through darkest day and longest night.
                No wind can dim this inner light,
                That guides my path to greater height."
              </p>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section>
          <h2 className="text-4xl font-light mb-8">The Result</h2>
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <p className="text-xl text-gray-300">
              Just as Mr. Zulfikar weaves together metaphors to create deeper meaning, 
              this cover design combines contrasting elements to tell a story greater 
              than its individual parts. Like a beautiful sunset that needs both the 
              sun and the horizon to make its magic, this cover brings together 
              different elements to create something truly special.
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
    </div>
  );
}