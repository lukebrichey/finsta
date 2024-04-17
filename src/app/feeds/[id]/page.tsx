import Feed from '../../../components/Feed';
import brown from '../../../../images/brown.jpg';
import polumalu from '../../../../images/polumalu.jpeg';
import bryant from '../../../../images/bryant.jpg';


export default function FeedPage() {
    // Mock data to simulate a list of posts. Replace with your actual data fetching logic.
    const postsData = [
        {
        user: {
            username: "steelers",
            avatarUrl: 'https://seeklogo.com/images/P/Pittsburgh_Steelers-logo-EAE5BCABDE-seeklogo.com.png'
        },
        image: brown,
        comments: [
            { username: "bob", text: "This is amazing!" },
            { username: "charlie", text: "Wow, great post!" }
        ]
        },
        {
        user: {
            username: "steelers",
            avatarUrl: 'https://seeklogo.com/images/P/Pittsburgh_Steelers-logo-EAE5BCABDE-seeklogo.com.png'
        },
        image: bryant,
        comments: [
            { username: "alice", text: "Loved this!" }
        ]
        },
        {
        user: {
            username: "steelers",
            avatarUrl: 'https://seeklogo.com/images/P/Pittsburgh_Steelers-logo-EAE5BCABDE-seeklogo.com.png'
        },
        image: polumalu,
        comments: [
            { username: "alice", text: "nice" }
        ]
        },
    ];

    return (
      <div>
        <Feed posts={postsData}/>
      </div>
    );
}
