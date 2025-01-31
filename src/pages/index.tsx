import Image from "next/image";
import { Poppins, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DarkPortfolioLandingPage() {
  return (
    <div
      className={`${poppins.variable} ${jetBrainsMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gray-900 text-white p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full border-4 border-gray-600 dark:border-gray-400"
          src="/profile-pic.jpg"
          alt="Your Name"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-4xl font-bold">John Doe</h1>
        <h2 className="text-xl text-gray-400">UX Designer</h2>
        <p className="text-gray-300 max-w-md text-center sm:text-left">
          As a UX Designer, I craft intuitive and visually stunning digital experiences that delight users. With a keen eye for detail and a passion for problem-solving, I collaborate closely with clients to translate their vision into reality.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/download.svg"
              alt="Download icon"
              width={20}
              height={20}
            />
            Download Resume
          </a>
          <a
            className="rounded-full border border-solid border-gray-600 dark:border-gray-400 transition-colors flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="mailto:john.doe@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </main>

      <section className="row-start-2 w-full max-w-5xl flex flex-col gap-8">
        <h2 className="text-2xl font-bold">My Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image
              src="/project-placeholder.svg"
              alt="Project 1"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-gray-400 font-medium">Project 1</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image
              src="/project-placeholder.svg"
              alt="Project 2"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-gray-400 font-medium">Project 2</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image
              src="/project-placeholder.svg"
              alt="Project 3"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-gray-400 font-medium">Project 3</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image
              src="/project-placeholder.svg"
              alt="Project 4"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-gray-400 font-medium">Project 4</p>
          </div>
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-400"
          href="https://www.linkedin.com/in/john-doe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-400"
          href="https://github.com/john-doe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}