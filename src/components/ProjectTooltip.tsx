import React, { useState } from 'react';

interface ProjectTooltipProps {
  title: string;
  description: string;
  categories: string[];
  highlights: string[];
  children: React.ReactNode;
}

const ProjectTooltip: React.FC<ProjectTooltipProps> = ({
  title,
  description,
  categories,
  highlights,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && highlights && highlights.length > 0 && (
        <div className="absolute z-50 w-80 p-4 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-400/30 right-full mr-4 top-0 pointer-events-none">
          <div className="space-y-3">
            {/* Header */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            
            {/* Key Highlights */}
            <div>
              <h4 className="text-sm font-medium text-blue-400 mb-2">Highlights</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTooltip;
