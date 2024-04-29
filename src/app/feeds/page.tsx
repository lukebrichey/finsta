import React from 'react';
import { PlaylistCard } from '../../components/feedcard'; 
import { InputDemo } from '../../components/search';
import { SectionHeading } from '../../components/feedcardheading';
import { SearchButton } from '../../components/searchbutton';
import { api } from '~/trpc/server';

const Page = async () => {
  const feeds = await api.feed.getFeeds();

  return (
    <div className="flex flex-col items-center h-screen p-8 overflow-y-auto">
      <div className="w-full flex justify-center my-4">
        <div className="flex justify-center items-center gap-2">  
          <InputDemo />
          <SearchButton /> 
        </div>
      </div>

      <div className="w-full">
        {/* <SectionHeading>Your Saved Feeds</SectionHeading>
        <div className="flex flex-wrap justify-start items-start">
          {playlists1.map(playlist => (
            <PlaylistCard key={playlist.id} imageSrc={playlist.imageUrl} label={playlist.label} feedId={playlist.id} />
          ))}
        </div> */}

        <SectionHeading>Recommended Feeds</SectionHeading>
        <div className="flex flex-wrap justify-start items-start">
          {feeds.map(feed => (
            feed.recommended ? (
              <PlaylistCard key={feed.id} imageSrc={feed.coverImageUrl} label={feed.label} feedId={feed.id} />
            ) : null
          ))}
        </div>

      </div>
    </div>
  );
};


export default Page;