'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ASSETS = [
  {
    src: '/images/IMG_7133.PNG',
    title: 'contemporary interior',
  },
  {
    src: '/images/IMG_7434.PNG',
    title: 'refined living space',
  },
  {
    src: '/images/IMG_7436.PNG',
    title: 'warm bedroom',
  },
  {
    src: '/images/IMG_8686.PNG',
    title: 'luxury details',
  },
  {
    src: '/images/IMG_8687.JPG',
    title: 'bespoke interior',
  },
  {
    src: '/images/IMG_8688.JPG',
    title: 'elegant space',
  },
];

export default function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  const toPrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const toNext = () => {
    setActiveIndex((prev) => Math.min(ASSETS.length - 1, prev + 1));
  };

  const toSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full border-y border-[var(--rule)] py-16 md:py-20 flex justify-center items-center">
      <div className="w-full text-[var(--charcoal)] select-none flex flex-col items-center gap-8">

        {/* carousel wrapper */}
        <div className="w-[clamp(120px,80vmin,300px)] mt-8">
          {/* slides container */}
          <motion.div
            className="flex w-fit"
            animate={{ x: `${-activeIndex * (100 / ASSETS.length)}%` }}
            transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
          >
            {ASSETS.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  className="w-[clamp(120px,80vmin,300px)] aspect-square flex flex-col items-center gap-2 will-change-[transform,scale]"
                  animate={{
                    rotate: (i - activeIndex) * 30,
                    scale: isActive ? 1 : 0.6,
                    y: `${(i - activeIndex) * 50}%`,
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
                >
                  <div
                    className={`text-xs md:text-sm whitespace-nowrap will-change-[opacity,filter] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-70'
                    }`}
                  >
                    {item.title}
                  </div>

                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover cursor-pointer border border-[var(--rule)] p-1 transition-transform duration-500 hover:scale-[1.02]"
                    onClick={() => toSlide(i)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* controls */}
        <div className="w-fit px-2 flex items-center gap-4 justify-center text-[var(--charcoal)] border border-[var(--rule)] bg-white/60 backdrop-blur-xs">
          {/* prev button */}
          <button onClick={toPrev} aria-label="Previous interior" className="p-2 cursor-pointer hover:text-[var(--peach)] transition-colors">
            <ChevronLeft />
          </button>
          {/* slide dots */}
          <div className="w-[180px] flex justify-center items-center gap-2">
            {ASSETS.map((_, i) => (
              <div
                key={i}
                onClick={() => toSlide(i)}
                role="button"
                aria-label={`Show interior ${i + 1}`}
                aria-current={activeIndex === i}
                className={`rounded-full cursor-pointer h-2 transition-[width,background-color] duration-300 ${
                  activeIndex === i ? 'w-7 bg-current' : 'w-2 bg-current/30'
                }`}
              />
            ))}
          </div>
          {/* next button */}
          <button onClick={toNext} aria-label="Next interior" className="p-2 cursor-pointer hover:text-[var(--peach)] transition-colors">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
