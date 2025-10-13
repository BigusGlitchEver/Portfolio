import React, { useState } from 'react';

interface ProjectTooltipProps {
  title: string;
  description: string;
  categories: string[];
  highlights: string[];
  technologies: string[];
  achievements: string[];
  children: React.ReactNode;
}

const ProjectTooltip: React.FC<ProjectTooltipProps> = ({
  title,
  description,
  categories,
  highlights,
  technologies,
  achievements,
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
      
      {isVisible && (
        <div className="absolute z-50 w-80 p-4 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-400/30 transform -translate-x-1/2 left-1/2 -top-2 pointer-events-none">
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
          
          <div className="space-y-3">
            {/* Header */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            
            {/* Key Highlights */}
            <div>
              <h4 className="text-sm font-medium text-blue-400 mb-2">Key Highlights</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div>
              <h4 className="text-sm font-medium text-yellow-400 mb-2">Achievements</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">★</span>
                    <span>{achievement}</span>
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
