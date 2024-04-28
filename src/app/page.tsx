// pages/index.js
import Feed from '../components/Feed';
import { api } from '~/trpc/server';

export default async function Home() {
  // Fetch posts from the posts router
  const posts = await api.post.getLatestPosts();

  return (
      <div>
          <Feed posts={posts} />
      </div>
  );
}

