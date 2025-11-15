import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Target, Brain, Search, Users, Palette, BarChart, Code, Bot } from 'lucide-react';
import Footer from '@/components/Footer';

export default function NextSaaSProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Custom Navigation */}
      <nav className="static w-full px-4 py-3">
        <div className="mx-auto max-w-5xl transition-all duration-500 ease-in-out rounded-2xl md:bg-white/90 dark:bg-gray-900/90 shadow-lg shadow-black/[0.03] backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20">
          <div className="flex items-center justify-between h-14 px-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Image
                src="/blacklogo.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              Back to Portfolio
            </Link>
            
            {/* Middle - Name */}
            <div className="hidden md:block">
              <span className="text-2xl text-gray-600 dark:text-gray-300">Samuel Shmoo Bigus</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a 
                href="https://www.linkedin.com/in/shmoogames" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Email
              </a>
              <Link 
                href="/cv" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                CV
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20">
            <div className="absolute inset-0 rotate-0 animate-orbit">
              <div className="absolute top-0 left-1/2 w-96 h-96 bg-gray-500/20 dark:bg-gray-700/20 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 rotate-90 animate-orbit">
              <div className="absolute top-0 left-1/2 w-96 h-96 bg-gray-600/20 dark:bg-gray-800/20 rounded-full blur-3xl" />
            </div>
          </div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              filter: 'contrast(150%) brightness(150%)'
            }}
          />
        </div>

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl animate-in slide-in-from-bottom duration-1000">
                Next SaaS
              </h1>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl animate-in slide-in-from-bottom duration-1000">
                <span className="relative inline-block">
                  Design Lead
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-gray-200/40 dark:bg-gray-800/40 -rotate-2 transform-gpu translate-y-[2px] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom duration-1000 delay-150">
              {[
                {icon: <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "Business Strategy"},
                {icon: <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "Figma"},
                {icon: <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "UX/UI Design"},
                {icon: <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "Research"},
                {icon: <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "Project Management"},
                {icon: <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "Coding"},
                {icon: <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, label: "AI Utilization"}
              ].map((category, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl backdrop-blur-xl"
                >
                  {category.icon}
                  <span className="text-base font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    {category.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300">
              Led the strategic direction and visual design for Next SaaS, defining our market position
              and crafting a premium brand identity that resonates with enterprise clients.
            </p>
          </div>

          {/* Main Image */}
          <div className="mt-12 relative w-full bg-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
            <div className="relative aspect-[16/9]">
              <Image
                src="/nextsaaspage.png"
                alt="Next SaaS Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Key Contributions */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-full h-full" />,
                title: "Market Analysis",
                description: "Identified high-value enterprise clients as our primary target audience"
              },
              {
                icon: <Palette className="w-full h-full" />,
                title: "Brand Direction",
                description: "Developed sophisticated monochromatic design system for premium positioning"
              },
              {
                icon: <BarChart className="w-full h-full" />,
                title: "Growth Strategy",
                description: "Refined service offerings to align with enterprise client needs"
              }
            ].map((item, index) => (
              <div key={index} className="group relative rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02]">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-50 group-hover:opacity-100 transition-opacity blur-[1px]" />
                <div className="relative h-full rounded-[calc(1rem-1px)] bg-white dark:bg-gray-900 p-8">
                  <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-4 mb-6 ring-1 ring-gray-900/5 dark:ring-gray-100/5 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="w-6 h-6 text-indigo-600 dark:text-indigo-400">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Design Strategy */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Design Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="group relative rounded-2xl transition-all duration-500">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-50 blur-[1px]" />
                <div className="relative rounded-[calc(1rem-1px)] bg-white dark:bg-gray-900 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Visual Identity</h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                    <li>• Monochromatic palette for sophistication</li>
                    <li>• Clean typography with clear hierarchy</li>
                    <li>• Purposeful white space</li>
                    <li>• Glass-morphism effects</li>
                  </ul>
                </div>
              </div>

              <div className="group relative rounded-2xl transition-all duration-500">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-50 blur-[1px]" />
                <div className="relative rounded-[calc(1rem-1px)] bg-white dark:bg-gray-900 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Experience</h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                    <li>• Intuitive navigation patterns</li>
                    <li>• Responsive layouts</li>
                    <li>• Subtle animations</li>
                    <li>• Optimized for conversion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission Image */}
            <div className="relative w-full bg-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/nextsaasmission.png"
                  alt="Next SaaS Mission"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-24">
            <div className="group relative rounded-2xl transition-all duration-500">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-50 blur-[1px]" />
              <div className="relative rounded-[calc(1rem-1px)] bg-white dark:bg-gray-900 p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Impact</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  The refined brand strategy and premium design direction led to increased engagement 
                  from enterprise clients and improved conversion rates for high-value service packages. 
                  The clear market focus helped establish Next SaaS as a trusted partner for 
                  institutional-grade development projects.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </div>
  );
}