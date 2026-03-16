import { useState, useEffect } from 'react';
import { Poppins, JetBrains_Mono } from "next/font/google";
import Portrait from '@/components/Portrait';
import IndexNavigation from '@/components/indexnavigation';
import SearchLogic from '@/components/SearchLogic';
import Footer from '@/components/Footer';
import BackgroundCurve from '@/components/backgroundcurve';
import CVOptionsModal from '@/components/CVOptionsModal';
import { Gamepad2, Zap, Users, Globe, Brush } from 'lucide-react';
import { useRouter } from 'next/router';
import ProjectTooltip from '@/components/ProjectTooltip';
import Link from 'next/link';

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

    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);

  }, []);

  const handleCVClick = () => setIsCVModalOpen(true);

  const handleViewBrowser = () => {

    window.open('/ShmooCV.pdf', '_blank');

    setIsCVModalOpen(false);

  };

  const sections = [

    {
      title: "Game Production",
      icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
      description: "Bringing games to life through cross-team collaboration and strategic production at every step of the process.",
      projects: [

        {
          title: "Whimpact!",
          description: "Producer Intern contributing to multiplayer game launch on Steam",
          image: "/LevelHeadedLogo.png",
          link: "/whimpact",
          categories: [
            "Production",
            "Game Testing",
            "Strategy",
            "Scrum",
            "Launch Preparation",
            "Steam Release"
          ],
          highlights: [
            "Facilitate action on in-game items and track progress across departments",
            "Participate in meetings and support cross-team coordination",
            "Strategize directly with CEO/Producer Leah Hoyer on project direction",
            "Organize and manage internal and external game tests",
            "Support preparation and launch readiness for online multiplayer Steam release"
          ]
        },

        {
          title: "Wastemancer",
          description: "Managed a team of 12 from Poland, Sweden, and China to create a combo-hitting competitive game within 3 weeks",
          image: "/WastemancerPoster.png",
          link: "/wastemancer",
          categories: [
            "Production",
            "Team Leadership",
            "Project Management",
            "Coaching",
            "Cross-Cultural Collaboration"
          ],
          highlights: [
            "Led international team from Poland, Sweden, and China to deliver complete game in 3 weeks",
            "Used leading-from-behind leadership style while coaching Audio Designer",
            "Managed project with Notion and Jira, used Miro for design consistency across disciplines"
          ]
        },

        {
          title: "Poly Plaza",
          description: "Produced a live service Steam released sandbox game focused on property management and economic systems",
          image: "/polyplaza.png",
          link: "/polyplaza-producer",
          categories: [
            "Production",
            "Project Management",
            "Analytics",
            "Business Development",
            "Post-Launch Support"
          ],
          highlights: [
            "Set milemarkers and monitored progress throughout development cycle",
            "Worked with potential investors to secure funding and communicate project vision",
            "Maintained product cohesion post-launch and made data-driven decisions based on analytics"
          ]
        },

        {
          title: "Necromeowcy",
          description: "Produced with a team of 10 a city builder cat necromancer game developed during a 7-day Game Jam",
          image: "/Necromeowcy_logo.png",
          link: "/necromeowcy",
          categories: [
            "Game Jam",
            "Production",
            "City Builder",
            "Team Leadership"
          ],
          highlights: [
            "Led art production and coordinated team meetings during intensive 7-day Game Jam",
            "Managed art pipeline and cross-cultural collaboration with international team"
          ]
        }

      ]
    },

    {
      title: "Game Design",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      description: "Designing mechanics, systems, and experiences that engage players",
      projects: [
        {
          title: "Poly Plaza",
          description: "A sandbox game focused on property management and economic systems",
          image: "/polyplaza.png",
          categories: ["Game Design","Quest Design","Mechanics Design","AI Utilization","Low Code"],
          link: "/polyplaza",
          buttons: [
            {
              label: "View on Steam",
              url: "https://store.steampowered.com/app/2716030/Poly_Plaza/"
            }
          ],
          highlights: [
            "Designed complex economic systems for property management gameplay",
            "Created engaging quest structures and mechanics design"
          ]
        },

        {
          title: "Zine #4 & Snakes and Unions",
          description: "A reimagined Snakes & Ladders game exploring wealth inequality and collective action",
          image: "/zine.png",
          categories: ["Game Design","Product Design","Visual Design","Research","Publications","Photo Editing"],
          link: "/zine",
          buttons: [
            {
              label: "Bang Bang Zine",
              url: "https://www.bangbangzine.com/collections/zinemate/products/zinemate-the-zine-bathroom-reader-4"
            }
          ],
          highlights: [
            "Reimagined classic board game to explore social commentary on wealth inequality",
            "Combined game design with visual storytelling and research"
          ]
        },

        {
          title: "Judaic Tarot Deck",
          description: "Complete deck design based on Jewish mysticism",
          image: "/judaictarot.png",
          categories: ["Product Design","Visual Design","Research","Publications","Photo Editing"],
          link: "/tarot",
          buttons: [
            {
              label: "Judaic Tarot Deck",
              url: "https://shmoobigus.gumroad.com/l/lmqwdc"
            }
          ],
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
          categories: ["Strategy","Project Management","UX Research","Game Design","Figma","UX/UI Design","Coding","AI Utilization","Market Research","Web Design","Photo Editing"],
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
          categories: ["Business Strategy","Project Management","UX/UI Design","Research","Figma","Web Design","Coding","AI Utilization"],
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
          categories: ["Project Management","Web Design","UX/UI Design","Coding","AI Utilization"],
          link: "/biguswebdesign",
          imageStyle: "cover",
          buttons: [
            {
              label: "Visit Website",
              url: "https://biguswebdesign.com/"
            }
          ],
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
          categories: ["Client Collaboration","Video Production","Interview","Marketing"],
          link: "/saveyalla",
          buttons: [
            {
              label: "Watch Video",
              url: "https://www.youtube.com/embed/tcOjjBmDXsc"
            }
          ],
          highlights: [
            "Produced compelling video content for educational fundraising campaign in Sri Lanka",
            "Conducted interviews and marketing strategy to support community education"
          ]
        },

        {
          title: "Wild Breeze Infomercial",
          description: "Commercial production for a boutique bungalow resort",
          image: "/wildbreeze.png",
          categories: ["Client Collaboration","Video Production","Narration"],
          link: "/wildbreeze",
          buttons: [
            {
              label: "Watch Video",
              url: "https://www.youtube.com/embed/m1-keRN0FCY"
            }
          ],
          highlights: [
            "Created and narrated professional commercial for boutique resort",
            "Collaborated with client to capture authentic Sri Lankan hospitality"
          ]
        },

        {
          title: "Zul's Highway Cafe",
          description: "Complete menu redesign and brand refresh",
          image: "/cafemenu.png",
          categories: ["Client Collaboration","Product Design","Visual Design","Photo Editing"],
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
          categories: ["Client Collaboration","Product Design","Visual Design","Photo Editing"],
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
          categories: ["Client Collaboration","Product Design","Visual Design","Photo Editing"],
          link: "/jam-jars",
          highlights: [
            "Created artisan product labels for Thai restaurant's jam collection",
            "Developed visual identity that reflects handcrafted quality"
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

            {/* Hero */}

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">

              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
                  Hey, I'm Shmoo.
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl font-light">
                I help bring games to life, from concept to launch, across diverse teams and cultures.

                </p>

                <p className="text-xl sm:text-2xl md:text-3xl font-light">
                Working with, programmers, designers, artists and product owners, I turn ideas into experiences that engage players and meet business goals.
                </p>

              </div>

              <div className="w-64">
                <Portrait />
              </div>

            </div>

            {/* Game Production */}

            {sections.map(section => section.title === "Game Production" && (

              <div key={section.title} className="mb-16">

                <h2 className="text-6xl font-light text-white mb-6 flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
                  {section.title} {section.icon}
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  {section.description}
                </p>

                <div className="flex flex-col gap-10">

                  {section.projects.map(project => (

                    <div key={project.title} className="flex flex-col md:flex-row items-start gap-6">

<div className="w-full md:w-1/3 flex-shrink-0 relative">

{/* Image links to project page */}
<Link href={project.link}>
  <img
    src={project.image}
    alt={project.title}
    className="rounded-lg w-full object-cover cursor-pointer hover:opacity-90 transition"
  />
</Link>

{/* Steam Button Overlay */}
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
  <a
    href={
      project.title === "Whimpact!"
        ? "https://store.steampowered.com/app/3131260/Whimpact/"
        : project.title === "Poly Plaza"
        ? "https://store.steampowered.com/app/2716030/Poly_Plaza/"
        : project.title === "Wastemancer"
        ? "https://shmoogames.itch.io/wastemancer"
        : "https://pandagp.itch.io/necromeowcy"
    }
    target="_blank"
    rel="noopener noreferrer"
    className="px-2 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap"  >
    {project.title === "Wastemancer" || project.title === "Necromeowcy"
      ? "Play on Itch"
      : "View on Steam"}
  </a>
</div>

</div>

                      <div className="w-full md:w-2/3 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">

                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                        <p className="text-gray-200 mb-4">{project.description}</p>

                        <Link
                          href={project.link}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap mb-4"
                        >
                          View Project
                        </Link>

                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {project.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            ))}

            {/* Search */}

            {SHOW_SEARCH ? (
                <div className="mt-16 search-component">
                  <SearchLogic
                    sections={sections.filter(section => section.title !== "Game Production")}
                    activeCategory={activeCategory}
                  />
                </div>
              ) : (
                <div className="mt-16">
                  <SearchLogic
                    sections={sections.filter(section => section.title !== "Game Production")}
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

      <CVOptionsModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        onViewBrowser={handleViewBrowser}
      />

    </div>
  );
}