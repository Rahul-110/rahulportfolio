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
      className="relative overflow-hidden py-32 sm:py-40 bg-[#030305] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Intro */}
        <div className="mb-32 flex flex-col md:flex-row gap-12 border-b border-white/10 pb-20">
          <div className="md:w-1/3">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#6EA8FF] uppercase">
              04 / My Toolkit
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              The tools <br />
              <span className="text-white/40 italic">behind the</span> <br />
              thinking.
            </h2>
          </div>
          <div className="md:w-2/3 flex items-end">
            <p className="text-lg md:text-xl font-light text-[#B3B5C0] max-w-lg leading-relaxed">
              From the first sketch to the final experience, I use a combination of design, research and AI-powered tools to explore ideas, create intuitive interfaces and bring digital products to life.
            </p>
          </div>
        </div>

        {/* Editorial Content */}
        <div className="space-y-32">
          {TOOL_CATEGORIES.map((category, catIdx) => (
            <div key={category.id} className="grid md:grid-cols-12 gap-12 items-start">
              {/* Category Side-Title */}
              <div className="md:col-span-4 sticky top-32">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${category.accentColor}20`, color: category.accentColor }}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono tracking-widest uppercase text-white/60">{category.number}</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">{category.title}</h3>
                <p className="text-[#B3B5C0] font-light">{category.subtitle}</p>
              </div>

              {/* Tools List */}
              <div className="md:col-span-8">
                <div className="divide-y divide-white/10">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col sm:flex-row sm:items-center py-8 gap-4 sm:gap-8 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl">
                      <div className="sm:w-1/3">
                        <h4 className="text-lg font-bold text-white">{tool.name}</h4>
                        <span className="text-[10px] font-mono text-[#6EA8FF] uppercase tracking-widest">{tool.level}</span>
                      </div>
                      <p className="sm:w-2/3 text-sm text-[#B3B5C0] font-light leading-relaxed">
                        {tool.desc}
                      </p>
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
