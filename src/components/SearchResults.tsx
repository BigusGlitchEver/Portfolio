// components/SearchResults.tsx
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

interface SearchResultsProps {
  sections: Section[];
  searchQuery: string;
  selectedTag: string | null;
  isSearching: boolean;
  onTagSelect: (tag: string) => void;
  scrollToResults: boolean;
  isMobile: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  sections, 
  searchQuery, 
  selectedTag, 
  isSearching,
  onTagSelect,
  scrollToResults,
  isMobile
}) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToResults && resultsRef.current) {
      const navbarHeight = 80;
      const elementPosition = resultsRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [scrollToResults, searchQuery, selectedTag]);

  const filteredSections = sections.map(section => ({
    ...section,
    projects: section.projects.filter(project => {
      const searchTerm = searchQuery.toLowerCase().trim();
      const matchesSearch = !searchTerm || 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.categories.some(cat => cat.toLowerCase().includes(searchTerm));
      
      const matchesTag = !selectedTag || project.categories.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    })
  })).filter(section => section.projects.length > 0);

  const allFilteredProjects = filteredSections.flatMap(section => section.projects);

  if (!searchQuery && !selectedTag) {
    return null;
  }

  const renderProject = (project: Project) => {
    if (isMobile) {
      return (
        <div className="bg-gray-800/50 p-4 rounded-lg ring-1 ring-blue-400/20">
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
                onClick={() => onTagSelect(category)}
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

    return (
      <div className="space-y-4 group">
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
              onClick={() => onTagSelect(category)}
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
    <div 
      ref={resultsRef}
      className={`transition-opacity duration-300 ${isSearching ? 'opacity-0' : 'opacity-100'}`}
    >
      {allFilteredProjects.length > 0 ? (
        <>
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-8">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allFilteredProjects.map((project, index) => (
                <div key={index}>
                  {renderProject(project)}
                </div>
              ))}
            </div>
          </div>

          <div className="my-32">
            <div className="w-full h-0.5 bg-blue-400 shadow-[0_0_10px_#60A5FA,0_0_20px_#60A5FA]" />
            <p className="text-center text-4xl text-light mt-8 font-light">All Projects</p>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-400">
            Your search did not match any results. Please try again or use one of the suggested tags above.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;