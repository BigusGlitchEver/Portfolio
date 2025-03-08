import React from 'react';

const CVPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Samuel Bigus</h1>
        <p className="text-gray-600 mb-2">
          samuelshmoobigus@yahoo.com
        </p>
        <div className="text-sm text-gray-600">
          Portfolio:
          <div className="space-y-1">
            <a href="https://biguswebdesign.com" className="text-blue-600 hover:underline block">
              https://biguswebdesign.com
            </a>
            <a href="https://bigusdesign.com" className="text-blue-600 hover:underline block">
              https://bigusdesign.com
            </a>
            <a href="https://store.steampowered.com/app/1265300/Broll/" className="text-blue-600 hover:underline block">
              https://store.steampowered.com/app/1265300/Broll/
            </a>
            <a href="https://store.steampowered.com/app/2716030/Poly_Plaza/" className="text-blue-600 hover:underline block">
              https://store.steampowered.com/app/2716030/Poly_Plaza/
            </a>
          </div>
        </div>
      </header>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Languages</h2>
        <p className="text-sm">English: Native<br />Hebrew: Basic</p>
      </section>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Professional Summary</h2>
        <p className="text-sm">
          Product designer and frontend developer with experience in creating user-centered digital experiences across 
          games and web platforms. Proficient in Tailwind, JavaScript, CSS, HTML, Lua, and React, leveraging agile methodologies and Scrum frameworks to 
          enhance coding efficiency. Proven track record in simplifying complex processes through intuitive interfaces, 
          conducting user research, implementing sprint planning, backlog refinement, and agile development for responsive, accessible designs.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Professional Experience</h2>
        
        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Make a Friend</h3>
                <p className="text-sm font-medium">Creative Developer & Game Designer</p>
                <p className="text-sm text-gray-600">Warszawa, Poland</p>
              </div>
              <span className="text-sm">October 2024 - January 2025</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Led end-to-end product design for gaming and software applications using user-centered design principles and agile methodologies with sprint-based delivery</li>
            <li>Conducted competitive analysis and user research to inform design decisions</li>
            <li>Facilitated sprint planning and retrospectives to continuously improve team workflows</li>
            <li>Managed product backlog and prioritized user stories based on business value</li>
            <li>Collaborated with cross-functional teams to deliver intuitive user interfaces</li>
            <li>Integrated AI technologies to enhance user experience and workflow efficiency</li>
            <li>Implemented Scrum ceremonies to ensure transparent communication and iterative development</li>
            <li>Utilized Kanban boards to visualize workflow and remove impediments</li>
            <li>Created and maintained design documentation for consistent implementation</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Big Art with Sam</h3>
                <p className="text-sm font-medium">Artist and Technical Designer</p>
                <p className="text-sm text-gray-600">Remote</p>
              </div>
              <span className="text-sm">2023 - 2024</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Researched user needs and market trends to inform product development</li>
            <li>Created user-centered designs based on customer feedback and market analysis</li>
            <li>Employed agile mindset to rapidly iterate designs based on user feedback</li>
            <li>Organized work into sprints to maintain clear milestones and deliverables</li>
            <li>Managed product lifecycle from concept to launch while maintaining focus on user experience</li>
            <li>Utilized story points for estimating effort and planning capacity</li>
            <li>Practiced continuous improvement through regular retrospectives</li>
            <li>Conducted customer interviews to validate product decisions</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Freelance</h3>
                <p className="text-sm font-medium">Product Designer & Developer</p>
                <p className="text-sm text-gray-600">Remote</p>
              </div>
              <span className="text-sm">2020 - Present</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Design and develop responsive websites using modern UX principles</li>
            <li>Applied Scrum principles to manage client projects with transparency and adaptability</li>
            <li>Create high-fidelity prototypes using Figma, incorporating user feedback for iterative improvements</li>
            <li>Conducted sprint reviews to showcase incremental progress and gather stakeholder feedback</li>
            <li>Lead user research and testing sessions to validate design solutions</li>
            <li>Utilized agile user stories to capture requirements from a user-centered perspective</li>
            <li>Manage end-to-end design process from discovery to implementation for diverse clients</li>
            <li>Maintained a flexible backlog of features prioritized by user value and business impact</li>
            <li>Develop and maintain consistent design systems across multiple digital platforms</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">United Postal Service (UPS)</h3>
                <p className="text-sm font-medium">Floor Supervisor & Multi-Role Coordinator</p>
                <p className="text-sm text-gray-600">Gardner, Kansas, United States</p>
              </div>
              <span className="text-sm">2018 - 2019</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Coordinated multiple roles including Safety Supervisor, Training Supervisor, and IT Support</li>
            <li>Implemented daily stand-ups to improve team communication and identify blockers</li>
            <li>Created and maintained comprehensive safety documentation and training programs</li>
            <li>Applied agile principles to warehouse operations, improving efficiency and adaptability</li>
            <li>Managed team of 15+ employees, ensuring efficient package flow while maintaining safety standards</li>
            <li>Utilized visual management boards to track work progress and identify bottlenecks</li>
            <li>Developed and implemented new employee onboarding procedures</li>
            <li>Facilitated continuous improvement through regular team retrospectives</li>
            <li>Tracked and reported key performance metrics for package handling and delivery</li>
            <li>Administered technical systems including scanner distribution and maintenance</li>
          </ul>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Notable Projects</h2>
        
        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">Poly Plaza | Game Designer</h3>
              <span className="text-sm">2024</span>
            </div>
          </div>
          <p className="text-sm italic mb-2">Open-world entrepreneurial sandbox game</p>
          <ul className="list-disc list-inside text-sm">
            <li>Designed economic systems and progression mechanics</li>
            <li>Utilized Scrum framework to organize development into two-week sprints</li>
            <li>Implemented resource management and property systems</li>
            <li>Maintained product backlog with user stories and acceptance criteria</li>
            <li>Created intuitive UI/UX for complex management systems</li>
            <li>Utilized Lua to create dynamic game logic</li>
            <li>Applied iterative development approach to rapidly test and refine gameplay mechanics</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">Broll | Level Designer & Systems Designer</h3>
              <span className="text-sm">2023</span>
            </div>
          </div>
          <p className="text-sm italic mb-2">3D ragdoll-based platformer with open-level design</p>
          <ul className="list-disc list-inside text-sm">
            <li>Designed physics-based gameplay mechanics</li>
            <li>Facilitated sprint planning, daily stand-ups, and retrospectives throughout development</li>
            <li>Created intuitive level progression and player guidance systems</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">Art Pocketbook</h3>
              <span className="text-sm">2024</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Conducted user research to improve website accessibility and user experience</li>
            <li>Implemented data-driven design improvements based on user feedback</li>
            <li>Created and maintained design system for consistent user interface</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Education</h2>
        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-semibold">University of Kansas</h3>
              <p className="text-sm">Bachelor of Arts in Orchestral Instrumentation</p>
            </div>
            <span className="text-sm">2010 - 2015</span>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Technical Skills</h2>
        <div className="text-sm space-y-2">
          <p><span className="font-semibold">Design Tools:</span> Figma (components, auto-layout), Adobe Creative Suite</p>
          <p><span className="font-semibold">Research:</span> User interviews, usability testing, competitive analysis</p>
          <p><span className="font-semibold">Development:</span> HTML/CSS, responsive design, WordPress</p>
          <p><span className="font-semibold">Game Design:</span> Level design, systems design, Lua</p>
          <p><span className="font-semibold">AI Tools:</span> AI utilization for development and workflow optimization</p>
          <p><span className="font-semibold">Agile & Project Management:</span> Scrum Master principles, Sprint planning and facilitation, Backlog management and refinement, User story creation and estimation, Kanban and flow optimization, Agile metrics and reporting, Facilitation of Scrum ceremonies, Continuous improvement processes</p>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Additional Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Strong communication and presentation abilities</li>
          <li>Client collaboration and project management</li>
          <li>Agile coaching and team facilitation</li>
          <li>Sprint planning and execution</li>
          <li>Stakeholder management within agile frameworks</li>
          <li>Cross-functional team leadership</li>
          <li>Data-driven decision making</li>
        </ul>
      </section>
    </div>
  );
};

export default CVPage;