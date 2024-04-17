import React from 'react';
import Image from 'next/image'; 
import type { StaticImageData } from 'next/image'; 

interface PlaylistCardProps {
  imageSrc: StaticImageData; // Change type to StaticImageData
  label: string;
}

export function PlaylistCard({ imageSrc, label }: PlaylistCardProps) {
  return (
    <div className="border border-gray-500 rounded-lg mx-2 my-4"> {/* Add margin to the sides */}
      <div style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden' }}> {/* Set half width and height */}
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}> {/* Maintain aspect ratio */}
          <Image src={imageSrc} alt={label} layout="fill" objectFit="cover" /> {/* Fill container while maintaining aspect ratio */}
        </div>
      </div>
      <div className="p-4">
        <strong className="font-bold">{label}</strong>
      </div>
    </div>
  );
}

