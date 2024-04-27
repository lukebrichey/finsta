import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CarouselSpacing = () => {
  return (
    <Carousel className="w-full max-w-4xl"> {/* Adjust the width here */}
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 lg:pl-6 xl:pl-8" style={{ minWidth: 'calc(50% - 4px)' }}>
            {/* Adjust the minWidth here to fit two cards with spacing */}
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-4">
                  <span className="text-xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselSpacing;


