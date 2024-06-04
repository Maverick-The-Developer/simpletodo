/*
  Warnings:

  - You are about to drop the column `title` on the `todo` table. All the data in the column will be lost.
  - Added the required column `content` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_todo" ("createdAt", "done", "id", "updatedAt") SELECT "createdAt", "done", "id", "updatedAt" FROM "todo";
DROP TABLE "todo";
ALTER TABLE "new_todo" RENAME TO "todo";
PRAGMA foreign_key_check("todo");
PRAGMA foreign_keys=ON;
