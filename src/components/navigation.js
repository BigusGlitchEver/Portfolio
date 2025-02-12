import Image from "next/image";
import Link from "next/link";

export default function Navigation({ showFullNav = false }) {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {showFullNav ? (
          <>
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
              <span className="text-xl font-medium">Samuel Shmoo Bigus</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Email</a>
              <a href="#" className="hover:text-blue-400 transition-colors">CV</a>
            </div>
          </>
        ) : (
          <Link href="/" className="text-xl font-medium hover:text-blue-400 transition-colors">
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
              <span>← Back to Portfolio</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}