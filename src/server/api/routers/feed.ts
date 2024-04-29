import { publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

export const feedRouter = createTRPCRouter({
  getPosts: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post.findMany({
        where: {
          feedId: input,
        },
        include: {
          createdBy: {
            select: {
              username: true,
              avatarUrl: true,
            },
          },
          comments: {
            include: {
              createdBy: true,
            },
          },
        },
      });

      return posts;
    }),
  getFeeds: publicProcedure.query(async ({ ctx }) => {
    const profileId = await ctx.db.profile.findFirst({
      where: {
        userId: ctx.session?.user.id,
      },
    }).then(profile => profile?.id);
  

    // Get profile's interested posts
    const interestedPosts = await ctx.db.post.findMany({
      where: {
        interestedProfiles: {
          some: {
            id: profileId,
          },
        },
      },
    });

    // Iterate through posts and rank their feeds by interest
    const feedMap = new Map<number, number>();

    interestedPosts.forEach(post => {
      const feedId = post.feedId ? post.feedId : 0;
      const interestCount = feedMap.get(feedId) ?? 0;
      feedMap.set(feedId, interestCount + 1);
    });

    // Get all feeds
    const feeds = await ctx.db.feed.findMany();

    // Sort feeds by interest
    feeds.sort((a, b) => {
      const aInterest = feedMap.get(a.id) ?? 0;
      const bInterest = feedMap.get(b.id) ?? 0;

      return bInterest - aInterest;
    });

    // Mark top 10 feeds as recommended, rest as not recommended
    feeds.forEach((feed, index) => {
      feed.recommended = index < 10;
    });

    return feeds;
  }),
});