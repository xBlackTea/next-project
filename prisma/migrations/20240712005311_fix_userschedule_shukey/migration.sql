/*
  Warnings:

  - The primary key for the `UserSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UserSchedule" DROP CONSTRAINT "UserSchedule_pkey",
ADD COLUMN     "user_schedule_id" SERIAL NOT NULL,
ADD CONSTRAINT "UserSchedule_pkey" PRIMARY KEY ("user_schedule_id");
