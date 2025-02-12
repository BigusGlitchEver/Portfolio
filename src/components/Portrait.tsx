import React from 'react';
import Image from "next/image";
import HatCarousel from './HatCarousel';

export default function Portrait() {
  return (
    <div className="w-64 flex-shrink-0 relative ml-32 mt-16">
      <div className="aspect-square relative rounded-lg">
        <Image
          src="/shmoo.png"
          alt="Portrait of Samuel Shmoo Bigus"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <HatCarousel />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-lg text-gray-300 font-light">Wearer of Many Hats</h2>
      </div>
    </div>
  );
}