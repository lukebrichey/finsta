import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SparklesIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type User = {
    username: string,
    avatarUrl: string
};

type Comment = {
    username: string,
    text: string
};

type PostProps = {
    user: User,
    image: StaticImageData,
    comments: Comment[]
};

export default function Post({ user, image, comments }: PostProps) {
    return (
        <div className="rounded-lg mx-auto my-4 max-w-xl w-1/3">
            <div className="flex items-center p-4">
                <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <strong className="font-bold">{user.username}</strong>
            </div>
            <div className="w-full flex flex-row justify-center border border-gray-500 rounded-lg">
                <Image src={image} alt="Post image" className="object-contain border-none rounded-lg" />
            </div>
            <div className="flex flex-row items-center w-full pt-4 ml-2 space-x-3">
                <SparklesIcon className="h-6 w-6" />
                <ChatBubbleOvalLeftIcon className="h-6 w-6" />
                <PaperAirplaneIcon className="h-6 w-6" />
            </div>
            <div className="p-4">
                {comments.map((comment, index) => (
                    <div key={index} className="text-sm mb-1">
                        <strong className="font-bold">{comment.username}</strong>: {comment.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
