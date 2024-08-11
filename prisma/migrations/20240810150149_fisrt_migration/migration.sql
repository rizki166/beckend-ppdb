/*
  Warnings:

  - Added the required column `imageMurid` to the `Ppdb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ppdb" ADD COLUMN     "imageMurid" TEXT NOT NULL;
