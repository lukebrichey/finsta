import React from 'react';
import { PlaylistCard } from '../../components/feedcard'; // Assuming the PlaylistCard component is in the same directory

const Page = () => {
  // Sample data for playlists
  const playlists = [
    { id: 1, imageUrl: 'url_to_image_1', label: 'Playlist 1' },
    { id: 2, imageUrl: 'url_to_image_2', label: 'Playlist 2' },
    { id: 3, imageUrl: 'url_to_image_3', label: 'Playlist 3' },
    // Add more playlists as needed
  ];

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center items-start p-8">
        {playlists.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} />
        ))}
      </div>
    </div>
  );
};

export default Page;
