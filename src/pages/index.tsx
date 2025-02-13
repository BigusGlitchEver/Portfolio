import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/IndexNavigation';
import SearchLogic from '@/components/SearchLogic';
import { Book, Gamepad2, Globe, Brush, PenTool, Coffee, Camera, Store } from 'lucide-react';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const searchElement = document.querySelector('.search-component');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: "Publications",
      icon: <Book className="w-8 h-8 text-blue-400" />,
      description: "Creative works exploring spirituality, social commentary, and cultural narratives",
      projects: [
        {
          title: "Judaic Tarot Deck",
          description: "Complete deck design based on Jewish mysticism",
          image: "/judaictarot.png",
          categories: ["Product Design", "Visual Design", "Research", "Publications", "Photo Editing"],
          link: "/tarot"
        },
        {
          title: "Zine #4 & Snakes and Unions",
          description: "A reimagined Snakes & Ladders game exploring wealth inequality and collective action",
          image: "/zine.png",
          categories: ["Product Design", "Visual Design", "Research", "Game Design", "Publications", "Photo Editing"],
          link: "/zine"
        }
      ]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
      description: "Interactive experiences designed to engage and entertain",
      projects: [
        {
          title: "Poly Plaza",
          description: "A sandbox game focused on property management and economic systems",
          image: "/polyplaza.png",
          categories: ["Game Design", "Quest Design", "Mechanics Design", "Low Code", "AI Utilization"],
          link: "/polyplaza"
        },
        {
          title: "Broll",
          description: "3D ragdoll-based platformer with innovative physics mechanics",
          image: "/broll.png",
          categories: ["Game Design", "Level Design"],
          link: "/broll"
        }
      ]
    },
    {
      title: "Phone Apps & Marketing",
      icon: <Brush className="w-8 h-8 text-blue-400" />,
      description: "Digital experiences crafted to solve real-world problems and push creative boundaries",
      projects: [
        {
          title: "Art Pocketbook",
          description: "A comprehensive platform helping artists understand their sales data and market presence while reducing stress",
          image: "/hiprototype.png",
          categories: ["Figma", "UX/UI Design", "Research", "Web Design"],
          link: "/art-pocketbook",
          buttons: [
            {
              label: "Hi-Fidelity Prototype",
              url: "#prototype"
            },
            {
              label: "View the Process",
              url: "/art-pocketbook"
            }
          ]
        },
        {
          title: "Instagram Marketing and Brand Awareness",
          description: "Educational platform development and branding",
          image: "/samtheteacher.png",
          categories: ["Visual Design", "UX/UI Design", "Photo Editing"],
          link: "/instagram"
        }
      ]
    },
    {
      title: "Poland",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      description: "Innovative projects focused on connection and digital solutions",
      projects: [
        {
          title: "Make a Friend",
          description: "Social platform combining chat functionality with collaborative game creation",
          image: "/makeafriend.png",
          categories: ["Game Design", "Figma", "UX Research", "UX/UI Design", "Strategy", "Market Research", "Web Design", "Photo Editing", "Coding", "AI Utilization"],
          link: "/makeafriend",
          imageStyle: "contain"
        },
        {
          title: "Next SaaS",
          description: "Website development and monitoring solutions for businesses",
          image: "/nextsaaslogo.png",
          categories: ["Business Strategy", "Figma", "UX/UI Design", "Research", "Project Management", "Web Design", "Coding", "AI Utilization"],
          link: "/nextsaas",
          imageStyle: "contain"
        }
      ]
    },
    {
      title: "Sri Lanka",
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      description: "Collaborations focused on education and community empowerment in South Asia",
      projects: [
        {
          title: "Save Yalla",
          description: "Video production and fundraising campaign for educational resources",
          image: "/saveyalla.png",
          categories: ["Video Production", "Client Collaboration", "Interview", "Marketing"],
          link: "/saveyalla"
        },
        {
          title: "Wild Breeze Infomercial",
          description: "Commercial production for a boutique bungalow resort",
          image: "/wildbreeze.png",
          categories: ["Video Production", "Narration", "Client Collaboration"],
          link: "/wildbreeze"
        },
        {
          title: "Poetry Book Cover",
          description: "Cover design for local poet's anthology",
          image: "/yesican.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/yesican"
        }
      ]
    },
    {
      title: "Malaysia",
      icon: <Coffee className="w-8 h-8 text-blue-400" />,
      description: "Brand and visual identity projects in Southeast Asia's dynamic food scene",
      projects: [
        {
          title: "Zul's Highway Cafe",
          description: "Complete menu redesign and brand refresh",
          image: "/cafemenu.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/cafe"
        }
      ]
    },
    {
      title: "Thailand",
      icon: <Store className="w-8 h-8 text-blue-400" />,
      description: "Product design work for artisanal food producers",
      projects: [
        {
          title: "Sathanee Jam Labels",
          description: "Product label design for artisan restaurant",
          image: "/jamjar.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/jam-jars"
        }
      ]
    }
  ];

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-gray-900 text-white`}>
      <IndexNavigation />

      <div className={`max-w-6xl mx-auto px-6 pt-32 pb-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-start gap-8">
          <div className="space-y-6 flex-1">
            <h1 className="text-4xl sm:text-5xl font-light">Hey, I'm Shmoo.</h1>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-light">
                I believe in creating software that bridges cultural gaps and brings people together.
              </p>
              <p className="text-2xl sm:text-3xl font-light">
                Software that makes you feel connected - feel part of a world that is global in every sense of the word.
              </p>
              <p className="text-2xl sm:text-3xl font-light">
                Software that tells stories of different cultures and the people who shape them.
              </p>
              <p className="text-2xl sm:text-3xl font-light">
                I utilize figma and coding in conjunction with AI tools, all as
                 a means to create intuitive and user-friendly digital experiences
                 that speak to us as a people.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Portrait />
          </div>
        </div>

        <div className="mt-16 search-component">
          <SearchLogic sections={sections} activeCategory={activeCategory} />
        </div>

        <div className="mt-32">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-32">
              <div className="space-y-4 mb-16">
                <div className="flex items-center gap-4">
                  {section.icon}
                  <h2 className="text-6xl font-light">{section.title}</h2>
                </div>
                <p className="text-xl text-gray-400">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {section.projects.map((project, index) => (
                  <div key={index} className="space-y-4 group">
                    <Link href={project.link}>
                      <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative cursor-pointer 
                                  ring-2 ring-blue-500/50 transition-all duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`transition-all duration-300 group-hover:scale-105 object-${project.imageStyle || 'cover'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>

                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category, catIndex) => (
                        <span 
                          key={catIndex}
                          onClick={() => handleCategoryClick(category)}
                          className="text-sm text-blue-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {category}
                          {catIndex < project.categories.length - 1 && (
                            <span className="ml-2 text-gray-400">•</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Link href={project.link}>
                        <h3 className="text-2xl font-light hover:text-blue-400 transition-colors cursor-pointer">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 text-lg">{project.description}</p>
                      {project.buttons && (
                        <div className="flex gap-4 mt-4">
                          {project.buttons.map((button, idx) => (
                            <Link
                              key={idx}
                              href={button.url}
                              className="px-4 py-2 text-sm rounded-full border border-gray-600 hover:bg-gray-800 transition-colors"
                            >
                              {button.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
