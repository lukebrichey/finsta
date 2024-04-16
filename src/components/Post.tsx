import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type User = {
    username: string,
    avatarUrl: StaticImageData
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
        <div className="border border-gray-500 rounded-lg mx-auto my-4 max-w-xl">
            <div className="flex items-center p-4">
                <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <strong className="font-bold">{user.username}</strong>
            </div>
            <div>
                <Image src={image} alt="Post image" layout="responsive" width={400} height={400} />
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
