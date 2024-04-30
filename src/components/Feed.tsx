import PostView from './Post';
import type { PostsType } from '@/types/post-types';

type FeedProps = {
  posts: PostsType[];
  profileId: string;
};

export default function Feed({ posts, profileId }: FeedProps ) {
  /*
    Feed

    This is the generic Feed component that displays posts. The posts are passed
    in as a prop and are displayed using the Post component. The Post component
    is a reusable component that displays a single post. The posts are displayed
    in a vertical list. The user can scroll through the posts. The user can also
    interest the posts. Future work would have users able to comment, share, and 
    interact with the profile that created the post. See the posts router in
    src/server/api/routers/post.ts for more details on how posts are fetched.
  */

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
      
      <div className="flex flex-col justify-center my-10">
        <h4 className="text-xl mx-auto font-semibold">You&apos;re all caught up!</h4>
        <h2 className="text-lg mx-auto font-semibold">There are no more posts to see.</h2>
      </div>
    </div>
  );
}
