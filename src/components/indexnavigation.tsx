import React from 'react';
import Image from "next/image";
import Link from "next/link";

const IndexNavigation: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-800 rounded-full">
            <Image
              src="/logo.png"
              alt="Samuel Bigus Logo"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </div>
          <div className="hidden md:block">
            <span className="text-xl font-medium">Samuel Shmoo Bigus</span>
          </div>
        </div>
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:samuelshmoobigus@yahoo.com" 
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <Link 
            href="/cv" 
            className="hover:text-blue-400 transition-colors"
          >
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default IndexNavigation;