import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Palette,
  Zap,
  Target,
  Sparkles,
  Accessibility,
  PenTool,
  Code2,
  Lightbulb,
  Layout,
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "UX Systems",
    description:
      "User flows, information architecture, usability validation, and scalable interaction thinking.",
    level: "Advanced",
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    icon: Palette,
    title: "UI Systems",
    description:
      "Design systems, visual hierarchy, responsive components, and polished interaction design.",
    level: "Production-ready",
    gradient: "from-blue-500/20 to-cyan-600/20",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description:
      "High-fidelity interactions, micro-animations, and clickable prototypes for stakeholder reviews.",
    level: "System-focused",
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    icon: Target,
    title: "Product Thinking",
    description:
      "Metrics-driven decisions, roadmap alignment, and balancing user needs with business goals.",
    level: "Research-driven",
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description:
      "Micro-interactions, easing curves, and delightful transitions that elevate the experience.",
    level: "Production-ready",
    gradient: "from-pink-500/20 to-rose-600/20",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description:
      "WCAG 2.1 compliance, semantic markup, keyboard navigation, and inclusive design practices.",
    level: "System-focused",
    gradient: "from-indigo-500/20 to-violet-600/20",
  },
];

const tools = [
  "Figma",
  "Framer",
  "Cursor",
  "Claude",
  "Jira",
  "Notion",
  "Adobe CC",
  "Linear",
  "Git",
  "Miro",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  const Icon = capability.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]`}
      >
        {/* Gradient background on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Animated gradient line at top */}
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <div className="h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </div>

        <div className="relative">
          {/* Icon and level badge */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-600/10 transition-transform duration-500 group-hover:scale-110 group-hover:from-violet-500/20 group-hover:to-purple-600/20">
              <Icon className="h-5 w-5 text-violet-400 transition-colors duration-300 group-hover:text-violet-300" />
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white/70">
              {capability.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
            {capability.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/60">
            {capability.description}
          </p>
        </div>
      </div>

      {/* Floating shadow effect */}
      <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-b from-violet-500/0 to-violet-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-violet-500/10 group-hover:to-purple-600/10 group-hover:opacity-100" />
    </motion.div>
  );
}

function ToolsMarquee() {
  return (
    <div className="relative mt-16 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex shrink-0 gap-4 pr-4"
        >
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
            >
              <span className="text-sm font-medium text-white/70">{tool}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow behind heading */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Blurred purple orbs */}
        <div
          className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]"
          data-parallax
          data-speed="0.15"
        />
        <div
          className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"
          data-parallax
          data-speed="0.2"
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Capabilities
          </span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            End-to-end product design
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            A balanced craft profile spanning systems thinking, visual execution, and production-ready delivery.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </motion.div>

        {/* Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="mt-16 text-center">
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.15em] text-white/40">
              Trusted toolkit
            </span>
          </div>
          <ToolsMarquee />
        </motion.div>
      </div>
    </section>
  );
}
