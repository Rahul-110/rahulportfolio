import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CaretRight } from "@phosphor-icons/react";

type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  cover: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: "lumora",
    title: "Lumora AI",
    category: "Conversational AI Interface",
    role: "Lead Product Designer",
    year: "2026",
    summary: "A trust-first conversational AI experience emphasizing transparency and contextual control.",
    cover: "/images/lumora-cover-v4.webp",
    link: "https://www.behance.net/gallery/257469569/Lumora-AI",
  },
  {
    id: "quickcart",
    title: "QuickCart",
    category: "E-Commerce Mobile App",
    role: "UI/UX · Mobile Design",
    year: "2025",
    summary: "Streamlining grocery delivery through research-driven flows and high-fidelity mobile interfaces.",
    cover: "/images/quickcart-cover.webp",
    link: "https://www.behance.net/gallery/245190999/QuickCart",
  },
  {
    id: "juice-rush",
    title: "Juice Rush",
    category: "Brand & Product Design",
    role: "UI/UX · Visual Identity",
    year: "2024",
    summary: "End-to-end design for a vibrant smoothie delivery platform with integrated ordering systems.",
    cover: "/images/juice-rush-cover.webp",
    link: "https://www.behance.net/gallery/232240055/Juice-Rush",
  },
  {
    id: "juice-rush-operator",
    title: "SaaS Portal",
    category: "Operations Dashboard",
    role: "B2B Product Design",
    year: "2024",
    summary: "High-density operational dashboard for real-time order fulfillment and analytics.",
    cover: "/images/juice-rush-operator-cover.webp",
    link: "https://www.behance.net/gallery/251855431/Juice-Rush-Operator-Portal-Product-Design-Case-Study",
  },
];

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-24 md:py-32 bg-[--color-background] text-[--color-text]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[--color-border]/50 pb-12">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                    <span className="w-8 h-px bg-[--color-accent]"></span>
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[--color-accent]">SELECTED WORK / 02</span>
                </div>
                <h2 className="font-display text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9]">
                    Selected <br />
                    <span className="italic font-serif text-[--color-text-secondary]">Product Work.</span>
                </h2>
            </div>
            <div className="max-w-xs space-y-4">
                <p className="text-sm md:text-base text-[--color-text-secondary] leading-relaxed">
                    A curated selection of digital products, focusing on functional aesthetics and user-centric systems.
                </p>
            </div>
        </header>

        {/* Interactive Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Featured Image Display */}
            <div className="lg:col-span-7 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={PROJECTS[activeIndex].id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative group rounded-[2.5rem] overflow-hidden aspect-[14/10] bg-[--color-surface] shadow-2xl border border-[--color-border]/40"
                    >
                        <img
                            src={PROJECTS[activeIndex].cover}
                            alt={PROJECTS[activeIndex].title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[--color-background]/95 via-[--color-background]/10 to-transparent flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[--color-accent] mb-2 block">{PROJECTS[activeIndex].category}</span>
                                <h3 className="text-3xl font-display font-bold text-[--color-text] mb-6">{PROJECTS[activeIndex].title}</h3>
                                <a
                                    href={PROJECTS[activeIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-3 bg-[--color-text] text-[--color-background] rounded-full text-xs font-bold tracking-widest transition-all hover:bg-[--color-accent] active:scale-95"
                                >
                                    VIEW CASE STUDY <ArrowUpRight size={16} weight="bold" />
                                </a>
                             </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Decorative Annotation */}
                <div className="absolute -bottom-8 -right-4 hidden lg:block">
                    <p className="font-serif italic text-lg text-[--color-text-secondary] flex items-center gap-3">
                         <span className="w-12 h-px bg-[--color-border]"></span>
                         Interactive Showcase
                    </p>
                </div>
            </div>

            {/* Project Navigation List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {PROJECTS.map((proj, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={proj.id}
                            onClick={() => setActiveIndex(idx)}
                            aria-selected={isActive}
                            className={`group relative text-left p-8 rounded-3xl border transition-all duration-500 ${
                                isActive
                                ? 'bg-[--color-surface] border-[--color-accent] shadow-lg ring-1 ring-[--color-accent]/20'
                                : 'bg-transparent border-[--color-border]/30 hover:border-[--color-border]/80'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? 'text-[--color-accent]' : 'text-[--color-text-secondary]/60'}`}>
                                    PROJECT 0{idx + 1}
                                </span>
                                <span className={`text-[10px] font-mono ${isActive ? 'text-[--color-text]' : 'text-[--color-text-secondary]/40'}`}>
                                    {proj.year}
                                </span>
                            </div>

                            <h4 className={`text-2xl font-bold font-display tracking-tight transition-colors ${isActive ? 'text-[--color-text]' : 'text-[--color-text-secondary] group-hover:text-[--color-text]'}`}>
                                {proj.title}
                            </h4>

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm text-[--color-text-secondary] mt-4 leading-relaxed font-normal">
                                            {proj.summary}
                                        </p>
                                        <div className="mt-6 flex items-center gap-2 text-[10px] font-mono font-bold text-[--color-accent] uppercase tracking-tighter">
                                            <span>{proj.role}</span>
                                            <CaretRight size={12} weight="bold" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
