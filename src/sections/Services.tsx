import { motion } from 'framer-motion';
import {
  Brain,
  LayoutGrid,
  Smartphone,
  Compass,
  Database,
  PenTool,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Product Design',
    description: 'Design intelligent AI-powered interfaces that simplify complex workflows and improve user productivity.',
    tags: ['AI UX', 'LLM', 'Automation'],
    featured: true,
  },
  {
    icon: LayoutGrid,
    title: 'SaaS Product Design',
    description: 'Scalable dashboards, CRM systems, admin panels, and enterprise web applications.',
    tags: ['Dashboard', 'CRM', 'Analytics'],
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'Create intuitive Android and iOS experiences with user-centered design principles.',
    tags: ['iOS', 'Android', 'Responsive'],
    featured: false,
  },
  {
    icon: Compass,
    title: 'UX Strategy',
    description: 'Research, user flows, information architecture, usability testing, and product validation.',
    tags: ['Research', 'Wireframes'],
    featured: false,
  },
  {
    icon: Database,
    title: 'Design Systems',
    description: 'Build scalable component libraries and consistent design systems for growing products.',
    tags: ['Components', 'Tokens'],
    featured: true,
  },
  {
    icon: PenTool,
    title: 'Interactive Prototypes',
    description: 'High-fidelity prototypes with realistic interactions and motion.',
    tags: ['Figma', 'Prototype'],
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 sm:py-40 bg-[#030305]"
    >
      {/* Dramatic Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-10%] h-[800px] w-[800px] bg-gradient-to-r from-purple-900/20 to-transparent blur-[120px]" />
        <div className="absolute right-[-20%] bottom-[-10%] h-[800px] w-[800px] bg-gradient-to-l from-blue-900/20 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Editorial Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-semibold tracking-[0.3em] uppercase text-[#6EA8FF]"
                >
                    Core Capabilities
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-5xl md:text-7xl font-display font-bold text-[#F5F5F7] tracking-tighter"
                >
                    Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A970FF] to-[#6EA8FF]">Digital Experiences</span>
                </motion.h2>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-xs text-sm text-[#B3B5C0] leading-relaxed"
            >
                Bridging the gap between complex user needs and sophisticated business goals through systematic design.
            </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 backdrop-blur-md transition-all duration-700 hover:border-[#6EA8FF]/40 ${service.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#A970FF]/0 to-[#6EA8FF]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-[#6EA8FF] group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-display font-semibold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#B3B5C0] leading-relaxed max-w-sm">
                          {service.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6">
                        {service.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[#B3B5C0]/80 font-mono tracking-wider">
                            {tag}
                        </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
