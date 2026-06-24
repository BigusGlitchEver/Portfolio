// TabNav.tsx
// Unified top navigation with the four portfolio tabs.
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TabNavProps {
  onCVClick?: () => void;
}

const tabs = [
  { label: 'Producer', href: '/' },
  { label: 'Design', href: '/design' },
  { label: 'Collaboration', href: '/collaboration' },
  { label: 'Product Management', href: '/product-management' },
];

const TabNav: React.FC<TabNavProps> = ({ onCVClick }) => {
  const router = useRouter();
  const current = router.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Left: Logo + Tabs */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-800">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {tabs.map((tab) => {
                const isActive = current === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`text-sm sm:text-base transition-colors ${
                      isActive
                        ? 'text-white font-medium border-b-2 border-blue-400 pb-0.5'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: External links + CV */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/shmoogames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shmoogames@yahoo.com"
              className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
            >
              Email
            </a>
            {onCVClick ? (
              <button
                onClick={onCVClick}
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                CV
              </button>
            ) : (
              <Link
                href="/cv"
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base"
              >
                CV
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TabNav;
