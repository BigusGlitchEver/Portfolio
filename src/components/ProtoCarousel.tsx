import { useState } from 'react';

export type CarouselItem =
  | { type: 'video'; src: string }
  | { type: 'image'; src: string; alt: string };

export default function ProtoCarousel({ items }: { items: CarouselItem[] }) {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const current = items[index];

  return (
    <div className="relative w-full aspect-video bg-black rounded overflow-hidden select-none">
      {current.type === 'video' ? (
        <video
          key={current.src}
          src={current.src}
          controls
          playsInline
          className="w-full h-full object-contain bg-black"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-contain bg-black"
        />
      )}

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center text-xl leading-none transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center text-xl leading-none transition-colors"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/35 rounded-full px-2 py-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-[#66c0f4]' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
