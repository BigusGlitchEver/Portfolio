'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  Home, Heart, MessageSquare, ImageIcon, Bookmark, 
  ChevronDown, 
  Gamepad2, Building2, Coffee, Sparkles, BookOpen, Users,
  LayoutGrid, Wind, Book, Store
} from 'lucide-react';

const InstagramPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-[system-ui]">
      {/* Instagram Navigation Bar */}
      <div className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="font-serif text-2xl italic" style={{ fontFamily: "'Dancing Script', cursive" }}>samuel shmoo bigus</h1>
        </div>
        <nav className="space-y-4">
          {[
            { icon: <Home className="w-6 h-6" />, label: "Back to Portfolio", href: "/" },
            { icon: <ImageIcon className="w-6 h-6" />, label: "Art Pocketbook", href: "/art-pocketbook" },
            { icon: <Gamepad2 className="w-6 h-6" />, label: "Broll", href: "/broll" },
            { icon: <Building2 className="w-6 h-6" />, label: "Poly Plaza", href: "/polyplaza" },
            { icon: <Coffee className="w-6 h-6" />, label: "Cafe Menu", href: "/cafe" },
            { icon: <Sparkles className="w-6 h-6" />, label: "Tarot Deck", href: "/tarot" },
            { icon: <BookOpen className="w-6 h-6" />, label: "Zine", href: "/zine" },
            { icon: <Users className="w-6 h-6" />, label: "Make a Friend", href: "/makeafriend" },
            { icon: <LayoutGrid className="w-6 h-6" />, label: "Next SaaS", href: "/nextsaas" },
            { icon: <Heart className="w-6 h-6" />, label: "Save Yalla", href: "/saveyalla" },
            { icon: <Wind className="w-6 h-6" />, label: "Wild Breeze", href: "/wildbreeze" },
            { icon: <Book className="w-6 h-6" />, label: "Yes I Can", href: "/yesican" },
            { icon: <Store className="w-6 h-6" />, label: "Jam Labels", href: "/jam-jars" },
          ].map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg"
            >
              {item.icon}
              <span className="text-base">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Instagram-style Header */}
        <header className="bg-white">
          <div className="max-w-3xl mx-auto border-b border-gray-200">
            <div className="px-4 py-4">
              <div className="flex justify-between items-center">
                {/* Profile Info */}
                <div className="flex items-center gap-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <Image
                      src="/blacklogo.png"
                      alt="Profile"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-xl font-bold">Marketing & Brand Awareness</h2>
                      <Link 
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      >
                        <ChevronDown className="w-4 h-4 rotate-90" />
                        Back to Portfolio
                      </Link>
                    </div>
                    <div className="flex gap-8 mt-4">
                      <div className="text-center">
                        <span className="font-semibold">847</span>
                        <Link href="mailto:samuelshmoobigus@yahoo.com" className="block text-sm">Email</Link>
                      </div>
                      <div className="text-center">
                        <span className="font-semibold">1.2k</span>
                        <Link href="https://www.linkedin.com/in/samuel-bigus-60b948217" className="block text-sm">LinkedIn</Link>
                      </div>
                      <div className="text-center">
                        <span className="font-semibold">326</span>
                        <Link href="/cv" className="block text-sm">CV</Link>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2">
                        <span className="font-semibold">Marketing Professional</span>
                      </div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>Creating visual stories that connect 🎨</p>
                        <p>Brand strategist & digital marketing specialist</p>
                        <p>Transforming ideas into engaging campaigns ✨</p>
                        <p>Let's collaborate! 📧</p>
                      </div>
                      <div className="flex gap-8 mt-4">
                        <span className="font-medium text-gray-800">Visual Design</span>
                        <span className="font-medium text-gray-800">UX/UI Design</span>
                        <span className="font-medium text-gray-800">Photo Editing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Stories/Highlights */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex gap-8">
              <Link href="#sam-teacher" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 p-0.5 mb-1">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src="/teacherlogo.png"
                      alt="Sam the Teacher"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs">Teacher</span>
              </Link>
              <Link href="#big-art" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 p-0.5 mb-1">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src="/bigart.png"
                      alt="Big Art"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs">Big Art</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-6 py-8">
          {/* Visual Elements */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-xl font-medium mb-2">Visual Branding</h3>
            <p className="text-gray-700">
              Branding is crucial for a business's success. Branding is what makes others trust or distrust their product, and how they feel about it as a whole. Carefully chosen graphics and typography create a cohesive image that portrays an intended message, which will be different for any given business. It is the job of the designer to take their intended ideas and turn them into actuable messaging. <span className="text-blue-500">#MyJob</span>
            </p>
          </div>

          {/* Sam the Teacher Section */}
          <section id="sam-teacher" className="mb-32">
            <h2 className="text-4xl font-light mb-8">Sam the Teacher</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-12">
                <div className="w-1/2">
                  <Image 
                    src="/teacherlogo.png"
                    alt="Logo Design Process"
                    width={800}
                    height={800}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Goals</h3>
                    <p className="text-xl text-gray-700 mb-8">
                      As a teacher, there is a need for a brand that would tell everybody who they are 
                      and what they do - a friendly, professional and approachable person. An easy 
                      person to take lessons from regardless of age and level.
                    </p>
                    <div className="mt-8">
                      <h3 className="text-xl font-medium mb-4">Brand Elements</h3>
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-yellow-400 rounded-lg"></div>
                        <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
                        <p className="text-gray-700">Yellow for Optimism, Blue for Trust</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram-style Post */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <Image 
                  src="/teacherinsta.png"
                  alt="Teacher Instagram Layout"
                  width={800}
                  height={450}
                  className="w-full"
                />
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                      <button className="hover:text-gray-600">
                        <Heart className="w-6 h-6" />
                      </button>
                      <button className="hover:text-gray-600">
                        <MessageSquare className="w-6 h-6" />
                      </button>
                    </div>
                    <button className="hover:text-gray-600">
                      <Bookmark className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-gray-700">
                    In order to maintain a brand of professionalism and friendliness, I used pictures 
                    and videos at regular intervals to portray a sense of continuity throughout the 
                    profile, following the practices of other highly viewed professional pages <span className="text-blue-500">#ApproachableTeacher</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Big Art with Sam Section */}
          <section id="big-art" className="mb-32">
            <h2 className="text-4xl font-light mb-8">Big Art with Sam</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-12">
                <div className="w-1/2">
                  <Image 
                    src="/bigart.png"
                    alt="Big Art Logo"
                    width={800}
                    height={800}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Goals</h3>
                    <p className="text-xl text-gray-700 mb-8">
                    Artists open Instagram for various reasons: to showcase their work, gain popularity for sales, or appear professional for local art markets. For this artist, it was the latter.
                    </p>
                    <div className="mt-8">
                      <h3 className="text-xl font-medium mb-4">Brand Elements</h3>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                          <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                          <div className="w-12 h-12 bg-yellow-400 rounded-lg"></div>
                          <div className="w-12 h-12 bg-green-500 rounded-lg"></div>
                        </div>
                        <p className="text-gray-700">
                          Primary colors represent childhood and starting with the basics, 
                          while green serves as an accent color representing nature and creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram-style Post */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <Image 
                  src="/bigartdetails.png"
                  alt="Brand Details Overview"
                  width={800}
                  height={800}
                  className="w-full"
                />
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                      <button className="hover:text-gray-600">
                        <Heart className="w-6 h-6" />
                      </button>
                      <button className="hover:text-gray-600">
                        <MessageSquare className="w-6 h-6" />
                      </button>
                    </div>
                    <button className="hover:text-gray-600">
                      <Bookmark className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-gray-700">
                    <span className="text-blue-500">#BackgroundTheme</span> A mellow blue background creates a calm, professional atmosphere while maintaining visual interest<br /><br />
                    <span className="text-blue-500">#LogoPlacement</span> Strategic positioning of the fun, approachable logo enhances brand recognition<br /><br />
                    <span className="text-blue-500">#ArtistSignature</span> Hebrew-inspired signature adds a personal touch and cultural authenticity
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstagramPage;