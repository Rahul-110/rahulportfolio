import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AboutCharacter() {
  const [pose, setPose] = useState<"standing" | "waving">("standing");
  const [showGreeting, setShowGreeting] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 15-Second Cinematic Choreography Loop
  useEffect(() => {
    if (shouldReduceMotion) {
      setPose("waving");
      setShowGreeting(true);
      return;
    }

    let isMounted = true;

    const runTimeline = async () => {
      while (isMounted) {
        // Phase 1: Standing & Idle (0s - 4s)
        setPose("standing");
        setShowGreeting(false);
        await new Promise((r) => setTimeout(r, 4000));
        if (!isMounted) break;

        // Phase 2: Waving & Greeting (4s - 9s)
        setPose("waving");
        setShowGreeting(true);
        await new Promise((r) => setTimeout(r, 5000));
        if (!isMounted) break;

        // Phase 3: Hide greeting, return to standing (9s - 15s)
        setShowGreeting(false);
        await new Promise((r) => setTimeout(r, 500));
        setPose("standing");
        await new Promise((r) => setTimeout(r, 5500));
      }
    };

    runTimeline();

    return () => {
      isMounted = false;
    };
  }, [shouldReduceMotion]);

  // Mouse Parallax Effect
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div ref={containerRef} className="relative h-[650px] w-full flex items-center justify-center pointer-events-auto">
      {/* Cinematic Ambient Backlight Glows */}
      <motion.div
        animate={{ x: mousePos.x * 3, y: mousePos.y * 3 }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[450px] h-[450px] bg-gradient-to-tr from-[#A970FF]/20 via-[#6EA8FF]/15 to-transparent blur-[140px] rounded-full"></div>
      </motion.div>

      {/* Character Container with Spring Physics & Floating Motion */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, -14, 0],
          rotate: [0, 0.6, -0.6, 0],
          x: mousePos.x * 1.5,
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 45, damping: 20 }
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={pose}
            src={`/images/rahul-${pose}.png`}
            alt="Rahul - UI/UX Designer"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[580px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] select-none pointer-events-none"
          />
        </AnimatePresence>

        {/* Interactive Greeting Bubble */}
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              className="absolute top-16 -right-16 md:-right-24 bg-[#101116]/95 border border-[#6EA8FF]/40 p-5 rounded-2xl shadow-[0_20px_60px_rgba(110,168,255,0.25)] backdrop-blur-2xl z-30 min-w-[240px]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6EA8FF] animate-ping"></span>
                <p className="text-white font-display font-bold text-sm tracking-wide">Hey! I'm Rahul.</p>
              </div>
              <p className="text-xs text-[#B3B5C0] font-light leading-relaxed">Welcome to my portfolio world. Let's build something exceptional.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
