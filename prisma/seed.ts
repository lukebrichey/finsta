import { PrismaClient } from '@prisma/client';

// Run this script with `npx prisma db seed`

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Fetch Bob's profile
    const profile = await prisma.profile.findUnique({
        where: { username: 'peaches22' },
    });

    const samplePosts = [
        {
            caption: 'i love rugby',
            createdAt: "2021-09-01T12:00:00Z",
            description: 'Rugby Match',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/rugby.jpeg',
        }
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
