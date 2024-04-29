/*
  Warnings:

  - Added the required column `coverImageUrl` to the `Feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommended` to the `Feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saved` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feed" ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "recommended" BOOLEAN NOT NULL,
ADD COLUMN     "saved" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "_profileSavedFeeds" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_profileRecommendedFeeds" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_profileSavedFeeds_AB_unique" ON "_profileSavedFeeds"("A", "B");

-- CreateIndex
CREATE INDEX "_profileSavedFeeds_B_index" ON "_profileSavedFeeds"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_profileRecommendedFeeds_AB_unique" ON "_profileRecommendedFeeds"("A", "B");

-- CreateIndex
CREATE INDEX "_profileRecommendedFeeds_B_index" ON "_profileRecommendedFeeds"("B");

-- AddForeignKey
ALTER TABLE "_profileSavedFeeds" ADD CONSTRAINT "_profileSavedFeeds_A_fkey" FOREIGN KEY ("A") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_profileSavedFeeds" ADD CONSTRAINT "_profileSavedFeeds_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_profileRecommendedFeeds" ADD CONSTRAINT "_profileRecommendedFeeds_A_fkey" FOREIGN KEY ("A") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_profileRecommendedFeeds" ADD CONSTRAINT "_profileRecommendedFeeds_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
