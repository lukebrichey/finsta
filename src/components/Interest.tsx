"use client"

import { SparklesIcon } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesIconFilled } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { addInterest, removeInterest, getIsInterested } from "./interestActions";

export default function Interest({ postId, profileId } : { postId: number, profileId: string }) {
    const [isInterested, setIsInterested] = useState(false);
    
    useEffect(() => {
        const fetchInterest = async () => {
            const interested = await getIsInterested(postId, profileId);
            setIsInterested(interested ?? false);
        };

        fetchInterest().catch(console.error);
    }, [postId, profileId]);

    return (
        <div className="flex flex-col items-center relative group">
            {
                isInterested ?
                <div>
                    <SparklesIconFilled
                        className="h-6 w-6 hover:cursor-pointer"
                        onClick={async () => {
                            await removeInterest(postId, profileId);
                            setIsInterested(false);
                        }}
                    />
                    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg opacity-90">Remove Interest</span>
                </div> :
                <div>
                    <SparklesIcon
                        className="h-6 w-6 hover:cursor-pointer"
                        onClick={async () => {
                            await addInterest(postId, profileId);
                            setIsInterested(true);
                        }}
                    />
                    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg opacity-90">Interest this Content</span>
                </div>
            }
        </div>
    );
}