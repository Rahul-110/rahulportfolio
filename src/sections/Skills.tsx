import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PenTool,
  Users,
  Sparkles,
  Code,
  Terminal,
  Layers,
  Compass,
  Cpu
} from "lucide-react";

type Tool = {
  name: string;
  level: "Primary" | "Exploring" | "Core";
  desc: string;
  icon?: string;
};

type Category = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  tools: Tool[];
};

const TOOL_CATEGORIES: Category[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design & Prototyping",
    subtitle: "The core canvas for wireframing, high-fidelity systems, and interactive motion prototypes.",
    icon: PenTool,
    accentColor: "#6EA8FF",
    tools: [
      { name: "Figma", level: "Primary", desc: "My central environment for design systems, component tokens, wireframes, and high-fidelity production layouts." },
      { name: "Adobe XD", level: "Core", desc: "Used for vector layouts, rapid vector editing, and legacy client design handoffs." },
      { name: "Framer", level: "Exploring", desc: "Leveraged for advanced interactive web prototyping and publishing high-fidelity micro-interactions." }
    ]
  },
  {
    id: "research",
    number: "02",
    title: "Research & Collaboration",
    subtitle: "Structuring insights, aligning stakeholders, and organizing product roadmaps.",
    icon: Users,
    accentColor: "#A970FF",
    tools: [
      { name: "Miro", level: "Primary", desc: "Virtual whiteboard for affinity mapping, user journey synthesis, and collaborative brainstorming." },
      { name: "Notion", level: "Primary", desc: "Knowledge repository for design specs, meeting notes, research findings, and project documentation." }
    ]
  },
  {
    id: "ai-design",
    number: "03",
    title: "AI-Assisted Design & Ideation",
    subtitle: "Accelerating problem framing, copywriting generation, and early UX brainstorming.",
    icon: Sparkles,
    accentColor: "#FF8A3D",
    tools: [
      { name: "ChatGPT", level: "Primary", desc: "Used for conversational user persona exploration, copy variations, and structuring UX briefs." },
      { name: "Claude", level: "Primary", desc: "Advanced reasoning partner for architectural problem-solving, UX writing critique, and technical research." },
      { name: "Stitch AI", level: "Exploring", desc: "Exploring generative layout variations and smart component composition." },
      { name: "Figma Make", level: "Exploring", desc: "Experimenting with AI-driven component generation and automated token mapping." }
    ]
  },
  {
    id: "frontend",
    number: "04",
    title: "Website & Frontend Development",
    subtitle: "Bridging the gap between static screens and production-ready code with modern web primitives.",
    icon: Code,
    accentColor: "#00E5FF",
    tools: [
      { name: "VS Code", level: "Primary", desc: "My primary code editor for crafting component architectures, styling, and markdown documentation." },
      { name: "Astro", level: "Primary", desc: "High-performance static site architecture powering lightning-fast portfolio experiences." },
      { name: "GitHub", level: "Primary", desc: "Version control, branching workflows, pull requests, and deployment pipelines." },
      { name: "HTML / CSS / JS", level: "Primary", desc: "Solid foundational web primitives ensuring uncompromised styling and accessible markup." }
    ]
  },
  {
    id: "ai-dev",
    number: "05",
    title: "AI-Assisted Development",
    subtitle: "Augmenting coding velocity, debugging layout anomalies, and building production React/Astro islands.",
    icon: Terminal,
    accentColor: "#4ADE80",
    tools: [
      { name: "Cursor", level: "Primary", desc: "AI-first code editor enabling seamless refactoring, multi-file edits, and instant debugging." },
      { name: "Windsurf", level: "Exploring", desc: "Collaborative agentic workspace for full-stack feature exploration." },
      { name: "Devin", level: "Exploring", desc: "Autonomous software agent evaluated for end-to-end task execution." },
      { name: "Claude Code", level: "Primary", desc: "Command-line AI companion for building, testing, and shipping production code safely." }
    ]
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="toolkit"
      className="relative overflow-hidden py-32 sm:py-40 bg-[#030305]"
    >
      {/* Cinematic Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-900/10 via-blue-900/10 to-transparent blur-[160px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-orange-900/10 via-purple-900/10 to-transparent blur-[160px]" />
        <div
          class="absolute inset-0 opacity-[0.025]"
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
          className="text-center max-w-3xl mx-auto mb-24 space-y-4"
        >
          <div className="inline-block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6EA8FF] bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 px-4 py-2 rounded-full backdrop-blur-md">
              04 / MY TOOLKIT
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]">
            The tools behind the thinking.
          </h2>

          <p className="text-base sm:text-lg text-[#B3B5C0] font-light leading-relaxed">
            From the first sketch to the final experience, I use a combination of design, research and AI-powered tools to explore ideas, create intuitive interfaces and bring digital products to life.
          </p>
        </motion.div>

        {/* Categories Editorial Layout */}
        <div className="space-y-16">
          {TOOL_CATEGORIES.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: catIdx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden group"
              >
                {/* Subtle top glow accent */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-30 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}, transparent)` }}
                />

                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: `${category.accentColor}15`,
                        borderColor: `${category.accentColor}40`,
                        color: category.accentColor
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#B3B5C0]/60">
                          {category.number}
                        </span>
                        <span className="h-3 w-px bg-white/20" />
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                          Workflow Domain
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#B3B5C0] font-light max-w-md leading-relaxed md:text-right">
                    {category.subtitle}
                  </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 flex flex-col justify-between group/tool"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-display font-bold text-white group-hover/tool:text-[#6EA8FF] transition-colors">
                            {tool.name}
                          </h4>
                          <span className={`text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border ${
                            tool.level === "Primary"
                              ? "bg-[#6EA8FF]/10 text-[#6EA8FF] border-[#6EA8FF]/30"
                              : tool.level === "Core"
                              ? "bg-[#A970FF]/10 text-[#A970FF] border-[#A970FF]/30"
                              : "bg-white/5 text-white/60 border-white/10"
                          }`}>
                            {tool.level}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#B3B5C0] font-light leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                        <span>Workflow Integrated</span>
                        <span className="text-[#6EA8FF] opacity-0 group-hover/tool:opacity-100 transition-opacity">Active ✦</span>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Recruiter Value Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#6EA8FF]/30 bg-gradient-to-r from-[#6EA8FF]/10 via-[#A970FF]/10 to-transparent backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6EA8FF]">From Concept to Shipped Code</span>
            <h3 class="text-2xl font-display font-bold text-white tracking-tight">
              Looking for a designer who speaks engineering?
            </h3>
            <p class="text-sm text-[#B3B5C0] max-w-xl font-light">
              By combining Figma design systems with Astro, React, and AI-assisted engineering tools like Cursor and Claude Code, I bridge the gap between design vision and production reality.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-[#6EA8FF] hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(110,168,255,0.4)]"
          >
            <span>Let's Build Together</span>
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
