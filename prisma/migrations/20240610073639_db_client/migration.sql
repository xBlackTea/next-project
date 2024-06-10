/*
  Warnings:

  - You are about to drop the column `school_type` on the `Price` table. All the data in the column will be lost.
  - You are about to drop the column `movie_id` on the `Screen` table. All the data in the column will be lost.
  - You are about to drop the column `movie_start` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `screen_id` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `seat_height` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `seat_width` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `student` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[seat_point]` on the table `Seat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[schedule_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discount_id` to the `Cash` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_point` to the `Seat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_screen_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_seat_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_screen_id_fkey";

-- DropIndex
DROP INDEX "Cash_method_id_key";

-- DropIndex
DROP INDEX "Cash_movie_id_key";

-- DropIndex
DROP INDEX "Cash_price_id_key";

-- DropIndex
DROP INDEX "Cash_user_id_key";

-- AlterTable
ALTER TABLE "Cash" ADD COLUMN     "discount_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Price" DROP COLUMN "school_type";

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "movie_id";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "movie_start",
DROP COLUMN "screen_id",
DROP COLUMN "seat_height",
DROP COLUMN "seat_width",
ADD COLUMN     "seat_point" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "student",
ADD COLUMN     "schedule_id" INTEGER NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Reservation";

-- CreateTable
CREATE TABLE "Schedule" (
    "schedule_id" SERIAL NOT NULL,
    "screen_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "seat_id" INTEGER NOT NULL,
    "movie_start" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("schedule_id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "discount_id" SERIAL NOT NULL,
    "discount_type" TEXT NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("discount_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seat_seat_point_key" ON "Seat"("seat_point");

-- CreateIndex
CREATE UNIQUE INDEX "User_schedule_id_key" ON "User"("schedule_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_screen_id_fkey" FOREIGN KEY ("screen_id") REFERENCES "Screen"("screen_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "Seat"("seat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("discount_id") ON DELETE RESTRICT ON UPDATE CASCADE;
