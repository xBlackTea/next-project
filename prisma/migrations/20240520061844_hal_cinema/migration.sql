-- CreateTable
CREATE TABLE "cashmethod" (
    "cash_id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,

    CONSTRAINT "cashmethod_pkey" PRIMARY KEY ("cash_id")
);

-- CreateTable
CREATE TABLE "price" (
    "price_id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "schol_type" INTEGER NOT NULL,

    CONSTRAINT "price_pkey" PRIMARY KEY ("price_id")
);
