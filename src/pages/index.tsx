import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import TabNav from '@/components/TabNav';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import CVOptionsModal from '@/components/CVOptionsModal';
import { Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { producerHeadliners, gamesSection } from '@/data/portfolio';

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

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCVClick = () => setIsCVModalOpen(true);
  const handleViewBrowser = () => {
    window.open('/ShmooCV.pdf', '_blank');
    setIsCVModalOpen(false);
  };

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col text-white`}>
      <BackgroundCurve />
      <TabNav onCVClick={handleCVClick} />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            {/* Hero */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
                  Hey, I&apos;m Shmoo.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-light">
                  I help bring games to life, from concept to launch, across diverse teams and cultures.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-light">
                  Working with programmers, designers, artists and product owners, I turn ideas into experiences that engage players and meet business goals.
                </p>
              </div>
              <div className="w-64">
                <Portrait />
              </div>
            </div>

            {/* Headliner production credits */}
            <div className="mb-16">
              <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 flex items-center gap-3">
                Game Production <Gamepad2 className="w-8 h-8 text-blue-400" />
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Bringing games to life through cross team collaboration and strategic production at every step of the process.
              </p>

              <div className="flex flex-col gap-10">
                {producerHeadliners.map((project) => (
                  <div key={project.title} className="flex flex-col md:flex-row items-start gap-6">
                    {/* Image */}
                    <div className="w-full md:w-1/3 flex-shrink-0 relative">
                      {project.projectLink ? (
                        <Link href={project.projectLink}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`rounded-lg w-full aspect-video bg-gray-900 object-${project.imageStyle || 'cover'} cursor-pointer hover:opacity-90 transition`}
                          />
                        </Link>
                      ) : (
                        <a href={project.storeUrl} target="_blank" rel="noopener noreferrer">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`rounded-lg w-full aspect-video bg-gray-900 object-${project.imageStyle || 'cover'} cursor-pointer hover:opacity-90 transition`}
                          />
                        </a>
                      )}

                      {/* Store button overlay */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <a
                          href={project.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                        >
                          {project.storeLabel}
                        </a>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-2/3 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                      <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-sm text-blue-300">{project.studio}</span>
                      </div>
                      <p className="text-gray-200 mb-4">{project.description}</p>

                      {project.projectLink && (
                        <Link
                          href={project.projectLink}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap mb-4"
                        >
                          View Project
                        </Link>
                      )}

                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {project.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Games grid */}
            <div className="mt-24">
              <SearchLogic
                sections={[gamesSection]}
                activeCategory={null}
                hideSearchUI
                hideSearchResults
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CVOptionsModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        onViewBrowser={handleViewBrowser}
      />
    </div>
  );
}
