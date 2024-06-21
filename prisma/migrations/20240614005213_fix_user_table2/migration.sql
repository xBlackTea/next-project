-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_schedule_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "schedule_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("schedule_id") ON DELETE SET NULL ON UPDATE CASCADE;
