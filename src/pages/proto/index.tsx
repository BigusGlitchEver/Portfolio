import React, { useState } from 'react';
import Head from 'next/head';
import { Poppins, JetBrains_Mono } from "next/font/google";
import ProtoCarousel, { CarouselItem } from '@/components/ProtoCarousel';

const FEEDBACK_EMAIL = 'shmoogames@yahoo.com';
const GAME_TITLES = ['Coin Flipper', 'Beaver Necromancer', 'Musical Mayhem', 'More than one'];

function FeedbackForm() {
  const [game, setGame] = useState(GAME_TITLES[0]);
  const [thoughts, setThoughts] = useState('');
  const [email, setEmail] = useState('');
  const [canContact, setCanContact] = useState(false);

  const subject = `Prototype feedback — ${game}`;
  const body =
    `Which one did you play?\n${game}\n\n` +
    `Any thoughts — what'd you like, what didn't you?\n${thoughts || '(fill in here)'}\n\n` +
    `Their email: ${email || '(not given)'}\n` +
    `OK to email about future updates: ${canContact ? 'Yes' : 'No'}\n\n` +
    `Thanks for playing!!`;
  const mailtoHref = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="max-w-md mx-auto text-left bg-[#16202d] border border-[#2a475e] rounded-lg p-5 sm:p-6">
      <h3 className="text-base sm:text-lg text-white mb-1">Got feedback?</h3>
      <p className="text-xs sm:text-sm text-[#acb2b8] mb-4">
        Let me know which one you played and what you thought — good or bad, I want to hear it.
      </p>

      <label className="block text-xs uppercase tracking-wide text-[#66c0f4] mb-1">
        Which one did you play?
      </label>
      <select
        value={game}
        onChange={(e) => setGame(e.target.value)}
        className="w-full bg-[#1b2838] border border-[#2a475e] rounded px-3 py-2 text-sm text-white mb-4"
      >
        {GAME_TITLES.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <label className="block text-xs uppercase tracking-wide text-[#66c0f4] mb-1">
        What&apos;d you like? What didn&apos;t you?
      </label>
      <textarea
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
        rows={4}
        placeholder="Type your thoughts here..."
        className="w-full bg-[#1b2838] border border-[#2a475e] rounded px-3 py-2 text-sm text-white placeholder-[#5d7a99] mb-4"
      />

      <label className="block text-xs uppercase tracking-wide text-[#66c0f4] mb-1">
        Your email (optional)
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full bg-[#1b2838] border border-[#2a475e] rounded px-3 py-2 text-sm text-white placeholder-[#5d7a99] mb-3"
      />

      <label className="flex items-start gap-2 text-xs sm:text-sm text-[#acb2b8] mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={canContact}
          onChange={(e) => setCanContact(e.target.checked)}
          className="mt-0.5"
        />
        <span>OK to email me about future updates on any of these games</span>
      </label>

      <a
        href={mailtoHref}
        className="inline-block px-4 py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-white text-sm font-medium rounded transition-colors"
      >
        Send Feedback
      </a>
      <p className="text-xs text-[#5d7a99] mt-3">
        Opens your email app, addressed to {FEEDBACK_EMAIL}. Or just email me directly.
      </p>
    </div>
  );
}

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

type Game = {
  slug: string;
  title: string;
  tags: string[];
  blurb: string;
  howToPlay: string[];
  media: CarouselItem[];
};

const games: Game[] = [
  {
    slug: 'coin-flipper',
    title: 'Coin Flipper',
    tags: ['Balatro-inside', 'Cookie Clicker-outside', 'Tiddlywinks'],
    blurb: "Collect and flip to win! Conquer your neighborhood by beating out the competition in a high-scoring, combo-rich game of flipping.",
    howToPlay: [
      "Click a coin with your striker to make a shot. A middle touch is a short hop, an edge touch is a long drive. One click and it's airborne.",
      "Land on the marked scoring zones — bare table pays nothing and wears your coin's value down (High → Med → Low).",
      "Use A / D to switch which coin under the striker flips, and right-click to aim a pocket trick (call a zone, tack a coin down). Esc puts an aimed trick back in your pocket.",
      "Beat each kid's meter to conquer their turf, then work your way across the whole neighborhood map.",
    ],
    media: [
      { type: 'video', src: '/proto/media/coin-flipper/demo.mp4' },
      { type: 'image', src: '/proto/media/coin-flipper/shot-hopscotch.png', alt: 'Coin Flipper — Hopscotch Court match' },
      { type: 'image', src: '/proto/media/coin-flipper/shot-psst-new-kid.png', alt: 'Coin Flipper — Tutorial Tommy dialog' },
      { type: 'image', src: '/proto/media/coin-flipper/shot-neighborhood.png', alt: 'Coin Flipper — the neighborhood map' },
    ],
  },
  {
    slug: 'beaver-necromancer',
    title: 'Beaver Necromancer',
    tags: ['Necromancer Sim', 'Beaver Sim', 'Vampire Survivor'],
    blurb: "Create your horde, build your dam, defeat the damn industrial developers! Level up and utilize your surroundings in order to defeat your enemies, but when that's not enough you can always resort to Demonic Rituals.",
    howToPlay: [
      "Move with WASD / Arrow keys.",
      "Your circle of influence follows you. Any salmon caught inside it rises as an undead fish and heals you.",
      "Your undead gather wood and build the dam automatically. Tap an undead to open a slow-mo job wheel and set it to GATHER or DEFEND.",
      "Drag a box to select a group of your undead, or drag over a stream to mark a dam site (narrow = cheap, wide = slow to build).",
      "Stand on the dam and press F to release the river down the one open path, wiping out the industrial camp at the end of it. Rebuild and repeat until every camp is flooded.",
      "Hit SPACE once Frenzy is charged to call the whole horde to your side. When things get desperate, demonic rituals are on the table.",
    ],
    media: [
      { type: 'video', src: '/proto/media/beaver-necromancer/demo.mp4' },
      { type: 'image', src: '/proto/media/beaver-necromancer/shot-title.png', alt: 'Beaver Necromancer — title screen' },
      { type: 'image', src: '/proto/media/beaver-necromancer/shot-boon.png', alt: 'Beaver Necromancer — choose a boon' },
      { type: 'image', src: '/proto/media/beaver-necromancer/shot-objective.png', alt: 'Beaver Necromancer — early objective, Dam Level 1' },
      { type: 'image', src: '/proto/media/beaver-necromancer/shot-dam7.png', alt: 'Beaver Necromancer — the horde swarms at Dam Level 7' },
      { type: 'image', src: '/proto/media/beaver-necromancer/shot-dam9.png', alt: 'Beaver Necromancer — defending Dam Level 9' },
    ],
  },
  {
    slug: 'music-mayhem',
    title: 'Musical Mayhem',
    tags: ['Band manager', 'Rhythm', 'Roguelite runs'],
    blurb: "You are the manager and hiring force behind your band. Create your musical sound, develop your musicians, collect gear, and get paid. Sometimes you go to the audience, and sometimes the audience comes to you! But you always hit them with all you've got.",
    howToPlay: [
      "Pick a performer (each has a specialty) and a starting genre — matching your performer's element gives a +15% bonus.",
      "Move with WASD. Play your five band slots with Space, J, K, L, and ; — timing a press on the beat's strike gives a PERFECT.",
      "Leveling up allows you to hire band members and buy gear to build out your line-up.",
      "In between runs, go to the Green Room to spend your earnings on permanent upgrades and gear.",
      "Backstage (the Pause screen), drag a slot to rearrange your line-up, or tick Auto to let a slot play itself. Esc pauses, M mutes.",
      "Practice Mode can be found within the Pause/Backstage menu.",
    ],
    media: [
      { type: 'video', src: '/proto/media/music-mayhem/demo.mp4' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-title.png', alt: 'Musical Mayhem — pick your performer and style' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-audition.png', alt: 'Musical Mayhem — audition and gear shop' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-nice-hire.png', alt: 'Musical Mayhem — practice prompt after a new hire' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-topdown-blue.png', alt: 'Musical Mayhem — on stage gameplay' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-topdown-green.png', alt: 'Musical Mayhem — on stage gameplay, later set' },
      { type: 'image', src: '/proto/media/music-mayhem/shot-crowd.png', alt: 'Musical Mayhem — The Opening Act, crowd approval' },
    ],
  },
];

export default function ProtoIndex() {
  return (
    <div className={`${poppins.variable} ${jetBrainsMono.variable} min-h-screen bg-[#1b2838] text-gray-100`}>
      <Head>
        <title>Prototype Lab — Samuel Shmoo Bigus</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <nav className="fixed w-full top-0 z-50 bg-[#171a21]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-center items-center">
            <div className="text-2xl font-light text-white">Prototype Lab</div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
        <header className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 sm:mb-4">Prototype Lab</h1>
          <p className="text-sm sm:text-base text-[#acb2b8] max-w-2xl">
            A quiet corner for in-progress game prototypes — unlisted, unlinked, just for whoever has the URL.
            Three playable builds, still rough around the edges.
          </p>
        </header>

        <div className="space-y-10 sm:space-y-14">
          {games.map((game) => (
            <section key={game.slug} className="border border-[#2a475e] rounded-lg p-5 sm:p-8 bg-[#16202d]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <h2 className="text-2xl sm:text-3xl font-light text-white">{game.title}</h2>
                <a
                  href={`/proto/${game.slug}`}
                  className="inline-block px-4 py-2 bg-[#4C6B22] hover:bg-[#6AA621] text-white text-sm sm:text-base font-medium rounded transition-colors"
                >
                  ▶ Play
                </a>
              </div>

              <div className="mb-4">
                <ProtoCarousel items={game.media} />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {game.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 sm:px-3 sm:py-1 bg-[#67c1f533] rounded text-xs sm:text-sm text-[#66c0f4]">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-[#acb2b8] mb-5">{game.blurb}</p>

              <div>
                <h3 className="text-sm sm:text-base uppercase tracking-wide text-[#66c0f4] mb-2">How to play</h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-sm sm:text-base text-[#acb2b8]">
                  {game.howToPlay.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 sm:mt-20 pt-10 border-t border-[#2a475e] text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">Thanks for playing!!</h2>
          <p className="text-sm sm:text-base text-[#acb2b8] mb-1">Samuel Shmoo Bigus</p>
          <p className="text-sm sm:text-base text-[#66c0f4] mb-10">Shmoo Games</p>

          <FeedbackForm />
        </footer>
      </main>
    </div>
  );
}
