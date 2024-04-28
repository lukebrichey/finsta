"use server"

import { api } from '~/trpc/server';

export default async function addInterest(postId: number, profileId: string) {
    await api.post.addInterest({ postId: postId, profileId: profileId });
}