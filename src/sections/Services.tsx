import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'AI Product Design',
    description: 'Design intelligent AI-powered interfaces that simplify complex workflows and improve user productivity.',
    tags: ['AI UX', 'LLM', 'Automation'],
    icon: 'AI Product Design' as const,
    featured: true,
    rowSpan: 2,
  },
  {
    title: 'SaaS Product Design',
    description: 'Scalable dashboards, CRM systems, admin panels, and enterprise web applications.',
    tags: ['Dashboard', 'CRM', 'Analytics'],
    icon: 'SaaS Product Design' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'Mobile App Design',
    description: 'Create intuitive Android and iOS experiences with user-centered design principles.',
    tags: ['iOS', 'Android', 'Responsive'],
    icon: 'Mobile App Design' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'UX Strategy',
    description: 'Research, user flows, information architecture, usability testing, and product validation.',
    tags: ['Research', 'Wireframes'],
    icon: 'UX Strategy' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'Design Systems',
    description: 'Build scalable component libraries and consistent design systems for growing products.',
    tags: ['Components', 'Tokens'],
    icon: 'Design Systems' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'Interactive Prototypes',
    description: 'High-fidelity prototypes with realistic interactions and motion.',
    tags: ['Figma', 'Prototype'],
    icon: 'Interactive Prototypes' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'AI Workflow Integration',
    description: 'Use AI tools to accelerate ideation, design exploration, documentation, and developer handoff.',
    tags: ['Cursor', 'ChatGPT', 'Claude'],
    icon: 'AI Workflow Integration' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'Developer Handoff',
    description: 'Production-ready specifications, design documentation, assets, and implementation guidance.',
    tags: ['Dev Mode', 'Tokens'],
    icon: 'Developer Handoff' as const,
    featured: false,
    rowSpan: 1,
  },
  {
    title: 'Product Optimization',
    description: 'Improve usability, accessibility, and conversion through continuous UX improvements.',
    tags: ['WCAG', 'CRO'],
    icon: 'Product Optimization' as const,
    featured: false,
    rowSpan: 1,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#050816' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)',
          }}
        />
        
        {/* Blurred orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(168, 85, 247, 0.2)' }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(99, 102, 241, 0.15)' }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'rgba(168, 85, 247, 0.4)',
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#A855F7]"
          >
            Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight"
          >
            Build Digital Products That Scale
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
          >
            From AI-powered interfaces to enterprise SaaS platforms, I design intuitive, scalable experiences that solve real business problems.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              className={service.rowSpan === 2 ? 'md:row-span-2' : ''}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 md:mt-32 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            Ready to Build Your Next Product?
          </h3>
          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Let's transform your idea into a scalable digital experience with thoughtful UX and modern product design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold border border-[#A855F7]/30 text-[#F8FAFC] transition-all hover:bg-[#A855F7]/10"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
