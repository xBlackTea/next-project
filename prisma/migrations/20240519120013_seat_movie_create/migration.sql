-- CreateTable
CREATE TABLE "Movie" (
    "movie_id" SERIAL NOT NULL,
    "movie_name" TEXT NOT NULL,
    "movie_detail" TEXT NOT NULL,
    "movie_time" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("movie_id")
);

-- CreateTable
CREATE TABLE "Seat" (
    "seat_id" SERIAL NOT NULL,
    "seat_width" INTEGER NOT NULL,
    "seat_height" INTEGER NOT NULL,
    "movie_start" TIMESTAMP(3) NOT NULL,
    "screen_id" INTEGER NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("seat_id")
);
