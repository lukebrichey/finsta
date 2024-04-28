import React from 'react';
import { PlaylistCard } from '../../components/feedcard'; 
import { InputDemo } from '../../components/search';
import { SectionHeading } from '../../components/feedcardheading';
import { SearchButton } from '../../components/searchbutton';

const Page = () => {
  // Sample data for feeds
  const playlists1 = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1450121982620-84a745035fa8?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'NFL Highlights' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1558151507-c1aa3d917dbb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'England Rugby' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1532073145718-62df48eaa35e?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Study Motivation' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1544546491-1ecfecfcc75a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Christmas Inspiration' },
    { id: 5, imageUrl: 'https://images.unsplash.com/photo-1473969631237-f466cf342b1f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Roadtrip Ideas' }
  ];

  const playlists2 = [
    { id: 5, imageUrl: 'https://plus.unsplash.com/premium_photo-1673387682235-acd3c6adbb0b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Cardio Routine' },
    { id: 6, imageUrl: 'https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?q=80&w=1666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Gym Outfits' },
    { id: 7, imageUrl: 'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Protein Intake' },
    { id: 8, imageUrl: 'https://images.unsplash.com/photo-1598971475122-95a9004e2922?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Pullup Form' },
    { id: 9, imageUrl: 'https://images.unsplash.com/photo-1598267416824-5907946a3810?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Bicep Exercises' }
  ];

  const playlists3 = [
    { id: 10, imageUrl: 'https://images.unsplash.com/photo-1518605125802-006dcc629439?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Chelsea' },
    { id: 11, imageUrl: 'https://images.unsplash.com/photo-1563580853176-38535245e8b6?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Arsenal vs Wolves' },
    { id: 12, imageUrl: 'https://images.unsplash.com/photo-1629977007371-0ba395424741?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Woman\'s Worldcup' },
    { id: 13, imageUrl: 'https://images.unsplash.com/photo-1620334988729-ba5c45be4a89?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Man U vs Man City' },
    { id: 14, imageUrl: 'https://images.unsplash.com/photo-1665413811904-bc5bc4c7f013?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Liverpool' }
  ];

  return (
    <div className="flex flex-col items-center h-screen p-8 overflow-y-auto">
      {/* Container for centered search bar and button */}
      <div className="w-full flex justify-center my-4">
        <div className="flex justify-center items-center gap-2">  
          <InputDemo />
          <SearchButton /> 
        </div>
      </div>

      {/* Content sections with left-aligned headings */}
      <div className="w-full">
        <SectionHeading>Your Saved Feeds</SectionHeading>
        <div className="flex flex-wrap justify-start items-start">
          {playlists1.map(playlist => (
            <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
          ))}
        </div>

        <SectionHeading>Recommended Feeds</SectionHeading>
        <div className="flex flex-wrap justify-start items-start">
          {playlists2.map(playlist => (
            <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
          ))}
        </div>

      </div>
    </div>
  );
};


export default Page;