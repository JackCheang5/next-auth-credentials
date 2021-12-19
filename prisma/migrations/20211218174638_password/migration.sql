/*
  Warnings:

  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `username` VARCHAR(10) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;
