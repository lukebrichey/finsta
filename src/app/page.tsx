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

  /*
    Home Feed
    The home feed is a feed that displays the latest posts from all the user's 
    mutuals. We were unable to implement this feature, so currently the home feed
    is just 20 random posts sorted by the latest post date. See the Feed component
    for more details.
  */
  return (
      <div>
          <Feed posts={posts} profileId={profile.id}/>
      </div>
  );
}

