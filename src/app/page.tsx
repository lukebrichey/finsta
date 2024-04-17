// pages/index.js
import Head from 'next/head';
import Feed from '../components/Feed';
import arsenal from '../../images/arsenal.png';
import liverpool from '../../images/liverpool.png';
import rugby from '../../images/rugby.png';

// Mock data to simulate a list of posts. Replace with your actual data fetching logic.
const postsData = [
  {
    user: {
      username: "alice",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    image: rugby,
    comments: [
      { username: "bob", text: "This is amazing!" },
      { username: "charlie", text: "Wow, great post!" }
    ]
  },
  {
    user: {
      username: "bob",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    image: arsenal,
    comments: [
      { username: "alice", text: "Loved this!" }
    ]
  },
  {
    user: {
      username: "bob",
      avatarUrl: 'https://github.com/shadcn.png'
    },
    image: liverpool,
    comments: [
      { username: "alice", text: "nice" }
    ]
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Feed posts={postsData} />
    </div>
  );
}
