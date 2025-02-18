import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/indexnavigation';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import BackgroundCurve from '@/components/backgroundcurve';

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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const searchElement = document.querySelector('.search-component');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = Projects.getSections();

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col text-white`}>
    <BackgroundCurve />
      <IndexNavigation />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
                  Hey, I'm Shmoo.
                </h1>
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    I believe in creating software that bridges cultural gaps and brings people together.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    Software that makes you feel connected - feel part of a world that is global in every sense of the word.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    Software that tells stories of different cultures and the people who shape them.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    I utilize figma and coding in conjunction with AI tools, all as
                    a means to create intuitive and user-friendly digital experiences
                    that speak to us as a people.
                  </p>
                </div>
              </div>

              {!isMobile && (
                <div className="w-64 flex-shrink-0 relative mt-16">
                  <Portrait />
                </div>
              )}
            </div>

            {isMobile && (
              <div className="w-full flex justify-center mb-16">
                <div className="w-64">
                  <Portrait />
                </div>
              </div>
            )}

            {/* Search Component */}
            <div className="mt-16 search-component">
              <SearchLogic sections={sections} activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}