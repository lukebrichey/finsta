import PostView from './Post';
import type { PostsType } from '@/types/post-types';

type FeedProps = {
  posts: PostsType[];
  profileId: string;
};

export default function Feed({ posts, profileId }: FeedProps ) {
  return (
    <div className="h-screen overflow-y-auto py-4">
      {posts.map((post, index) => (
        <PostView
          key={index}
          createdBy={post.createdBy}
          imageUrl={post.imageUrl}
          comments={post.comments}
          id={post.id}
          caption={post.caption}
          profileId={profileId}
        />
      ))}
    </div>
  );
}
