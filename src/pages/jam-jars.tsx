import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
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

export default function JamLabelsProject() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen text-gray-100 relative`}>
      {/* Fixed Background Pattern Layer - Preserved */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(17, 24, 39, 0.3), rgba(17, 24, 39, 0.3)),
          url('/images/backgrounds/jamback1.png'),
          url('/images/backgrounds/jamback2.png'),
          url('/images/backgrounds/jamback3.png')
        `,
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0, 200px 200px, 400px 400px'
      }} />
      
      <div className="relative z-10">
        {/* Navigation - Properly spaced */}
        <nav className="fixed w-full top-0 z-50 bg-[#E5E5E5]">
          <div className="relative">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/backgrounds/jamback2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5)'
            }} />
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <div className="h-16 flex justify-between items-center">
                <Link 
                  href="/" 
                  className="text-sm sm:text-base hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                      priority
                    />
                  </div>
                  <span className="hidden sm:inline">Back to Portfolio</span>
                  <span className="sm:hidden">Back</span>
                </Link>

                <div className="flex gap-4 sm:gap-8">
                  <a 
                    href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:samuelshmoobigus@yahoo.com" 
                    className="text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    Email
                  </a>
                  <Link 
                    href="/cv" 
                    className="text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
          {/* Hero Section - Improved spacing */}
          <header className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-light mb-4 sm:mb-6 text-center">Artisan food. Tasteful Design.</h1>
            <p className="text-lg sm:text-2xl text-center font-light mb-8 sm:mb-12">A brand identity project for Sathanee restaurant</p>
            
            {/* Category Tags - Better mobile layout */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"].map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-black font-bold border-2 border-black"
                  style={{
                    backgroundImage: `url('/images/backgrounds/jamback1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {category}
                </span>
              ))}
            </div>
            
            {/* Main Image - Responsive and centered */}
            <div className="bg-gray-800/50 p-4 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 max-w-3xl mx-auto">
              <div className="relative mx-auto" style={{ maxWidth: '600px' }}>
                <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                  <Image 
                    src="/jamlabel.png"
                    alt="Jam Label Display"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Project Overview - Even grid layout */}
          <section className="mb-16 sm:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback4.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h2 className="text-xl sm:text-2xl font-light mb-4">The Challenge</h2>
                <p className="text-base sm:text-lg text-gray-300">
                  Sathanee restaurant, known for their roast duck and exceptional homemade jams, needed product labels
                  for their retail line. Recognizing the opportunity to elevate their brand, I took the
                  initiative to expand the project beyond simple labels.
                </p>
              </div>
              
              <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback3.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h2 className="text-xl sm:text-2xl font-light mb-4">The Approach</h2>
                <p className="text-base sm:text-lg text-gray-300">
                  Through careful research and collaboration with the restaurant owners, we developed a design
                  that reflects both their artisanal approach and their unique island location.
                </p>
              </div>
            </div>
          </section>

          {/* Creative Elements - Balanced grid */}
          <section className="mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-4xl font-light mb-6 sm:mb-8">Creative Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h3 className="text-lg sm:text-xl font-medium mb-4">Modern Touch</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  Integrated modern functionality through a QR code linking to their Instagram while 
                  preserving the handcrafted feel.
                </p>
                <div className="aspect-square relative">
                  <Image 
                    src="/qrcode.png"
                    alt="QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h3 className="text-lg sm:text-xl font-medium mb-4">The Local Bird</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  Drawing inspiration from their local celebrity, I created a distinctive logo featuring 
                  the beloved island bird.
                </p>
                <div className="aspect-square relative">
                  <Image 
                    src="/jambird.png"
                    alt="Local Bird Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <h3 className="text-lg sm:text-xl font-medium mb-4">Simple & Organic</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  The hand-drawn character embodies their authentic approach, exemplified by the coffee 
                  stain patterns on each label.
                </p>
                <div className="aspect-square relative">
                  <Image 
                    src="/organicperson.png"
                    alt="Organic Person Sketch"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Final Product Section - Full width container */}
          <section className="mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-4xl font-light mb-6 sm:mb-8">The Final Product</h2>
            <div className="p-6 sm:p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm ring-1 ring-blue-400/20" style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/jamback2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="relative aspect-video w-full mb-6">
                <Image 
                  src="/mockupjam.png"
                  alt="Final Jam Jar Mockup"
                  fill
                  className="object-contain"
                />
                <div className="absolute right-0 top-0 w-1/4 h-full">
                  <Image
                    src="/jamjartree.png"
                    alt="Decorative Tree"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-300 relative z-10 max-w-3xl mx-auto">
                Creating a mockup allows us to visualize how the design will appear in the real world, 
                ensuring that every element works harmoniously on the curved surface of the jar.
              </p>
            </div>
          </section>

          {/* CTA - Centered with style-consistent hover */}
          <section className="text-center mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-4xl font-light mb-6">Want to see more?</h2>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg text-black font-bold border-2 border-black transition-all duration-300"
                style={{
                  backgroundImage: `url('/images/backgrounds/${isHovering ? 'jamback3.png' : 'jamback1.png'}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View More Projects
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}