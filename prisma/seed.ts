import { PrismaClient } from '@prisma/client';

// Run this script with `npx prisma db seed`

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Fetch Bob's profile
    const profile = await prisma.profile.findUnique({
        where: { username: 'michaelabibby' },
    });

    const samplePosts = [
        {
            caption: 'Look what I have in the shop today! Beautiful guitar',
            createdAt: "2021-12-17T03:28:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit.png',
        },
        {
            caption: 'Check out the link in my bio to hear my new cover',
            createdAt: "2020-09-08T16:47:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit2.png',
        },
        {
            caption: 'I love going to guitar shops',
            createdAt: "2023-07-23T09:13:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit3.png',
        },
        {
            caption: 'Great concert last night',
            createdAt: "2022-08-02T21:55:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit4.png',
        },
        {
            caption: 'Brand new guitars in, just in time for christmas',
            createdAt: "2024-01-10T13:42:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit5.png',
        },
        {
            caption: 'First concert with my new guitar',
            createdAt: "2021-09-01T14:32:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit6.png',
        },
        {
            caption: 'Cover of Fast Car about to be uploaded',
            createdAt: "2024-03-07T17:18:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit7.png',
        },
        {
            caption: 'Did anyone else know this is how guitars are made??',
            createdAt: "2021-09-01T18:17:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit8.png',
        },
        {
            caption: 'Sitting and playing',
            createdAt: "2023-01-28T07:21:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit9.png',
        },
        {
            caption: 'Me and my love on a nature walk',
            createdAt: "2021-09-01T17:20:00Z",
            description: 'Guitar',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit10.png',
        },
    ];

    if (!profile) {
        console.error('Bob\'s profile not found');
        return;
    }

    // Create posts for Bob
    for (const post of samplePosts) {
        await prisma.post.create({
            data: {
                caption: post.caption,
                createdAt: post.createdAt,
                description: post.description,
                imageUrl: post.imageUrl,
                createdBy: {
                    connect: {
                        id: profile.id,
                    },
                }
            },
        });
    }

    console.log('Seeding finished.');
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
