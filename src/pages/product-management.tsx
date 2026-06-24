import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import TabNav from '@/components/TabNav';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import { productManagementSection } from '@/data/portfolio';

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-jet-brains-mono", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ProductManagementPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col text-white`}>
      <BackgroundCurve />
      <TabNav />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-24">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <SearchLogic sections={[productManagementSection]} activeCategory={null} hideSearchUI hideSearchResults />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
