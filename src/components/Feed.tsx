import PostView from './Post';
import type { PostViewType } from '@/types/post-types';

type FeedProps = {
  posts: PostViewType[];
};

export default function Feed({ posts }: FeedProps ) {
  return (
    <div className="h-screen overflow-y-auto py-4">
      {posts.map((post, index) => (
        <PostView
          key={index}
          createdBy={post.createdBy}
          imageUrl={post.imageUrl}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
