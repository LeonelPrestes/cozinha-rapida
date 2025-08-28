/*
  Warnings:

  - Added the required column `preco` to the `cardapio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "details" TEXT,
    "preco" REAL NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_cardapio" ("date", "details", "id", "slug", "title") SELECT "date", "details", "id", "slug", "title" FROM "cardapio";
DROP TABLE "cardapio";
ALTER TABLE "new_cardapio" RENAME TO "cardapio";
CREATE UNIQUE INDEX "cardapio_slug_key" ON "cardapio"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
