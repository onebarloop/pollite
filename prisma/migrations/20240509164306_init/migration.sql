-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
