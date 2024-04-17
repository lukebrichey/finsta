import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';
import type { StaticImageData } from 'next/image'; // Import StaticImageData type from next/image

interface PlaylistCardProps {
  imageSrc: StaticImageData; // Change type to StaticImageData
  label: string;
  feedId: number;
}

export function PlaylistCard({ imageSrc, label, feedId }: PlaylistCardProps) {
  return (
    <Link href={`/feeds/${feedId}`} className="border border-gray-500 rounded-lg mx-2 my-4">
      <div style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Image src={imageSrc} alt={label} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="p-4">
        <strong className="font-bold">{label}</strong>
      </div>
    </Link>
  );
}

