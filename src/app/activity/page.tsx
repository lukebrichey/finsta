import React from 'react';
import NotificationComponent from '../../components/notification'; 
import CarouselSpacing from '../../components/carousel';

const commentNotifications = [
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/charlie.png', text: "peaches24 commented: 'OMG!'" },
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/man.png', text: "michaela_bibby commented: 'Interesting!'" },
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/olivia.png', text: "guitarlover23 commented: 'oooo'" },
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/tom.png', text: "tomcd commented: 'Up the Shire'" },
  { avatarUrl: 'https://lh3.googleusercontent.com/a/ACg8ocK3ssjJ8fLG-olvvAWDi7xUZuxizSNYDqPN1AWOT0amvIjZuA=s96-c', text: "eli98 commented: 'Loving the content!'" },
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/charlie.png', text: "peaches24 commented: 'No way!'" },
  { avatarUrl: 'https://lukebrichey.github.io/finsta-images/profiles/sonya.png', text: "michaela_bibby commented: 'Happy birthday!'" }
];

const Page = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-white font-bold text-xl text-center mb-4">Friend Requests</h2>
        <CarouselSpacing />
      </div>
      <div className="w-full max-w-md mx-auto mt-8">
        <h2 className="text-white font-bold text-xl text-center mb-4">Comments</h2>
        <div className="px-4"> 
          {commentNotifications.map((notification, index) => (
            <NotificationComponent key={index} avatarUrl={notification.avatarUrl} text={notification.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;