import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const ProfilePage: React.FC = () => {
    const user = {
        avatarUrl: 'https://github.com/shadcn.png',
        name: 'John Doe',
        username: 'johndoe',
        bio: 'Software Developer',
        mutuals: 1000,
        posts: 50,
    };

    // Fetch posts by user here

return (
    <div className="mx-auto max-w-lg p-5">
        <div className="flex items-center border-b-2 pb-5">
            <Avatar className="h-24 w-24 m-2 mr-4">
                <AvatarImage src={`${user.avatarUrl}`} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <h3 className="text-lg">@{user.username}</h3>
            </div>
        </div>
        <p className="pt-5">{user.bio}</p>
        <div className="flex justify-between pt-5">
            <p><span className="font-bold">{user.posts}</span> posts</p>
            <p><span className="font-bold">{user.mutuals}</span> mutuals</p>
        </div>
    </div>
);
};

export default ProfilePage;