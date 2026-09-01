"use client";

import Image from "next/image";

export default function DigitalVideoSplit() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      title: "View Projects",
      subtitle: "Explore our signature interiors",
      image: "/images/IMG_8689.JPG",
      onClick: () => scrollToSection("projects"),
    },
    {
      title: "Contact Us",
      subtitle: "Let’s discuss your dream space",
      image: "/images/IMG_9899.JPG",
      onClick: () => scrollToSection("about"),
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto mt-16 px-6 md:px-10"
      aria-label="Interior design navigation section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") item.onClick();
            }}
            className="relative group overflow-hidden cursor-pointer h-[400px] md:h-[500px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--peach)]"
            aria-label={`Navigate to ${item.title}`}
          >
            <Image
              src={item.image}
              alt={`${item.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--skin)] mb-3">Sheelwalia Designs</p>
              <h3 className="font-serif text-2xl md:text-4xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/80">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
