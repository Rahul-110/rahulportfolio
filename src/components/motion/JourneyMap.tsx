import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretRight, Check } from "@phosphor-icons/react";

type Stage = {
  id: string;
  phase: string;
  title: string;
  institutionOrCompany: string;
  subtitle: string;
  period: string;
  experience: string;
  skills: string[];
  mindset: string;
  image?: string;
  imageAlt?: string;
};

const STAGES: Stage[] = [
  {
    id: 'education',
    phase: '01',
    title: 'Education',
    institutionOrCompany: 'SRM Valliammai Engineering College',
    subtitle: 'B.E. — Electronics and Communication Engineering',
    period: 'Foundation',
    experience: 'An engineering background provided structured problem-solving skills, analytical discipline, and an appreciation for technical constraints — forming a natural bridge toward designing complex digital systems.',
    skills: ['Structured Problem Solving', 'Analytical Thinking', 'Technical Systems', 'Information Logic'],
    mindset: 'Learning to bridge technical engineering constraints with user-centered design logic.',
    image: '/images/srm-college.webp',
    imageAlt: 'SRM Valliammai Engineering College Campus'
  },
  {
    id: 'kartexa',
    phase: '02',
    title: 'Kartexa',
    institutionOrCompany: 'Kartexa',
    subtitle: 'UI/UX Design Intern',
    period: 'July 2023 – Sept 2023',
    experience: 'An early practical experience in UI/UX design, focusing on user research, wireframing, and collaborative design feedback loops for internal tools.',
    skills: ['User Research', 'Wireframing', 'Design Feedback Loops', 'UI Basics'],
    mindset: 'Understanding that design starts with listening and thrives on rapid feedback.',
    image: '/images/internship-experience.webp',
    imageAlt: 'Kartexa Internship Design Environment'
  },
  {
    id: 'duhzine',
    phase: '03',
    title: 'Duhzine',
    institutionOrCompany: 'Duhzine IT Solution',
    subtitle: 'UI/UX Design Intern',
    period: 'July 2024 – Sept 2024',
    experience: 'A further stage in practical design experience, building user-centered interfaces, structuring information architecture, and refining intuitive navigation flows.',
    skills: ['Information Architecture', 'Navigation Flows', 'Interface Design', 'Prototyping'],
    mindset: 'Transforming requirements into clear, predictable navigation structures.',
    image: '/images/internship-experience.webp',
    imageAlt: 'Duhzine IT Solution Internship Workspace'
  },
  {
    id: 'netpy',
    phase: '04',
    title: 'Netpy',
    institutionOrCompany: 'Netpy Technologies',
    subtitle: 'UI/UX Designer',
    period: 'June 2025 – Present',
    experience: 'Currently designing SaaS product experiences, contributing to user-centered interfaces, wireframes, high-fidelity designs, interactive prototypes, and developer handoff.',
    skills: ['SaaS Product Design', 'Interactive Prototyping', 'Design Systems', 'Developer Handoff', 'Accessibility'],
    mindset: 'Simplifying multi-step enterprise SaaS workflows into seamless digital experiences.',
    image: '/images/netpy-experience.webp',
    imageAlt: 'Netpy Technologies Headquarters'
  }
];

