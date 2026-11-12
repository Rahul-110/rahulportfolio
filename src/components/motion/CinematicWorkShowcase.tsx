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
    cover: "/images/lumora-cover.webp",
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
    <div className="relative w-full min-h-dvh flex flex-col justify-center py-24 md:py-32 overflow-hidden bg-[#030305]">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#A970FF]/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#6EA8FF]/10 blur-[160px] rounded-full"></div>

        {/* Reflective Perspective Floor */}
        <div className="absolute bottom-0 left-0 w-full h-[40dvh] bg-gradient-to-t from-white/[0.03] to-transparent opacity-20 pointer-events-none" style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}>
          <div className="absolute inset-0 origin-bottom" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'rotateX(65deg) scale(2.5)',
            maskImage: 'linear-gradient(to top, black, transparent)',
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Project Info (35%) */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[#6EA8FF] font-semibold tracking-[0.4em] text-[10px] uppercase bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 px-4 py-1.5 rounded-full backdrop-blur-md inline-block">
                SELECTED WORK
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-[1.1]">
                Complex problems. <br />
                <span className="bg-gradient-to-r from-[#6EA8FF] via-[#A970FF] to-[#FF8A3D] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(169,112,255,0.2)]">
                  Clear product experiences.
                </span>
              </h2>
              <p className="text-[#B3B5C0] text-sm md:text-base font-light leading-relaxed max-w-md">
                A selection of SaaS, mobile, AI, and dashboard experiences designed from problem framing to polished interface.
              </p>
            </div>

            {/* Active Project Details Card */}
            <div className="relative p-8 md:p-10 rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden group/card transition-all duration-700">
              {/* Decorative Large Index */}
              <span className="absolute -right-8 -bottom-12 font-display text-[180px] font-bold text-white/[0.02] select-none pointer-events-none transition-all duration-700 group-hover/card:text-white/[0.04]">
                {activeProject.number}
              </span>

              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#B3B5C0]/60 uppercase">
                    Project {activeProject.number} / 0{PROJECTS.length}
                  </span>
                  <div className="h-px flex-grow mx-4 bg-white/10"></div>
                  <span className="text-[10px] font-mono font-bold text-[#6EA8FF] tracking-widest">
                    {activeProject.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#FF8A3D]/80">
                    {activeProject.category}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider text-[#B3B5C0] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm md:text-base text-[#B3B5C0] font-light leading-relaxed">
                  “{activeProject.summary}”
                </p>

                <div className="pt-2">
                  <a
                    href={activeProject.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#101116] border border-[#6EA8FF]/40 text-white text-xs font-bold tracking-[0.1em] uppercase transition-all duration-500 hover:border-[#A970FF] hover:shadow-[0_0_40px_rgba(169,112,255,0.3)] hover:-translate-y-1 group"
                  >
                    <span>Explore Case Study</span>
                    <span className="text-[#6EA8FF] group-hover:translate-x-1 transition-transform">↗</span>
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
                let blur = "blur(0px)";

                if (isActive) {
                  transformStyle = "translate3d(0, 0, 100px) rotateY(-5deg) scale(1)";
                  opacity = 1;
                } else if (normalizedDistance === 1) {
                  transformStyle = "translate3d(120px, -20px, -150px) rotateY(-25deg) scale(0.85)";
                  opacity = 0.5;
                  blur = "blur(2px)";
                } else if (normalizedDistance === 2) {
                  transformStyle = "translate3d(240px, -40px, -400px) rotateY(-35deg) scale(0.7)";
                  opacity = 0.2;
                  blur = "blur(4px)";
                } else if (normalizedDistance === -1) {
                  transformStyle = "translate3d(-100px, 20px, -150px) rotateY(15deg) scale(0.85)";
                  opacity = 0.4;
                  blur = "blur(2px)";
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
                      filter: blur,
                      pointerEvents: isActive ? 'auto' : 'auto'
                    }}
                    className={`absolute inset-0 rounded-[40px] border border-white/20 bg-[#0A0C10] shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) cursor-pointer group/panel ${
                      isActive ? 'ring-2 ring-[#A970FF]/50 shadow-[0_0_100px_rgba(169,112,255,0.2)]' : 'hover:border-white/40'
                    }`}
                  >
                    <img
                      src={proj.cover}
                      alt={proj.title}
                      loading={idx === activeIndex ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover/panel:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    {/* Panel Luminous Edge */}
                    <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 group-hover/panel:ring-white/20 transition-all"></div>

                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[#6EA8FF] tracking-[0.2em]">{proj.number}</span>
                        <h4 className="text-2xl font-bold font-display text-white tracking-tight">{proj.title}</h4>
                      </div>
                      <div className={`px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 ${
                        isActive ? 'bg-[#A970FF]/20 text-[#A970FF] border-[#A970FF]/40' : 'bg-white/5 text-white/60'
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
        <div className="mt-20 md:mt-24 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF] animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#B3B5C0]/60 uppercase">
                Browse Collection
              </span>
            </div>
            <div className="flex gap-2">
              {PROJECTS.map((_, i) => (
                <div key={i} className={`w-8 h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-[#A970FF] w-12' : 'bg-white/10'}`}></div>
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
                  className={`group relative text-left p-1 rounded-[24px] transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-br from-[#6EA8FF]/40 to-[#A970FF]/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                      : "bg-white/5 border border-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="relative bg-[#050608] rounded-[22px] p-3 md:p-4 h-full flex items-center gap-4 overflow-hidden">
                    <div className={`relative w-16 md:w-20 aspect-[16/10] rounded-xl overflow-hidden bg-white/5 shrink-0 border transition-all duration-500 ${
                      isActive ? 'border-[#6EA8FF]/50 scale-105' : 'border-white/10 opacity-60 grayscale-[50%]'
                    }`}>
                      <img src={proj.cover} alt={proj.title} loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="min-w-0 pr-4">
                      <span className={`text-[9px] font-mono font-bold block mb-0.5 transition-colors ${isActive ? 'text-[#6EA8FF]' : 'text-white/40'}`}>
                        {proj.number}
                      </span>
                      <h5 className={`text-xs md:text-sm font-bold truncate transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                        {proj.title}
                      </h5>
                    </div>

                    {/* Active Indicator Glow */}
                    {isActive && (
                      <div className="absolute top-0 right-0 p-2">
                        <div className="w-1 h-1 rounded-full bg-[#6EA8FF] shadow-[0_0_10px_#6EA8FF]"></div>
                      </div>
                    )}
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
