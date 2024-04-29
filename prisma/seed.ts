import { PrismaClient } from '@prisma/client';
import { Young_Serif } from 'next/font/google';

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
            caption: 'It\'s the most wonderful time of the year',
            createdAt: "2021-12-17T03:28:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ1.png',
        },
        {
            caption: 'Just a bit of Christmas inspiration for those of you still decorating',
            createdAt: "2020-09-08T16:47:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ2.png',
        },
        {
            caption: 'Every year I attempt a ginger bread house and every year I fail',
            createdAt: "2023-07-23T09:13:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ3.png',
        },
        {
            caption: '3 days left!',
            createdAt: "2022-08-02T21:55:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ4.png',
        },
        {
            caption: 'Like this post if you believe in Father Christmas',
            createdAt: "2024-01-10T13:42:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ5.png',
        },
        {
            caption: 'Have a holly jolly Christmas',
            createdAt: "2021-09-01T14:32:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ5.png',
        },
        {
            caption: 'GOOD KING WENCESLAS',
            createdAt: "2024-01-07T17:18:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ6.png',
        },
        {
            caption: 'Do you prefer Christmas or summer?',
            createdAt: "2021-09-01T18:17:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ7.png',
        },
        {
            caption: 'I love a good Christmas decoration',
            createdAt: "2023-01-28T07:21:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ8.png',
        },
        {
            caption: 'LAST CHRISTMAS I GAVE YOU MY HEART',
            createdAt: "2021-09-01T17:20:00Z",
            description: 'Boardgames',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/christmas/christ9.png',
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
