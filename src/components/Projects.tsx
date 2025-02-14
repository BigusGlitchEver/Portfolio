// src/components/Projects.tsx
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Book, Gamepad2, Globe, Brush, Coffee, Camera, Store } from 'lucide-react';

interface ProjectButton {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
  imageStyle?: string;
  buttons?: ProjectButton[];
}

interface Section {
  title: string;
  icon: React.ReactNode;
  description: string;
  projects: Project[];
}

interface ProjectsProps {
  onCategoryClick: (category: string) => void;
}

// Your existing sections data
const sections: Section[] = [
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

function Projects({ onCategoryClick }: ProjectsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderProject = (project: Project, sectionIndex: number, projectIndex: number) => {
    if (isMobile) {
      return (
        <div key={projectIndex} className="bg-gray-800/50 p-4 rounded-lg ring-1 ring-blue-400/20">
          <Link href={project.link}>
            <h3 className="text-xl font-light text-white mb-3 hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category, idx) => (
              <span
                key={idx}
                onClick={() => onCategoryClick(category)}
                className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-blue-300 cursor-pointer hover:text-white hover:bg-gray-700 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
          {project.buttons && (
            <div className="flex flex-wrap gap-4 mt-4">
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
      );
    }

    // Desktop view with images
    return (
      <div key={projectIndex} className="space-y-4 group">
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
              onClick={() => onCategoryClick(category)}
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
    );
  };

  return (
    <div className="mt-32">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-32">
          <div className="space-y-4 mb-16">
            <div className="text-center">
              <h2 className="text-6xl font-light hover:text-blue-400 transition-colors mb-6">{section.title}</h2>
              <div className="text-blue-400 w-16 h-16 mx-auto">
                {section.icon}
              </div>
            </div>
            <p className="text-xl text-gray-400">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.projects.map((project, projectIndex) => 
              renderProject(project, sectionIndex, projectIndex)
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Add method to get sections data
Projects.getSections = () => sections;

export default Projects;