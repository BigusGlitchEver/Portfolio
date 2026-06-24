// Shared portfolio data.
// NOTE: copy in this file intentionally avoids em dashes per Shmoo's preference.
import React from 'react';
import { Gamepad2, Zap, Users, Globe, Brush } from 'lucide-react';

// Remote art for the two newest titles (loaded directly from their public pages).
// These can later be replaced with local files in /public for stability.
export const COWBOY_ART =
  'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151380/1d5a4da08989c4c3aadd687597b2bd38602e61f9/header.jpg';
export const ABYSSAL_ART =
  'https://www.abyssalguardians.com/assets/abyssal-guardians-logo.svg';

export interface Headliner {
  title: string;
  studio: string;
  description: string;
  image: string;
  imageStyle?: 'cover' | 'contain';
  projectLink?: string; // internal detail page, if one exists
  storeUrl: string;
  storeLabel: string;
  highlights: string[];
}

// Top of the Producer tab: four large headliner panels, in order.
export const producerHeadliners: Headliner[] = [
  {
    title: 'Cowboy Life Simulator',
    studio: 'Odd Qubit',
    description:
      'Producer on a Very Positive rated Wild West ranching sim, leading milestone planning for a 15 person team.',
    image: COWBOY_ART,
    imageStyle: 'cover',
    projectLink: '/cowboylifesim',
    storeUrl: 'https://store.steampowered.com/app/1151380/Cowboy_Life_Simulator/',
    storeLabel: 'View on Steam',
    highlights: [
      'Lead work distribution planning, scheduling tasks up to 4 months ahead to hit publisher milestones, with every milestone met on time',
      'Coordinate a 15 person cross discipline team and onboard new interns and employees',
      'Scout and recruit voice acting talent for the game cast',
      'Support live production of a Very Positive rated title with 90 percent of over 1,000 Steam reviews',
    ],
  },
  {
    title: 'Abyssal Guardians',
    studio: 'Smoothie Studio',
    description:
      'Producer on a 1 to 4 player co op survival shooter set on humanity’s last oil rig, currently in public reveal.',
    image: ABYSSAL_ART,
    imageStyle: 'contain',
    projectLink: '/abyssalguardians',
    storeUrl: 'https://abyssalguardians.com',
    storeLabel: 'Visit Site',
    highlights: [
      'Restructured task organization and scheduling into a 2 week sprint cycle for a 5 person team',
      'Manage outsourcing and freelance staffing to bring the best value to the project',
      'Onboard new interns and employees',
      'Supporting the public reveal and marketing kickoff of the co op survival shooter',
    ],
  },
  {
    title: 'Whimpact!',
    studio: 'Level Headed Games',
    description:
      'Intern Producer supporting a multiplayer Steam launch with Level Headed Games, a 5 person team.',
    image: '/LevelHeadedLogo.png',
    imageStyle: 'cover',
    projectLink: '/whimpact',
    storeUrl: 'https://store.steampowered.com/app/3131260/Whimpact/',
    storeLabel: 'View on Steam',
    highlights: [
      'Strategize directly with CEO and Producer Leah Hoyer on project direction and prioritization',
      'Participate in production meetings and contribute to sprint planning',
      'Organize and coordinate internal and external game tests',
      'Support launch readiness for an online multiplayer Steam release with a 5 person team',
    ],
  },
  {
    title: 'Poly Plaza',
    studio: 'The Poly Plaza Company',
    description:
      'Project Manager on a live service Steam sandbox focused on property management and economic systems, a 2 person team.',
    image: '/polyplaza.png',
    imageStyle: 'cover',
    projectLink: '/polyplaza-producer',
    storeUrl: 'https://store.steampowered.com/app/2716030/Poly_Plaza/',
    storeLabel: 'View on Steam',
    highlights: [
      'Set milestones and monitored progress throughout the development cycle',
      'Communicated project vision to investors and stakeholders',
      'Made data driven decisions using player analytics and maintained product cohesion after launch',
    ],
  },
];

