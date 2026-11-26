import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCharacterVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full flex items-center justify-center group"
    >
      {/* Cinematic Frame with Subtle Shadow */}
      <div className="relative w-full max-w-2xl aspect-[16/10] flex items-center justify-center pointer-events-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-[--color-border]/50">
        <video
          id="hero-character-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
        >
          <source src="/images/character-hero-wave.mp4" type="video/mp4" />
        </video>

        {/* Subtle Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[--color-background]/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Floating Design Artifact (Top Right) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 w-28 h-20 bg-[--color-surface] border border-[--color-border] rounded-2xl shadow-xl p-3 hidden md:flex flex-col gap-2 z-20 backdrop-blur-md bg-opacity-80"
      >
        <div className="w-full h-1/2 bg-[--color-border]/30 rounded-lg animate-pulse"></div>
        <div className="flex gap-2">
            <div className="w-8 h-2 bg-[--color-accent]/40 rounded-full"></div>
            <div className="w-4 h-2 bg-[--color-border]/50 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
