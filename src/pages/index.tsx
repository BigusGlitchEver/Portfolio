import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/indexnavigation';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import ExperienceSection from '@/components/ExperienceSection';
import { Book, Gamepad2, Globe, Brush, Coffee, Camera, Store, Code, Users, Zap } from 'lucide-react';

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
  const SHOW_EXPERIENCE = false;
  const SHOW_SEARCH = false;

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

  // Custom sections with reordered and added content
  const sections = [
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
      description: "Interactive experiences designed to engage and entertain",
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
          title: "Poly Plaza",
          description: "A sandbox game focused on property management and economic systems",
          image: "/polyplaza.png",
          categories: ["Game Design", "Quest Design", "Mechanics Design", "Low Code", "AI Utilization"],
          link: "/polyplaza"
        },
        {
          title: "Zine #4 & Snakes and Unions",
          description: "A reimagined Snakes & Ladders game exploring wealth inequality and collective action",
          image: "/zine.png",
          categories: ["Product Design", "Visual Design", "Research", "Game Design", "Publications", "Photo Editing"],
          link: "/zine"
        },
        {
          title: "Judaic Tarot Deck",
          description: "Complete deck design based on Jewish mysticism",
          image: "/judaictarot.png",
          categories: ["Product Design", "Visual Design", "Research", "Publications", "Photo Editing"],
          link: "/tarot"
        }
      ]
    },
    {
      title: "Project Management & Strategy",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      description: "Leading teams and managing complex projects across cultures",
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
        },
        {
          title: "Bigus Web Design",
          description: "Crafting digital experiences through component-based design and AI",
          image: "/BWDCover2.png",
          categories: ["Web Design", "UX/UI Design", "Coding", "AI Utilization", "Project Management"],
          link: "/biguswebdesign",
          imageStyle: "cover"
        }
      ]
    },
    {
      title: "Client Collaboration",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      description: "Working directly with clients to deliver solutions across cultures",
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
          title: "Zul's Highway Cafe",
          description: "Complete menu redesign and brand refresh",
          image: "/cafemenu.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/cafe"
        },
        {
          title: "Poetry Book Cover",
          description: "Cover design for local poet's anthology",
          image: "/yesican.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/yesican"
        },
        {
          title: "Sathanee Jam Labels",
          description: "Product label design for artisan restaurant",
          image: "/jamjar.png",
          categories: ["Product Design", "Visual Design", "Client Collaboration", "Photo Editing"],
          link: "/jam-jars"
        }
      ]
    },
    {
      title: "Digital Marketing & Branding",
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
    }
  ];

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
                  I am a producer who helps companies bring games and digital experiences to life across cultures.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                  I collaborate with designers, artists, and product owners to deliver intuitive, engaging products that meet business goals while resonating with users worldwide.
                  </p>
                  {/* Descriptions for the two key skills */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30">
                        <Zap className="w-5 h-5 text-blue-300" />
                        <span className="text-base">Game Design</span>
                      </div>
                      <div className="rounded-xl bg-gray-800/40 ring-1 ring-blue-400/20 p-4">
                      <h3 className="mb-2 text-lg font-medium text-blue-200">Game Design</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-200/90">
                        <li>Designing player-focused mechanics that feel intuitive and satisfying.</li>
                        <li>Crafting engaging quests and narratives that immerse players in the experience.</li>
                        <li>Optimizing user experience (UX) to ensure smooth, intuitive gameplay flows.</li>
                        <li>Analyzing player behavior through data to inform design improvements.</li>
                        <li>Rapid prototyping and iteration to refine gameplay and test ideas efficiently.</li>
                      </ul>
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30">
                        <Users className="w-5 h-5 text-emerald-300" />
                        <span className="text-base">Scrum Master</span>
                      </div>
                      <div className="rounded-xl bg-gray-800/40 ring-1 ring-emerald-400/20 p-4">
                      <h3 className="mb-2 text-lg font-medium text-emerald-200">Scrum Master</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-200/90">
                        <li>Facilitating Agile ceremonies such as stand-ups, sprint planning, and retrospectives.</li>
                        <li>Removing blockers and impediments to keep teams productive and focused.</li>
                        <li>Enhancing team collaboration and communication across cross-functional teams.</li>
                        <li>Managing backlogs and workflows to align priorities with business goals.</li>
                        <li>Coaching teams in Agile practices to drive continuous improvement and efficiency.</li>
                      </ul>
                      </div>
                    </div>
                  </div>
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

            {/* Experience Section (disabled via flag) */}
            {SHOW_EXPERIENCE && <ExperienceSection />}

            {/* Search Component (disabled via flag, but keep sections below) */}
            {SHOW_SEARCH ? (
              <div className="mt-16 search-component">
                <SearchLogic sections={sections} activeCategory={activeCategory} />
              </div>
            ) : (
              <div className="mt-16">
                <SearchLogic
                  sections={sections}
                  activeCategory={activeCategory}
                  hideSearchUI
                  hideSearchResults
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}