import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/indexnavigation';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import ExperienceSection from '@/components/ExperienceSection';
import CVOptionsModal from '@/components/CVOptionsModal';
import { Book, Gamepad2, Globe, Brush, Coffee, Camera, Store, Code, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

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
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const router = useRouter();
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

  const handleCVClick = () => {
    setIsCVModalOpen(true);
  };

  const handleViewBrowser = () => {
    router.push('/cv');
    setIsCVModalOpen(false);
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
          categories: ["Game Design", "UX Research", "Strategy", "Figma", "UX/UI Design", "Coding", "AI Utilization", "Market Research", "Web Design", "Photo Editing"],
          link: "/makeafriend",
          imageStyle: "contain",
          highlights: [
            "Guided a diverse team in building a social platform that makes connecting through play natural and rewarding."
          ]
        },
        {
          title: "Poly Plaza",
          description: "A sandbox game focused on property management and economic systems",
          image: "/polyplaza.png",
          categories: ["Game Design", "Quest Design", "Mechanics Design", "AI Utilization", "Low Code"],
          link: "/polyplaza",
          highlights: [
            "Designed complex economic systems for property management gameplay",
            "Created engaging quest structures and mechanics design"
          ]
        },
        {
          title: "Zine #4 & Snakes and Unions",
          description: "A reimagined Snakes & Ladders game exploring wealth inequality and collective action",
          image: "/zine.png",
          categories: ["Game Design", "Product Design", "Visual Design", "Research", "Publications", "Photo Editing"],
          link: "/zine",
          highlights: [
            "Reimagined classic board game to explore social commentary on wealth inequality",
            "Combined game design with visual storytelling and research"
          ]
        },
        {
          title: "Judaic Tarot Deck",
          description: "Complete deck design based on Jewish mysticism",
          image: "/judaictarot.png",
          categories: ["Product Design", "Visual Design", "Research", "Publications", "Photo Editing"],
          link: "/tarot",
          highlights: [
            "Researched and designed complete 78-card deck based on Jewish mysticism",
            "Created unique visual system blending traditional tarot with Judaic imagery"
          ]
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
          categories: ["Strategy", "Project Management", "UX Research", "Game Design", "Figma", "UX/UI Design", "Coding", "AI Utilization", "Market Research", "Web Design", "Photo Editing"],
          link: "/makeafriend",
          imageStyle: "contain",
          highlights: [
            "Guided a diverse team in building a social platform that makes connecting through play natural and rewarding."
          ]
        },
        {
          title: "Next SaaS",
          description: "Website development and monitoring solutions for businesses",
          image: "/nextsaaslogo.png",
          categories: ["Business Strategy", "Project Management", "UX/UI Design", "Research", "Figma", "Web Design", "Coding", "AI Utilization"],
          link: "/nextsaas",
          imageStyle: "contain",
          highlights: [
            "Developed comprehensive business strategy for SaaS website monitoring platform",
            "Led project management and UX/UI design process from concept to implementation"
          ]
        },
        {
          title: "Bigus Web Design",
          description: "Crafting digital experiences through component-based design and AI",
          image: "/BWDCover2.png",
          categories: ["Project Management", "Web Design", "UX/UI Design", "Coding", "AI Utilization"],
          link: "/biguswebdesign",
          imageStyle: "cover",
          highlights: [
            "Managed component-based design system implementation using AI-assisted workflows",
            "Coordinated cross-functional team to deliver modern web experiences"
          ]
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
          categories: ["Client Collaboration", "Video Production", "Interview", "Marketing"],
          link: "/saveyalla",
          highlights: [
            "Produced compelling video content for educational fundraising campaign in Sri Lanka",
            "Conducted interviews and marketing strategy to support community education"
          ]
        },
        {
          title: "Wild Breeze Infomercial",
          description: "Commercial production for a boutique bungalow resort",
          image: "/wildbreeze.png",
          categories: ["Client Collaboration", "Video Production", "Narration"],
          link: "/wildbreeze",
          highlights: [
            "Created and narrated professional commercial for boutique resort",
            "Collaborated with client to capture authentic Sri Lankan hospitality"
          ]
        },
        {
          title: "Zul's Highway Cafe",
          description: "Complete menu redesign and brand refresh",
          image: "/cafemenu.png",
          categories: ["Client Collaboration", "Product Design", "Visual Design", "Photo Editing"],
          link: "/cafe",
          highlights: [
            "Redesigned complete menu system and refreshed brand identity for Malaysian cafe",
            "Combined product design with photo editing to showcase authentic cuisine"
          ]
        },
        {
          title: "Poetry Book Cover",
          description: "Cover design for local poet's anthology",
          image: "/yesican.png",
          categories: ["Client Collaboration", "Product Design", "Visual Design", "Photo Editing"],
          link: "/yesican",
          highlights: [
            "Designed book cover for local Sri Lankan poet's anthology",
            "Captured cultural authenticity through visual design and photo editing"
          ]
        },
        {
          title: "Sathanee Jam Labels",
          description: "Product label design for artisan restaurant",
          image: "/jamjar.png",
          categories: ["Client Collaboration", "Product Design", "Visual Design", "Photo Editing"],
          link: "/jam-jars",
          highlights: [
            "Created artisan product labels for Thai restaurant's jam collection",
            "Developed visual identity that reflects handcrafted quality"
          ]
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
          categories: ["UX/UI Design", "Research", "Figma", "Web Design"],
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
          ],
          highlights: [
            "Researched and designed comprehensive platform to help artists understand sales data",
            "Created user-friendly interface reducing stress while improving market insights"
          ]
        },
        {
          title: "Instagram Marketing and Brand Awareness",
          description: "Educational platform development and branding",
          image: "/samtheteacher.png",
          categories: ["Visual Design", "UX/UI Design", "Photo Editing"],
          link: "/instagram",
          highlights: [
            "Developed brand identity and visual design for educational platform",
            "Created cohesive Instagram marketing strategy to build brand awareness"
          ]
        }
      ]
    }
  ];

  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col text-white`}>
      <BackgroundCurve />
      <IndexNavigation onCVClick={handleCVClick} />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left relative z-10">
                <div className="flex items-center gap-4 md:gap-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
                    Hey, I'm Shmoo.
                  </h1>
                  {/* FGWarsaw Image - positioned directly next to the heading */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
                    <img 
                      src="/FGWarsawCDPR.png" 
                      alt="FG Warsaw CDPR" 
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
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
                <div className="w-64 flex-shrink-0 relative mt-16 z-20">
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

      {/* CV Options Modal */}
      <CVOptionsModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        onViewBrowser={handleViewBrowser}
      />
    </div>
  );
}