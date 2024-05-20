/*
  Warnings:

  - You are about to drop the `cash` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cashmethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `price` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cash";

-- DropTable
DROP TABLE "cashmethod";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "price";

-- CreateTable
CREATE TABLE "Reservation" (
    "reservation_id" SERIAL NOT NULL,
    "screen_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "seat_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "CashMethod" (
    "method_id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,

    CONSTRAINT "CashMethod_pkey" PRIMARY KEY ("method_id")
);

-- CreateTable
CREATE TABLE "Price" (
    "price_id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "school_type" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("price_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Cash" (
    "cash_id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "price_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "method_id" INTEGER NOT NULL,

    CONSTRAINT "Cash_pkey" PRIMARY KEY ("cash_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_screen_id_key" ON "Reservation"("screen_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_movie_id_key" ON "Reservation"("movie_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_seat_id_key" ON "Reservation"("seat_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_user_id_key" ON "Reservation"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cash_movie_id_key" ON "Cash"("movie_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cash_price_id_key" ON "Cash"("price_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cash_user_id_key" ON "Cash"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cash_method_id_key" ON "Cash"("method_id");

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "Seat"("seat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_screen_id_fkey" FOREIGN KEY ("screen_id") REFERENCES "Screen"("screen_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_screen_id_fkey" FOREIGN KEY ("screen_id") REFERENCES "Screen"("screen_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("movie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "CashMethod"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_price_id_fkey" FOREIGN KEY ("price_id") REFERENCES "Price"("price_id") ON DELETE RESTRICT ON UPDATE CASCADE;
