-- CreateTable
CREATE TABLE "events" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");
