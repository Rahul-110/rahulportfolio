import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Stage = {
  id: string;
  number: string;
  shortTitle: string;
  headline: string;
  description: string;
  activities: string[];
  tools: string[];
  artifact: {
    title: string;
    type: string;
    image: string;
  };
};

const STAGES: Stage[] = [
  {
    id: 'discover',
    number: '01',
    shortTitle: 'Discover',
    headline: 'Understand before designing.',
    description: 'Before jumping into interfaces, I take time to understand the project, its objectives, the people using it and the challenges they face.',
    activities: [
      'Understand project requirements',
      'Identify business objectives',
      'Explore user needs',
      'Review existing products and competitors',
      'Gather available research and stakeholder insights'
    ],
    tools: ['Miro', 'Notion', 'FigJam'],
    artifact: {
      title: 'Lumora AI User Mental Models',
      type: 'Research & Insights',
      image: '/images/lumora-cover-v4.webp'
    }
  },
  {
    id: 'define',
    number: '02',
    shortTitle: 'Define',
    headline: 'Find the problem worth solving.',
    description: 'I organize the information gathered during discovery to identify important user pain points, clarify priorities and establish a focused direction for the experience.',
    activities: [
      'Organize research findings',
      'Identify recurring pain points',
      'Define problem statements',
      'Prioritize opportunities',
      'Align design direction with requirements'
    ],
    tools: ['Miro', 'FigJam', 'Notion'],
    artifact: {
      title: 'Juice Rush Operator Portal Specs',
      type: 'Problem Definition',
      image: '/images/juice-rush-operator-cover.webp'
    }
  },
  {
    id: 'structure',
    number: '03',
    shortTitle: 'Structure',
    headline: 'Give every interaction a purpose.',
    description: 'I organize information and map user journeys so that people can navigate the product and complete important tasks with clarity.',
    activities: [
      'Information architecture',
      'Sitemap creation',
      'User flows',
      'Task flows',
      'Low-fidelity wireframes',
      'Navigation planning'
    ],
    tools: ['Figma', 'FigJam'],
    artifact: {
      title: 'Juice Rush Mobile Flow Architecture',
      type: 'User Flows & IA',
      image: '/images/juice-rush-cover.webp'
    }
  },
  {
    id: 'design',
    number: '04',
    shortTitle: 'Design',
    headline: 'Bring the experience to life.',
    description: 'I transform the structure into polished digital interfaces, balancing visual hierarchy, usability, consistency and accessibility.',
    activities: [
      'High-fidelity UI design',
      'Typography and color systems',
      'Component creation',
      'Design system consistency',
      'Responsive interface design',
      'Interaction design'
    ],
    tools: ['Figma', 'Adobe XD'],
    artifact: {
      title: 'Lumora AI Design System & UI',
      type: 'Visual Design',
      image: '/images/lumora-cover-v3.webp'
    }
  },
  {
    id: 'validate',
    number: '05',
    shortTitle: 'Prototype & Validate',
    headline: 'Make ideas tangible. Refine through feedback.',
    description: 'I connect screens and interactions to create prototypes that communicate how the experience works. Where feedback or usability testing is available, I use it to identify improvements.',
    activities: [
      'Interactive prototypes',
      'Screen transitions',
      'Interaction states',
      'Usability reviews',
      'Feedback collection',
      'Design iteration'
    ],
    tools: ['Figma', 'Framer'],
    artifact: {
      title: 'Interactive Component Prototype',
      type: 'Interactive Prototype',
      image: '/images/lumora-cover-new.webp'
    }
  },
  {
    id: 'deliver',
    number: '06',
    shortTitle: 'Handoff & Collaborate',
    headline: 'Connect design with implementation.',
    description: 'I prepare organized design files and communicate interaction behavior, component details and responsive requirements so developers can translate the intended experience into the product.',
    activities: [
      'Design file organization',
      'Component specifications',
      'Interaction documentation',
      'Developer handoff',
      'Design-development collaboration',
      'Implementation review where applicable'
    ],
    tools: ['Figma', 'FigJam', 'VS Code'],
    artifact: {
      title: 'Developer Handoff Specs & Code Tokenization',
      type: 'Handoff & Specs',
      image: '/images/quickcart-cover.webp'
    }
  }
];

export default function ProcessNavigator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = STAGES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % STAGES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  };

  return (
    <div className="space-y-12">
      {/* 6-Stage Timeline Navigator Bar */}
      <div className="relative border-b border-[--color-border] pb-6">
        <div
          className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 sm:gap-6 py-2"
          role="tablist"
          aria-label="Design Process Stages"
        >
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={stage.id}
                role="tab"
                id={`tab-${stage.id}`}
                aria-controls={`panel-${stage.id}`}
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-300 text-left shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] ${
                  isActive
                    ? 'bg-[--color-text] text-[--color-background] shadow-md'
                    : 'bg-[--color-surface] border border-[--color-border] text-[--color-text-secondary] hover:border-[--color-accent]/40 hover:bg-[--color-background]'
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? 'text-[--color-accent]' : 'text-[--color-text-secondary]'
                  }`}
                >
                  {stage.number}
                </span>
                <span className="font-display font-medium text-xs sm:text-sm tracking-tight whitespace-nowrap">
                  {stage.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Stage Stage Detail Area */}
      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Stage Narrative (7 Cols) */}
        <div
          className="lg:col-span-7 bg-[--color-surface] p-8 sm:p-12 rounded-[2rem] border border-[--color-border] shadow-[0_16px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between"
          role="tabpanel"
          id={`panel-${activeStage.id}`}
          aria-labelledby={`tab-${activeStage.id}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[--color-accent]">
                    {activeStage.number}
                  </span>
                  <span className="h-4 w-px bg-[--color-border]"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[--color-text-secondary]">
                    STAGE {activeStage.number} OF 06
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[--color-text]">
                  {activeStage.headline}
                </h3>

                <p className="text-base sm:text-lg text-[--color-text-secondary] leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Key Activities */}
              <div className="space-y-3 pt-4 border-t border-[--color-border]">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[--color-text-secondary]">
                  Key Activities & Focus
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeStage.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[--color-text]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[--color-accent] shrink-0"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Artifact Label */}
              <div className="pt-4 border-t border-[--color-border] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[--color-text-secondary]">
                    Tools Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStage.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-[--color-background] border border-[--color-border] text-[--color-text] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Pagination Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-[--color-border]">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-wider text-[--color-text] hover:text-[--color-accent] transition-colors"
            >
              <span>← Previous</span>
            </button>
            <div className="flex items-center gap-1.5">
              {STAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-6 bg-[--color-accent]' : 'w-1.5 bg-[--color-border]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-wider text-[--color-text] hover:text-[--color-accent] transition-colors"
            >
              <span>Next Stage →</span>
            </button>
          </div>
        </div>

        {/* Right Stage Visual Evidence Artifact (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[--color-surface] p-4 rounded-[2rem] border border-[--color-border] shadow-[0_16px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[--color-background] aspect-[4/3] border border-[--color-border]">
                <img
                  src={activeStage.artifact.image}
                  alt={activeStage.artifact.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[--color-text]/80 backdrop-blur-md text-[--color-background] text-[9px] font-mono uppercase px-3 py-1 rounded-full border border-white/10">
                  {activeStage.artifact.type}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-[--color-text-secondary] uppercase tracking-widest block">
                  Visual Evidence / Artifact
                </span>
                <h4 className="font-display font-bold text-base text-[--color-text]">
                  {activeStage.artifact.title}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
