/*
  Warnings:

  - The primary key for the `Smoothie_Ingredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ingredientId` on the `Smoothie_Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `smoothieId` on the `Smoothie_Ingredient` table. All the data in the column will be lost.
  - The primary key for the `Smoothie_Vote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `smoothieId` on the `Smoothie_Vote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Smoothie_Vote` table. All the data in the column will be lost.
  - You are about to drop the `_IngredientToSmoothie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SmoothieToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ingredient_id` to the `Smoothie_Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smoothie_id` to the `Smoothie_Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smoothie_id` to the `Smoothie_Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Smoothie_Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Smoothie_Ingredient" DROP CONSTRAINT "Smoothie_Ingredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "Smoothie_Ingredient" DROP CONSTRAINT "Smoothie_Ingredient_smoothieId_fkey";

-- DropForeignKey
ALTER TABLE "Smoothie_Vote" DROP CONSTRAINT "Smoothie_Vote_smoothieId_fkey";

-- DropForeignKey
ALTER TABLE "Smoothie_Vote" DROP CONSTRAINT "Smoothie_Vote_userId_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToSmoothie" DROP CONSTRAINT "_IngredientToSmoothie_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToSmoothie" DROP CONSTRAINT "_IngredientToSmoothie_B_fkey";

-- DropForeignKey
ALTER TABLE "_SmoothieToUser" DROP CONSTRAINT "_SmoothieToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SmoothieToUser" DROP CONSTRAINT "_SmoothieToUser_B_fkey";

-- AlterTable
ALTER TABLE "Smoothie_Ingredient" DROP CONSTRAINT "Smoothie_Ingredient_pkey",
DROP COLUMN "ingredientId",
DROP COLUMN "smoothieId",
ADD COLUMN     "ingredient_id" INTEGER NOT NULL,
ADD COLUMN     "smoothie_id" INTEGER NOT NULL,
ADD CONSTRAINT "Smoothie_Ingredient_pkey" PRIMARY KEY ("smoothie_id", "ingredient_id");

-- AlterTable
ALTER TABLE "Smoothie_Vote" DROP CONSTRAINT "Smoothie_Vote_pkey",
DROP COLUMN "smoothieId",
DROP COLUMN "userId",
ADD COLUMN     "smoothie_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "Smoothie_Vote_pkey" PRIMARY KEY ("user_id", "smoothie_id");

-- DropTable
DROP TABLE "_IngredientToSmoothie";

-- DropTable
DROP TABLE "_SmoothieToUser";

-- CreateTable
CREATE TABLE "_Smoothie_Vote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Smoothie_Ingredient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Smoothie_Vote_AB_unique" ON "_Smoothie_Vote"("A", "B");

-- CreateIndex
CREATE INDEX "_Smoothie_Vote_B_index" ON "_Smoothie_Vote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Smoothie_Ingredient_AB_unique" ON "_Smoothie_Ingredient"("A", "B");

-- CreateIndex
CREATE INDEX "_Smoothie_Ingredient_B_index" ON "_Smoothie_Ingredient"("B");

-- AddForeignKey
ALTER TABLE "Smoothie_Ingredient" ADD CONSTRAINT "Smoothie_Ingredient_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Ingredient" ADD CONSTRAINT "Smoothie_Ingredient_smoothie_id_fkey" FOREIGN KEY ("smoothie_id") REFERENCES "Smoothie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Vote" ADD CONSTRAINT "Smoothie_Vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Vote" ADD CONSTRAINT "Smoothie_Vote_smoothie_id_fkey" FOREIGN KEY ("smoothie_id") REFERENCES "Smoothie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Smoothie_Vote" ADD CONSTRAINT "_Smoothie_Vote_A_fkey" FOREIGN KEY ("A") REFERENCES "Smoothie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Smoothie_Vote" ADD CONSTRAINT "_Smoothie_Vote_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Smoothie_Ingredient" ADD CONSTRAINT "_Smoothie_Ingredient_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Smoothie_Ingredient" ADD CONSTRAINT "_Smoothie_Ingredient_B_fkey" FOREIGN KEY ("B") REFERENCES "Smoothie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
