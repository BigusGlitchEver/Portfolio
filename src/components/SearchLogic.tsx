import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Search } from 'lucide-react';

interface Tag {
  id: string;
  label: string;
  searchTerms: string[];
}

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

interface SearchLogicProps {
  sections: Section[];
}

const suggestedTags: Tag[] = [
  { 
    id: 'web-design', 
    label: 'Web Design',
    searchTerms: ['web', 'website', 'web design', 'web development', 'website design', 'design', 'ui', 'ux']
  },
  { 
    id: 'coding', 
    label: 'Coding',
    searchTerms: ['coding', 'programming', 'coding skills', 'coding tools']
  },
  { 
    id: 'AI Utilization', 
    label: 'AI Utilization',
    searchTerms: ['AI', 'utilization', 'AI utilization', 'artificial intelligence']
  },
  { 
    id: 'game-design', 
    label: 'Game Design',
    searchTerms: ['game', 'games', 'game design', 'gaming', 'mechanics', 'quest', 'design']
  },
  { 
    id: 'product-design', 
    label: 'Product Design',
    searchTerms: ['product', 'product design', 'design', 'visual design']
  },
  { 
    id: 'publications', 
    label: 'Publications',
    searchTerms: ['publication', 'publications', 'book', 'books', 'zine']
  }
];

const SearchLogic: React.FC<SearchLogicProps> = ({ sections }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 200);
    
    setIsSearching(true);
    setTimeout(() => {
      setSearchQuery(inputValue.trim());
      setIsSearching(false);
    }, 300);
  };

  const handleTagClick = (tagId: string) => {
    const newTag = selectedTag === tagId ? null : tagId;
    setSelectedTag(newTag);
    setInputValue('');
    setSearchQuery('');
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  const getExactMatch = (searchTerm: string, category: string): boolean => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    const normalizedCategory = category.toLowerCase();

    if (normalizedSearch === 'design' && normalizedCategory.includes('design')) {
      return true;
    }

    if (normalizedSearch.includes('design') && normalizedCategory.includes('design')) {
      const categoryPrefix = normalizedCategory.split('-')[0];
      const searchPrefix = normalizedSearch.split(' ')[0];
      if (categoryPrefix === searchPrefix) {
        return true;
      }
    }

    if (normalizedCategory === normalizedSearch) return true;

    switch (normalizedCategory) {
      case 'web-design':
        return ['web design', 'web', 'website', 'web development', 'website design', 'design', 'ui', 'ux'].some(term => 
          normalizedSearch === term
        );
      case 'game-design':
        return ['game design', 'game', 'gaming', 'games', 'design', 'mechanics', 'quest'].some(term => 
          normalizedSearch === term
        );
        case 'low code':
          return ['low code', 'code', 'low', 'coding'].some(term => 
            normalizedSearch === term
          );
          case 'coding':
            return ['coding', 'code'].some(term => 
              normalizedSearch === term
            );
            case 'AI Utilization':
              return ['ai', 'utilization', 'ai utilization'].some(term => 
                normalizedSearch === term
              );
      case 'product-design':
        return ['product design', 'product', 'design', 'visual design', 'visual'].some(term => 
          normalizedSearch === term
        );
      case 'publications':
        return ['publication', 'publications', 'book', 'books', 'zine'].some(term => 
          normalizedSearch === term
        );
      case 'marketing':
        return ['marketing', 'market', 'tourism'].some(term => 
          normalizedSearch === term
        );
        case 'client collaboration':
          return ['client', 'collaboration', 'cli', 'collab'].some(term => 
            normalizedSearch === term
          );
        case 'photo editing':
          return ['photo', 'editing', 'photography', 'photo editing', 'photo', 'edit', 'editing'].some(term => 
            normalizedSearch === term
          );
          case 'visual design':
            return ['visual design', 'design', 'visual'].some(term => 
              normalizedSearch === term
            );
            case 'product design':
              return ['product design', 'product', 'design'].some(term => 
                normalizedSearch === term
              );
            case 'narration':
              return ['narration', 'narrative', 'narrative design', 'narrative design', 'narrate'].some(term => 
                normalizedSearch === term
              );
              case 'market research':
                return ['market research', 'market', 'research'].some(term => 
                  normalizedSearch === term
                );
                case 'ux/ui design':
                  return ['ux', 'ui', 'design', 'ux/ui', 'ui/ux design'].some(term => 
                    normalizedSearch === term
                  );
                  case 'business strategy':
                    return ['business strategy', 'strategy', 'business'].some(term => 
                      normalizedSearch === term
                    );
      case 'visual design':
      case 'ui/ux design':
      case 'ux/ui design':
      case 'mechanics design':
      case 'quest design':
        return normalizedSearch === 'design' || normalizedCategory.split(' ')[0] === normalizedSearch;
      default:
        return normalizedCategory.split(/[-\s]/).some(part => 
          normalizedSearch === part.trim()
        );
    }
  };

  const filteredSections = sections.map(section => ({
    ...section,
    projects: section.projects.filter(project => {
      const searchTerm = searchQuery.toLowerCase().trim();
      
      const matchesSearch = 
        !searchTerm || 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.categories.some(cat => getExactMatch(searchTerm, cat));
      
      const matchesTag = !selectedTag || project.categories.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    })
  })).filter(section => section.projects.length > 0);

  return (
    <div>
      {/* Search Interface - This part stays stable */}
      <div className="w-full max-w-4xl mx-auto space-y-6 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Search My Portfolio</h2>
          <Search className="w-16 h-16 mx-auto text-blue-400/50" />
        </div>
        
        {/* Search Bar */}
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

        {/* Suggested Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="text-gray-400 py-2">Suggested:</span>
          {suggestedTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform
                ${selectedTag === tag.id 
                  ? 'bg-blue-500 text-white scale-105' 
                  : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/30'
                }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section - This part animates */}
      <div className={`transition-opacity duration-300 ${isSearching ? 'opacity-0' : 'opacity-100'}`}>
        {filteredSections.length > 0 ? (
          <div className="space-y-32">
            {filteredSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <h2 className="text-6xl font-light">{section.title}</h2>
                  </div>
                  <p className="text-xl text-gray-400">{section.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                  {section.projects.map((project, index) => (
                    <div key={index} className="space-y-4 group">
                      <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative cursor-pointer 
                                    ring-2 ring-blue-500/50 transition-all duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`transition-all duration-300 group-hover:scale-105 object-${project.imageStyle || 'cover'}`}
                        />
                        <Link href={project.link}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.categories
                          .filter(category => !['web-design', 'game-design', 'product-design', 'publications'].includes(category))
                          .map((category, catIndex, filteredArray) => (
                            <span key={catIndex} className="text-sm text-blue-400">
                              {category}
                              {catIndex < filteredArray.length - 1 && <span className="ml-2">•</span>}
                            </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <Link href={project.link}>
                          <h3 className="text-2xl font-light group-hover:text-blue-400 transition-colors">
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
        ) : (
          <div className="text-center py-16">
            <Search className="w-24 h-24 mx-auto text-blue-400/30 mb-6" />
            <p className="text-2xl text-gray-400">
              Your search did not match any results. Please try again or use one of the suggested tags above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchLogic;