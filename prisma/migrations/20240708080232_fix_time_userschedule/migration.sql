/*
  Warnings:

  - You are about to drop the column `movie_start` on the `Schedule` table. All the data in the column will be lost.
  - The `seat_id` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `schedule_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `time_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_seat_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_schedule_id_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "movie_start",
ADD COLUMN     "time_id" INTEGER NOT NULL,
DROP COLUMN "seat_id",
ADD COLUMN     "seat_id" INTEGER[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "schedule_id";

-- CreateTable
CREATE TABLE "MovieTime" (
    "time_id" SERIAL NOT NULL,
    "movie_start" TEXT NOT NULL,

    CONSTRAINT "MovieTime_pkey" PRIMARY KEY ("time_id")
);

-- CreateTable
CREATE TABLE "UserSchedule" (
    "user_id" INTEGER NOT NULL,
    "schedule_id" INTEGER NOT NULL,

    CONSTRAINT "UserSchedule_pkey" PRIMARY KEY ("user_id","schedule_id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "MovieTime"("time_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSchedule" ADD CONSTRAINT "UserSchedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSchedule" ADD CONSTRAINT "UserSchedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;
