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
      {/* Container Frame */}
      <div className="relative w-full max-w-2xl aspect-[16/10] flex items-center justify-center pointer-events-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-[--color-border]/40 bg-[--color-surface]">
        <video
          id="hero-character-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105"
        >
          <source src="/images/character-hero-wave.mp4" type="video/mp4" />
        </video>

        {/* Soft lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-background]/30 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Floating Design Component Card (Matches Reference Image) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -right-4 sm:-right-8 w-32 sm:w-40 h-24 sm:h-28 bg-[--color-surface] border border-[--color-border] rounded-2xl shadow-2xl p-3.5 hidden sm:flex flex-col justify-between z-20 backdrop-blur-md"
      >
        <div className="flex gap-2 items-center">
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[--color-accent]/20 rounded-lg flex items-center justify-center border border-[--color-accent]/30">
            <span className="w-2.5 h-2.5 rounded-full bg-[--color-accent]"></span>
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="w-full h-2 bg-[--color-text]/20 rounded-full"></div>
            <div className="w-2/3 h-2 bg-[--color-text-secondary]/20 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-[--color-border]/40 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