export default function JourneyMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = STAGES[activeIndex];
  const navId = useId();

  const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, STAGES.length - 1));
  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  return (
    <div
      className="space-y-10 md:space-y-12 outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Interactive Career Journey Map. Use left and right arrow keys to navigate milestones."
    >
      {/* Step 1: Milestones Progress Header & Selector */}
      <div className="relative pt-2 pb-6 border-b border-[--color-border]/60">
        {/* Background Connecting Track Line */}
        <div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-[--color-border]/40 hidden md:block -z-0" />

        {/* Animated Active Progress Fill */}
        <div
          className="absolute top-7 left-[8%] h-[2px] bg-[--color-accent] hidden md:block transition-all duration-500 ease-out -z-0"
          style={{
            width: `${(activeIndex / (STAGES.length - 1)) * 84}%`
          }}
        />

        <nav
          aria-label="Career Journey Milestones"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 relative z-10"
        >
          {STAGES.map((stage, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveIndex(index)}
                aria-selected={isActive}
                role="tab"
                id={`tab-${stage.id}`}
                aria-controls={`panel-${stage.id}`}
                className={`group flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[--color-accent] outline-none ${
                  isActive
                    ? 'bg-[--color-surface] shadow-sm border border-[--color-border]'
                    : 'hover:bg-[--color-surface]/50 border border-transparent'
                }`}
              >
                {/* Node Circle Indicator */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 mb-2.5 ${
                    isActive
                      ? 'bg-[--color-accent] text-[--color-surface-raised] shadow-md shadow-[--color-accent]/20 scale-110'
                      : isCompleted
                      ? 'bg-[--color-surface-raised] border-2 border-[--color-accent] text-[--color-accent]'
                      : 'bg-[--color-background] border-2 border-[--color-border] text-[--color-text-secondary] group-hover:border-[--color-accent]/60 group-hover:text-[--color-text]'
                  }`}
                >
                  {isCompleted ? <Check size={14} weight="bold" /> : stage.phase}
                </div>

                {/* Milestone Label */}
                <span
                  className={`font-display text-sm font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[--color-text]' : 'text-[--color-text-secondary] group-hover:text-[--color-text]'
                  }`}
                >
                  {stage.title}
                </span>

                <span className="text-[10px] font-mono tracking-wider uppercase text-[--color-text-secondary]/70 mt-0.5 truncate w-full">
                  {stage.period}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Step 2: Journey Map Matrix Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          id={`panel-${activeStage.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeStage.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[--color-surface] border border-[--color-border] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Stage Background Number Watermark */}
          <span className="absolute -right-4 -bottom-10 font-display text-[160px] font-bold text-[--color-text]/[0.02] select-none pointer-events-none">
            {activeStage.phase}
          </span>

          {/* Card Header: Company/Institution + Dates */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-8 border-b border-[--color-border]/60">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[--color-accent]" />
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[--color-accent] uppercase">
                  MILESTONE {activeStage.phase} / 04
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[--color-text] tracking-tight">
                {activeStage.institutionOrCompany}
              </h3>
            </div>
            <div className="sm:text-right">
              <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 bg-[--color-background] border border-[--color-border] rounded-full text-[--color-text-secondary]">
                {activeStage.period}
              </span>
              <p className="text-xs font-medium text-[--color-text-secondary] mt-1.5">
                {activeStage.subtitle}
              </p>
            </div>
          </div>

          {/* Structured UX Journey Matrix Rows */}
          <div className="grid md:grid-cols-12 gap-8 py-8 items-start">
            {/* Left Info Column (7 Cols) */}
            <div className="md:col-span-7 space-y-8">
              {/* Row 1: Experience & Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[--color-accent] flex items-center gap-2">
                  <span>01</span>
                  <span className="w-3 h-px bg-[--color-accent]/40" />
                  <span>EXPERIENCE & CONTEXT</span>
                </h4>
                <p className="text-sm sm:text-base text-[--color-text-secondary] leading-relaxed font-normal">
                  {activeStage.experience}
                </p>
              </div>

              {/* Row 2: Skills & Capabilities Developed */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[--color-accent] flex items-center gap-2">
                  <span>02</span>
                  <span className="w-3 h-px bg-[--color-accent]/40" />
                  <span>CAPABILITIES PRACTICED</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStage.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[--color-background] border border-[--color-border] rounded-xl text-xs font-medium text-[--color-text] shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3: Design Mindset Shift */}
              <div className="space-y-2 pt-2">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[--color-accent] flex items-center gap-2">
                  <span>03</span>
                  <span className="w-3 h-px bg-[--color-accent]/40" />
                  <span>DESIGN MINDSET TAKEAWAY</span>
                </h4>
                <div className="p-4 bg-[--color-background]/70 border border-[--color-border]/80 rounded-2xl">
                  <p className="font-serif italic text-base sm:text-lg text-[--color-text] leading-snug">
                    “{activeStage.mindset}”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Evidence Column (5 Cols) */}
            <div className="md:col-span-5 space-y-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[--color-accent] flex items-center gap-2">
                <span>04</span>
                <span className="w-3 h-px bg-[--color-accent]/40" />
                <span>GENUINE ARTIFACT</span>
              </h4>

              <div className="group relative rounded-2xl border border-[--color-border] bg-[--color-background] overflow-hidden shadow-md">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={activeStage.image}
                    alt={activeStage.imageAlt || activeStage.institutionOrCompany}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[--color-surface]/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-3 bg-[--color-surface] border-t border-[--color-border]/60 flex items-center justify-between text-[10px] font-mono text-[--color-text-secondary]">
                  <span className="truncate">{activeStage.institutionOrCompany}</span>
                  <span className="text-[--color-accent] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Matrix Footer Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[--color-border]/60">
            <div className="text-[11px] font-mono text-[--color-text-secondary]">
              Use <kbd className="px-1.5 py-0.5 bg-[--color-background] border border-[--color-border] rounded text-[10px] uppercase font-bold text-[--color-text]">←</kbd> <kbd className="px-1.5 py-0.5 bg-[--color-background] border border-[--color-border] rounded text-[10px] uppercase font-bold text-[--color-text]">→</kbd> keys to explore
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous milestone"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-background] text-xs font-bold text-[--color-text] transition-all hover:border-[--color-accent] disabled:opacity-30 disabled:pointer-events-none"
              >
                <CaretLeft size={16} weight="bold" />
                <span className="hidden sm:inline">PREVIOUS</span>
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === STAGES.length - 1}
                aria-label="Next milestone"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[--color-accent] bg-[--color-accent] text-xs font-bold text-[--color-surface-raised] transition-all hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
              >
                <span className="hidden sm:inline">NEXT</span>
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
