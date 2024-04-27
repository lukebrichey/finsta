export type User = {
    username: string,
    avatarUrl: string
};

export type Comment = {
    username: string,
    text: string
};

export type PostProps = {
    user: User,
    imageUrl: string,
    comments: Comment[]
};
