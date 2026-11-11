import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Target,
  Lightbulb,
  PenTool,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Layers,
  Cpu,
  Sparkles,
  Layout,
  Sliders,
  Terminal,
} from "lucide-react";

const STAGES = [
  {
    id: "discover",
    title: "01. Discover",
    subtitle: "Empathy & Insight",
    icon: Search,
    color: "#6EA8FF",
    glowColor: "rgba(110, 168, 255, 0.4)",
    description: "I start by immersing myself in the problem space—gathering qualitative and quantitative insights through user interviews, competitor benchmarking, and analytics to uncover core user friction.",
    deliverables: ["User Interviews", "Competitive Audits", "Behavioral Analytics"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-[#0A0C10] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Search size={12} className="text-[#6EA8FF]" /> Research Matrix
            </span>
          </div>

          {/* Card Content Mockup */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6EA8FF]/20 flex items-center justify-center text-[#6EA8FF]">
                  <Layers size={16} />
                </div>
                <div>
                  <div className="text-xs text-white font-medium">User Friction Points</div>
                  <div className="text-[10px] text-white/40">84% struggle with onboarding</div>
                </div>
              </div>
              <span className="text-[9px] font-mono bg-[#6EA8FF]/10 text-[#6EA8FF] px-2 py-0.5 rounded border border-[#6EA8FF]/20">High Impact</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-[10px] text-white/40 uppercase font-mono">Market Gap</div>
                <div className="text-xs text-white font-semibold">Complex SaaS Workflows</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-[10px] text-white/40 uppercase font-mono">Opportunity</div>
                <div className="text-xs text-white font-semibold">Contextual AI Co-Pilot</div>
              </div>
            </div>
          </div>

          {/* Animated Scanning Wave */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-12 bg-gradient-to-b from-[#6EA8FF]/10 to-transparent pointer-events-none border-t border-[#6EA8FF]/30"
          />
        </div>
      </div>
    )
  },
  {
    id: "define",
    title: "02. Define",
    subtitle: "Clarity & Strategy",
    icon: Target,
    color: "#A970FF",
    glowColor: "rgba(169, 112, 255, 0.4)",
    description: "Data becomes direction. I synthesize findings into actionable user journeys, information architecture, and core product requirement frameworks that align stakeholder goals with user needs.",
    deliverables: ["Information Architecture", "User Journeys", "Product Requirements"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-[#0A0C10] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          {/* Interactive Flow Network */}
          <div className="relative flex items-center justify-between z-10 px-4">
            <div className="p-3 rounded-xl bg-[#A970FF]/20 border border-[#A970FF]/40 text-[#A970FF] flex flex-col items-center gap-1 shadow-[0_0_20px_rgba(169,112,255,0.2)]">
              <Cpu size={18} />
              <span className="text-[9px] font-mono font-bold">ENTRY</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] font-mono">
                Workflow Routing
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] font-mono">
                AI Smart Trigger
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF] flex flex-col items-center gap-1 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              <Sparkles size={18} />
              <span className="text-[9px] font-mono font-bold">ACTION</span>
            </div>
          </div>

          {/* SVG Animated Connector Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 80 100 Q 180 60 220 70 M 80 100 Q 180 140 220 130 M 310 70 L 350 100 M 310 130 L 350 100"
              stroke="url(#purpleGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A970FF" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    )
  },
  {
    id: "explore",
    title: "03. Explore",
    subtitle: "Rapid Wireframing",
    icon: Lightbulb,
    color: "#FF8A3D",
    glowColor: "rgba(255, 138, 61, 0.4)",
    description: "I translate concepts into structural layouts through low-fidelity sketching and wireframing, testing multiple structural ideas quickly before committing to high-fidelity visual polish.",
    deliverables: ["Low-Fi Sketches", "Wireframe Prototypes", "Layout Options"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-[#0A0C10] border border-dashed border-white/20 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-3">
            <div className="h-3 w-20 bg-white/20 rounded-full" />
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded bg-white/10" />
              <div className="w-4 h-4 rounded bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="h-20 rounded-xl border border-dashed border-white/20 p-2 space-y-2 flex flex-col justify-center">
              <div className="h-2 w-full bg-white/20 rounded" />
              <div className="h-2 w-2/3 bg-white/10 rounded" />
            </div>
            <div className="h-20 rounded-xl border border-[#FF8A3D]/40 bg-[#FF8A3D]/5 p-2 space-y-2 flex flex-col justify-center relative">
              <div className="h-2 w-full bg-[#FF8A3D]/40 rounded" />
              <div className="h-2 w-2/3 bg-[#FF8A3D]/20 rounded" />
              <span className="absolute -top-2 -right-2 text-[8px] font-mono bg-[#FF8A3D] text-black px-1.5 py-0.5 rounded font-bold">PICKED</span>
            </div>
            <div className="h-20 rounded-xl border border-dashed border-white/20 p-2 space-y-2 flex flex-col justify-center">
              <div className="h-2 w-full bg-white/20 rounded" />
              <div className="h-2 w-2/3 bg-white/10 rounded" />
            </div>
          </div>

          <div className="h-4 w-full bg-white/5 rounded-lg border border-dashed border-white/10" />
        </div>
      </div>
    )
  },
  {
    id: "design",
    title: "04. Design",
    subtitle: "High-Fidelity & Craft",
    icon: PenTool,
    color: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.4)",
    description: "Bringing UIs to life with pixel-perfect design systems, typography hierarchy, fluid micro-interactions, and accessible visual components built to elevate brand prestige.",
    deliverables: ["High-Fidelity UI", "Design Systems", "Interactive Prototypes"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-gradient-to-br from-[#121620] to-[#0A0C10] border border-white/20 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,229,255,0.15)] relative overflow-hidden flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#6EA8FF] flex items-center justify-center text-black font-bold text-[10px]">
                <Layout size={12} />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">Lumora System v2</span>
            </div>
            <span className="text-[9px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-0.5 rounded-full border border-[#00E5FF]/30">Active Token</span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs text-white font-medium">Primary Glow Button</div>
                <div className="text-[9px] text-white/40 font-mono">radius: 999px · padding: 16px</div>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#6EA8FF] text-black font-bold text-[10px] shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                Clickable
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60 font-mono text-center">#00E5FF</div>
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60 font-mono text-center">#A970FF</div>
              <div className="flex-1 p-2 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60 font-mono text-center">#6EA8FF</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "validate",
    title: "05. Validate",
    subtitle: "Testing & Iteration",
    icon: CheckCircle2,
    color: "#4ADE80",
    glowColor: "rgba(74, 222, 128, 0.4)",
    description: "I validate assumptions through usability testing, heatmaps, and accessibility audits. Feedback directly shapes continuous refinements to optimize conversion and task completion.",
    deliverables: ["Usability Testing", "Accessibility Audits", "Conversion Optimization"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-[#0A0C10] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex items-center justify-between gap-3">
          <div className="flex-1 h-full bg-white/[0.02] border border-red-500/20 rounded-xl p-3 flex flex-col justify-between opacity-60">
            <div className="flex justify-between items-center text-[9px] font-mono text-red-400">
              <span>BEFORE</span>
              <span>32% Error</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-red-500/20 rounded" />
              <div className="h-2 w-3/4 bg-red-500/20 rounded" />
            </div>
            <div className="text-[9px] text-white/40">Complex Form</div>
          </div>

          <div className="flex-1 h-full bg-[#4ADE80]/5 border border-[#4ADE80]/30 rounded-xl p-3 flex flex-col justify-between shadow-[0_0_30px_rgba(74,222,128,0.1)]">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#4ADE80] font-bold">
              <span>AFTER</span>
              <span>98% Pass</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-[#4ADE80]/40 rounded" />
              <div className="h-2 w-3/4 bg-[#4ADE80]/30 rounded" />
            </div>
            <div className="text-[9px] text-[#4ADE80] font-semibold flex items-center gap-1">
              <CheckCircle2 size={10} /> Optimized Flow
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "deliver",
    title: "06. Deliver",
    subtitle: "Developer Alignment",
    icon: Rocket,
    color: "#F5F5F7",
    glowColor: "rgba(245, 245, 247, 0.4)",
    description: "Seamless engineering handoff. I write crisp specifications, export clean token libraries, and collaborate directly with frontend developers to ensure design fidelity in code.",
    deliverables: ["UI Specs & Tokens", "Figma Handoff", "QA Alignment"],
    artifact: (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md aspect-[16/10] bg-[#0A0C10] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden font-mono text-[10px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-white/40">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-[#6EA8FF]" />
              <span>HandoffTokens.json</span>
            </div>
            <span className="text-[#4ADE80]">READY</span>
          </div>

          <div className="space-y-1 text-white/70 py-2">
            <p className="text-[#6EA8FF]">{"export const Theme = {"}</p>
            <p className="pl-4 text-[#A970FF]">{"accent: 'rgba(110, 168, 255, 1)',"}</p>
            <p className="pl-4 text-[#FF8A3D]">{"radius: '24px',"}</p>
            <p className="pl-4 text-[#00E5FF]">{"motion: 'spring(120, 20)'"}</p>
            <p className="text-[#6EA8FF]">{"};"}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px]">
            <span className="text-white/40">Figma Specs Synced</span>
            <span className="text-[#6EA8FF] flex items-center gap-1 font-bold">
              <Rocket size={10} /> Deployed
            </span>
          </div>
        </div>
      </div>
    )
  }
];

export default function DesignProcessSection() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData = STAGES[activeStage];
  const ActiveIcon = activeData.icon;

  return (
    <section id="process" className="relative bg-[#030305] py-24 md:py-36 overflow-hidden" ref={containerRef}>
      {/* Dynamic Atmospheric Lighting Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] opacity-20 transition-all duration-1000 ease-out"
          style={{ backgroundColor: activeData.color }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305] opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#B3B5C0] uppercase">
              How I Think & Design
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F7]"
          >
            Behind every great experience is a{" "}
            <span className="bg-gradient-to-r from-[#6EA8FF] via-[#A970FF] to-[#FF8A3D] bg-clip-text text-transparent">
              thoughtful process.
            </span>
          </motion.h2>
        </div>

        {/* Process Stages Horizontal Tab Navigation Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-white/10">
          {STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            const StageIcon = stage.icon;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`relative px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-500 whitespace-nowrap shrink-0 group ${
                  isActive
                    ? "bg-white/10 border border-white/20 text-white shadow-lg"
                    : "text-[#B3B5C0]/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-white text-black font-bold" : "bg-white/5 group-hover:bg-white/10"
                  }`}
                  style={{ color: isActive ? "#000" : stage.color }}
                >
                  <StageIcon size={14} />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase">
                  {stage.title}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Display Stage Main Spotlight Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#0A0C10]/90 border border-white/10 rounded-[36px] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Left Column: Stage Text Content */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest border"
                  style={{
                    backgroundColor: `${activeData.color}15`,
                    borderColor: `${activeData.color}40`,
                    color: activeData.color,
                  }}
                >
                  Phase 0{activeStage + 1}
                </span>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {activeData.subtitle}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                {activeData.title.split('. ')[1]}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#B3B5C0] font-light leading-relaxed">
              {activeData.description}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 block">
                Key Artifacts & Deliverables
              </span>
              <div className="flex flex-wrap gap-2">
                {activeData.deliverables.map((item, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                  >
                    ✦ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setActiveStage((activeStage + 1) % STAGES.length)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 group"
              >
                <span>Next Stage ({STAGES[(activeStage + 1) % STAGES.length].title.split('. ')[1]})</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Stage Artifact Visual */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[16/11] w-full rounded-2xl bg-[#030305]/80 border border-white/10 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                {activeData.artifact}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
