import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Mock data simplified for seeding purposes
    const userData = [
        {
            username: "Michaela",
            avatarUrl: 'https://github.com/shadcn.png',
            displayName: 'Michaela Johnson',
            bio: 'Rugby lover and web developer',
            userId: 'michaela-user-id',
        },
        {
            username: "bob",
            avatarUrl: 'https://github.com/shadcn.png',
            displayName: 'Bob Smith',
            bio: 'Sports fan and coder',
            userId: 'bob-user-id',
        },
        {
            username: "alice",
            avatarUrl: 'https://github.com/shadcn.png',
            displayName: 'Alice Wonderland',
            bio: 'Enjoying life and sports',
            userId: 'alice-user-id',
        },
        {
            username: "Luke",
            avatarUrl: 'https://github.com/shadcn.png',
            displayName: 'Luke Skywalker',
            bio: 'NFL Fan and Rebel',
            userId: 'luke-user-id',
        }
    ];

    // Create users
    for (const user of userData) {
        await prisma.profile.upsert({
            where: { username: user.username },
            update: {},
            create: {
                username: user.username,
                avatarUrl: user.avatarUrl,
                displayName: user.displayName,
                bio: user.bio,
                userId: user.userId, // Assuming this links to a User model or authentication system
            },
        });
    }

    // Mock posts data
    const postsData = [
        {
            username: "Michaela",
            imageUrl: 'https://example.com/rugby.jpg',
            comments: [
                { username: "Michaela", text: "I love rugby!" },
                { username: "Luke", text: "I prefer the NFL!" },
                { username: "Michaela", text: "Freak" }
            ]
        },
        {
            username: "bob",
            imageUrl: 'https://example.com/arsenal.jpg',
            comments: [
                { username: "alice", text: "Loved this!" }
            ]
        },
        {
            username: "bob",
            imageUrl: 'https://example.com/liverpool.jpg',
            comments: [
                { username: "alice", text: "nice" }
            ]
        }
    ];

    // Create posts and comments
    for (const postData of postsData) {
        const creator = await prisma.profile.findUnique({
            where: { username: postData.username }
        });

        if (creator) {
            const post = await prisma.post.create({
                data: {
                    name: 'A Post About Sports',
                    description: 'Discussing recent sports events',
                    imageUrl: postData.imageUrl,
                    createdBy: { connect: { id: creator.id } },
                }
            });

            for (const comment of postData.comments) {
                const commenter = await prisma.profile.findUnique({
                    where: { username: comment.username }
                });

                if (commenter) {
                    await prisma.comment.create({
                        data: {
                            content: comment.text,
                            createdBy: { connect: { id: commenter.id } },
                            post: { connect: { id: post.id } }
                        }
                    });
                }
            }
        }
    }
}

main()
    .then(async () => {
        console.log('Seeding finished.');
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Error during seeding:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
