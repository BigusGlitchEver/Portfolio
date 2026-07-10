import React from 'react';
import Head from 'next/head';
import { Poppins, JetBrains_Mono } from "next/font/google";
import ProtoCarousel, { CarouselItem } from '@/components/ProtoCarousel';

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

        <footer className="mt-16 sm:mt-20 pt-8 border-t border-[#2a475e] flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/proto/media/author.jpg"
            alt="Samuel Shmoo Bigus"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-[#2a475e]"
          />
          <div>
            <div className="text-sm sm:text-base text-white">Samuel Shmoo Bigus</div>
            <div className="text-xs sm:text-sm text-[#66c0f4]">the person behind these prototypes</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
