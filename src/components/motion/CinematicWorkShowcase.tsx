import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  year: string;
  tags: string[];
  summary: string;
  cover: string;
  behanceUrl: string;
};

const PROJECTS: Project[] = [
  {
    id: "quickcart",
    number: "01",
    title: "QuickCart",
    category: "Online Delivery App",
    role: "UI/UX · Mobile Product Design",
    year: "2025",
    tags: ["Problem", "Process", "Final UI"],
    summary: "Designing a clearer shopping and delivery experience with research-driven e-commerce flows and streamlined checkout.",
    cover: "/images/quickcart-cover.webp",
    behanceUrl: "https://www.behance.net/gallery/245190999/QuickCart",
  },
  {
    id: "juice-rush",
    number: "02",
    title: "Juice Rush",
    category: "Online Delivery Mobile Application",
    role: "UI/UX · Mobile · Branding",
    year: "2024",
    tags: ["Branding", "Mobile UI", "Ordering Flow"],
    summary: "A vibrant juice and smoothie delivery experience with fresh visual identity, quick customization, and seamless ordering.",
    cover: "/images/juice-rush-cover.webp",
    behanceUrl: "https://www.behance.net/gallery/232240055/Juice-Rush",
  },
  {
    id: "juice-rush-operator",
    number: "03",
    title: "Juice Rush Operator Portal",
    category: "SaaS · Operations Management",
    role: "Product Design · Dashboard",
    year: "2024",
    tags: ["Dashboard", "SaaS", "Operations"],
    summary: "A comprehensive operator portal for managing juice delivery operations, orders, and inventory with real-time analytics.",
    cover: "/images/juice-rush-operator-cover.webp",
    behanceUrl: "https://www.behance.net/gallery/251855431/Juice-Rush-Operator-Portal-Product-Design-Case-Study",
  },
  {
    id: "lumora",
    number: "04",
    title: "Lumora AI",
    category: "Conversational AI Experience",
    role: "Conversational AI · Product Design",
    year: "2026",
    tags: ["Product Design", "AI Interaction", "Design System"],
    summary: "Exploring a trust-first conversational AI experience through contextual interactions, transparency, and user control.",
    cover: "/images/lumora-cover-v4.webp",
    behanceUrl: "https://www.behance.net/gallery/257469569/Lumora-AI",
  },
];

