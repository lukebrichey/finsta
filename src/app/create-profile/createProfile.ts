"use server"

import { api } from '~/trpc/server';
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '~/server/auth';

export default async function createProfile(formData: FormData) {
    const session = await getServerAuthSession();

    const avatarUrl = session ? session.user.image : 'https://github.com/shadcn.png';

    const rawFormData = {
        displayName: formData.get('displayName') as string,
        username: formData.get('username') as string,
        bio: formData.get('bio') as string,
        avatarUrl: avatarUrl
    }

    const profile = await api.profile.createProfile(rawFormData);

    console.log(profile);

    redirect('/profile');
}