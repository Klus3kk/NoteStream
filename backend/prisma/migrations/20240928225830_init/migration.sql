-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "lyrics" TEXT,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);
