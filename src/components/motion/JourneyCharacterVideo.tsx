import React from 'react';

export default function JourneyCharacterVideo() {
  return (
    <div className="relative w-full flex items-center justify-center group">
      <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center pointer-events-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center rounded-3xl mix-blend-multiply opacity-95 shadow-lg"
        >
          <source src="/images/character-viewing-laptop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
