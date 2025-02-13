// components/SearchResults.tsx
import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
  imageStyle?: string;
  buttons?: Array<{
    label: string;
    url: string;
  }>;
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
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  sections, 
  searchQuery, 
  selectedTag, 
  isSearching,
  onTagSelect,
  scrollToResults
}) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToResults && resultsRef.current) {
      const navbarHeight = 80; // Adjust this to match your navbar height
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

  return (
    <div 
      ref={resultsRef}
      className={`transition-opacity duration-300 ${isSearching ? 'opacity-0' : 'opacity-100'}`}
    >
      {allFilteredProjects.length > 0 ? (
        <>
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-8">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {allFilteredProjects.map((project, index) => (
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
                      <button
                        key={catIndex}
                        onClick={() => onTagSelect(category)}
                        className="text-sm text-blue-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {category}
                        {catIndex < project.categories.length - 1 && (
                          <span className="ml-2 text-gray-400">•</span>
                        )}
                      </button>
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

          <div className="my-32">
            <div className="w-full h-0.5 bg-blue-400 shadow-[0_0_10px_#60A5FA,0_0_20px_#60A5FA] animate-pulse" />
            <p className="text-center text-4xl text-light mt-8 font-light">All Projects</p>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="60" height="50" rx="10" fill="#4B5563" />
              <line x1="50" y1="20" x2="50" y2="30" stroke="#4B5563" stroke-width="4" />
              <circle cx="50" cy="18" r="4" fill="#4B5563" />
              <text x="65" y="30" font-size="24" fill="#60A5FA" font-weight="bold">?</text>
              <circle cx="35" cy="50" r="8" fill="#60A5FA" />
              <circle cx="65" cy="50" r="8" fill="#60A5FA" />
              <circle cx="35" cy="50" r="4" fill="#1E40AF" />
              <circle cx="65" cy="50" r="4" fill="#1E40AF" />
              <path d="M35 65 Q50 60 65 65" stroke="#60A5FA" stroke-width="3" fill="none" />
              <rect x="40" y="80" width="20" height="5" fill="#4B5563" />
            </svg>
          </div>
          <p className="text-2xl text-gray-400">
            Your search did not match any results. Please try again or use one of the suggested tags above.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;