export default function CinematicWorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 6000); // Rotates every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-dvh flex flex-col justify-center py-24 md:py-32 overflow-hidden bg-[--color-background] text-[--color-text]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Project Info (35%) */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[--color-accent] font-mono font-bold tracking-[0.4em] text-[10px] uppercase bg-[--color-accent]/10 border border-[--color-accent]/20 px-4 py-1.5 rounded-full inline-block">
                CHAPTER 02 / SELECTED WORK
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-[--color-text] leading-[1.1]">
                Ideas turned <br />
                <span className="italic font-serif text-[--color-text-secondary]">
                  into experiences.
                </span>
              </h2>
              <p className="text-[--color-text-secondary] text-sm md:text-base font-normal leading-relaxed max-w-md">
                A selection of SaaS, mobile, AI, and dashboard experiences designed from problem framing to polished interface.
              </p>
            </div>

            {/* Active Project Details Card */}
            <div className="relative p-12 rounded-xl border border-[--color-border] bg-[--color-surface] shadow-2xl overflow-hidden group/card transition-all duration-700">
              {/* Decorative Large Index */}
              <span className="absolute -right-6 -bottom-10 font-display text-[160px] font-medium text-[--color-text]/[0.02] select-none pointer-events-none transition-all duration-700 group-hover/card:text-[--color-text]/[0.04]">
                {activeProject.number}
              </span>

              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[--color-text-secondary] uppercase">
                    Project {activeProject.number} / 0{PROJECTS.length}
                  </span>
                  <div className="h-px flex-grow mx-6 bg-[--color-border]"></div>
                  <span className="text-[10px] font-mono font-bold text-[--color-accent] tracking-widest">
                    {activeProject.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-3xl font-bold text-[--color-text] tracking-tight leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[--color-accent]">
                    {activeProject.category}
                  </p>
                </div>

                <p className="text-sm md:text-base text-[--color-text-secondary] font-normal leading-relaxed">
                  “{activeProject.summary}”
                </p>

                <div className="pt-2">
                  <a
                    href={activeProject.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 rounded-none border border-[--color-border] text-[--color-text] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:border-[--color-accent] hover:bg-[--color-accent] hover:text-[--color-background] group"
                  >
                    <span>Read Study</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Showcase (65%) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[450px] md:min-h-[550px] perspective-[1500px] order-1 lg:order-2">
            {/* Project Panels Stage */}
            <div className="relative w-full aspect-[16/10] max-w-2xl transform-style-3d">
              {PROJECTS.map((proj, idx) => {
                const distance = idx - activeIndex;
                const isActive = distance === 0;

                // Circular cycling logic for panels
                let normalizedDistance = distance;
                if (distance > 2) normalizedDistance = distance - PROJECTS.length;
                if (distance < -1) normalizedDistance = distance + PROJECTS.length;

                let transformStyle = "";
                let zIndex = 20 - Math.abs(normalizedDistance) * 5;
                let opacity = 0;

                if (isActive) {
                  transformStyle = "translate3d(0, 0, 100px) rotateY(-5deg) scale(1)";
                  opacity = 1;
                } else if (normalizedDistance === 1) {
                  transformStyle = "translate3d(120px, -20px, -150px) rotateY(-25deg) scale(0.85)";
                  opacity = 0.5;
                } else if (normalizedDistance === 2) {
                  transformStyle = "translate3d(240px, -40px, -400px) rotateY(-35deg) scale(0.7)";
                  opacity = 0.2;
                } else if (normalizedDistance === -1) {
                  transformStyle = "translate3d(-100px, 20px, -150px) rotateY(15deg) scale(0.85)";
                  opacity = 0.4;
                } else {
                  transformStyle = "translate3d(0, 0, -600px) scale(0.5)";
                  opacity = 0;
                }

                return (
                  <div
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      transform: transformStyle,
                      zIndex,
                      opacity,
                      pointerEvents: isActive ? 'auto' : 'auto',
                      willChange: "transform, opacity"
                    }}
                    className={`absolute inset-0 rounded-2xl border border-[--color-border] bg-[--color-surface-raised] shadow-2xl overflow-hidden transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) cursor-pointer group/panel ${
                      isActive ? 'ring-2 ring-[--color-accent]/50 shadow-[0_0_80px_rgba(var(--color-accent-rgb),0.2)]' : 'hover:border-[--color-accent]/30'
                    }`}
                  >
                    <img
                      src={proj.cover}
                      alt={proj.title}
                      loading={idx === activeIndex ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[--color-text]/80 via-[--color-text]/20 to-transparent"></div>

                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[--color-accent] tracking-[0.2em]">{proj.number}</span>
                        <h4 className="text-2xl font-bold font-display text-[--color-surface-raised] tracking-tight">{proj.title}</h4>
                      </div>
                      <div className={`px-4 py-1.5 rounded-sm border text-[10px] font-mono tracking-widest uppercase transition-all duration-500 ${
                        isActive ? 'bg-[--color-accent] text-[--color-surface-raised] border-[--color-accent]' : 'bg-[--color-surface]/5 text-[--color-surface-raised]/60 border-[--color-surface-raised]/10'
                      }`}>
                        {isActive ? 'Currently Viewing' : 'View Project'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Navigator */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-[--color-border]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent]"></span>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[--color-text-secondary] uppercase">
                Browse Collection
              </span>
            </div>
            <div className="flex gap-2">
              {PROJECTS.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-[--color-accent] w-12' : 'bg-[--color-border] w-8'}`}></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`group relative text-left p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-[--color-accent] bg-[--color-surface-raised]"
                      : "border-[--color-border] bg-[--color-surface] hover:border-[--color-text-secondary]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[--color-accent]' : 'text-[--color-text-secondary]/30'}`}>
                      {proj.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h5 className={`text-xs font-bold truncate transition-colors ${isActive ? "text-[--color-text]" : "text-[--color-text-secondary] group-hover:text-[--color-text]"}`}>
                        {proj.title}
                      </h5>
                      <span className="text-[9px] font-mono text-[--color-text-secondary]/50 truncate block mt-0.5">
                        {proj.year}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
