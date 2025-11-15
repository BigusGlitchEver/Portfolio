import React from 'react';
import Image from "next/image";
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

export default function PolyPlazaProducerProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#171a21]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors">
              <Image src="/logo.png" alt="Portfolio Logo" width={32} height={32} style={{ width: "auto", height: "auto" }} />
              <span className="text-base sm:text-xl font-medium">Back to Portfolio</span>
            </a>
            <div className="hidden md:block text-2xl font-light text-white">Samuel Shmoo Bigus</div>
            <div className="flex gap-4 sm:gap-8">
              <a 
                href="https://www.linkedin.com/in/shmoogames" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
              >
                Email
              </a>
              <a 
                href="/cv" 
                className="text-sm sm:text-base text-[#dcdedf] hover:text-[#66c0f4] hover:underline transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-8 sm:mb-16">
          <div className="aspect-video w-full mb-6 sm:mb-8 relative bg-[#1b2838] rounded overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://video.fastly.steamstatic.com/store_trailers/257033315/movie480_vp9.webm?t=1735947222" type="video/webm" />
            </video>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Poly Plaza</h1>
          <div className="text-lg sm:text-xl text-[#66c0f4] mb-4 sm:mb-6">Game Producer</div>
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Production</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Project Management</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Analytics</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Business Development</span>
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">Post-Launch Support</span>
          </div>
        </header>

        {/* My Contributions */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">My Role & Contributions</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              As the Game Producer for Poly Plaza, I was responsible for overseeing the project's development lifecycle, managing milestones, and ensuring the product's success both during development and post-launch. Here are my key contributions:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Set milemarkers and monitored progress throughout the development cycle to ensure timely delivery</li>
              <li>Worked with potential investors to secure funding and communicate the project's vision and potential</li>
              <li>Maintained product cohesion post-launch, ensuring consistent quality and player experience</li>
              <li>Made data-driven decisions based on current analytics and product development needs to optimize game performance</li>
            </ul>
          </div>
        </section>

        {/* Production Management */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Production Management</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              I established and managed the production framework for Poly Plaza:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Created and tracked milestone markers to ensure development stayed on schedule</li>
              <li>Monitored team progress and identified potential blockers early to maintain project momentum</li>
              <li>Coordinated cross-functional communication between design, development, and business teams</li>
              <li>Balanced scope, timeline, and quality to deliver a polished product</li>
            </ul>
          </div>
        </section>

        {/* Business Development */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Business Development & Investor Relations</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              I worked closely with potential investors to support the project's growth:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Presented the project vision and development roadmap to potential investors</li>
              <li>Communicated project milestones, progress, and business potential effectively</li>
              <li>Collaborated with stakeholders to align development goals with business objectives</li>
            </ul>
          </div>
        </section>

        {/* Post-Launch Support */}
        <section className="mb-8 sm:mb-12 text-[#acb2b8]">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Post-Launch Product Management</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              After launch, I focused on maintaining product quality and making informed improvements:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Maintained product cohesion by ensuring consistent quality across all updates and features</li>
              <li>Analyzed player data and game analytics to identify areas for improvement</li>
              <li>Made strategic decisions based on analytics to enhance player experience and engagement</li>
              <li>Coordinated post-launch updates and feature development based on player feedback and data insights</li>
            </ul>
          </div>
        </section>

        {/* Steam Link */}
        <section>
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://store.steampowered.com/app/2716030/Poly_Plaza/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-[#FFFFFF] text-sm sm:text-base transition-colors"
            >
              View Game on Steam
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

