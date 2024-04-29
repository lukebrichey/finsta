import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatestPosts: publicProcedure.query(async ({ ctx }) => {
    const postsCount = await ctx.db.post.count();
    const skip = Math.floor(Math.random() * postsCount);

    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      skip: skip,
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
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  addInterest: protectedProcedure
    .input(z.object({ postId: z.number(), profileId: z.string()}))
    .mutation(({ ctx, input }) => {
      return ctx.db.post.update({
        where: { id: input.postId },
        data: {
          interestedProfiles: {
            connect: {
              id: input.profileId,
            },
          },
        },
      });
    }),
  removeInterest: protectedProcedure
    .input(z.object({ postId: z.number(), profileId: z.string()}))
    .mutation(({ ctx, input }) => {
      return ctx.db.post.update({
        where: { id: input.postId },
        data: {
          interestedProfiles: {
            disconnect: {
              id: input.profileId,
            },
          },
        },
      });
    }),
  getPostsByProfileId: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findMany({
        where: {
          createdBy: {
            id: input,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
});
