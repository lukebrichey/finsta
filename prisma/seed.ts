import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Fetch Bob's profile
    const profile = await prisma.profile.findUnique({
        where: { username: 'bob' },
    });

    const samplePosts = [
        {
            caption: 'i love the steelers',
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
            description: 'A photo of Santonio Holmes making a catch against the Arizona Cardinals in the Super Bowl',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/holmes.jpeg',
        },
        {
            caption: 'jordan is my goat',
            createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
            description: 'A photo of Michael Jordan\'s iconic free throw line dunk',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/jordan.jpeg',
        },
        {
            caption: 'lebron is aight',
            createdAt: new Date(Date.now() - 16 * 60 * 60 * 1000),
            description: 'A photo of LeBron James\' iconic block in the 2016 NBA Finals',
            imageUrl: 'https://lukebrichey.github.io/finsta-images/lebron_block.jpeg',
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
