import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatestPosts: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
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
});
