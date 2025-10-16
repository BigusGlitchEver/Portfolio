// components/SearchLogic.tsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SearchResults from './SearchResults';
import ProjectTooltip from './ProjectTooltip';

// Interfaces
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
  highlights?: string[];
  technologies?: string[];
  achievements?: string[];
}

interface Section {
  title: string;
  icon: React.ReactNode;
  description: string;
  projects: Project[];
}

interface SearchLogicProps {
  sections: Section[];
  activeCategory: string | null;
  hideSearchUI?: boolean;
  hideSearchResults?: boolean;
}

const SearchLogic = ({ sections, activeCategory, hideSearchUI = false, hideSearchResults = false }: SearchLogicProps) => {
  // Define suggested tags at the top of the component
  const suggestedTags = [
    "Web Design",
    "Product Design",
    "Figma",
    "Coding",
    "AI Utilization",
    "Research",
  ];

  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [shouldScrollToResults, setShouldScrollToResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (activeCategory) {
      setSelectedTag(activeCategory);
      setInputValue(activeCategory);
      setSearchQuery(activeCategory);
      setShouldScrollToResults(true);
    }
  }, [activeCategory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSelectedTag(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 200);
    
    setIsSearching(true);
    setShouldScrollToResults(false);
    setTimeout(() => {
      setSearchQuery(inputValue.trim());
      setIsSearching(false);
    }, 300);
  };

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);
    setInputValue('');
    setShouldScrollToResults(false);
    setSearchQuery(newTag || '');
  };

  const renderProject = (project: Project) => {
    if (isMobile) {
      return (
        <div className="flex-shrink-0 w-64 bg-gray-800/50 p-4 rounded-lg ring-1 ring-blue-400/20">
          <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden relative cursor-pointer mb-3">
            <Link href={project.link} className="block w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 256px, 256px"
                className={`transition-all duration-300 object-${project.imageStyle || 'cover'}`}
              />
            </Link>
            
            {/* Overlay buttons on the image for mobile */}
            {project.buttons && (
              <div className="absolute bottom-2 left-2 right-2 flex gap-1 justify-center">
                {project.buttons.map((button, idx) => {
                  const isExternal = button.url.startsWith('http') || button.url.startsWith('https');
                  const ButtonComponent = isExternal ? 'a' : Link;
                  const buttonProps = isExternal 
                    ? { href: button.url, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: button.url };
                  
                  return (
                    <ButtonComponent
                      key={idx}
                      {...buttonProps}
                      className="px-2 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {button.label}
                    </ButtonComponent>
                  );
                })}
              </div>
            )}
          </div>
          <Link href={project.link}>
            <h3 className="text-lg font-light text-white mb-2 hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.categories.slice(0, 3).map((category, idx) => (
              <span
                key={idx}
                onClick={() => handleTagClick(category)}
                className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-blue-300 cursor-pointer hover:text-white hover:bg-gray-700 transition-colors"
              >
                {category}
              </span>
            ))}
            {project.categories.length > 3 && (
              <span className="text-xs text-gray-400 px-2 py-1">
                +{project.categories.length - 3}
              </span>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <ProjectTooltip
          title={project.title}
          description={project.description}
          categories={project.categories}
          highlights={project.highlights || []}
        >
          <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative cursor-pointer 
                       ring-1 ring-blue-500/30 transition-all duration-300 group">
            <Link href={project.link} className="block w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className={`transition-all duration-300 group-hover:scale-105 object-${project.imageStyle || 'cover'}`}
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Overlay buttons on the image */}
            {project.buttons && (
              <div className="absolute bottom-2 left-2 right-2 flex gap-2 justify-center">
                {project.buttons.map((button, idx) => {
                  const isExternal = button.url.startsWith('http') || button.url.startsWith('https');
                  const ButtonComponent = isExternal ? 'a' : Link;
                  const buttonProps = isExternal 
                    ? { href: button.url, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: button.url };
                  
                  return (
                    <ButtonComponent
                      key={idx}
                      {...buttonProps}
                      className="px-3 py-1 text-xs rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {button.label}
                    </ButtonComponent>
                  );
                })}
              </div>
            )}
          </div>
        </ProjectTooltip>
        
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category, catIndex) => (
            <span
              key={catIndex}
              onClick={() => handleTagClick(category)}
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
          <h3 className="text-lg font-light">
            <Link href={project.link} className="hover:text-blue-400 transition-colors cursor-pointer">
              {project.title}
            </Link>
          </h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!hideSearchUI && (
        <div className="w-full max-w-4xl mx-auto space-y-6 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Search My Portfolio</h2>
            <Search className="w-16 h-16 mx-auto text-blue-400" />
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search projects..."
              className="w-full px-4 py-3 pl-12 bg-gray-800/50 backdrop-blur-sm rounded-lg 
                       text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-blue-400 transition-all ring-1 ring-blue-400/20 
                       hover:bg-gray-700/50"
            />
            <button
              type="submit"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full
                         transition-all duration-200 ease-in-out focus:outline-none
                         ${isButtonPressed ? 'scale-75 bg-blue-500/20' : 'scale-100'}
                         ${inputValue ? 'text-blue-400' : 'text-gray-400'}`}
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          <div className="flex flex-wrap gap-3">
            <span className="text-gray-400 py-2">Suggested:</span>
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform
                  ${selectedTag === tag 
                    ? 'bg-blue-500 text-white scale-105' 
                    : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/30'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {!hideSearchResults && (
        <SearchResults 
          sections={sections}
          searchQuery={searchQuery}
          selectedTag={selectedTag}
          isSearching={isSearching}
          onTagSelect={handleTagClick}
          scrollToResults={shouldScrollToResults}
          isMobile={isMobile}
        />
      )}

      {/* Always display all sections, regardless of search */}
      <div className="space-y-32">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-16">
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-6xl font-light hover:text-blue-400 transition-colors mb-6">{section.title}</h2>
                <div className="text-blue-400 w-16 h-16 mx-auto">
                  {section.icon}
                </div>
              </div>
              <p className="text-xl text-gray-400">{section.description}</p>
            </div>
            
            {isMobile ? (
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                  {section.projects.map((project, index) => (
                    <div key={index} style={{ scrollSnapAlign: 'start' }}>
                      {renderProject(project)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.projects.map((project, index) => (
                  <div key={index}>
                    {renderProject(project)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchLogic;