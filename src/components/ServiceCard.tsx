import { motion } from 'framer-motion';
import { 
  Bot, 
  LayoutDashboard, 
  Smartphone, 
  Lightbulb, 
  Layers, 
  PlayCircle, 
  Zap, 
  Code, 
  TrendingUp 
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: keyof typeof iconMap;
  featured?: boolean;
  index: number;
  className?: string;
}

const iconMap = {
  'AI Product Design': Bot,
  'SaaS Product Design': LayoutDashboard,
  'Mobile App Design': Smartphone,
  'UX Strategy': Lightbulb,
  'Design Systems': Layers,
  'Interactive Prototypes': PlayCircle,
  'AI Workflow Integration': Zap,
  'Developer Handoff': Code,
  'Product Optimization': TrendingUp,
};

export default function ServiceCard({ title, description, tags, icon, featured = false, index, className = '' }: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Bot;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className={`
        relative overflow-hidden rounded-[24px] glass
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-[24px] opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(99, 102, 241, 0.3))',
          padding: '1px',
        }}
      >
        <div className="w-full h-full rounded-[24px] bg-[#050816]" />
      </motion.div>

      <motion.div
        variants={hoverVariants}
        className="relative p-6 md:p-8 h-full flex flex-col"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5 }}
          className="mb-6 inline-flex"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7] to-[#6366F1] blur-xl opacity-40" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A855F7]/20 to-[#6366F1]/20 border border-[#A855F7]/30">
              <Icon className="h-7 w-7 text-[#F8FAFC]" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-3">
          {title}
        </h3>
        
        <p className="text-base text-[#94A3B8] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#A855F7]/20 bg-[#A855F7]/10 text-[#F8FAFC]"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#A855F7]/20 to-[#6366F1]/20 blur-3xl rounded-full pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
