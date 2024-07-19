/*
  Warnings:

  - Added the required column `movie_cast` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movie_director` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "movie_cast" TEXT NOT NULL,
ADD COLUMN     "movie_director" TEXT NOT NULL;
