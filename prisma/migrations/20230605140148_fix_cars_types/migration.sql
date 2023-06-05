/*
  Warnings:

  - Changed the type of `published` on the `cars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "price" SET DATA TYPE TEXT,
DROP COLUMN "published",
ADD COLUMN     "published" BOOLEAN NOT NULL;
