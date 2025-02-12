import React, { useState } from 'react';
import Image from "next/image";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function JudaicTarotPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const bookImages = [
    '/tcb1.png',
    '/tcb2.png',
    '/tcb3.png',
    '/tcb4.png',
    '/tcb5.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bookImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bookImages.length) % bookImages.length);
  };

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-white`}>
      {/* Navigation */}
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-light mb-6">The Judaic Tarot</h1>
          <p className="text-2xl text-gray-400 mb-12">A Jewish deck by and for the Jewish people</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Product Design</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Visual Design</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Research</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Publications</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Photo Editing</span>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <Image 
              src="/tarotspread.png"
              alt="Judaic Tarot Deck Overview"
              width={1920}
              height={1080}
              className="w-full object-cover"
            />
          </div>
        </header>

        {/* Problem Statement Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-2xl font-light mb-6">The Gap</h2>
              <p className="text-xl text-gray-300">
                Jewish Tarot readers experience a lack of representation when they look for themselves and their people's stories in their tarot decks - decks that are already influenced by their own lore.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <h2 className="text-2xl font-light mb-6">The Impact</h2>
              <p className="text-xl text-gray-300">
                This absence of representation implies that Jewish history and culture are not valued within the tarot community, leading to feelings of disconnection and imposter syndrome among Jewish practitioners.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <h2 className="text-2xl font-light mb-4">The Solution</h2>
            <p className="text-xl text-gray-300">
              Create a tarot deck that authentically represents Jewish stories, symbols, and spiritual traditions, allowing Jewish readers to connect with their heritage through the cards while maintaining the depth and utility of traditional tarot.
            </p>
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Research & Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <p className="text-xl text-gray-300">
                  Through extensive research and interviews with rabbis and Jewish community members, I discovered a significant gap in representation. While many tarot decks draw from various cultural traditions, none fully embraced the rich tapestry of Jewish stories and symbolism.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/judaictarot.png"
                  alt="Research Process Image"
                  width={800}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 h-fit">
  <h3 className="text-2xl font-light mb-6">Key Findings</h3>
  <ul className="space-y-4">
    <li className="text-xl text-gray-300">• Traditional tarot decks often draw from Jewish mysticism without acknowledging the source</li>
    <li className="text-xl text-gray-300">• Jewish readers sought deeper connections to their cultural heritage through tarot</li>
    <li className="text-xl text-gray-300">• The intersection of Jewish tradition and tarot presented unique opportunities for authentic representation</li>
  </ul>
</div>
          </div>
        </section>

        {/* Card Design Showcase */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Card Design</h2>
          
          {/* Major Arcana */}
          <div className="mb-16">
            <h3 className="text-2xl font-light mb-6">Major Arcana</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/tower.png"
                  alt="The Tower Card"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/chariot.png"
                  alt="The Chariot Card"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <p className="text-xl text-gray-300">
                Each Major Arcana card represents a significant story or figure from Jewish tradition, carefully chosen through rabbinic consultation and research.
              </p>
            </div>
          </div>

          {/* Minor Arcana */}
          <div className="mb-16">
            <h3 className="text-2xl font-light mb-6">Minor Arcana</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/ace.png"
                  alt="Ace Card"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/desert.png"
                  alt="Desert Card"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
              <p className="text-xl text-gray-300">
                The Minor Arcana integrates the Four Worlds concept with traditional tarot symbolism, creating a unique bridge between Jewish mysticism and tarot practice.
              </p>
            </div>
          </div>

          {/* Card Back Design */}
          <div>
            <h3 className="text-2xl font-light mb-6">Card Back Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/backs.png"
                  alt="Card Back Design"
                  width={600}
                  height={800}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 h-fit">
  <p className="text-xl text-gray-300">
    The card backs feature the letter shin (ש), a powerful symbol found on the mezuzah at the entrance to Jewish homes, connecting the deck to the family and Judaic traditions. The design also incorporates the Star of David, elegantly mapping the four elements and four worlds within its structure and reminding users that the origins of the tarot were based off Judaism.
  </p>
</div>
            </div>
          </div>
        </section>

        {/* Companion Book */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">The Companion Book</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/bookcover.png"
                  alt="Companion Book Cover"
                  width={800}
                  height={800}
                  className="w-full"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src={bookImages[currentImage]}
                  alt={`Book Interior ${currentImage + 1}`}
                  width={800}
                  height={800}
                  className="w-full"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-4 rounded-full"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 text-white p-4 rounded-full"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {bookImages.map((_, index) => (
                    <span 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentImage === index ? 'bg-white' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <h3 className="text-xl font-medium mb-4">Reading Methods</h3>
                <p className="text-xl text-gray-300">
                  Includes traditional single-card readings, the unique 7-card spread based on the Tree of Life, and interpretations grounded in Hebrew letter meanings.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <h3 className="text-xl font-medium mb-4">The Four Worlds</h3>
                <p className="text-xl text-gray-300">
                  Explores the connection between the four tarot suits and the traditional Jewish concept of the Four Worlds.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <h3 className="text-xl font-medium mb-4">Tree of Life</h3>
                <p className="text-xl text-gray-300">
                  Provides detailed explanations of how the Tree of Life concept relates to card meanings and spread interpretations.
                </p>
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
              className="px-6 py-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors ring-1 ring-blue-400/20"
            >
              View More Projects
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}