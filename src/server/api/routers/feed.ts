import { publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";
import type { Feed } from "@prisma/client";

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
    

      // Raw SQL query to fetch feeds ordered by the count of posts that the current profile is interested in
      const feeds = await ctx.db.$queryRaw<Feed[]>`
        SELECT f.*, COUNT(p.id) AS InterestedCount
        FROM Feed f
        LEFT JOIN Post p ON p.feedId = f.id
        LEFT JOIN PostInterestedProfile pip ON pip.postId = p.id AND pip.profileId = ${profileId}
        GROUP BY f.id
        ORDER BY InterestedCount DESC
        LIMIT 5
      `;
    
      const feedIds = feeds.map(feed => feed.id);

      if (feedIds.length > 0) {
        await ctx.db.feed.updateMany({
          where: {
            id: {
              in: feedIds
            }
          },
          data: {
            recommended: true,
          }
        });
      }
    
      return feeds;

    }) 
});