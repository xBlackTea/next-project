/*
  Warnings:

  - A unique constraint covering the columns `[e_mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `e_mail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE user_user_id_seq;
ALTER TABLE "User" ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "e_mail" TEXT NOT NULL,
ADD COLUMN     "student" BOOLEAN NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ALTER COLUMN "user_id" SET DEFAULT nextval('user_user_id_seq');
ALTER SEQUENCE user_user_id_seq OWNED BY "User"."user_id";

-- CreateIndex
CREATE UNIQUE INDEX "User_e_mail_key" ON "User"("e_mail");
