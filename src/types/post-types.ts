import type { Profile, Comment } from '@prisma/client';

interface ProfileSubset {
    username: string;
    avatarUrl: string | null;
}

interface ExtendedComment extends Comment {
  createdBy: Profile;
}

interface PostViewType {
  createdBy: ProfileSubset;
  comments: ExtendedComment[];
  imageUrl: string;
  id: number;
  caption: string;
  profileId: string;
}

interface PostsType {
  createdBy: ProfileSubset;
  comments: ExtendedComment[];
  imageUrl: string;
  id: number;
  caption: string;
}

export type { PostViewType, ExtendedComment, PostsType };