import React from 'react';
import Link from 'next/link';
import { Briefcase, Code, Palette } from 'lucide-react';

interface JobProject {
  title: string;
  link: string;
}

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  projects: JobProject[];
}

const ExperienceSection = () => {
  const jobs: Job[] = [
    {
      title: "Creative Developer & Game Designer, Scrum Master",
      company: "Make a Friend",
      period: "October 2024 - January 2025",
      description: "Led end-to-end product design for gaming and software applications using user-centered design principles. Conducted competitive analysis and integrated AI technologies to enhance user experience.",
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      projects: [
        { title: "Make a Friend", link: "/makeafriend" }
      ]
    },
    {
      title: "Artist and Technical Designer",
      company: "Big Art with Sam",
      period: "2023 - 2024",
      description: "Researched user needs and market trends to inform product development. Created user-centered designs based on customer feedback and managed product lifecycle from concept to launch.",
      icon: <Palette className="w-8 h-8 text-blue-400" />,
      projects: [
        { title: "Art Pocketbook", link: "/art-pocketbook" },
        { title: "Instagram Marketing", link: "/instagram" }
      ]
    },
    {
      title: "Product Designer & Developer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Design and develop responsive websites using modern UX principles. Create high-fidelity prototypes using Figma, incorporating user feedback for iterative improvements.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      projects: [
        { title: "Bigus Web Design", link: "/biguswebdesign" },
        { title: "Next SaaS", link: "/nextsaas" },
        { title: "Poly Plaza", link: "/polyplaza" },
        { title: "Broll", link: "/broll" },
        { title: "Zul's Highway Cafe", link: "/cafe" },
        { title: "Sathanee Jam Labels", link: "/jam-jars" }
      ]
    }
  ];

  return (
    <div className="mt-32">
      {/* Experience Section - Now displayed first */}
      <section className="mb-32">
        <h2 className="text-4xl font-light mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 transition-transform hover:scale-[1.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Job Details */}
                <div className="col-span-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gray-800/70 rounded-xl">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-light">{job.title}</h3>
                      <div className="text-gray-400">{job.company} | {job.period}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    {job.description}
                  </p>
                </div>

                {/* Related Projects */}
                <div className="lg:border-l lg:border-gray-700 lg:pl-6">
                  {job.projects.length > 0 ? (
                    <>
                      <h4 className="text-lg font-light mb-4 text-blue-400">Related Projects</h4>
                      <ul className="space-y-2">
                        {job.projects.map((project, projectIndex) => (
                          <li key={projectIndex}>
                            <Link 
                              href={project.link}
                              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500 italic">
                      No linked projects
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;