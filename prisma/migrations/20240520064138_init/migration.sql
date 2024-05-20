/*
  Warnings:

  - The primary key for the `cashmethod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cash_id` on the `cashmethod` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cashmethod" DROP CONSTRAINT "cashmethod_pkey",
DROP COLUMN "cash_id",
ADD COLUMN     "method_id" SERIAL NOT NULL,
ADD CONSTRAINT "cashmethod_pkey" PRIMARY KEY ("method_id");

-- CreateTable
CREATE TABLE "category" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "cash" (
    "cash_id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "price_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,

    CONSTRAINT "cash_pkey" PRIMARY KEY ("cash_id")
);
