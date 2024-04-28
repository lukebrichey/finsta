import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SparklesIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import type { PostViewType } from '@/types/post-types';

export default function Post({ createdBy, imageUrl, comments }: PostViewType) {
    const user = createdBy;

    return (
        <div className="rounded-lg mx-auto my-4 max-w-xl w-1/3">
            <div className="flex items-center p-4">
                <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={user.avatarUrl ? `${user.avatarUrl}` : 'https://github.com/shadcn.png'} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <strong className="font-bold">{user.username}</strong>
            </div>
            <div className="w-full flex flex-row justify-center border border-gray-500 rounded-lg relative overflow-hidden h-80">
                <Image src={imageUrl} fill alt="Post image" className="object-cover border-none rounded-lg" />
            </div>
            <div className="flex flex-row items-center w-full pt-4 ml-2 space-x-3">
                <SparklesIcon className="h-6 w-6 hover:cursor-pointer" />
                <ChatBubbleOvalLeftIcon className="h-6 w-6 hover:cursor-pointer" />
                <PaperAirplaneIcon className="h-6 w-6 hover:cursor-pointer" />
            </div>
            <div className="p-4">
                {comments.map((comment, index) => (
                    <div key={index} className="text-sm mb-1">
                        <strong className="font-bold">{comment.createdBy.username}</strong>: {comment.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
