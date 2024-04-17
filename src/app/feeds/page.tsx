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

import { SectionHeading } from '../../components/feedcardheading'; // Import the SectionHeading component

const Page = () => {
  // Sample data for playlists
  const playlists1 = [
    { id: 1, imageUrl: nflImage, label: 'NFL Highlights' }, // Provide string URL
    { id: 2, imageUrl: rugbyImage, label: 'England Rugby' }, // Provide string URL
    { id: 3, imageUrl: studyImage, label: 'Study Motivation' }, // Provide string URL
    { id: 4, imageUrl: christmas, label: 'Christmas Inspiration' }, // Provide string URL
    { id: 5, imageUrl: roadtrip, label: 'Roadtrip Ideas' }
    // Add more playlists as needed
  ];

  const playlists2 = [
    { id: 5, imageUrl: cardio, label: 'Cardio Routine' }, // Provide string URL
    { id: 6, imageUrl: outfit, label: 'Gym Outfits' },
    { id: 7, imageUrl: protein, label: 'Protein Intake' }, // Provide string URL
    { id: 8, imageUrl: pullup, label: 'Pullup Form' },
    { id: 9, imageUrl: bicep, label: 'Bicep Exercises' } // Provide string URL
  ];

  const playlists3 = [
    { id: 10, imageUrl: chelsea, label: 'Chelsea' }, // Provide string URL
    { id: 11, imageUrl: arsenal, label: 'Arsenal vs Wolves' },
    { id: 12, imageUrl: everton, label: 'The Mighty Blues' }, // Provide string URL
    { id: 13, imageUrl: manu, label: 'Man U vs Man City' },
    { id: 14, imageUrl: liverpool, label: 'Liverpool' } // Provide string URL
  ];

  return (
    <div className="flex flex-col items-start p-8"> {/* Align content to the left */}
      <SectionHeading>Your Saved Feeds</SectionHeading> {/* Display the section heading */}
      <div className="flex flex-wrap justify-start items-start">
        {playlists1.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} /> // Pass string URL
        ))}
      </div>

      <SectionHeading>Gym Inspiration</SectionHeading> {/* Display the section heading */}
      <div className="flex flex-wrap justify-start items-start">
        {playlists2.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} /> // Pass string URL
        ))}
      </div>

      <SectionHeading>Premier League</SectionHeading> {/* Display the section heading */}
      <div className="flex flex-wrap justify-start items-start">
        {playlists3.map(playlist => (
          <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} /> // Pass string URL
        ))}
      </div>
    </div>
  );
};

export default Page;

