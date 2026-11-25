import React from "react";
import {
  MagnifyingGlass,
  PenNib,
  Sparkle,
  Code
} from "@phosphor-icons/react";

type Tool = {
  name: string;
  level: "Primary" | "Exploring" | "Core";
  desc: string;
};

type Category = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: any;
  tools: Tool[];
};

const TOOL_CATEGORIES: Category[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    subtitle: "Insights & Strategy",
    icon: MagnifyingGlass,
    tools: [
      { name: "Miro", level: "Primary", desc: "Collaborative whiteboarding." },
      { name: "Notion", level: "Primary", desc: "Knowledge repository." }
    ]
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    subtitle: "System & Prototypes",
    icon: PenNib,
    tools: [
      { name: "Figma", level: "Primary", desc: "Design systems & production layouts." },
      { name: "Framer", level: "Exploring", desc: "Interactive prototypes." }
    ]
  },
  {
    id: "explore",
    number: "03",
    title: "Explore",
    subtitle: "AI Ideation",
    icon: Sparkle,
    tools: [
      { name: "Claude", level: "Primary", desc: "Problem-solving & critique." },
      { name: "ChatGPT", level: "Primary", desc: "UX brief structuring." }
    ]
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    subtitle: "Development",
    icon: Code,
    tools: [
      { name: "VS Code", level: "Primary", desc: "Component architecture." },
      { name: "Astro", level: "Primary", desc: "Static site architecture." },
      { name: "Cursor", level: "Primary", desc: "AI-first development." }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="toolkit" className="relative py-32 md:py-48 bg-[#faf9f5] text-[#141413] border-t border-[#e6dfd8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#cc785c] uppercase bg-[#cc785c]/10 border border-[#cc785c]/20 px-4 py-1.5 rounded-full inline-block mb-8">
            CHAPTER 04 / THE TOOLKIT
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[0.9]">
            A workflow-based <br />
            <span className="italic text-[#8e8b82]">toolkit for creation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TOOL_CATEGORIES.map((category) => (
            <div key={category.id} className="p-10 rounded-2xl border border-[#e6dfd8] bg-[#efe9de]/30 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#141413] text-[#faf9f5] flex items-center justify-center">
                  <category.icon size={24} weight="duotone" />
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex justify-between items-center p-4 rounded-lg border border-[#e6dfd8] bg-[#faf9f5]">
                    <span className="font-bold text-sm">{tool.name}</span>
                    <span className="text-[9px] font-mono uppercase text-[#8e8b82] tracking-widest">{tool.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
