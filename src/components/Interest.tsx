"use client"

import { SparklesIcon } from "@heroicons/react/24/outline";
import { SparklesIcon as SparklesIconFilled } from "@heroicons/react/24/solid";
import { useState } from "react";
import { addInterest, removeInterest } from "./interestActions";

export default function Interest({ postId, profileId } : { postId: number, profileId: string }) {
    const [isInterested, setIsInterested] = useState(false);
    
    return (
        <div className="flex flex-col items-center">
            {
                isInterested ?
                <SparklesIconFilled 
                    className="h-6 w-6 hover:cursor-pointer" 
                    onClick={async () => {
                        await removeInterest(postId, profileId);
                        setIsInterested(false);
                    }}
                />  
                    : 
                <SparklesIcon
                    className="h-6 w-6 hover:cursor-pointer" 
                    onClick={async () => {
                        await addInterest(postId, profileId);
                        setIsInterested(true);
                    }}
                />
            }
        </div>
    );
}