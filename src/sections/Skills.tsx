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
      className="relative overflow-hidden py-32 sm:py-48 bg-[#030305] text-white"
    >
      {/* Background Ambient Depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-1/4 h-[800px] w-[800px] bg-[#6EA8FF]/5 blur-[160px] rounded-full" />
        <div className="absolute right-[-10%] bottom-1/4 h-[800px] w-[800px] bg-[#A970FF]/5 blur-[160px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Continuous Process Line */}
        <div className="absolute left-[31px] md:left-[51px] top-40 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

        {/* Editorial Intro */}
        <div className="mb-48 flex flex-col md:flex-row gap-12 border-b border-white/10 pb-24">
          <div className="md:w-5/12">
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#6EA8FF] uppercase bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 px-4 py-1.5 rounded-full inline-block mb-8">
              04 / My Toolkit
            </span>
            <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
              Tools for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30 italic">thinking.</span>
            </h2>
          </div>
          <div className="md:w-7/12 flex items-end">
            <p className="text-xl md:text-2xl font-normal text-[#E2E4EA] max-w-xl leading-relaxed">
              From the first sketch to the final experience, I use a combination of design, research and AI-powered tools to explore ideas, create intuitive interfaces and bring digital products to life.
            </p>
          </div>
        </div>

        {/* Editorial Content */}
        <div className="space-y-48">
          {TOOL_CATEGORIES.map((category, catIdx) => (
            <div key={category.id} className="grid md:grid-cols-12 gap-12 md:gap-24 items-start relative">
              {/* Category Side-Title with Connector Point */}
              <div className="md:col-span-5 sticky top-40">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xs shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10">
                    {category.number}
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-5xl font-display font-bold tracking-tight leading-none">
                    {category.title.split(' & ')[0]} <br />
                    <span className="text-white/40 italic">{category.title.split(' & ')[1]}</span>
                  </h3>
                  <p className="text-[#D1D4DC] font-normal text-base leading-relaxed max-w-sm">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Tools Asymmetric Grid */}
              <div className="md:col-span-7 pt-2">
                <div className="grid grid-cols-1 gap-6">
                  {category.tools.map((tool, toolIdx) => (
                    <div
                      key={tool.name}
                      className={`group p-8 rounded-[32px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col gap-6 ${toolIdx % 2 === 1 ? 'md:ml-12' : 'md:mr-12'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <h4 className="text-2xl font-display font-bold text-white group-hover:text-[#6EA8FF] transition-colors">{tool.name}</h4>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">{tool.level}</span>
                        </div>
                        <span className="text-white/40 group-hover:text-[#6EA8FF] group-hover:translate-x-1 transition-all">↗</span>
                      </div>
                      <p className="text-base text-[#D1D4DC] font-normal leading-relaxed">
                        {tool.desc}
                      </p>

                      <div className="pt-4 border-t border-white/10 flex gap-2">
                        {["Workflow", "Integrated"].map(tag => (
                          <span key={tag} className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/50 border border-white/20 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
