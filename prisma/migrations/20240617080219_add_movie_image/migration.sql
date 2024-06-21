/*
  Warnings:

  - Added the required column `movie_image1` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movie_image2` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "movie_image1" TEXT NOT NULL,
ADD COLUMN     "movie_image2" TEXT NOT NULL;
