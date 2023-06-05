/*
  Warnings:

  - You are about to drop the column `dateOfBirth` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `users` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "dateOfBirth",
DROP COLUMN "telefone",
ADD COLUMN     "birthdate" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
