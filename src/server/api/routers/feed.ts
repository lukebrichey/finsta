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
    const feeds = await ctx.db.feed.findMany();

    return feeds;
  }),
});