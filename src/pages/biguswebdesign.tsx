import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectNav from '../components/ProjectNav';
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

export default function BigusWebDesignShowcase() {
  const [currentPremade, setCurrentPremade] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const premadeImages = [
    '/Premade1.png',
    '/Premade2.png',
    '/Premade3.png'
  ];
  
  const componentImages = [
    '/Component1.png',
    '/Component2.png',
    '/Component3.png',
    '/Component4.png'
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextPremade = () => {
    setCurrentPremade((prev) => (prev + 1) % premadeImages.length);
  };

  const prevPremade = () => {
    setCurrentPremade((prev) => (prev - 1 + premadeImages.length) % premadeImages.length);
  };
  
  const nextComponent = () => {
    setCurrentComponent((prev) => (prev + 1) % componentImages.length);
  };

  const prevComponent = () => {
    setCurrentComponent((prev) => (prev - 1 + componentImages.length) % componentImages.length);
  };

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-slate-900 text-white`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-light mb-4 sm:mb-6 text-red-500">Bigus Web Design</h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-6 sm:mb-12">Crafting digital experiences through component-based design and AI</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-black/30 rounded-full ring-1 ring-indigo-400/20 backdrop-blur-sm">Web Design</span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-black/30 rounded-full ring-1 ring-indigo-400/20 backdrop-blur-sm">UX/UI Design</span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-black/30 rounded-full ring-1 ring-indigo-400/20 backdrop-blur-sm">Coding</span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-black/30 rounded-full ring-1 ring-indigo-400/20 backdrop-blur-sm">AI Utilization</span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-black/30 rounded-full ring-1 ring-indigo-400/20 backdrop-blur-sm">Project Management</span>
          </div>
          
          <div className="rounded-xl overflow-hidden">
            <Image 
              src="/BWDCover.png"
              alt="Bigus Web Design Cover"
              width={1920}
              height={1080}
              className="w-full object-cover"
            />
          </div>
        </header>

        {/* My Role Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-light mb-6">My Role in This Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-light mb-3">Component Creator & System Designer</h3>
              <p className="text-gray-300 mb-4">
                I created a massive library of reusable web components and design systems to enable rapid website development. By building this extensive component collection, I can now assemble custom websites in minutes rather than days.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-light mb-3">AI Implementation Specialist</h3>
              <p className="text-gray-300 mb-4">
                I leveraged AI to dramatically accelerate development, using it to generate component variations, optimize code, and create content. This AI-powered workflow allows me to deliver high-quality websites with unprecedented speed and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Component System */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-light mb-6">Component-Based System</h2>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6">
            <p className="text-gray-300 mb-6">
              I designed and built a comprehensive library of components that can be mixed and matched to create virtually any type of website. This modular approach allows me to rapidly assemble custom sites while maintaining consistent quality and design language.
            </p>
            
            <div className="relative aspect-video w-full">
              <Image 
                src={componentImages[currentComponent]}
                alt={`Component Example ${currentComponent + 1}`}
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevComponent}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Previous component"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextComponent}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Next component"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {componentImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentComponent === index ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Navigation systems</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Hero sections</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Feature displays</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Pricing tables</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Testimonial blocks</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-gray-300">• Contact forms</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Integration */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-light mb-6">AI-Powered Development</h2>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6">
            <p className="text-gray-300 mb-4">
              I revolutionized my development process by implementing AI at every stage. By compartmentalizing tasks and leveraging AI for code generation, I've created a system that allows me to build websites in a fraction of the time normally required.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-black/20 p-5 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-3">AI Code Generation</h3>
                <p className="text-gray-300">
                  I use AI to generate component variations, responsive layouts, and feature-specific code that I can quickly integrate into my projects. This approach means I'm not starting from scratch with each new element.
                </p>
              </div>
              
              <div className="bg-black/20 p-5 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-3">Smart Componentization</h3>
                <p className="text-gray-300">
                  I developed a system to break down website requirements into modular pieces that AI can help optimize. This allows me to assemble sites like building blocks, dramatically reducing development time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rapid Website Creation */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-light mb-6">Rapid Website Creation</h2>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6">
            <p className="text-gray-300 mb-6">
              By combining my component library with AI assistance, I can now create complete websites in minutes. Each of the examples below took less than 5 minutes to assemble since I could simply select and customize pre-built components from my library.
            </p>
            
            <div className="relative aspect-video w-full">
              <Image 
                src={premadeImages[currentPremade]}
                alt={`Premade Website Example ${currentPremade + 1}`}
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevPremade}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Previous website example"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextPremade}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                aria-label="Next website example"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {premadeImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentPremade === index ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-light mb-6">Development Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-light mb-3">1. Component Creation</h3>
              <p className="text-gray-300">
                I built a massive library of reusable components with AI assistance, ensuring each element was responsive, accessible, and visually cohesive.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-light mb-3">2. AI Integration</h3>
              <p className="text-gray-300">
                I developed systems to leverage AI for rapid component customization, code optimization, and content generation.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-light mb-3">3. Assembly System</h3>
              <p className="text-gray-300">
                I created a workflow that allows me to quickly select and customize components to build complete websites in minutes rather than days.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-light mb-6">Want to see more?</h2>
          <div className="flex justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg font-semibold transition-colors text-white"
            >
              View More Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}