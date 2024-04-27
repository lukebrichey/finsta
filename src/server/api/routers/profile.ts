// server/routers/profileRouter.ts
import { publicProcedure, protectedProcedure, createTRPCRouter } from '../trpc';
import { z } from 'zod';

export const profileRouter = createTRPCRouter({
    getProfileById: publicProcedure
        .input(z.string())
        .query(async ({ ctx, input }) => {
            const profile = await ctx.db.profile.findUnique({
                where: { userId: input },
                include: {
                    _count: {
                        select: {
                            mutuals: true,
                            posts: true,
                            interestedPosts: true
                        }
                    }
                }
            });

            if (!profile) {
                return null;
            }

            return profile;
        }),
    createProfile: protectedProcedure
        .input(z.object({
            displayName: z.string(),
            username: z.string(),
            bio: z.string().optional(),
            avatarUrl: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            const profile = await ctx.db.profile.create({
                data: {
                    userId: ctx.session.user.id,
                    ...input
                }
            });

            return profile;
        })
        
});
