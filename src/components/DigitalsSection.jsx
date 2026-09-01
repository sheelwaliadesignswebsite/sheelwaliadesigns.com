"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import DigitalVideoSplit from "./DigitalVideoSplit";
import CarouselSection from "./CarouselSection";

export default function DigitalsSection() {
  const [loadedCount, setLoadedCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const observerRef = useRef(null);

  const services = [
    {
      title: "Residential Interior Design",
      description: "Tailored luxury homes shaped around comfort and timeless aesthetics.",
    },
    {
      title: "Commercial Interior Design",
      description: "Sophisticated workspaces that elevate brand identity and function.",
    },
    {
      title: "Modular Kitchen Design",
      description: "Elegant kitchens that blend smart storage with effortless style.",
    },
    {
      title: "Living Room Design",
      description: "Statement interiors that welcome, inspire, and feel beautifully curated.",
    },
    {
      title: "Bedroom Design",
      description: "Restful retreats with refined materials, soft lighting, and harmony.",
    },
    {
      title: "Office Interiors",
      description: "Premium office spaces balancing productivity, warmth, and luxury.",
    },
  ];

  const projects = [
    {
      title: "Luxury Living Room",
      category: "Residential",
      year: "2025",
      description: "A refined lounge with sculptural lighting and warm neutral tones.",
      image: "/images/IMG_0919.JPG",
    },
    {
      title: "Modern Apartment",
      category: "Apartment",
      year: "2024",
      description: "Clean-lined interiors crafted for modern urban living.",
      image: "/images/IMG_1086.JPG",
    },
    {
      title: "Elegant Bedroom",
      category: "Bedroom",
      year: "2024",
      description: "Layered textures and soft tones create a calming retreat.",
      image: "/images/IMG_5017.PNG",
    },
    {
      title: "Modular Kitchen",
      category: "Kitchen",
      year: "2023",
      description: "Functional elegance with premium finishes and smart storage.",
      image: "/images/IMG_5067.PNG",
    },
    {
      title: "Office Interior",
      category: "Commercial",
      year: "2023",
      description: "A polished workspace designed to inspire collaboration and calm.",
      image: "/images/IMG_5430.PNG",
    },
    {
      title: "Villa Design",
      category: "Luxury",
      year: "2022",
      description: "Grand interiors with architectural detailing and timeless luxury.",
      image: "/images/IMG_5501.PNG",
    },
  ];

  const testimonials = [
    {
      quote:
        "Sheelwalia Designs transformed our home into a warm, luxurious retreat. Every detail feels intentional and timeless.",
      name: "Aarav & Nisha Sharma",
      role: "Residential Clients",
    },
    {
      quote:
        "Their design process was seamless and thoughtful. The final result exceeded every expectation.",
      name: "Meera Kapoor",
      role: "Commercial Client",
    },
  ];

  const allImages = projects.map((project) => project.image);

  const loadImages = () => {
    setLoadedCount((prev) => Math.min(prev + 3, projects.length));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadImages();
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadedCount]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="about" className="bg-[#FAFAF7] text-[#1B1B18]">
      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-10 border-b border-[#DAD4C4] pb-14">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#7A756A]">
              Sheelwalia Designs
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Designing timeless spaces
              <br />
              that feel like <span className="italic text-[var(--peach)]">home</span>.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[#7A756A]">
              We create elegant residential and commercial interiors that blend
              functionality, comfort, and refined style into every space.
            </p>
          </div>
        </div>
      </div>

      <CarouselSection />

      {/* Services — numbered index */}
      <div id="services" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-baseline justify-between border-b border-[#DAD4C4] pb-6 mb-2">
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">Services</h3>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A756A]">
            Plates 01–{pad(services.length)}
          </span>
        </div>
        <div>
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-[#DAD4C4] py-6 transition-colors hover:bg-[#F2EFE6]/60"
            >
              <span className="col-span-2 md:col-span-1 font-serif italic text-lg text-[#B8B0A0]">
                {pad(index + 1)}
              </span>
              <h4 className="col-span-10 md:col-span-4 text-lg md:text-xl font-medium tracking-tight">
                {service.title}
              </h4>
              <p className="col-span-12 md:col-span-7 text-[14px] leading-6 text-[#7A756A] md:text-right">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects — catalogue plates */}
      <div id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-baseline justify-between border-b border-[#DAD4C4] pb-6 mb-10">
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">Selected Work</h3>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A756A]">
            Plates 01–{pad(projects.length)}
          </span>
        </div>

        <div className="space-y-16">
          {projects.slice(0, loadedCount).map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center text-left focus:outline-none group ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
              aria-label={`View ${project.title}`}
            >
              <div
                className={`md:col-span-7 relative aspect-[4/3] overflow-hidden [direction:ltr] ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="md:col-span-5 [direction:ltr]">
                <span className="font-serif italic text-3xl text-[#B8B0A0]">
                  {pad(index + 1)}
                </span>
                <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#7A756A]">
                  {project.category} — {project.year}
                </p>
                <h4 className="mt-2 font-serif text-2xl tracking-tight">{project.title}</h4>
                <p className="mt-3 text-[14px] leading-6 text-[#7A756A] max-w-sm">
                  {project.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium border-b border-[#1B1B18] pb-0.5">
                  View project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {loadedCount < projects.length && (
          <div
            ref={observerRef}
            className="w-full h-16 flex items-center justify-center text-[#7A756A] text-[11px] uppercase tracking-[0.3em] mt-10"
          >
            Loading more plates…
          </div>
        )}
      </div>

      {/* Testimonials — pull quotes */}
      <div id="testimonials" className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-baseline justify-between border-b border-[#DAD4C4] pb-6 mb-10">
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">In Their Words</h3>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A756A]">
            Notes 01–{pad(testimonials.length)}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <span className="font-serif italic text-6xl text-[#DAD4C4] leading-none select-none">
                “
              </span>
              <p className="-mt-6 font-serif text-xl leading-8 tracking-tight">
                {testimonial.quote}
              </p>
              <div className="mt-6 text-[13px] uppercase tracking-[0.2em] text-[#7A756A]">
                {testimonial.name} <span className="text-[#B8B0A0]">— {testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={allImages}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      <DigitalVideoSplit />
    </section>
  );
}