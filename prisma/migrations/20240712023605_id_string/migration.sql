/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Cash" DROP CONSTRAINT "Cash_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSchedule" DROP CONSTRAINT "UserSchedule_user_id_fkey";

-- AlterTable
ALTER TABLE "Cash" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "user_user_id_seq";

-- AlterTable
ALTER TABLE "UserSchedule" DROP CONSTRAINT "UserSchedule_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserSchedule_pkey" PRIMARY KEY ("user_id", "schedule_id");

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSchedule" ADD CONSTRAINT "UserSchedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
