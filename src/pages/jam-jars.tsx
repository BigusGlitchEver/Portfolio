import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Poppins, JetBrains_Mono } from "next/font/google";

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

export default function JamJarsProject() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen text-gray-100 relative`}>
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(17, 24, 39, 0.4), rgba(17, 24, 39, 0.4)),
          url('/images/backgrounds/jamback1.png'),
          url('/images/backgrounds/jamback2.png'),
          url('/images/backgrounds/jamback3.png')
        `,
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0, 200px 200px, 400px 400px'
      }} />
      
      <div className="relative z-10">
        <nav className="fixed w-full top-0 z-50">
          <div className="relative">
            <div className="absolute inset-0" style={{
              backgroundImage: `url('/images/backgrounds/jamback2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5)'
            }} />
            
            <div className="relative max-w-6xl mx-auto px-6">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link 
                  href="/" 
                  className="text-xl font-medium hover:text-blue-400 transition-colors flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full">
                    <Image
                      src="/logo.png"
                      alt="Samuel Bigus Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                      priority
                    />
                  </div>
                  <span>Back to Portfolio</span>
                </Link>

                <div className="hidden md:block">
                  <span className="text-xl font-medium">Samuel Shmoo Bigus</span>
                </div>

                <div className="flex gap-8">
                  <a 
                    href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:samuelshmoobigus@yahoo.com" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    Email
                  </a>
                  <Link 
                    href="/cv" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-center text-white">
              Artisan food. Tasteful Design.
            </h1>
            <p className="text-xl text-gray-100 mb-8 text-center">
              A brand identity project for Sathanee restaurant
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"].map((category, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full text-xl text-black font-bold border-2 border-black"
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

            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-sm ring-1 ring-blue-400/20 mx-auto" style={{ width: 'fit-content' }}>
              <div className="relative rounded-3xl overflow-hidden mx-auto" style={{ width: '600px' }}>
                <Image 
                  src="/jamlabel.png"
                  alt="Jam Label Display"
                  width={1500}
                  height={1800}
                  className="w-full h-auto rounded-3xl"
                  priority
                />
              </div>
            </div>
          </header>

          <section className="mb-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-900/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <h2 className="text-2xl font-light mb-4">The Challenge</h2>
                <p className="text-xl text-gray-300">
                  Sathanee restaurant, known for their roast duck and exceptional homemade jams, needed product labels
                  for their retail line. Recognizing the opportunity to elevate their brand, I took the
                  initiative to expand the project beyond simple labels. The challenge became creating
                  a complete visual identity system that would authentically capture their artisanal
                  approach and the unique character of their island location.
                </p>
              </div>
              
              <div className="bg-amber-900/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
                <h2 className="text-2xl font-light mb-4">The Approach</h2>
                <p className="text-xl text-gray-300">
                  Found on a quaint island in Thailand and filled with homemade décor and the aroma 
                  of fresh cuisine, every aspect of the Sathanee restaurant embodies their unique vision. 
                  Their food matches their art - original and tasteful, yet with a familiar comfort 
                  that makes it feel like home. This essence became the foundation for developing 
                  their visual identity, resulting in a versatile design system featuring a distinctive 
                  logo inspired by local wildlife and three color-coordinated labels that maintain 
                  visual consistency while distinguishing between jam varieties.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <h2 className="text-4xl font-light mb-8">Creative Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-2xl ring-1 ring-blue-400/20">
                <h3 className="text-2xl font-light mb-4">Modern Touch</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Integrated modern functionality through a QR code linking to their Instagram while 
                  preserving the handcrafted feel.
                </p>
                <div className="h-64 flex items-center justify-center">
                  <Image 
                    src="/qrcode.png"
                    alt="QR Code"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl ring-1 ring-blue-400/20">
                <h3 className="text-2xl font-light mb-4">The Local Bird</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Drawing inspiration from their local celebrity, I created a distinctive logo featuring 
                  the beloved island bird.
                </p>
                <div className="h-64 flex items-center justify-center">
                  <Image 
                    src="/jambird.png"
                    alt="Local Bird Illustration"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl ring-1 ring-blue-400/20">
                <h3 className="text-2xl font-light mb-4">Simple & Organic</h3>
                <p className="text-xl text-gray-300 mb-6">
                  The hand-drawn character embodies their authentic approach, exemplified by the coffee 
                  stain patterns on each label.
                </p>
                <div className="h-64 flex items-center justify-center">
                  <Image 
                    src="/organicperson.png"
                    alt="Organic Person Sketch"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <h2 className="text-4xl font-light mb-8">Product Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="h-64 relative">
                <Image 
                  src="/jamjar1.png"
                  alt="Jam Jar Design 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-64 relative">
                <Image 
                  src="/jamjar2.png"
                  alt="Jam Jar Design 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-64 relative">
                <Image 
                  src="/jamjar3.png"
                  alt="Jam Jar Design 3"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section className="text-center mt-16 space-y-8">
            <h2 className="text-4xl font-light">Want to see more?</h2>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="px-6 py-3 rounded-full transition-all duration-300 border-2 border-black text-xl text-black font-bold"
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
      </div>
    </div>
  );
}
