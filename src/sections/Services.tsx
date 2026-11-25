import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'AI Product Design',
    description: 'Design intelligent AI-powered interfaces that simplify complex workflows.',
    details: 'I create context-aware assistant interfaces, multi-modal components, and seamless workflows between autonomous agents and direct user control.',
    tags: ['AI UX', 'LLM', 'Interaction Design'],
  },
  {
    title: 'SaaS Product Design',
    description: 'Scalable dashboards, CRM systems, and enterprise web applications.',
    details: 'Crafting information-dense interfaces with clear visual hierarchy, role-based access, and real-time data visualization to optimize operational clarity.',
    tags: ['Dashboard', 'CRM', 'Analytics'],
  },
  {
    title: 'Mobile App Design',
    description: 'Intuitive iOS and Android experiences with user-centered principles.',
    details: 'Building mobile-first ordering flows, intuitive navigation, and engagement-focused user journeys optimized for on-the-go interaction.',
    tags: ['iOS', 'Android', 'Mobile UI'],
  },
  {
    title: 'UX Strategy',
    description: 'Research, information architecture, and product validation.',
    details: 'Data-driven insights from user interviews and competitor audits, synthesized into clear information architecture and actionable journey maps.',
    tags: ['Research', 'IA', 'Strategy'],
  },
  {
    title: 'Design Systems',
    description: 'Scalable component libraries and consistent design language.',
    details: 'Constructing robust design tokens, reusable UI primitives, and comprehensive documentation to ensure consistent product evolution.',
    tags: ['Systems', 'Tokens', 'UI'],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="relative py-28 md:py-40 bg-[--color-background] text-[--color-text]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <header className="mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[--color-accent]"></span>
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[--color-accent]">05 / PRODUCT DESIGN SERVICES</span>
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-medium tracking-tighter text-[--color-text] leading-[0.9]">
            Product Design <br/>
            <span className="italic font-serif text-[--color-text-secondary]">Capabilities.</span>
          </h2>
        </header>

        {/* Interactive Showcase */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar List */}
            <div className="lg:col-span-5 space-y-4">
                {services.map((service, idx) => {
                    const isActive = activeService.title === service.title;
                    return (
                        <button
                            key={service.title}
                            onClick={() => setActiveService(service)}
                            className={`w-full text-left transition-all duration-500 group p-6 rounded-2xl border ${
                                isActive
                                    ? 'bg-[--color-surface] border-[--color-border] shadow-lg'
                                    : 'bg-transparent border-transparent hover:bg-[--color-surface]/50'
                            }`}
                        >
                            <div className="flex items-center gap-6">
                                <span className={`font-mono text-xs transition-colors ${isActive ? 'text-[--color-accent]' : 'text-[--color-text-secondary]/40'}`}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <h3 className={`font-display text-2xl tracking-tight transition-colors ${isActive ? 'text-[--color-text]' : 'text-[--color-text-secondary] group-hover:text-[--color-text]'}`}>
                                    {service.title}
                                </h3>
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* Active Service Detail Card */}
            <div className="lg:col-span-7 bg-[--color-surface] p-10 md:p-12 rounded-[2rem] border border-[--color-border]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <h4 className="font-display text-xl text-[--color-text]">{activeService.description}</h4>
                        <p className="text-base text-[--color-text-secondary] font-light leading-relaxed max-w-lg">{activeService.details}</p>

                        <div className="flex flex-wrap gap-3">
                            {activeService.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-4 py-1.5 rounded-full border border-[--color-border] text-[--color-text-secondary] font-mono tracking-widest uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center gap-3 text-[--color-text] font-bold font-mono text-xs uppercase tracking-widest hover:text-[--color-accent] transition-colors border-b border-[--color-text] pb-1">
                                Let's collaborate ↗
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
