import React from 'react';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { api } from '~/trpc/server';
import Image from 'next/image';

export default async function ProfilePage() {
    const session = await getServerAuthSession();

    if (!session) {
        // If user is not authenticated, redirect to sign in page
        return redirect('/api/auth/signin');
    }

    const profile = await api.profile.getProfileById(session.user.id);

    console.log(profile);

    if (!profile) {
        // If user profile does not exist, redirect to profile creation page
        return redirect('/create-profile');
    }

    const posts = await api.post.getPostsByProfileId(profile.id);

    return (
        <div className="mx-auto max-w-lg p-5">
            <div className="flex items-center border-b-2 pb-5">
                <Avatar className="h-24 w-24 m-2 mr-4">
                    <AvatarImage src={`${profile.avatarUrl}`} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold">{profile.displayName}</h1>
                    <h3 className="text-lg">@{profile.username}</h3>
                </div>
            </div>
            <p className="pt-5">{profile.bio}</p>
            <div className="flex justify-between pt-5">
                <p><span className="font-bold">{profile._count.posts}</span> posts</p>
                {/* 
                    Here we fetch the users' mutuals count. In future work, we would also query 
                    the mutuals list to display the mutuals as well as their mutuals' posts for 
                    the Home feed.
                */}
                <p><span className="font-bold">{profile._count.mutuals}</span> mutuals</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-5">
                {posts.map((post) => (
                <div key={post.id} className="relative h-40 p-4 shadow-md">
                    <Image
                    src={post.imageUrl}
                    alt="Post image"
                    fill={true}
                    className='rounded-lg'
                    />
                </div>
                ))}
            </div>
        </div>
    );
};
