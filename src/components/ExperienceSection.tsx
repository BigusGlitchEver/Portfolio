import React from 'react';
import Link from 'next/link';
import { Briefcase, Award, Code, Layout, Palette, Brain, Zap, Users } from 'lucide-react';

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

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Design",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: ["Figma", "UX/UI Design", "Visual Design", "Product Design", "Design Systems"]
    },
    {
      name: "Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
    },
    {
      name: "Game Design",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      skills: ["Level Design", "Mechanics Design", "Quest Design", "Low Code", "Lua"]
    },
    {
      name: "Research & Strategy",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      skills: ["User Research", "Market Research", "Competitive Analysis", "User Testing"]
    },
    {
      name: "Scrum Mastery",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      skills: ["Sprint Planning", "Daily Stand-ups", "Sprint Reviews", "Retrospectives", "Backlog Refinement", "Agile Methodologies"]
    },
    {
      name: "Other Skills",
      icon: <Award className="w-6 h-6 text-blue-400" />,
      skills: ["AI Utilization", "Photo Editing", "Video Production", "Client Collaboration", "Project Management"]
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

      {/* Skills Section - Now displayed second */}
      <section className="mb-32">
        <h2 className="text-4xl font-light mb-8 text-center">My Skills & Expertise</h2>
        <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-700/50 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-light">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;