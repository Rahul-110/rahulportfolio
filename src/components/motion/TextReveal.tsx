import { motion, useReducedMotion } from "framer-motion";

export default function TextReveal({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  if (shouldReduceMotion) return <div className="space-y-8 max-w-2xl">{children}</div>;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8 max-w-2xl"
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      )) : (
        <motion.div variants={item}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