// "All Games" grid on the Producer tab: every title, small-card layout.
export const gamesSection = {
  title: 'Games',
  icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
  description: 'A selection of the titles I have produced, from shipped Steam releases to game jam projects.',
  projects: [
    {
      title: 'Cowboy Life Simulator',
      description: 'Wild West ranching sim, Very Positive on Steam. Producer for a 15 person team.',
      image: COWBOY_ART,
      imageStyle: 'cover',
      link: '/cowboylifesim',
      categories: ['Production', 'Milestone Planning', 'Team Leadership', 'Live Service'],
      buttons: [
        { label: 'View on Steam', url: 'https://store.steampowered.com/app/1151380/Cowboy_Life_Simulator/' },
      ],
      highlights: [
        'Lead milestone planning up to 4 months ahead for a 15 person team',
        'Scout voice talent and onboard new interns and employees',
      ],
    },
    {
      title: 'Abyssal Guardians',
      description: 'A 1 to 4 player co op survival shooter on humanity’s last oil rig. Producer for a 5 person team.',
      image: ABYSSAL_ART,
      imageStyle: 'contain',
      link: '/abyssalguardians',
      categories: ['Production', 'Scheduling', 'Outsourcing', 'Co-op Shooter'],
      buttons: [{ label: 'Visit Site', url: 'https://abyssalguardians.com' }],
      highlights: [
        'Restructured scheduling into a 2 week sprint cycle',
        'Manage outsourcing and freelance staffing',
      ],
    },
    {
      title: 'Whimpact!',
      description: 'Producer Intern supporting a multiplayer Steam launch with Level Headed Games.',
      image: '/LevelHeadedLogo.png',
      imageStyle: 'cover',
      link: '/whimpact',
      categories: ['Production', 'Game Testing', 'Scrum', 'Launch Preparation'],
      buttons: [{ label: 'View on Steam', url: 'https://store.steampowered.com/app/3131260/Whimpact/' }],
      highlights: [
        'Strategize with CEO and Producer Leah Hoyer on direction',
        'Support launch readiness for an online multiplayer Steam release',
      ],
    },
    {
      title: 'Poly Plaza',
      description: 'Live service Steam sandbox focused on property management and economic systems.',
      image: '/polyplaza.png',
      imageStyle: 'cover',
      link: '/polyplaza-producer',
      categories: ['Production', 'Project Management', 'Analytics', 'Post-Launch Support'],
      buttons: [{ label: 'View on Steam', url: 'https://store.steampowered.com/app/2716030/Poly_Plaza/' }],
      highlights: [
        'Set milestones and monitored progress across the development cycle',
        'Communicated vision to investors and made data driven decisions',
      ],
    },
    {
      title: 'Wastemancer',
      description: 'Led a team of 12 across Poland, Sweden, and China to ship a competitive game in 3 weeks.',
      image: '/WastemancerPoster.png',
      imageStyle: 'cover',
      link: '/wastemancer',
      categories: ['Production', 'Team Leadership', 'Cross-Cultural Collaboration', 'Coaching'],
      buttons: [{ label: 'Play on Itch', url: 'https://shmoogames.itch.io/wastemancer' }],
      highlights: [
        'Led an international team of 12 to deliver a complete game in 3 weeks',
        'Managed the project with Notion, Jira, and Miro across disciplines',
      ],
    },
    {
      title: 'Necromeowcy',
      description: 'Produced a city builder cat necromancer game with a team of 13 during a 7 day Game Jam.',
      image: '/Necromeowcy_logo.png',
      imageStyle: 'cover',
      link: '/necromeowcy',
      categories: ['Game Jam', 'Production', 'City Builder', 'Team Leadership'],
      buttons: [{ label: 'Play on Itch', url: 'https://pandagp.itch.io/necromeowcy' }],
      highlights: [
        'Led art production and coordinated meetings for a 13 person team',
        'Managed the art pipeline during an intensive 7 day jam',
      ],
    },
  ],
};

// Design tab.
export const designSection = {
  title: 'Design',
  icon: <Zap className="w-8 h-8 text-blue-400" />,
  description: 'Designing mechanics, systems, and experiences that engage players.',
  projects: [
    {
      title: 'Poly Plaza',
      description: 'A sandbox game focused on property management and economic systems.',
      image: '/polyplaza.png',
      categories: ['Game Design', 'Quest Design', 'Mechanics Design', 'AI Utilization', 'Low Code'],
      link: '/polyplaza',
      buttons: [{ label: 'View on Steam', url: 'https://store.steampowered.com/app/2716030/Poly_Plaza/' }],
      highlights: [
        'Designed complex economic systems for property management gameplay',
        'Created engaging quest structures and mechanics design',
      ],
    },
    {
      title: 'Zine #4 & Snakes and Unions',
      description: 'A reimagined Snakes & Ladders game exploring wealth inequality and collective action.',
      image: '/zine.png',
      categories: ['Game Design', 'Product Design', 'Visual Design', 'Research', 'Publications', 'Photo Editing'],
      link: '/zine',
      buttons: [
        { label: 'Bang Bang Zine', url: 'https://www.bangbangzine.com/collections/zinemate/products/zinemate-the-zine-bathroom-reader-4' },
      ],
      highlights: [
        'Reimagined a classic board game to explore social commentary on wealth inequality',
        'Combined game design with visual storytelling and research',
      ],
    },
    {
      title: 'Judaic Tarot Deck',
      description: 'Complete deck design based on Jewish mysticism.',
      image: '/judaictarot.png',
      categories: ['Product Design', 'Visual Design', 'Research', 'Publications', 'Photo Editing'],
      link: '/tarot',
      buttons: [{ label: 'Judaic Tarot Deck', url: 'https://shmoobigus.gumroad.com/l/lmqwdc' }],
      highlights: [
        'Researched and designed a complete 78 card deck based on Jewish mysticism',
        'Created a unique visual system blending traditional tarot with Judaic imagery',
      ],
    },
  ],
};

