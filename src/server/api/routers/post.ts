import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  /*
    This fetches the latest 20 posts from the database. The posts are sorted by 
    the latest post date. This is used to display the home feed. See the Home 
    component for more details. We sort by chronological order so the Home 
    feed is purely to catch up on the latest posts of mutuals.
  */
  
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

  /*
    This allows the user to add or remove interest. When a user is interested in a post,
    it will affect their recommended feeds. Future work would include a more sophisticated
    ranking system that would rank feeds based on the user's mutuals and their mutuals' feeds.
    Could be less of a binary interested or not interested and more of a ranking system.
  */
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
  // Fetch the posts for a given profile
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
  getPost: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return ctx.db.post.findFirst({
        where: {
          id: input,
        },
        include: {
          interestedProfiles: true,
        }
      });
    }),
});
