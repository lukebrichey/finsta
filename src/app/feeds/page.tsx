import React from 'react';
import { PlaylistCard } from '../../components/feedcard'; // Assuming the PlaylistCard component is in the same directory
import nflImage from '../../../images/nfl.png'; 
import rugbyImage from '../../../images/rugby.png'; 
import studyImage from '../../../images/study.png'; 
import christmas from '../../../images/christmas.png'; 
import roadtrip from '../../../images/roadtrip.png'; 
import cardio from '../../../images/cardio.png'; 
import outfit from '../../../images/outfit.png'; 
import protein from '../../../images/protein.png'; 
import pullup from '../../../images/pullup.png'; 
import bicep from '../../../images/biceps.png'; 
import chelsea from '../../../images/chelsea.png'; 
import liverpool from '../../../images/liverpool.png'; 
import manu from '../../../images/manu.png'; 
import everton from '../../../images/everton.png'; 
import arsenal from '../../../images/arsenal.png';

import { SectionHeading } from '../../components/feedcardheading';

const Page = () => {
  // Sample data for feeds
  const playlists1 = [
    { id: 1, imageUrl: nflImage, label: 'NFL Highlights' },
    { id: 2, imageUrl: rugbyImage, label: 'England Rugby' },
    { id: 3, imageUrl: studyImage, label: 'Study Motivation' },
    { id: 4, imageUrl: christmas, label: 'Christmas Inspiration' },
    { id: 5, imageUrl: roadtrip, label: 'Roadtrip Ideas' }
  ];

  const playlists2 = [
    { id: 5, imageUrl: cardio, label: 'Cardio Routine' },
    { id: 6, imageUrl: outfit, label: 'Gym Outfits' },
    { id: 7, imageUrl: protein, label: 'Protein Intake' },
    { id: 8, imageUrl: pullup, label: 'Pullup Form' },
    { id: 9, imageUrl: bicep, label: 'Bicep Exercises' }
  ];

  const playlists3 = [
    { id: 10, imageUrl: chelsea, label: 'Chelsea' },
    { id: 11, imageUrl: arsenal, label: 'Arsenal vs Wolves' },
    { id: 12, imageUrl: everton, label: 'The Mighty Blues' },
    { id: 13, imageUrl: manu, label: 'Man U vs Man City' },
    { id: 14, imageUrl: liverpool, label: 'Liverpool' }
  ];

  return (
    <div className="flex flex-col items-start p-8">
      <SectionHeading>Your Saved Feeds</SectionHeading>
      <div className="flex flex-wrap justify-start items-start">
        {playlists1.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
        ))}
      </div>

      <SectionHeading>Gym Inspiration</SectionHeading>
      <div className="flex flex-wrap justify-start items-start">
        {playlists2.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
        ))}
      </div>

      <SectionHeading>Premier League</SectionHeading>
      <div className="flex flex-wrap justify-start items-start">
        {playlists3.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;