// Collaboration tab.
export const collaborationSection = {
  title: 'Collaboration',
  icon: <Globe className="w-8 h-8 text-blue-400" />,
  description: 'Working directly with clients to deliver solutions across cultures.',
  projects: [
    {
      title: 'Save Yalla',
      description: 'Video production and fundraising campaign for educational resources.',
      image: '/saveyalla.png',
      categories: ['Client Collaboration', 'Video Production', 'Interview', 'Marketing'],
      link: '/saveyalla',
      buttons: [{ label: 'Watch Video', url: 'https://www.youtube.com/embed/tcOjjBmDXsc' }],
      highlights: [
        'Produced video content for an educational fundraising campaign in Sri Lanka',
        'Conducted interviews and marketing strategy to support community education',
      ],
    },
    {
      title: 'Wild Breeze Infomercial',
      description: 'Commercial production for a boutique bungalow resort.',
      image: '/wildbreeze.png',
      categories: ['Client Collaboration', 'Video Production', 'Narration'],
      link: '/wildbreeze',
      buttons: [{ label: 'Watch Video', url: 'https://www.youtube.com/embed/m1-keRN0FCY' }],
      highlights: [
        'Created and narrated a professional commercial for a boutique resort',
        'Collaborated with the client to capture authentic Sri Lankan hospitality',
      ],
    },
    {
      title: 'Zul’s Highway Cafe',
      description: 'Complete menu redesign and brand refresh.',
      image: '/cafemenu.png',
      categories: ['Client Collaboration', 'Product Design', 'Visual Design', 'Photo Editing'],
      link: '/cafe',
      highlights: [
        'Redesigned the complete menu system and refreshed brand identity for a Malaysian cafe',
        'Combined product design with photo editing to showcase authentic cuisine',
      ],
    },
    {
      title: 'Poetry Book Cover',
      description: 'Cover design for a local poet’s anthology.',
      image: '/yesican.png',
      categories: ['Client Collaboration', 'Product Design', 'Visual Design', 'Photo Editing'],
      link: '/yesican',
      highlights: [
        'Designed a book cover for a local Sri Lankan poet’s anthology',
        'Captured cultural authenticity through visual design and photo editing',
      ],
    },
    {
      title: 'Sathanee Jam Labels',
      description: 'Product label design for an artisan restaurant.',
      image: '/jamjar.png',
      categories: ['Client Collaboration', 'Product Design', 'Visual Design', 'Photo Editing'],
      link: '/jam-jars',
      highlights: [
        'Created artisan product labels for a Thai restaurant jam collection',
        'Developed a visual identity that reflects handcrafted quality',
      ],
    },
  ],
};

// Product Management tab.
export const productManagementSection = {
  title: 'Product Management & Strategy',
  icon: <Users className="w-8 h-8 text-blue-400" />,
  description: 'Leading teams and managing complex projects across cultures.',
  projects: [
    {
      title: 'Make a Friend',
      description: 'Social platform combining chat functionality with collaborative game creation.',
      image: '/makeafriend.png',
      categories: ['Strategy', 'Project Management', 'UX Research', 'Game Design', 'Figma', 'UX/UI Design', 'Coding', 'AI Utilization', 'Market Research', 'Web Design', 'Photo Editing'],
      link: '/makeafriend',
      imageStyle: 'contain',
      highlights: [
        'Guided a diverse team in building a social platform that makes connecting through play natural and rewarding.',
      ],
    },
    {
      title: 'Next SaaS',
      description: 'Website development and monitoring solutions for businesses.',
      image: '/nextsaaslogo.png',
      categories: ['Business Strategy', 'Project Management', 'UX/UI Design', 'Research', 'Figma', 'Web Design', 'Coding', 'AI Utilization'],
      link: '/nextsaas',
      imageStyle: 'contain',
      highlights: [
        'Developed a comprehensive business strategy for a SaaS website monitoring platform',
        'Led project management and UX/UI design from concept to implementation',
      ],
    },
    {
      title: 'Bigus Web Design',
      description: 'Crafting digital experiences through component based design and AI.',
      image: '/BWDCover2.png',
      categories: ['Project Management', 'Web Design', 'UX/UI Design', 'Coding', 'AI Utilization'],
      link: '/biguswebdesign',
      imageStyle: 'cover',
      buttons: [{ label: 'Visit Website', url: 'https://biguswebdesign.com/' }],
      highlights: [
        'Managed a component based design system using AI assisted workflows',
        'Coordinated a cross functional team to deliver modern web experiences',
         ],
    },
  ],
};
