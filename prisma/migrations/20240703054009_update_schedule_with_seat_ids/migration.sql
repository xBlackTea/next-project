/*
  Warnings:

  - The `seat_id` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_seat_id_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "seat_id",
ADD COLUMN     "seat_id" INTEGER[];

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "Seat"("seat_id") ON DELETE RESTRICT ON UPDATE CASCADE;
