import { api } from '~/trpc/server';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';
import Feed from '../../../components/Feed';
import BackButton from '../../../components/BackButton';

export default async function FeedPage({
  params,
}: {
  params: {
    feedId: string;
  };
}) {

    const session = await getServerAuthSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    const profile = await api.profile.getProfileById(session.user.id);

    if (!profile) {
        redirect('/create-profile');
    }

    const feedId: number = +params.feedId;

    /* 
      Here we fetch the posts for the feed. The backend logic can be found at 
      the feedRouter in src/server/api/routers/feed.ts. We essentially
      have predefined feeds with associated feedId's. In the future, feeds could 
      be dynamically generated based on the user's activity as described in the 
      writeup. Feeds could also possibly be generated for a specific user/persona
      like a Lebron James feed or a Taylor Swift feed.
    */
    const postsData = await api.feed.getPosts(feedId);


    return (
      <div>
        <div style={{ position: 'fixed', top: 30, left: 300 }}>
          <BackButton />
        </div>
        <Feed posts={postsData} profileId={profile.id} />
      </div>
    );
}
