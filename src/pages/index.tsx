import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/indexnavigation';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import { Book, Gamepad2, Globe, Brush, Coffee, Camera, Store, Code } from 'lucide-react';

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
    },
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
                    I believe in creating software that bridges cultural gaps and brings people together.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    Software that makes you feel connected - feel part of a world that is global in every sense of the word.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    Software that tells stories of different cultures and the people who shape them.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-light">
                    I utilize figma and coding in conjunction with AI tools, all as
                    a means to create intuitive and user-friendly digital experiences
                    that speak to us as a people.
                  </p>
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

            {/* Search Component */}
            <div className="mt-16 search-component">
              <SearchLogic sections={sections} activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}