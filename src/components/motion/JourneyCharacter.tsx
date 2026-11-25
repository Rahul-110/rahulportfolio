import React from 'react';

interface Props {
  imageSrc?: string;
  alt?: string;
}

export default function JourneyCharacter({
  imageSrc = "/images/rahul-journey-character.webp",
  alt = "Rahul pointing at journey signpost with a coffee cup"
}: Props) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-auto object-contain max-h-[450px] drop-shadow-2xl"
      />
    </div>
  );
}
