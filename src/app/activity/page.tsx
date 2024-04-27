// Page.tsx
import React from 'react';
import CarouselSpacing from '../../components/carousel';

const Page = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-center mb-4">
        <h2 className="text-white font-bold text-xl">Friend Requests</h2>
      </div>
      <div className="flex justify-center">
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default Page;
