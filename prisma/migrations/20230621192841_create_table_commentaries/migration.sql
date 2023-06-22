-- CreateTable
CREATE TABLE "commentaries" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "commentaries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "commentaries" ADD CONSTRAINT "commentaries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentaries" ADD CONSTRAINT "commentaries_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
