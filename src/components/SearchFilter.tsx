// SearchFilter.tsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Tag {
  id: string;
  label: string;
  searchTerms: string[];
}

interface SearchFilterProps {
  onSearch: (query: string, isSubmit: boolean) => void;
  onTagSelect: (tag: string | null) => void;
  selectedTag: string | null;
}

const suggestedTags: Tag[] = [
  { 
    id: 'web-design', 
    label: 'Web Design',
    searchTerms: ['web', 'website', 'web design', 'web development', 'website design', 'ui', 'ux']
  },
  { 
    id: 'game-design', 
    label: 'Game Design',
    searchTerms: ['game', 'games', 'game design', 'gaming', 'mechanics', 'quest design']
  },
  { 
    id: 'product-design', 
    label: 'Product Design',
    searchTerms: ['product', 'product design', 'design', 'visual design']
  },
  { 
    id: 'figma', 
    label: 'Figma',
    searchTerms: ['figma', 'design', 'ui', 'ux']
  },
  { 
    id: 'photo-editing', 
    label: 'Photo Editing',
    searchTerms: ['photo', 'editing', 'photo editing', 'retouch']
  },
  { 
    id: 'coding', 
    label: 'Coding',
    searchTerms: ['coding', 'programming', 'development', 'low code']
  },
  { 
    id: 'ai-utilization', 
    label: 'AI Utilization',
    searchTerms: ['ai', 'artificial intelligence', 'ai utilization']
  },
  { 
    id: 'publications', 
    label: 'Publications',
    searchTerms: ['publication', 'publications', 'book', 'books', 'zine']
  },
  { 
    id: 'research', 
    label: 'Research',
    searchTerms: ['research', 'analysis', 'study', 'market research']
  },
  { 
    id: 'client-collaboration', 
    label: 'Client Collaboration',
    searchTerms: ['client', 'collaboration', 'consulting']
  },
  { 
    id: 'marketing', 
    label: 'Marketing',
    searchTerms: ['marketing', 'promotion', 'branding']
  },
  { 
    id: 'video-production', 
    label: 'Video Production',
    searchTerms: ['video', 'production', 'filming']
  }
];

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onTagSelect, selectedTag }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value, false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 200);
    onSearch(searchQuery.trim(), true);
  };

  const handleTagClick = (tagId: string) => {
    const newTag = selectedTag === tagId ? null : tagId;
    onTagSelect(newTag);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light mb-4">Search My Portfolio</h2>
        <Search className="w-16 h-16 mx-auto text-blue-400" />
      </div>
      
      {/* Search Bar */}
      <div className="relative group">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search projects..."
            className="w-full px-4 py-4 pl-12 
                     bg-gray-800/50 backdrop-blur-sm 
                     ring-1 ring-blue-400/20
                     rounded-lg text-white 
                     placeholder-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-400/70
                     hover:bg-gray-700/50
                     transition-all duration-300"
          />
          <button
            type="submit"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 p-1 
                       rounded-full transition-all duration-200 ease-in-out 
                       focus:outline-none hover:scale-110
                       ${isButtonPressed ? 'scale-75 text-blue-400' : 'scale-100'}
                       ${searchQuery || isFocused ? 'text-blue-400' : 'text-gray-300'}`}
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Suggested Tags */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="text-gray-300 py-2 font-light">Suggested:</span>
        {suggestedTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => handleTagClick(tag.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 transform
              ${selectedTag === tag.id 
                ? 'bg-blue-500 text-white scale-105' 
                : 'bg-gray-800/50 backdrop-blur-sm ring-1 ring-blue-400/20 text-gray-200 hover:bg-gray-700/50'
              }`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;