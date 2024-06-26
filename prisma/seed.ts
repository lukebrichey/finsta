import { PrismaClient } from '@prisma/client';

// Run this script with `npx prisma db seed`

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars 
    const clearInterestedPosts = async () => {
        // Fetch username's profile
        const profile = await prisma.profile.findFirst({
            where: {
                username: 'upDog',
            },
        });

        if (!profile) {
            throw new Error('profile not found');
        };

        // Clear interestedPosts
        const interestedPosts = await prisma.post.findMany({
            where: {
            interestedProfiles: {
                some: {
                id: profile.id,
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
                            id: profile.id,
                        },
                    },
                },
            });
        };
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars 
    const populateComments = async () => {
        // Find some profiles
        const profiles = await prisma.profile.findMany({
            take: 10,
        });

        if (profiles.length === 0) {
            throw new Error('No profiles found');
        };

        // Find some posts to add a comment on
        const posts = await prisma.post.findMany({
            take: 100,
        });

        // Add comments randomly
        const comments = ['Wow, this is awesome!', 'Great work!', 'I love it!', 'Amazing!', 'Awesome job!'];
        for (const post of posts) {
            const randomComment = comments[Math.floor(Math.random() * comments.length)] ?? "Default comment";

            // For profileId, with a fallback to an empty string or a default ID if no profiles exist
            const profileId = profiles[Math.floor(Math.random() * profiles.length)]?.id ?? "clvk1j4gw000224wkzzqrmt1j";
            
            await prisma.comment.create({
                data: {
                    content: randomComment,
                    postId: post.id,
                    createdById: profileId,
                }
            });
        }

        console.log('Comments populated.');
    };

    await clearInterestedPosts();

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
