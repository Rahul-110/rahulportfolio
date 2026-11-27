import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center scale-105"
      >
        <source src="/images/character-hero-action.mp4" type="video/mp4" />
      </video>
      {/* Balanced Editorial Overlay for rich visibility and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[--color-background]/90 via-[--color-background]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[--color-background]/80 via-transparent to-[--color-background]/30"></div>
    </div>
  );
}
