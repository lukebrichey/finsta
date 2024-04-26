"use server"

import { api } from '~/trpc/server';
import { redirect } from 'next/navigation';

export default async function createProfile(formData: FormData) {
    const rawFormData = {
        displayName: formData.get('displayName') as string,
        username: formData.get('username') as string,
        bio: formData.get('bio') as string,
    }

    const profile = await api.profile.createProfile(rawFormData);

    console.log(profile);

    redirect('/profile');
}