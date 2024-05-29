/*
  Warnings:

  - A unique constraint covering the columns `[user_email,anime_mal_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime_mal_id` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` ADD COLUMN `anime_mal_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_anime_mal_id_key` ON `Collection`(`user_email`, `anime_mal_id`);
