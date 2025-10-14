import React from 'react';

const CVPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-12 bg-white text-black font-sans">
      {/* Header */}
      <header className="mb-12 relative">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">Samuel Shmoo Bigus</h1>
        <img 
          src="/FGWarsawCDPRclear.png" 
          alt="Future Games Warsaw Strategic Partner with CD Projekt Red" 
          className="h-40 w-auto absolute top-0 right-0"
        />
        <p className="text-base mb-8">
          shmoogames@yahoo.com
        </p>
        <div className="text-sm mb-4">
          <a href="https://biguswebdesign.com/" className="text-blue-500 hover:underline">
            biguswebdesign
          </a>
          <span className="mx-2">|</span>
          <a href="https://store.steampowered.com/app/2716030/Poly_Plaza/" className="text-blue-500 hover:underline">
            Poly Plaza on Steam
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">Professional Summary</h2>
        <div className="border-b border-black mb-4"></div>
        <p className="text-sm leading-relaxed">
        Game Producer and Product Designer experienced in leading cross-functional teams in indie and commercial projects. Currently studying at Future Games in association with CD Projekt Red. Skilled in agile project management, iterative design, and creating engaging player experiences.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">Professional Experience</h2>
        <div className="border-b border-black mb-4"></div>
        
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h3 className="font-bold text-base">Make a Friend</h3>
              <p className="text-sm italic">Warszawa, Poland // Creative Developer & Game Designer</p>
            </div>
            <span className="text-sm">2024 – 2025</span>
          </div>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Led early stage product design for games and software applications using agile methodologies.</li>
            <li>• Integrated AI tools to enhance workflow and player experience.</li>
            <li>• Collaborated with cross-functional teams to deliver intuitive, accessible UI/UX.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h3 className="font-bold text-base">Freelance</h3>
              <p className="text-sm italic">Remote // Product Designer & Developer</p>
            </div>
            <span className="text-sm">2020 – Present</span>
          </div>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Developed responsive websites and prototypes using modern UX principles (Figma, React, Tailwind).</li>
            <li>• Applied Scrum and Kanban to manage client projects efficiently.</li>
            <li>• Coordinated with product owners to deliver projects on time and within budget.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h3 className="font-bold text-base">United Postal Service (UPS)</h3>
              <p className="text-sm italic">Gardner, Kansas, USA // Floor Supervisor & Multi-Role Coordinator</p>
            </div>
            <span className="text-sm">2018 – 2019</span>
          </div>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Managed a team of 5+, coordinating Safety, Training, and IT roles.</li>
            <li>• Developed onboarding procedures and tracked performance metrics.</li>
            <li>• Applied agile principles to warehouse and team management.</li>
          </ul>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="mb-8">
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">Notable Projects</h2>
        <div className="border-b border-black mb-4"></div>
        
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-bold text-base">Poly Plaza | Game Designer</h3>
            <span className="text-sm">2025</span>
          </div>
          <p className="text-sm italic mb-2">Open-world entrepreneurial sandbox game with economic and progression systems.</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Maintained product backlog, user stories, and managed product owner expectations.</li>
            <li>• Developed narrative and gameplay mechanics.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-bold text-base">Art Pocketbook | UX Designer</h3>
            <span className="text-sm">2024</span>
          </div>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Conducted research to improve website accessibility and user experience.</li>
            <li>• Implemented data-driven design improvements and maintained a design system.</li>
          </ul>
        </div>
      </section>

      {/* Hard/Soft Skills */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wide mb-2">Hard/Soft Skills</h2>
        <div className="border-b border-black mb-4"></div>
        <ul className="text-sm space-y-1 ml-4">
          <li>• Agile & Project Management: Scrum, Sprint Planning, Backlog Management, Kanban, Agile Metrics, Continuous Improvement</li>
          <li>• Game Design: Level Design, Systems Design, UX for Games</li>
          <li>• AI Tools: Workflow optimization</li>
          <li>• Development: HTML, CSS, JavaScript, React, Tailwind, Lua</li>
          <li>• Cross-functional team leadership & collaboration</li>
          <li>• Strong presentation & stakeholder management/communication</li>
          <li>• Agile coaching and facilitation of Scrum ceremonies</li>
          <li>• Data-driven decision-making and iterative design</li>
        </ul>
      </section>
    </div>
  );
};

export default CVPage;