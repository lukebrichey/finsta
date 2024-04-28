// pages/index.js
import Feed from '../components/Feed';
import { api } from '~/trpc/server';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  // Fetch posts from the posts router
  const posts = await api.post.getLatestPosts();

  // Fetch the session
  const session = await getServerAuthSession();

  // If the session is not present, redirect to the login page
  if (!session) {
    redirect('/api/auth/signin');
  }

  // Get the user's profile id
  const profile = await api.profile.getProfileById(session.user.id);

  // If the user does not have a profile, redirect to the create profile page
  if (!profile) {
    redirect('/create-profile');
  }

  return (
      <div>
          <Feed posts={posts} profileId={profile.id}/>
      </div>
  );
}

