/*
  Warnings:

  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `FollowRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserMutuals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FollowRequest" DROP CONSTRAINT "FollowRequest_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "FollowRequest" DROP CONSTRAINT "FollowRequest_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropForeignKey
ALTER TABLE "_InterestedPosts" DROP CONSTRAINT "_InterestedPosts_B_fkey";

-- DropForeignKey
ALTER TABLE "_UserMutuals" DROP CONSTRAINT "_UserMutuals_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserMutuals" DROP CONSTRAINT "_UserMutuals_B_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bio",
DROP COLUMN "username";

-- DropTable
DROP TABLE "FollowRequest";

-- DropTable
DROP TABLE "_UserMutuals";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_profileMutuals" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_profileMutuals_AB_unique" ON "_profileMutuals"("A", "B");

-- CreateIndex
CREATE INDEX "_profileMutuals_B_index" ON "_profileMutuals"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InterestedPosts" ADD CONSTRAINT "_InterestedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_profileMutuals" ADD CONSTRAINT "_profileMutuals_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_profileMutuals" ADD CONSTRAINT "_profileMutuals_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
