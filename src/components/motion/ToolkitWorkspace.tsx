import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVGs for Tools ---
// Note: Using clean, high-fidelity SVGs for genuine branding feel

const ICONS = {
    Miro: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 3L4 12L12 21L20 12L12 3Z" fill="#FFD02F"/>
        </svg>
    ),
    Notion: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="currentColor"/>
            <path d="M15 7v10m-6-10v10m-3 0h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    ),
    FigJam: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#C6B1FF"/>
            <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" fill="#fff"/>
        </svg>
    ),
    Figma: (
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
            <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
            <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
            <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
        </svg>
    ),
    AdobeXD: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <rect width="24" height="24" rx="4" fill="#470137"/>
            <path d="M7 8h2.5l1.5 3 1.5-3H15l-2.5 5 2.5 5h-2.5l-1.5-3-1.5 3H7l2.5-5L7 8z" fill="#FF61F6"/>
        </svg>
    ),
    Framer: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M5 2h14v7h-7l7 7v7l-14-14h7v-7z" fill="currentColor"/>
        </svg>
    ),
    ChatGPT: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M22.28 12.12a5.19 5.19 0 0 0-1.98-4.11 5.23 5.23 0 0 0-5.23-1.4 5.23 5.23 0 0 0-7.8-2.6 5.23 5.23 0 0 0-4.1 6.51 5.23 5.23 0 0 0 1.98 4.11 5.23 5.23 0 0 0 5.23 1.4 5.23 5.23 0 0 0 7.8 2.6 5.23 5.23 0 0 0 4.1-6.51z" fill="#74aa9c"/>
        </svg>
    ),
    Claude: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#D97757"/>
            <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    ),
    VSCode: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M23.5 7.18l-3.35-2.66a1.21 1.21 0 0 0-1.52.06L12.5 9.77l-4.13-3.1a1.21 1.21 0 0 0-1.52.06L1.5 10.68a1.21 1.21 0 0 0 0 1.92l5.35 4.13a1.21 1.21 0 0 0 1.52-.06l4.13-3.1l6.13 5.19a1.21 1.21 0 0 0 1.52-.06l3.35-2.66a1.21 1.21 0 0 0 0-1.92z" fill="#007ACC"/>
        </svg>
    ),
    Astro: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 2L2 19.5h20L12 2zm0 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#FF5D01"/>
        </svg>
    ),
    GitHub: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
    ),
    Cursor: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M5.5 3.21V20.8l5.2-5.2 4.4 10.4 3.4-1.4-4.4-10.4h6.4L5.5 3.21z" fill="currentColor"/>
        </svg>
    ),
    Windsurf: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 18s4-2 4-6V7l-4-2-4 2v5c0 4 4 6 4 6z" fill="currentColor" opacity="0.3"/>
        </svg>
    ),
    Devin: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    Generic: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
    )
};

const STAGES = [
  {
    id: 'discover',
    title: 'Discover',
    label: 'DISCOVERY',
    description: 'Immersion into the problem space and user environment.',
    why: 'I use Miro and FigJam for collaborative brainstorming and user research synthesis. Notion serves as my knowledge repository for project requirements and research documentation.',
    tools: [
      { name: 'Miro', icon: ICONS.Miro },
      { name: 'FigJam', icon: ICONS.FigJam },
      { name: 'Notion', icon: ICONS.Notion }
    ],
    category: 'Discover & Collaborate'
  },
  {
    id: 'structure',
    title: 'Structure',
    label: 'ARCHITECTURE',
    description: 'Translating research into intuitive information architecture.',
    why: 'Mapping out user flows in FigJam and transitioning to Figma for low-fidelity wireframing. This phase focuses on reducing cognitive load and defining clear task paths.',
    tools: [
      { name: 'FigJam', icon: ICONS.FigJam },
      { name: 'Figma', icon: ICONS.Figma },
      { name: 'Claude', icon: ICONS.Claude }
    ],
    category: 'Discover & Collaborate'
  },
  {
    id: 'design',
    title: 'Design',
    label: 'INTERFACE',
    description: 'Crafting high-fidelity components and systemic UI.',
    why: 'Where visual identity meets functional utility. I leverage Figma for systemic design work, ensuring component reusability and pixel-perfect execution.',
    tools: [
      { name: 'Figma', icon: ICONS.Figma },
      { name: 'Adobe XD', icon: ICONS.AdobeXD },
      { name: 'Figma Make', icon: ICONS.Figma }
    ],
    category: 'Design & Prototype'
  },
  {
    id: 'prototype',
    title: 'Prototype',
    label: 'INTERACTION',
    description: 'Bringing static designs to life with high-fidelity motion.',
    why: 'Using Framer and Figma for advanced interactive prototyping. I test micro-interactions and transitions to validate usability before development.',
    tools: [
      { name: 'Framer', icon: ICONS.Framer },
      { name: 'Figma', icon: ICONS.Figma }
    ],
    category: 'Design & Prototype'
  },
  {
    id: 'build',
    title: 'Build',
    label: 'DEVELOPMENT',
    description: 'Bridging the gap between design and production code.',
    why: 'I use AI-first tools like Cursor and Windsurf to accelerate implementation, ensuring the final product matches the design intent perfectly.',
    tools: [
      { name: 'VS Code', icon: ICONS.VSCode },
      { name: 'Astro', icon: ICONS.Astro },
      { name: 'GitHub', icon: ICONS.GitHub },
      { name: 'Cursor', icon: ICONS.Cursor },
      { name: 'Windsurf', icon: ICONS.Windsurf },
      { name: 'Devin', icon: ICONS.Devin }
    ],
    category: 'Build & Develop'
  }
];

