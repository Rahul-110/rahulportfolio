import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutCharacterVideo() {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <div className="relative h-[680px] w-full flex items-center justify-center group">
      {/* Soft Radial Ambient Glow matching website theme */}
      <div className="absolute w-[500px] h-[600px] bg-gradient-to-b from-[#6EA8FF]/20 via-[#A970FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Transparent Character Video Container (Larger, optimized for section) */}
      <div className="relative w-full max-w-xl h-[700px] flex items-center justify-center pointer-events-auto">
        <video
          src="/images/character-waving.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain object-center scale-[1.4] group-hover:scale-[1.45] transition-transform duration-1000"
        />

        {/* Floating Greeting Bubble */}
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="absolute top-2 right-4 bg-[#101116]/90 border border-[#6EA8FF]/30 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl z-30 min-w-[210px]"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6EA8FF] animate-ping"></span>
                  <p className="text-white font-display font-bold text-sm tracking-wide">Hey! I'm Rahul 👋</p>
                </div>
                <button
                  onClick={() => setShowGreeting(false)}
                  className="text-white/40 hover:text-white text-xs font-mono transition-colors"
                  aria-label="Close greeting"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-[#B3B5C0] font-light">UI/UX Designer at Netpy Technologies.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bottom Location & Role Badge */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 whitespace-nowrap">
          <div className="flex items-center gap-2 bg-[#101116]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#A970FF] animate-pulse"></span>
            <span className="text-[10px] font-mono text-white/80 tracking-widest uppercase">Bengaluru, India</span>
          </div>
          <div className="bg-[#6EA8FF]/15 border border-[#6EA8FF]/30 text-[#6EA8FF] text-[10px] font-mono px-3.5 py-2 rounded-full backdrop-blur-md shadow-lg">
            Product Designer
          </div>
        </div>
      </div>
    </div>
  );
}
