"use server"

import { api } from '~/trpc/server';

export async function addInterest(postId: number, profileId: string) {
    await api.post.addInterest({ postId: postId, profileId: profileId });
}

export async function removeInterest(postId: number, profileId: string) {
    await api.post.removeInterest({ postId: postId, profileId: profileId });
}
