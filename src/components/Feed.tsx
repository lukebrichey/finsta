import Post from './Post';
import type { PostProps } from '../types/post-types';

type FeedProps = {
    posts: PostProps[]
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className="h-screen overflow-y-auto py-4">
      {posts.map((post, index) => (
        <Post
          key={index}
          user={post.user}
          imageUrl={post.imageUrl}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default Feed;
