const fs = require('fs');
const path = require('path');

/**
 * CV PDF Generator
 * 
 * This script generates a PDF from the CV page content.
 * It reads the CV React component and creates a clean PDF version.
 * 
 * Usage: node scripts/generate-cv-pdf.js
 */

// Simple HTML template for the CV content
const generateCVHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Samuel Shmoo Bigus - CV</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #000;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 30px 0 10px 0;
            border-bottom: 2px solid #000;
            padding-bottom: 5px;
        }
        h3 {
            font-size: 1rem;
            font-weight: bold;
            margin: 20px 0 5px 0;
        }
        p {
            margin: 10px 0;
            font-size: 0.9rem;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        li {
            margin: 5px 0;
            font-size: 0.9rem;
        }
        .header-section {
            margin-bottom: 30px;
        }
        .email {
            font-size: 1rem;
            margin-bottom: 20px;
        }
        .links {
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
        .links a {
            color: #0066cc;
            text-decoration: none;
        }
        .links a:hover {
            text-decoration: underline;
        }
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 10px;
        }
        .job-title {
            font-weight: bold;
            font-size: 1rem;
        }
        .job-company {
            font-style: italic;
            font-size: 0.9rem;
        }
        .job-dates {
            font-size: 0.9rem;
        }
        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 10px;
        }
        .project-title {
            font-weight: bold;
            font-size: 1rem;
        }
        .project-dates {
            font-size: 0.9rem;
        }
        .project-description {
            font-style: italic;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        .skills-list {
            margin: 10px 0;
            padding-left: 20px;
        }
        .skills-list li {
            margin: 5px 0;
            font-size: 0.9rem;
        }
        @media print {
            body { margin: 0; padding: 20px; }
            h1 { font-size: 2rem; }
            h2 { font-size: 1.1rem; }
        }
    </style>
</head>
<body>
    <div class="header-section">
        <h1>Samuel Shmoo Bigus</h1>
        <div class="email">
            E-mail: <a href="mailto:shmoogames@yahoo.com">shmoogames@yahoo.com</a>
        </div>
        <div class="links">
            <a href="https://store.steampowered.com/app/2716030/Poly_Plaza/">Poly Plaza on Steam</a>
        </div>
    </div>

    <h2>Professional Summary</h2>
    <p>
        Game Producer and Product Designer experienced in leading cross-functional teams in indie and commercial projects. Currently studying at Future Games in association with CD Projekt Red. Skilled in agile project management, iterative design, and creating engaging player experiences.
    </p>

    <h2>Professional Experience</h2>
    
    <div class="job-header">
        <div>
            <div class="job-title">Make a Friend</div>
            <div class="job-company">Warszawa, Poland // Creative Developer & Game Designer</div>
        </div>
        <span class="job-dates">2024 – 2025</span>
    </div>
    <ul>
        <li>Led early stage product design for games and software applications using agile methodologies.</li>
        <li>Integrated AI tools to enhance workflow and player experience.</li>
        <li>Collaborated with cross-functional teams to deliver intuitive, accessible UI/UX.</li>
    </ul>

    <div class="job-header">
        <div>
            <div class="job-title">Freelance</div>
            <div class="job-company">Remote // Product Designer & Developer</div>
        </div>
        <span class="job-dates">2020 – Present</span>
    </div>
    <ul>
        <li>Developed responsive websites and prototypes using modern UX principles (Figma, React, Tailwind).</li>
        <li>Applied Scrum and Kanban to manage client projects efficiently.</li>
        <li>Coordinated with product owners to deliver projects on time and within budget.</li>
    </ul>

    <div class="job-header">
        <div>
            <div class="job-title">United Postal Service (UPS)</div>
            <div class="job-company">Gardner, Kansas, USA // Floor Supervisor & Multi-Role Coordinator</div>
        </div>
        <span class="job-dates">2018 – 2019</span>
    </div>
    <ul>
        <li>Managed a team of 5+, coordinating Safety, Training, and IT roles.</li>
        <li>Developed onboarding procedures and tracked performance metrics.</li>
        <li>Applied agile principles to warehouse and team management.</li>
    </ul>

    <h2>Notable Projects</h2>
    
    <div class="project-header">
        <div class="project-title">Poly Plaza | Game Designer</div>
        <span class="project-dates">2025</span>
    </div>
    <div class="project-description">Open-world entrepreneurial sandbox game with economic and progression systems.</div>
    <ul>
        <li>Maintained product backlog, user stories, and managed product owner expectations.</li>
        <li>Developed narrative and gameplay mechanics.</li>
    </ul>

    <div class="project-header">
        <div class="project-title">Art Pocketbook | UX Designer</div>
        <span class="project-dates">2024</span>
    </div>
    <ul>
        <li>Conducted research to improve website accessibility and user experience.</li>
        <li>Implemented data-driven design improvements and maintained a design system.</li>
    </ul>

    <h2>Hard/Soft Skills</h2>
    <ul class="skills-list">
        <li>Agile & Project Management: Scrum, Sprint Planning, Backlog Management, Kanban, Agile Metrics, Continuous Improvement</li>
        <li>Game Design: Level Design, Systems Design, UX for Games</li>
        <li>AI Tools: Workflow optimization</li>
        <li>Development: HTML, CSS, JavaScript, React, Tailwind, Lua</li>
        <li>Cross-functional team leadership & collaboration</li>
        <li>Strong presentation & stakeholder management/communication</li>
        <li>Agile coaching and facilitation of Scrum ceremonies</li>
        <li>Data-driven decision-making and iterative design</li>
    </ul>
</body>
</html>
  `;
};

// Generate the HTML file
const generateHTMLFile = () => {
  const htmlContent = generateCVHTML();
  const outputPath = path.join(__dirname, '..', 'public', 'cv-print.html');
  
  // Ensure the public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, htmlContent);
  console.log(`✅ Generated HTML file: ${outputPath}`);
  return outputPath;
};

// Main execution
try {
  console.log('🚀 Generating CV PDF...');
  
  // Generate HTML file
  const htmlPath = generateHTMLFile();
  
  console.log(`
📋 Next steps:
1. Open the generated HTML file in your browser: ${htmlPath}
2. Use your browser's "Print to PDF" feature (Ctrl+P or Cmd+P)
3. Save the PDF as "Samuel_Shmoo_Bigus_CV.pdf" in the public folder
4. Replace the existing PDF file at: public/Samuel_Shmoo_Bigus_CV.pdf

The HTML file has been optimized for printing and should generate a clean PDF.
  `);
  
} catch (error) {
  console.error('❌ Error generating CV PDF:', error.message);
  process.exit(1);
}