export default function ToolkitWorkspace() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = STAGES[activeIndex];

  return (
    <div className="w-full space-y-12">
      {/* Workflow Navigation */}
      <nav className="relative flex items-center justify-between gap-2 p-2 bg-[--color-surface] border border-[--color-border] rounded-full overflow-x-auto no-scrollbar">
        {STAGES.map((stage, idx) => (
          <button
            key={stage.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-1 min-w-[100px] py-3 px-4 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-all duration-500 z-10 ${
              activeIndex === idx
                ? 'text-[--color-background]'
                : 'text-[--color-text-secondary] hover:text-[--color-text]'
            }`}
          >
            {activeIndex === idx && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-[--color-text] rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">{stage.title}</span>
          </button>
        ))}
      </nav>

      {/* Main Workspace Composition */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Content Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[--color-surface] rounded-[2rem] border border-[--color-border] p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between">
           {/* Decorative Background Element */}
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
              <span className="font-display text-[200px] leading-none uppercase font-bold tracking-tighter">
                {activeStage.number || idxToNum(activeIndex)}
              </span>
           </div>

           <div className="relative z-10 space-y-8">
             <div className="space-y-4">
                <span className="inline-block text-[10px] font-mono font-bold tracking-[0.3em] text-[--color-accent] uppercase">
                  {activeStage.label}
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[--color-text] leading-tight">
                  {activeStage.description.split(' ').map((word, i) =>
                    word.toLowerCase() === 'interfaces' || word.toLowerCase() === 'code' || word.toLowerCase() === 'user' ?
                    <span key={i} className="italic font-serif text-[--color-text-secondary]">{word} </span> : word + ' '
                  )}
                </h3>
             </div>

             <div className="max-w-md">
                <p className="text-sm md:text-base text-[--color-text-secondary] leading-relaxed">
                  {activeStage.why}
                </p>
             </div>
           </div>

           <div className="relative z-10 pt-12 mt-auto">
             <div className="flex flex-wrap gap-4 items-center">
                <span className="text-[10px] font-mono font-bold text-[--color-text-secondary]/50 uppercase tracking-widest mr-2">Category:</span>
                <span className="px-4 py-1.5 rounded-full border border-[--color-border] bg-[--color-background] text-[10px] font-mono font-bold text-[--color-accent] uppercase tracking-widest">
                   {activeStage.category}
                </span>
             </div>
           </div>
        </div>

        {/* Right Tool Canvas (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-4 flex-grow"
            >
              {activeStage.tools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-[--color-surface] border border-[--color-border] transition-all duration-500 hover:border-[--color-accent]/40 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[--color-background] border border-[--color-border] flex items-center justify-center text-[--color-text] transition-all group-hover:scale-110">
                      {tool.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight text-[--color-text]">{tool.name}</h4>
                      <p className="text-[10px] font-mono text-[--color-text-secondary]/60 uppercase tracking-widest mt-0.5">Verified Tool</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[--color-accent]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}

              {/* Decorative Workspace Elements */}
              <div className="mt-auto p-8 rounded-2xl border border-dashed border-[--color-border] flex flex-col items-center justify-center text-center space-y-4 min-h-[160px]">
                 <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-[--color-surface] bg-[--color-border] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[--color-text-secondary]/30"></div>
                       </div>
                    ))}
                 </div>
                 <p className="text-[10px] font-mono text-[--color-text-secondary] uppercase tracking-[0.2em]">
                   Systematic Workflow Optimized
                 </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function idxToNum(idx: number): string {
  return (idx + 1).toString().padStart(2, '0');
}
