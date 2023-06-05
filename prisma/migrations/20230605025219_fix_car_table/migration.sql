/*
  Warnings:

  - The values [Alcool,Eletrico] on the enum `FuelType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `beard` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `milagre` on the `cars` table. All the data in the column will be lost.
  - Added the required column `brand` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `milage` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FuelType_new" AS ENUM ('Flex', 'Gasolina', 'Etanol', 'Diesel');
ALTER TABLE "cars" ALTER COLUMN "fuel" TYPE "FuelType_new" USING ("fuel"::text::"FuelType_new");
ALTER TYPE "FuelType" RENAME TO "FuelType_old";
ALTER TYPE "FuelType_new" RENAME TO "FuelType";
DROP TYPE "FuelType_old";
COMMIT;

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "beard",
DROP COLUMN "milagre",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "milage" INTEGER NOT NULL;
