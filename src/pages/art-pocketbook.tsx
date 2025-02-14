import React from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import { AlertCircle, Brain, Search, Clock, Target, BarChart, Palette, Coffee, Music, Camera } from 'lucide-react';
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-20 overflow-x-hidden">
        {/* Hero Section - Preserved desktop styling with mobile adjustments */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-light mb-6">Art Pocketbook</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">A Sales Analytics Platform Designed for Artists</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm text-sm md:text-base">Figma</span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm text-sm md:text-base">UX/UI Design</span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-800/50 rounded-full ring-1 ring-blue-400/20 backdrop-blur-sm text-sm md:text-base">Research</span>
          </div>
        </header>

        {/* Problem and Goal Section - Preserved desktop styling */}
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

        {/* Process Framework Section - Preserved desktop styling */}
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
          </p>
          <h2 className="text-4xl font-light mt-16 mb-8 text-center">Research - Define - Ideate via Prototypes and Testing</h2>
        </section>

        {/* Research Phase - Redesigned questions section for both mobile and desktop */}
        <section className="mb-32">
          <h2 className="text-4xl font-light mb-8">Research</h2>
          
          {/* Survey Questions & Insights - New documentation style */}
          <div className="space-y-12 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-8">Research Questions & Insights</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl text-blue-400 mb-4">Time Spent on Sales Review</h4>
                  <p className="text-gray-300 mb-2"><strong>Question:</strong> How much time do you use on reviewing sales?</p>
                  <p className="text-gray-300 mb-2"><strong>Findings:</strong> Ranging from 0-2 hours, usually around 30 minutes a week</p>
                  <p className="text-gray-300"><strong>Insights:</strong> Even those who feel like they're not good enough to be a great entrepreneur want to know how they're doing with sales. Art Pocketbook would fill this need without their concerted efforts.</p>
                </div>

                <div>
                  <h4 className="text-xl text-blue-400 mb-4">Target Audience Understanding</h4>
                  <p className="text-gray-300 mb-2"><strong>Question:</strong> Do you have a target audience and do you think you reach them?</p>
                  <p className="text-gray-300 mb-2"><strong>Findings:</strong> Split yes and no</p>
                  <p className="text-gray-300"><strong>Insights:</strong> Not having a target audience is akin to not having a plan of action. As an artist it is hard to conceptualize the need to earn money capitalistically, but only by doing so can we know how to direct one's creative output.</p>
                </div>

                <div>
                  <h4 className="text-xl text-blue-400 mb-4">Previous App Experience</h4>
                  <p className="text-gray-300 mb-2"><strong>Question:</strong> Have you used an app like this before and did it help?</p>
                  <p className="text-gray-300 mb-2"><strong>Findings:</strong> Some use sites like Etsy, but mostly No</p>
                  <p className="text-gray-300"><strong>Insights:</strong> The sites that artists already use are those that also can facilitate the sales themselves. This shows that 'sales reviews' are often simply a happy byproduct of a necessary sales site.</p>
                </div>

                <div>
                  <h4 className="text-xl text-blue-400 mb-4">Desired Insights</h4>
                  <p className="text-gray-300 mb-2"><strong>Question:</strong> What would you want to learn from monitoring your sales?</p>
                  <p className="text-gray-300 mb-2"><strong>Findings:</strong> What are my running totals? What is selling well right now? What did I sell this month?</p>
                  <p className="text-gray-300"><strong>Insights:</strong> The same artists that claim they do not care who their target audience is also declare they want to know very specific things about their sales. This shows there is a large audience for a sales application designed for the disenfranchised artists.</p>
                </div>

                <div>
                  <h4 className="text-xl text-blue-400 mb-4">Emotional Response</h4>
                  <p className="text-gray-300 mb-2"><strong>Question:</strong> How do you feel when confronted with the issue of reviewing your sales?</p>
                  <p className="text-gray-300 mb-2"><strong>Findings:</strong> Stress. Stress. Stress.</p>
                  <p className="text-gray-300"><strong>Insights:</strong> It doesn't matter where an artist is in their journey, this is the factor that all can agree on. The goal of Art Pocketbook is to take away the stress and anxiety in order to help them focus on their own creative works.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Survey Findings */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 mb-8">
            <h3 className="text-2xl font-light mb-6">Key Survey Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Time Management</h4>
                  <p className="text-gray-300">Artists spend 0-2 hours weekly reviewing sales, typically around 30 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Audience Targeting</h4>
                  <p className="text-gray-300">Split response on understanding and reaching target audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <BarChart className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Sales Analysis Needs</h4>
                  <p className="text-gray-300">Artists want to track running totals, current trends, and monthly performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Current Solutions</h4>
                  <p className="text-gray-300">Most artists rely on basic platform analytics from sales sites like Etsy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Pain Points - Preserved desktop styling */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
            <h3 className="text-2xl font-light mb-8">Critical Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Stress</h4>
                <p className="text-gray-400">Initial overwhelm prevents engagement with analytics tools</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <Brain className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Confusion</h4>
                <p className="text-gray-400">Difficulty interpreting and applying data insights</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <Search className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl text-red-400 mb-2">Narrow Scope</h4>
                <p className="text-gray-400">Lack of cross-platform integration complicates analysis</p>
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
          <h2 className="text-4xl font-light mb-8">User Personas</h2>
          
          <div className="space-y-16">
            {/* Sammy Sosa */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-blue-400">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-2xl">Sammy Sosa</h3>
              </div>
              
              <div className="pl-12">
                <p className="text-gray-300">Age 30 • Kansas City</p>
                <p className="text-gray-300">Occupation: Aspiring Artist</p>
                <p className="text-gray-300 italic mb-6">"If you don't try you can't succeed"</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-blue-400 mb-4">Goals</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Be able to know what target audience to create marketing which appeals to them</li>
                      <li>• Know how to reach them</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-red-400 mb-4">Frustrations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Doesn't know where to start</li>
                      <li>• Doesn't know how they would find their target audience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Elma Belle */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-blue-400">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-2xl">Elma Belle</h3>
              </div>
              
              <div className="pl-12">
                <p className="text-gray-300">Age 19 • Kansas City South</p>
                <p className="text-gray-300">Education: Art School</p>
                <p className="text-gray-300">Occupation: Artist</p>
                <p className="text-gray-300 italic mb-6">"Change your place, change your luck"</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-blue-400 mb-4">Goals</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Work less</li>
                      <li>• Stress less</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-red-400 mb-4">Frustrations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Sales aren't good</li>
                      <li>• Sometimes she can't work and can't travel as much</li>
                      <li>• Doesn't know technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Michael Monster */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-blue-400">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-2xl">Michael Monster</h3>
              </div>
              
              <div className="pl-12">
                <p className="text-gray-300">Age 35 • Lawrence, Kansas</p>
                <p className="text-gray-300">Education: BA</p>
                <p className="text-gray-300">Occupation: Artist</p>
                <p className="text-gray-300 italic mb-6">"Is it a passion? Then do it"</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-blue-400 mb-4">Goals</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Be able to focus his work for a greater return</li>
                      <li>• Find time to rest during the day</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-red-400 mb-4">Frustrations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Spends too much time creating to have time for proper analysis, too complicated!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Maggy Medwin */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-blue-400">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl">Maggy Medwin</h3>
              </div>
              
              <div className="pl-12">
                <p className="text-gray-300">Age 44 • Overland Park</p>
                <p className="text-gray-300">Education: Highschool</p>
                <p className="text-gray-300">Occupation: Manager</p>
                <p className="text-gray-300 italic mb-6">"It's about time"</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-blue-400 mb-4">Goals</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Share her art</li>
                      <li>• Feel secure about it</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-red-400 mb-4">Frustrations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Not familiar with technology in general</li>
                      <li>• Wants to be able to get her art out and into the world</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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