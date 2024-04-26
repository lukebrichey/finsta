import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { HeartIcon, HomeIcon, CameraIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { getServerAuthSession } from '~/server/auth';

type MenuItemProps = {
    icon: React.ReactElement;
    label: string;
    route?: string
};

const FinstaLogo = () => {
  return (
    <div className="flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40" height="40">
            <path fill="#FFFFFF" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
        <p className="ml-2 font-semibold">
            Finsta
        </p>
    </div>
  );
};

const SidePanel = async ({ avatarUrl }: { avatarUrl: string }) => {
    const session = await getServerAuthSession();

    return (
        <div className="w-64 h-full shadow-lg px-4 py-8 border-r border-gray-800">
            <div>
                <FinstaLogo />
            </div>
            <div className="mt-8 space-y-8">
                <MenuItem icon={<HomeIcon className="h-6 w-6" />} label="Home" route="/" />
                <MenuItem icon={<HeartIcon className="h-6 w-6" />} label="Activity" route="/activity" />
                <MenuItem icon={<RectangleStackIcon className="h-6 w-6" />} label="Feeds" route="/feeds"/>
                <MenuItem icon={<CameraIcon className="h-6 w-6" />} label="New Post" route="/post" />
                <MenuItem 
                    icon={
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={`${avatarUrl}`} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                    } 
                    label={session ? "Profile" : "Sign in"}
                    route={session ? "/profile" : "/api/auth/signin"}
                />
            </div>
            <div className="absolute bottom-0">
                {
                    session ? (
                        <Link
                            href="/api/auth/signout"
                            className="rounded-sm bg-white/10 px-3 py-2 font-semibold no-underline transition hover:bg-white/20"
                        >
                            Sign out
                        </Link>
                    ) : (
                        <>
                        </>
                    )
                }
                <p className="text-center text-gray-500 text-sm mt-5 mb-2">
                    &copy; 2024 Finsta. All rights reserved.
                </p>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, label, route }: MenuItemProps) => (
    <Link 
        href={route ? `${route}` : `/${label}`}
        className="flex items-center space-x-3"
    >
        {icon}
        <p className="text-md">{label}</p>
    </Link>
);

export default SidePanel;
