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
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const JamJarsProject: React.FC = () => {
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
            {/* Background with shade */}
            <div className="absolute inset-0" style={{
              backgroundImage: `url('/images/backgrounds/jamback2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5)'
            }} />
            
            {/* Navigation content */}
            <div className="relative max-w-6xl mx-auto px-6">
              <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Left side - Logo and Back button */}
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

                {/* Middle - Name */}
                <div className="hidden md:block">
                  <span className="text-xl font-medium">Samuel Shmoo Bigus</span>
                </div>

                {/* Right side - Links */}
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
          {/* Hero Section */}
          <header className="mb-16">
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-5xl font-light mb-4 text-center text-white">
                Artisan food. Tasteful Design.
              </h1>
              <p className="text-xl text-gray-100 mb-8 text-center">
                A brand identity project for Sathanee restaurant
              </p>
              <div className="flex flex-wrap justify-center gap-4">
  {["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"].map((category, index) => (
    <span
      key={index}
      className="px-6 py-3 rounded-full text-xl text-black font-bold border-2 border-black"
      style={{
        backgroundImage: `url('/images/backgrounds/jamback1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {category}
    </span>
  ))}
</div>
            </div>

            <div className="flex justify-center">
              <div className="w-[800px] relative">
                <Image 
                  src="/jamlabel.png"
                  alt="Sathanee Jam Label Design"
                  width={800}
                  height={533}
                  className="object-contain"
                />
              </div>
            </div>
          </header>

          {/* Project Overview */}
          <section className="mb-16 space-y-8">
            {/* Project Goal */}
            <div className="bg-gray-800/70 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
              backgroundImage: `url('/images/backgrounds/jamback4.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              backgroundOpacity: '0.1'
            }}>
              <h2 className="text-2xl font-light mb-4">The Challenge</h2>
              <p className="text-xl text-gray-300">
                Sathanee restaurant, known for their roast duck and exceptional homemade jams, needed product labels
                for their retail line. Recognizing the opportunity to elevate their brand, I took the
                initiative to expand the project beyond simple labels. The challenge became creating
                a complete visual identity system that would authentically capture their artisanal
                approach and the unique character of their island location.
              </p>
            </div>

            {/* Project Solution */}
            <div className="bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
              backgroundImage: `url('/images/backgrounds/jamback3.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              backgroundOpacity: '.'
            }}>
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
          </section>

          {/* Design Elements */}
          <section className="mb-32">
            <h2 className="text-4xl font-light mb-8 text-light">Creative Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* QR Code Section */}
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
              }}>
                <h3 className="text-2xl font-light mb-4">Modern Touch</h3>
                <p className="text-xl text-gray-300 mb-6">
                  While maintaining the artisanal aesthetic, I integrated modern functionality 
                  through a QR code linking to their Instagram. This thoughtful addition enables 
                  customers to connect with the brand while preserving the handcrafted feel.
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

              {/* Local Bird Section */}
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
              }}>
                <h3 className="text-2xl font-light mb-4">The Local Bird</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Drawing inspiration from their local celebrity, I created a distinctive logo 
                  featuring the beloved island bird. This symbol perfectly bridges the restaurant's 
                  island heritage with their contemporary culinary offerings.
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

              {/* Simple & Organic Section */}
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
                backgroundImage: `url('/images/backgrounds/jamback2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
              }}>
                <h3 className="text-2xl font-light mb-4">Simple & Organic</h3>
                <p className="text-xl text-gray-300 mb-6">
                  To reflect Sathanee's use of homemade, natural ingredients, I designed a 
                  hand-drawn character that embodies their authentic, unapologetic approach. 
                  This is also exemplified by the coffee stain patterns on each of the labels.
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

          {/* Mockup Section */}
          <section className="mb-32">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20" style={{
              backgroundImage: `url('/images/backgrounds/jamback2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}>
              <h3 className="text-2xl font-light mb-6">The Final Product</h3>
              <div className="relative h-96 mb-6">
                <Image 
                  src="/mockupjam.png"
                  alt="Jam Jar Mockup"
                  fill
                  className="object-contain rounded-2xl"
                />
                <div className="absolute right-0 top-0 w-64 h-full">
                  <Image
                    src="/jamjartree.png"
                    alt="Decorative Tree"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                Creating a mockup allows us to visualize how the design will appear in the real 
                world, ensuring that every element - from the QR code to the illustrations - 
                works harmoniously on the curved surface of the jar. This attention to detail 
                helps maintain the artisanal quality that Sathanee's customers have come to expect, 
                while ensuring the design remains practical and appealing on the shelf.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16 space-y-8">
            <h2 className="text-4xl font-light text-white">Want to see more?</h2>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="px-6 py-3 rounded-full transition-all duration-300 border-2 border-black text-xl text-black font-bold"
                style={{
                  backgroundImage: `url('/images/backgrounds/${isHovering ? 'jamback3.png' : 'jamback1.png'}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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
};

export default JamJarsProject;