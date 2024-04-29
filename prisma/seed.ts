import { PrismaClient } from '@prisma/client';

// Run this script with `npx prisma db seed`

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Fetch Bob's profile
    // const profile = await prisma.profile.findUnique({
    //     where: { username: 'lukebrichey' },
    // });

    // const samplePosts = [
    //     {
    //         caption: 'Look what I have in the shop today! Beautiful guitar',
    //         createdAt: "2021-12-17T03:28:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit.png',
    //     },
    //     {
    //         caption: 'Check out the link in my bio to hear my new cover',
    //         createdAt: "2020-09-08T16:47:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit2.png',
    //     },
    //     {
    //         caption: 'I love going to guitar shops',
    //         createdAt: "2023-07-23T09:13:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit3.png',
    //     },
    //     {
    //         caption: 'Great concert last night',
    //         createdAt: "2022-08-02T21:55:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit4.png',
    //     },
    //     {
    //         caption: 'Brand new guitars in, just in time for christmas',
    //         createdAt: "2024-01-10T13:42:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit5.png',
    //     },
    //     {
    //         caption: 'First concert with my new guitar',
    //         createdAt: "2021-09-01T14:32:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit6.png',
    //     },
    //     {
    //         caption: 'Cover of Fast Car about to be uploaded',
    //         createdAt: "2024-03-07T17:18:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit7.png',
    //     },
    //     {
    //         caption: 'Did anyone else know this is how guitars are made??',
    //         createdAt: "2021-09-01T18:17:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit8.png',
    //     },
    //     {
    //         caption: 'Sitting and playing',
    //         createdAt: "2023-01-28T07:21:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit9.png',
    //     },
    //     {
    //         caption: 'Me and my love on a nature walk',
    //         createdAt: "2021-09-01T17:20:00Z",
    //         description: 'Guitar',
    //         imageUrl: 'https://lukebrichey.github.io/finsta-images/guitar/guit10.png',
    //     },
    // ];

    // if (!profile) {
    //     console.error('Bob\'s profile not found');
    //     return;
    // }

    const postsWithTravel = await prisma.post.findMany({
        where: {
            description: 'Travel',
        },
    });

    const postsWithRocknRoll = await prisma.post.findMany({
        where: {
            description: 'RocknRoll',
        },
    });

    const postsWithRecipe = await prisma.post.findMany({
        where: {
            description: 'Recipe',
        },
    });

    const postsWithPugs = await prisma.post.findMany({
        where: {
            description: 'Pugs',
        },
    });

    const postsWithPainting = await prisma.post.findMany({
        where: {
            description: 'Painting',
        },
    });

    const postsWithNews = await prisma.post.findMany({
        where: {
            description: 'News',
        },
    });

    const postsWithLego = await prisma.post.findMany({
        where: {
            description: 'Lego',
        },
    });

    const postsWithInteriorDesign = await prisma.post.findMany({
        where: {
            description: 'Interior Design',
        },
    });

    const postsWithEnglishCoastline = await prisma.post.findMany({
        where: {
            description: 'English Coastline',
        },
    });

    const postsWithChristmas = await prisma.post.findMany({
        where: {
            description: 'Christmas',
        },
    });

    const postsWithBoardgames = await prisma.post.findMany({
        where: {
            description: 'Boardgames',
        },
    });



    // Create posts for Bob
    // for (const post of samplePosts) {
    //     await prisma.post.create({
    //         data: {
    //             caption: post.caption,
    //             createdAt: post.createdAt,
    //             description: post.description,
    //             imageUrl: post.imageUrl,
    //             createdBy: {
    //                 connect: {
    //                     id: profile.id,
    //                 },
    //             }
    //         },
    //     });
    // }

    // Initialize feeds
    const feeds = [
        {
            label: 'Travel',
            coverImageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithTravel.map(post => ({ id: post.id }))  // Map to get only post IDs
        },
        {
            label: 'Rock and Roll',
            coverImageUrl: 'https://images.unsplash.com/photo-1629276301687-be2af9fd6ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9jayUyMG4lMjByb2xsfGVufDB8fDB8fHww',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithRocknRoll.map(post => ({ id: post.id }))
        },
        {
            label: 'Recipe',
            coverImageUrl: 'https://images.unsplash.com/photo-1565299636929-7e9f3d5f4d2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fHww',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithRecipe.map(post => ({ id: post.id }))
    },
        {
            label: 'Pugs',
            coverImageUrl: 'https://images.unsplash.com/photo-1499938971550-7ad287075e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVnc3xlbnwwfHwwfHx8MA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithPugs.map(post => ({ id: post.id }))
        },
        {
            label: 'Painting',
            coverImageUrl: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithPainting.map(post => ({ id: post.id }))
        },
        {
            label: 'News',
            coverImageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithNews.map(post => ({ id: post.id }))
        },
        {
            label: 'Lego',
            coverImageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnb3xlbnwwfHwwfHx8MA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithLego.map(post => ({ id: post.id }))
        },
        {
            label: 'Interior Design',
            coverImageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithInteriorDesign.map(post => ({ id: post.id }))
        },
        {
            label: 'English Coastline',
            coverImageUrl: 'https://images.unsplash.com/photo-1642572597347-b9de27827d75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGNvYXN0bGluZXxlbnwwfHwwfHx8MA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: true,
            recommendedFor: [],
            posts: postsWithEnglishCoastline.map(post => ({ id: post.id }))
        },
        {
            label: 'Christmas',
            coverImageUrl: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzfGVufDB8fDB8fHww',
            saved: false,
            savedFor: [],
            recommended: false,
            recommendedFor: [],
            posts: postsWithChristmas.map(post => ({ id: post.id }))
        },
        {
            label: 'Boardgames',
            coverImageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9hcmQlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D',
            saved: false,
            savedFor: [],
            recommended: false,
            recommendedFor: [],
            posts: postsWithBoardgames.map(post => ({ id: post.id }))
        }

    ];

    // Create feeds
    for (const feed of feeds) {
        await prisma.feed.create({
            data: {
                label: feed.label,
                coverImageUrl: feed.coverImageUrl,
                saved: feed.saved,
                recommended: feed.recommended,
                posts: {
                    connect: feed.posts,
                },
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
