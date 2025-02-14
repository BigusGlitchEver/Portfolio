import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import { AlertCircle, Brain, Search, Clock, Target, BarChart } from 'lucide-react';
import ProjectNav from '../components/ProjectNav';
import Image from 'next/image';
import UserPersonas from '../components/UserPersonas';
import MarketAnalysis from '../components/MarketAnalysis';
import ABTesting from '../components/ABTesting';
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

export default function ArtPocketbookProject() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-gray-100`}>
      <ProjectNav />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-light mb-6">Art Pocketbook</h1>
          <p className="text-2xl text-gray-300 mb-8">A Sales Analytics Platform Designed for Artists</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Figma</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">UX/UI Design</span>
            <span className="px-4 py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm">Research</span>
          </div>
        </header>

        {/* Problem and Goal Statement */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400">
              <h2 className="text-2xl font-light text-blue-400 mb-6">The Problem</h2>
              <p className="text-xl text-gray-300 mb-6">
                "_____ is an artist that needs to understand their sales in relation to the market better because _____ wants to sell more art."
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>• Not knowing who the sales audience is</li>
                <li>• Not knowing what to create and when</li>
                <li>• Not knowing what worked and what didn't</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400">
              <h2 className="text-2xl font-light text-blue-400 mb-6">The Goal</h2>
              <p className="text-xl text-gray-300">
                Understand what an artist needs in order to monitor sales in a productive manner as well as who and why the buyer purchases an artist's work so the artist can focus more on their art and less on their money.
              </p>
            </div>
          </div>
        </section>

        {/* Process Framework with Side-by-Side Prototypes */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Design Process</h2>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="h-[600px] relative">
              <Image 
                src="/lowprototype.png" 
                alt="Low Fidelity Prototype" 
                fill
                className="object-contain"
              />
            </div>
            <div className="h-[600px] relative">
              <Image 
                src="/hiprototype.png" 
                alt="High Fidelity Prototype" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-300">
            Following a structured UX design process to ensure every decision is grounded in research and validated 
            through testing is key to making a product that best fits its users, therefore will best suit its stake holders
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="text-4xl font-light mb-8 text-center">Research - Define - Ideate via Prototypes and Testing</h2>
          </p>
        </section>

        {/* Research Phase */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Research</h2>
          
          {/* Survey Questions & Insights */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 mb-8">
            <h3 className="text-2xl font-light mb-6">Research Questions & Insights</h3>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-xl text-blue-400">How much time do you use on reviewing sales?</h4>
                <p className="text-gray-300"><span className="font-medium">Findings:</span> Ranging from 0-2 hours, usually around 30 minutes a week</p>
                <p className="text-gray-300"><span className="font-medium">Insights:</span> Even those who feel like they're not good enough to be a great entrepreneur want to know how they're doing with sales. Art Pocketbook would fill this need without their concerted efforts.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl text-blue-400">Do you have a target audience and do you think you reach them?</h4>
                <p className="text-gray-300"><span className="font-medium">Findings:</span> Split yes and no</p>
                <p className="text-gray-300"><span className="font-medium">Insights:</span> Not having a target audience is akin to not having a plan of action. As an artist it is hard to conceptualize the need to earn money capitalistically, but only by doing so can we know how to direct one's creative output.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl text-blue-400">Have you used an app like this before and did it help?</h4>
                <p className="text-gray-300"><span className="font-medium">Findings:</span> Some use sites like Etsy, but mostly No</p>
                <p className="text-gray-300"><span className="font-medium">Insights:</span> The sites that artists already use are those that also can facilitate the sales themselves. This shows that 'sales reviews' are often simply a happy byproduct of a necessary sales site.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl text-blue-400">What would you want to learn from monitoring your sales?</h4>
                <p className="text-gray-300"><span className="font-medium">Findings:</span> What are my running totals? What is selling well right now? What did I sell this month?</p>
                <p className="text-gray-300"><span className="font-medium">Insights:</span> The same artists that claim they do not care who their target audience is also declare they want to know very specific things about their sales. This shows there is a large audience for a sales application designed for the disenfranchised artists.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl text-blue-400">How do you feel when confronted with the issue of reviewing your sales?</h4>
                <p className="text-gray-300"><span className="font-medium">Findings:</span> Stress. Stress. Stress.</p>
                <p className="text-gray-300"><span className="font-medium">Insights:</span> It doesn't matter where an artist is in their journey, this is the factor that all can agree on. The goal of Art Pocketbook is to take away the stress and anxiety in order to help them focus on their own creative works.</p>
              </div>
            </div>
          </div>

          {/* Key Survey Findings */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 mb-8">
            <h3 className="text-2xl font-light mb-6">Key Survey Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Time Management</h4>
                  <p className="text-gray-300">Artists spend 0-2 hours weekly reviewing sales, typically around 30 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Audience Targeting</h4>
                  <p className="text-gray-300">Split response on understanding and reaching target audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-400">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Sales Analysis Needs</h4>
                  <p className="text-gray-300">Artists want to track running totals, current trends, and monthly performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Current Solutions</h4>
                  <p className="text-gray-300">Most artists rely on basic platform analytics from sales sites like Etsy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Pain Points */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <h3 className="text-2xl font-light mb-8">Critical Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Stress</h4>
                <p className="text-gray-300">Initial overwhelm prevents engagement with analytics tools</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <Brain className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Confusion</h4>
                <p className="text-gray-300">Difficulty interpreting and applying data insights</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <Search className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Narrow Scope</h4>
                <p className="text-gray-300">Lack of cross-platform integration complicates analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="mb-32">
  <MarketAnalysis />
</section>
          {/* User Analysis Section */}
<section className="mb-32">
  <UserPersonas />
</section>

        {/* A/B Testing Section */}
<section className="mb-32">
  <ABTesting />
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
      <Footer />
    </div>
  );
}