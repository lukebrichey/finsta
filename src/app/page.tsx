// pages/index.js
import Feed from '../components/Feed';

// Mock data to simulate a list of posts. Replace with your actual data fetching logic.
const postsData = [
  {
    user: {
      username: "Michaela",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/liverpool.png',
    comments: [
      { username: "Michaela", text: "I love rugby!" },
      { username: "Luke", text: "I prefer the NFL!" },
      { username: "Michaela", text: "Freak" }
    ]
  },
  {
    user: {
      username: "Michaela",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/rugby.png',
    comments: [
      { username: "Michaela", text: "I love rugby!" },
      { username: "Luke", text: "I prefer the NFL!" },
      { username: "Michaela", text: "Freak" }
    ]
  },
  {
    user: {
      username: "Michaela",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/arsenal.png',
    comments: [
      { username: "Michaela", text: "I love rugby!" },
      { username: "Luke", text: "I prefer the NFL!" },
      { username: "Michaela", text: "Freak" }
    ]
  },
  {
    user: {
      username: "Michaela",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/rugby.png',
    comments: [
      { username: "Michaela", text: "I love rugby!" },
      { username: "Luke", text: "I prefer the NFL!" },
      { username: "Michaela", text: "Freak" }
    ]
  },
  {
    user: {
      username: "bob",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/arsenal.png',
    comments: [
      { username: "alice", text: "Loved this!" }
    ]
  },
  {
    user: {
      username: "bob",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    imageUrl: 'https://lukebrichey.github.io/finsta-images/liverpool.png',
    comments: [
      { username: "alice", text: "nice" }
    ]
  },
];

export default function Home() {
  return (
      <div>
          <Feed posts={postsData} />
      </div>
  );
}

