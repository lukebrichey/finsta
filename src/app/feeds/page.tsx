import React from 'react';
import SidePanel from '../../components/SidePanel'; // Assuming the SidePanel component is in the same directory
import { PlaylistCard } from '../../components/feedcard'; // Assuming the PlaylistCard component is in the same directory
import image1 from './snow.png'; 


const Page = () => {
  // Sample data for playlists
  const playlists = [
    { id: 1, imageUrl: image1, label: 'NFL Highlights' },
    { id: 2, imageUrl: 'url_to_image_2', label: 'England Rugby' },
    { id: 3, imageUrl: 'url_to_image_3', label: 'Study Motivation' },
    // Add more playlists as needed
  ];

  return (
    <div className="flex">
      {/* SidePanel Component */}
      <SidePanel />

      {/* Row of Playlist Cards */}
      <div className="flex flex-wrap justify-center items-start p-8">
        {playlists.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} />
        ))}
      </div>
    </div>
  );
};

export default Page;
