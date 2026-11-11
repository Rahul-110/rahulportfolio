import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Layers,
  Palette,
  Target,
  Sparkles,
  Cpu,
  Code2
} from "lucide-react";

const capabilities = [
  {
    id: "ux",
    category: "Strategy & Systems",
    icon: Layers,
    title: "UX Systems & Architecture",
    description: "User flows, complex information architecture, cognitive load reduction, and rigorous usability validation.",
    level: "Expert",
    metrics: "40% faster user workflows",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/50",
    tags: ["User Flows", "IA", "Wireframing", "User Research"]
  },
  {
    id: "ui",
    category: "Visual Design",
    icon: Palette,
    title: "UI Design Systems",
    description: "Scalable component libraries, meticulous visual hierarchy, responsive layouts, and token-driven design systems.",
    level: "Production-ready",
    metrics: "100+ reusable primitives",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/50",
    tags: ["Figma", "Design Tokens", "Accessibility", "Dark Mode"]
  },
  {
    id: "motion",
    category: "Interaction & Motion",
    icon: Sparkles,
    title: "Cinematic Motion & Micro-UX",
    description: "Purposeful state transitions, spring physics, easing curves, and delightful feedback loops that make interfaces feel alive.",
    level: "Advanced",
    metrics: "60fps fluid transitions",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderGlow: "group-hover:border-pink-500/50",
    tags: ["Framer Motion", "CSS Animation", "State Feedback", "Transitions"]
  },
  {
    id: "product",
    category: "Product & Business",
    icon: Target,
    title: "Product Thinking & Strategy",
    description: "Metrics-driven decision making, roadmap alignment, balancing business constraints with uncompromising user empathy.",
    level: "Strategic",
    metrics: "High Conversion Impact",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    tags: ["Roadmaps", "KPIs", "User Journey", "Prioritization"]
  },
  {
    id: "ai",
    category: "Emerging Tech",
    icon: Cpu,
    title: "AI & LLM Interfaces",
    description: "Designing trust-first conversational UIs, prompt ergonomics, multi-turn context management, and agentic workflows.",
    level: "Specialized",
    metrics: "Cutting-edge UX",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
    tags: ["Conversational UI", "Prompt Design", "AI Co-pilots", "Trust Architecture"]
  },
  {
    id: "dev",
    category: "Frontend Execution",
    icon: Code2,
    title: "Frontend Engineering & Handoff",
    description: "Bridging design and code with Astro, React, Tailwind CSS, and precise component architecture that developers love.",
    level: "Full-stack UI",
    metrics: "Zero-friction handoff",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderGlow: "group-hover:border-violet-500/50",
    tags: ["React", "Astro", "Tailwind CSS", "TypeScript"]
  },
];

const tools = [
  "Figma", "Framer", "Cursor", "Claude", "React", "Astro", "Tailwind CSS",
  "Linear", "Jira", "Notion", "Git", "Miro", "Adobe CC", "Principle"
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCapabilities = activeTab === "all"
    ? capabilities
    : capabilities.filter(c => c.category.toLowerCase().includes(activeTab.toLowerCase()) || c.id === activeTab);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden py-28 sm:py-36 bg-[#030305]"
    >
      {/* Cinematic Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-600/15 via-blue-600/10 to-transparent blur-[160px]" />
        <div className="absolute right-10 bottom-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />

        {/* Subtle Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6EA8FF] bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 px-4 py-2 rounded-full backdrop-blur-md">
              Capabilities & Craft
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7] mb-6">
            End-to-end product design & systems thinking
          </h2>

          <p className="text-base sm:text-lg text-[#B3B5C0] font-light leading-relaxed">
            A meticulous balance of foundational research, systematic UI engineering, and polished motion that bridges the gap between vision and shipped reality.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Capabilities" },
              { id: "strategy", label: "Strategy & Systems" },
              { id: "visual", label: "Visual Design" },
              { id: "interaction", label: "Motion & UX" },
              { id: "ai", label: "AI & Emerging" },
              { id: "frontend", label: "Frontend" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#FF8A3D] via-[#A970FF] to-[#6EA8FF] text-white shadow-[0_0_20px_rgba(169,112,255,0.3)]"
                    : "bg-white/5 text-[#B3B5C0] hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={capability.id}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#A970FF]/50 hover:shadow-[0_0_40px_rgba(169,112,255,0.15)] hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle Top Glowing Line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A970FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6EA8FF] group-hover:text-white group-hover:bg-[#A970FF]/20 group-hover:border-[#A970FF]/30 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B3B5C0]">
                        {capability.level}
                      </span>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-widest text-[#A970FF] mb-2">
                      {capability.category}
                    </span>

                    <h3 className="text-xl font-display font-bold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                      {capability.title}
                    </h3>

                    <p className="text-sm text-[#B3B5C0] leading-relaxed mb-6 flex-grow">
                      {capability.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {capability.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-[#B3B5C0]/80 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Trusted Toolkit Marquee */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B3B5C0]/60">
              Trusted Professional Toolkit & Workflow
            </span>
          </div>

          <div className="relative overflow-hidden w-full">
            {/* Edge Gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex gap-6 shrink-0 items-center"
              >
                {[...tools, ...tools].map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-[#F5F5F7] font-medium text-sm hover:border-[#6EA8FF]/40 hover:bg-white/[0.05] transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#6EA8FF]" />
                    <span>{tool}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
