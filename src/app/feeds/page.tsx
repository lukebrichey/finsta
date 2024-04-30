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
          {/*
            This is the logic for the feed curation feature. It is not functional,
            but in the future, we would use this to dynamically a generate a feed
            based on the user query. One example could be a query for Steelers' 
            highlights or Steelers' news that would return a feed of Steelers'
            content.
          */}
          <InputDemo />
          <SearchButton /> 
        </div>
      </div>

      <div className="w-full">
        {/* 
          Recommended Feeds 

          These are the feeds that are recommended to the user by our system.
          We will display these feeds in a grid layout. We only display ten 
          due to content limitations.
        */}
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