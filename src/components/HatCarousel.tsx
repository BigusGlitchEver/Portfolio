import React, { useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hats = [
    {
      src: "",
      alt: "No Hat",
      style: { top: "0%", width: "0%" }
    },
    {
      src: "hat1.png",
      alt: "Black fedora with tag that says Design",
      style: { top: "-50%", width: "130%", left: "-15%" }
    },
    {
      src: "hat3.png",
      alt: "White top hat with tag that says Coding",
      style: { top: "-73%", width: "145%", left: "-20%" }
    },
    {
      src: "hat4.png",
      alt: "Cowboy Hat with tag that says figma",
      style: { top: "-57%", width: "150%", left: "-23%" }
    },
    {
      src: "hat2.png",
      alt: "Ball cap with a tag that says AI",
      style: { top: "-30%", width: "85%", left: "8%" }
    },
    {
      src: "hat5.png",
      alt: "Wizard hat with tag that says Photo Editing",
      style: { top: "-60%", width: "110%", left: "-0%" }
    }
];

export default function HatCarousel() {
  const [currentHat, setCurrentHat] = useState(0);

  const nextHat = () => {
    setCurrentHat((prev) => (prev + 1) % hats.length);
  };

  const previousHat = () => {
    setCurrentHat((prev) => (prev - 1 + hats.length) % hats.length);
  };

  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {/* Current Hat */}
        <div 
          className="absolute z-10 transition-opacity duration-300"
          style={hats[currentHat].style}
        >
          <div className="relative w-full h-full">
            {hats[currentHat].src && (
              <Image
                src={`/${hats[currentHat].src}`}
                alt={hats[currentHat].alt}
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={previousHat}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 
                   bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Previous hat"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button 
          onClick={nextHat}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 
                   bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Next hat"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hat Indicator Dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-2">
          {hats.map((_, index) => (
            <span 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentHat === index ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}