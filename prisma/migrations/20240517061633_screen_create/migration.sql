-- CreateTable
CREATE TABLE "Screen" (
    "screen_id" SERIAL NOT NULL,
    "screen_capacity" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("screen_id")
);
