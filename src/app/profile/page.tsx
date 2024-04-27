import React from 'react';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { api } from '~/trpc/server';

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
                <p><span className="font-bold">{profile._count.mutuals}</span> mutuals</p>
            </div>
        </div>
    );
};
