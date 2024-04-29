// carousel.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'; 

const getRandomAvatarUrl = () => {
  // List of avatar URLs
  const avatarUrls = [
    'https://lukebrichey.github.io/finsta-images/rugby.png',
    'https://lukebrichey.github.io/finsta-images/arsenal.png',
    'https://lukebrichey.github.io/finsta-images/holmes.jpeg',
    'https://lukebrichey.github.io/finsta-images/jordan.jpeg',
    'https://lukebrichey.github.io/finsta-images/liverpool.png',
  ];
  // Get a random index
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  // Return the random avatar URL
  return avatarUrls[randomIndex];
};

const usernames = ['stem.cel', 'peaches36', 'arsenallover', 'michaela.baby', 'Eva49']; // Hardcoded usernames

const CarouselSpacing = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel>
        <CarouselContent className="-ml-1">
          {usernames.map((username, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 lg:pl-6 xl:pl-8">
              <div className="p-1">
                <Card className="bg-black border border-white rounded-lg shadow-lg">
                  <CardContent className="flex items-center p-3">
                    <Avatar className="mr-3" style={{ width: '40px', height: '40px' }}>
                      <AvatarImage src={getRandomAvatarUrl()} alt={`Avatar ${index}`} />
                    </Avatar>
                    <span className="text-white text-sm font-semibold">{username}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSpacing;