import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PlaylistCardProps {
  imageSrc: string;
  label: string;
  feedId: number;
}

export function PlaylistCard({ imageSrc, label, feedId }: PlaylistCardProps) {
  return (
    <Link href={`/feeds/${feedId}`} className="border border-gray-500 rounded-lg mx-2 my-4">
      <div style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden' }}>
        <Image src={imageSrc} alt={label} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <strong className="font-bold">{label}</strong>
      </div>
    </Link>
  );
}

