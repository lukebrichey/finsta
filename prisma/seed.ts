import { PrismaClient } from '@prisma/client';

// Run this script with `npx prisma db seed`

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Fetch lukebrichey's profile
    const lukebrichey = await prisma.profile.findFirst({
        where: {
            username: 'lukebrichey',
        },
    });

    if (!lukebrichey) {
        throw new Error('lukebrichey not found');
    };

    // Clear interestedPosts
    const interestedPosts = await prisma.post.findMany({
        where: {
          interestedProfiles: {
            some: {
              id: lukebrichey.id,
            },
          },
        },
      });

    for (const post of interestedPosts) {
        await prisma.post.update({
            where: { id: post.id },
            data: {
                interestedProfiles: {
                    disconnect: {
                        id: lukebrichey.id,
                    },
                },
            },
        });
    };

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
