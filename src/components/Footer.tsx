import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white/90 font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:samuelshmoobigus@yahoo.com" 
                className="text-gray-400 hover:text-white block transition-colors"
              >
                samuelshmoobigus@yahoo.com
              </a>
              <a 
                href="https://www.linkedin.com/in/samuel-bigus-60b948217" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white block transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white/90 font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/cv" 
                className="text-gray-400 hover:text-white block transition-colors"
              >
                View CV
              </Link>
              <Link 
                href="/polyplaza" 
                className="text-gray-400 hover:text-white block transition-colors"
              >
                Latest Project
              </Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white/90 font-medium mb-4">Location</h3>
            <p className="text-gray-400">
              Born and raised in Kansas City
              <br />
              Based in Warsaw, Poland
              <br />
              Available Worldwide
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Bigus Web Design. All rights reserved.
          </div>
          <div className="text-gray-400">
            Designed & Coded by Bigus Web Design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;