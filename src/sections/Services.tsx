import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  LayoutGrid,
  Smartphone,
  Compass,
  Database,
  PenTool,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Product Design',
    description: 'Design intelligent AI-powered interfaces that simplify complex workflows and improve user productivity.',
    details: 'Focus on context-aware assistant interfaces, multi-modal components, and seamless switching between autonomous agent workflows and direct control.',
    tags: ['AI UX', 'LLM', 'Automation'],
  },
  {
    icon: LayoutGrid,
    title: 'SaaS Product Design',
    description: 'Scalable dashboards, CRM systems, admin panels, and enterprise web applications.',
    details: 'Crafting information-dense interfaces with clear visual hierarchy, role-based access, and real-time data visualization for maximum operational clarity.',
    tags: ['Dashboard', 'CRM', 'Analytics'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'Create intuitive Android and iOS experiences with user-centered design principles.',
    details: 'Building mobile-first ordering flows, intuitive navigation, and engagement-focused user journeys optimized for on-the-go interaction.',
    tags: ['iOS', 'Android', 'Responsive'],
  },
  {
    icon: Compass,
    title: 'UX Strategy',
    description: 'Research, user flows, information architecture, usability testing, and product validation.',
    details: 'Data-driven insights from user interviews and competitor audits, synthesized into clear information architecture and actionable user journey maps.',
    tags: ['Research', 'Wireframes'],
  },
  {
    icon: Database,
    title: 'Design Systems',
    description: 'Build scalable component libraries and consistent design systems for growing products.',
    details: 'Constructing robust design tokens, reusable UI primitives, and comprehensive documentation to ensure consistent product evolution.',
    tags: ['Components', 'Tokens'],
  },
  {
    icon: PenTool,
    title: 'Interactive Prototypes',
    description: 'High-fidelity prototypes with realistic interactions and motion.',
    tags: ['Figma', 'Prototype'],
    details: 'Bridging the gap between static design and final product through high-fidelity, interactive prototypes that capture motion and micro-interactions.',
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="relative py-32 sm:py-40 bg-[#030305]"
    >
      {/* Dramatic Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] bg-gradient-to-r from-purple-900/10 to-transparent blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] bg-gradient-to-l from-indigo-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#6EA8FF] mb-4 block">
                Core Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                Product Design Services
            </h2>
        </div>

        {/* Interactive Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar List */}
            <div className="lg:col-span-4 space-y-2">
                {services.map((service) => {
                    const Icon = service.icon;
                    const isActive = activeService.title === service.title;
                    return (
                        <button
                            key={service.title}
                            onClick={() => setActiveService(service)}
                            className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-white/[0.06] border-white/20' : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${isActive ? 'bg-[#A970FF]/20 text-[#A970FF]' : 'bg-white/5 text-white/40'}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className={`font-display text-lg font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>
                                    {service.title}
                                </span>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Active Service Detail Card */}
            <div className="lg:col-span-8 p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-4xl font-display font-bold text-white tracking-tight">{activeService.title}</h3>
                        <p className="text-lg text-[#B3B5C0] leading-relaxed">{activeService.details}</p>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {activeService.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full bg-[#6EA8FF]/10 border border-[#6EA8FF]/20 text-[#6EA8FF] font-mono tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#A970FF] transition-colors">
                                Let's discuss this service <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
}
