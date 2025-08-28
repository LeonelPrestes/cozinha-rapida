/*
  Warnings:

  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "events";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cardapio_slug_key" ON "cardapio"("slug");
