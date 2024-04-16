// pages/index.js
import Head from 'next/head';
import Post from '../components/Post';
import Boy from '../../boy.png';

const fakeUser = {
  username: "lukebrichey",
  avatarUrl: Boy
};

const fakeComment = {
  username: "lukebrichey",
  text: "epic post bro"
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post
        user={fakeUser}
        image={Boy}
        comments={[fakeComment]}
      />
    </div>
  );
}
