import React, { useState, useEffect, useRef } from "react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand the users, business goals, pain points, and context before deciding what to design.",
  },
  {
    step: "02",
    title: "Define",
    desc: "Organize insights, identify priorities, and map a clear information architecture and user flow.",
  },
  {
    step: "03",
    title: "Design & Validate",
    desc: "Explore concepts, create prototypes, and refine interactions using feedback and usability considerations.",
  },
  {
    step: "04",
    title: "Handoff & Improve",
    desc: "Prepare clear design specifications, collaborate with developers, and refine the experience as the product evolves.",
  },
];

const EXPERIENCE = [
  {
    company: "Netpy Technologies",
    role: "UI/UX Designer / Product Designer",
    date: "Jun 2025 – Present",
    current: true,
    desc: "Designing SaaS workflows, interactive components, high-fidelity wireframes, prototyping, usability testing, and developer handoff.",
  },
  {
    company: "Duhzine IT Solution",
    role: "UI/UX Design Intern",
    date: "Jul 2024 – Sep 2024",
    current: false,
    desc: "Crafted user journeys, visual components, and web interface concepts for client products.",
  },
  {
    company: "Kartexa",
    role: "UI/UX Design Intern",
    date: "Jul 2023 – Sep 2023",
    current: false,
    desc: "Assisted in wireframing, component design, and mobile app UI refinements.",
  },
];

const TOOLKIT = [
  "Figma",
  "FigJam",
  "Miro",
  "Adobe XD",
  "Framer",
  "HTML & CSS Fundamentals",
  "AI Tools",
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Understand the user",
    desc: "Start with context, empathy, and clear problem definition.",
  },
  {
    num: "02",
    title: "Simplify the workflow",
    desc: "Turn complex tasks into obvious, friction-free steps.",
  },
  {
    num: "03",
    title: "Design and validate",
    desc: "Prototype early and test with real usability feedback.",
  },
  {
    num: "04",
    title: "Collaborate to delivery",
    desc: "Work closely with frontend engineers for pixel-perfect code.",
  },
];

const BEYOND_WORK = [
  {
    title: "Quickcart Online Delivery",
    category: "UI/UX · Mobile",
    image: "/quickcart-cover.png",
    url: "https://www.behance.net/gallery/245190999/Quickcart-Online-Delivery-App",
  },
  {
    title: "Juice Rush Online Delivery",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&w=1200&q=80&fm=webp",
    url: "https://www.behance.net/gallery/232240055/Juice-Rush-Online-Delivery-Mobile-Application",
  },
  {
    title: "Juice Rush Operator Portal",
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80&fm=webp",
    url: "https://www.behance.net/gallery/251855431/Juice-Rush-Operator-Portal-Product-Design-Case-Study",
  },
];

