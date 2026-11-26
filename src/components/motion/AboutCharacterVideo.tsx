import React from 'react';

export default function AboutCharacterVideo() {
  return (
    <div className="relative w-full flex items-center justify-center group">
      {/* Video Content */}
      <div className="relative w-full max-w-2xl aspect-[16/9] md:aspect-[16/10] flex items-center justify-center pointer-events-auto">
        <video
          id="hero-character-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center rounded-3xl mix-blend-multiply opacity-90"
        >
          <source src="/images/character-hero-wave.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
