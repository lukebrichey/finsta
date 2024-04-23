import Feed from '../../../components/Feed';
import arsenal from '../../../../images/arsenal.png';
import liverpool from '../../../../images/liverpool.png';
import rugby from '../../../../images/rugby.png';


export default function FeedPage() {
    // Mock data to simulate a list of posts. Replace with your actual data fetching logic.
    const postsData = [
        {
        user: {
            username: "steelers",
            avatarUrl: 'https://seeklogo.com/images/P/Pittsburgh_Steelers-logo-EAE5BCABDE-seeklogo.com.png'
        },
        image: arsenal,
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
        image: liverpool,
        comments: [
            { username: "alice", text: "Loved this!" }
        ]
        },
        {
        user: {
            username: "steelers",
            avatarUrl: 'https://seeklogo.com/images/P/Pittsburgh_Steelers-logo-EAE5BCABDE-seeklogo.com.png'
        },
        image: rugby,
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