export default function AboutBento() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);

    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  return (
    <div className="w-full space-y-12 text-[#141414]">
      {/* 1. Intro Profile Header */}
      <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
        <div className="relative shrink-0">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-[#F2F0EC] border border-[#E5E5E5] p-2 shadow-inner flex items-center justify-center">
            <img
              src="/images/rahul-standing.png"
              alt="Rahul - UI/UX Designer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4EC] border border-[#FFD8BF] text-[#D9531E] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#D9531E]"></span>
            <span>Open to meaningful design conversations</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#141414]">
            Hi, I'm Rahul — a UI/UX Designer at{" "}
            <span className="text-[#D9531E]">Netpy Technologies</span>.
          </h2>

          <p className="text-[#555555] text-lg md:text-xl font-normal leading-relaxed">
            I turn complex product workflows into clear, intuitive experiences.
          </p>

          <p className="text-[#666666] text-sm md:text-base font-light leading-relaxed">
            I have 1+ year of UI/UX design experience, currently working on SaaS products. I enjoy understanding user needs, simplifying complex dashboards, building thoughtful design systems, and translating ideas into practical digital experiences.
          </p>
        </div>
      </div>

      {/* 2. Six-Card Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-auto">

        {/* Card 1 — Experience (lg:col-span-8) */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Experience</span>
              <span className="text-xs text-[#D9531E] font-medium px-2 py-0.5 rounded-md bg-[#FFF4EC]">Career Timeline</span>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#E5E5E5]">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[23px] top-1.5 w-3 h-3 rounded-full border-2 border-white transition-all duration-500 ${
                      exp.current ? "bg-[#D9531E] scale-110 shadow-[0_0_10px_rgba(217,83,30,0.3)]" : "bg-[#CCCCCC]"
                    }`}
                  ></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-display text-lg font-bold text-[#141414]">
                      {exp.company}
                    </h3>
                    <span className="text-[10px] font-mono font-medium text-[#888888] uppercase tracking-wider">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#D9531E] mb-2">
                    {exp.role}
                  </p>

                  <p className="text-xs text-[#666666] leading-relaxed max-w-2xl">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 — My Design Toolkit (lg:col-span-4) */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Tools I Use</span>
              <span className="text-xs text-[#888888] font-medium">Stack</span>
            </div>

            <p className="text-xs text-[#555555] mb-6 leading-relaxed">
              Workflow tools that support product thinking, scalable design systems, and frontend literacy.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {TOOLKIT.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-[#F9F8F6] border border-[#EAE8E3] text-[10px] font-bold text-[#141414] uppercase tracking-wider hover:border-[#D9531E] hover:text-[#D9531E] transition-all duration-200 text-center"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#E5E5E5] text-[10px] font-semibold text-[#888888] uppercase tracking-widest flex items-center justify-between">
            <span>Figma Specialist</span>
          </div>
        </div>

        {/* Card 3 — How I Work / My Process (lg:col-span-5) */}
        <div
          className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">My Process</span>
              <span className="text-xs text-[#D9531E] font-medium">Methodology</span>
            </div>

            {/* Segmented Control */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-[#F2F0EC] rounded-xl border border-[#E5E5E5] mb-6">
              {PROCESS_STEPS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  aria-label={`Step ${s.step}`}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all duration-300 ${
                    activeStep === idx
                      ? "bg-white text-[#D9531E] shadow-sm"
                      : "text-[#888888] hover:text-[#141414]"
                  }`}
                >
                  {s.step}
                </button>
              ))}
            </div>

            {/* Active Step Display */}
            <div className="p-6 rounded-2xl bg-[#F9F8F6] border border-[#EAE8E3] min-h-[160px] flex flex-col justify-center transition-all duration-500 overflow-hidden relative">
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500" key={activeStep}>
                <span className="text-[10px] font-mono font-bold text-[#D9531E] uppercase tracking-[0.2em] block">
                  Step {PROCESS_STEPS[activeStep].step}
                </span>
                <h4 className="font-display text-xl font-bold text-[#141414]">
                  {PROCESS_STEPS[activeStep].title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {PROCESS_STEPS[activeStep].desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#888888]">
            <span className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-[#D9531E] animate-pulse"></span>
               Overview
            </span>
            <span className="text-[#D9531E]">
              {activeStep + 1} / {PROCESS_STEPS.length}
            </span>
          </div>
        </div>

        {/* Card 4 — What Inspires Me / Currently Exploring (lg:col-span-3) */}
        <div className="lg:col-span-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Exploring</span>
            </div>

            <div className="space-y-2">
              {[
                "Human-centered design",
                "Scalable SaaS UI",
                "AI Workflows",
                "Accessibility",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#F9F8F6] border border-[#EAE8E3] text-[11px] font-bold text-[#141414] flex items-center gap-3 group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9531E] group-hover/item:scale-125 transition-transform"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-[10px] font-semibold text-[#888888] uppercase tracking-widest">
            Learning & Growth
          </div>
        </div>

        {/* Card 5 — My Design Approach / Principles (lg:col-span-4) */}
        <div className="lg:col-span-4 bg-[#D9531E] border border-[#D9531E] rounded-3xl p-8 shadow-[0_15px_35px_rgba(217,83,30,0.15)] flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(217,83,30,0.2)] transition-all duration-300 text-white">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Principles</span>
            </div>

            <div className="space-y-4">
              {PRINCIPLES.slice(0, 4).map((p, idx) => (
                <div key={idx} className="flex items-start gap-4 group/p">
                  <span className="text-[10px] font-mono font-bold text-white/40 mt-1">{p.num}</span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white group-hover/p:translate-x-1 transition-transform">{p.title}</h4>
                    <p className="text-[10px] text-white/70 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 6 — Selected Work / Beyond the Interface (lg:col-span-12) */}
        <div className="lg:col-span-12 bg-[#FFFFFF] border border-[#E5E5E5] rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Beyond the Interface</span>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-bold text-[#D9531E] uppercase tracking-widest">Case Studies</span>
               <a href="https://www.behance.net/rahul17106111" target="_blank" className="text-[10px] font-bold text-[#141414] hover:text-[#D9531E] transition-colors uppercase tracking-widest">Behance ↗</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEYOND_WORK.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-[#E5E5E5] overflow-hidden bg-[#F9F8F6] hover:border-[#D9531E] hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-[#D9531E] uppercase tracking-[0.2em] block mb-2">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="font-display text-base font-bold text-[#141414] leading-tight group-hover:text-[#D9531E] transition-colors">
                      {item.title}
                    </h5>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#141414] group-hover:bg-[#D9531E] group-hover:border-[#D9531E] group-hover:text-white transition-all duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
