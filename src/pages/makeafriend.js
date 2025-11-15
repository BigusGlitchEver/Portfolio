import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Globe, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function MakeAFriendProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="static w-full bg-maf-paper">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Back to Portfolio with Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors text-black font-bold"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src="/blacklogo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="whitespace-nowrap text-sm sm:text-base">Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-4 sm:gap-8">
              <a 
                href="https://www.linkedin.com/in/shmoogames" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black opacity-60 hover:opacity-100 transition-opacity text-sm sm:text-md font-bold"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="text-black opacity-60 hover:opacity-100 transition-opacity text-sm sm:text-md font-bold"
              >
                Email
              </a>
              <Link 
                href="/cv" 
                className="text-black opacity-60 hover:opacity-100 transition-opacity text-sm sm:text-md font-bold"
              >
                CV
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-24">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="w-48 sm:w-64">
            <Image 
              src="/maflogo.png"
              alt="Make a Friend Logo"
              width={300}
              height={100}
              className="w-full"
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="flex flex-col sm:flex-row text-3xl sm:text-5xl md:text-7xl font-gilroy-extrabold tracking-tight mb-6 items-center justify-center">
            <div 
              className="relative w-24 h-24 sm:w-32 sm:h-32 transform scale-x-[-1] sm:translate-x-20"
              style={{
                animation: '3.17475s ease-in-out 0s infinite normal none running float-float-tl7jj06tu'
              }}
            >
              <Image
                src="/mafyellow.png"
                alt="yellow smile"
                fill
                className="object-contain"
              />
            </div>
            <span className="max-w-full sm:max-w-[calc(80%-300px)] px-4 text-black">
              Making Social{' '}
              <span className="bg-yellow-400 rounded-full px-4 inline-block text-black">
                Fun
              </span>
            </span>
            <div 
              className="relative w-24 h-24 sm:w-32 sm:h-32 transform scale-x-[-1] sm:-translate-x-20"
              style={{
                animation: '5.27696s ease-in-out 0s infinite normal none running float-float-890nj5m80'
              }}
            >
              <Image
                src="/mafpurple.png"
                alt="purple smile"
                fill
                className="object-contain"
              />
            </div>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 max-w-3xl mx-auto font-poppins text-gray-800">
            Led product strategy and design for Make a Friend's social gaming platform, 
            focusing on creating meaningful connections through shared experiences.
          </p>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {[
              "Game Design",
              "Figma",
              "UX Research",
              "UX/UI Design",
              "Strategy",
              "Market Research",
              "Photo Editing",
              "Coding",
              "AI Utilization"
            ].map((category, index) => (
              <span 
                key={index}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white/80 rounded-full text-black border-2 border-yellow-400 text-xs sm:text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 lg:mb-24">
          {[
            {
              icon: <User className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
              title: "User Research",
              description: "Conducted extensive research to understand player needs and social gaming patterns",
              link: "#research"
            },
            {
              icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
              title: "Social Innovation",
              description: "Pioneered new ways for players to connect through collaborative gaming experiences",
              link: "#innovation"
            },
            {
              icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />,
              title: "Platform Design",
              description: "Created an intuitive platform that brings players together naturally",
              link: "#platform"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-6 sm:p-8 group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-2xl bg-gray-100">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-poppins mb-6 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden px-6 sm:px-12 py-8 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,230,50,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(108,67,255,0.1),transparent_50%)]" />
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-flex items-center justify-center px-4 py-1 sm:px-6 sm:py-2 text-base sm:text-lg font-bold text-black bg-yellow-300 rounded-full mb-4 sm:mb-6">
                <Image
                  src="/mafblack.png"
                  alt="Make a Friend Logo"
                  width={40}
                  height={40}
                  className="mr-2 sm:mr-3"
                />
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Making Connections Through Play</h2>
              <p className="text-gray-400 mt-2 font-poppins text-sm sm:text-base">
                Creating meaningful social experiences through gaming
              </p>
            </div>

            <div className="aspect-video relative mb-8">
              <Image
                src="/makeafriend.png"
                alt="Make a Friend Platform"
                fill
                className="rounded-xl object-cover object-center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Creating a platform that facilitates genuine social connections 
                  through shared gaming experiences, while maintaining user engagement 
                  and safety.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Developed an innovative social gaming platform that naturally brings 
                  players together through collaborative gameplay and shared interests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}