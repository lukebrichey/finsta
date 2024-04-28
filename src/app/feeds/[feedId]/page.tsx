import { api } from '~/trpc/server';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';
import Feed from '../../../components/Feed';

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

    const postsData = await api.feed.getPosts(feedId);


    return (
      <div>
        <Feed posts={postsData} profileId={profile.id} />
      </div>
    );
}