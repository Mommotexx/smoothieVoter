-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clerk_id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smoothie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Smoothie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smoothie_Ingredient" (
    "smoothieId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Smoothie_Ingredient_pkey" PRIMARY KEY ("smoothieId","ingredientId")
);

-- CreateTable
CREATE TABLE "Smoothie_Vote" (
    "userId" INTEGER NOT NULL,
    "smoothieId" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,

    CONSTRAINT "Smoothie_Vote_pkey" PRIMARY KEY ("userId","smoothieId")
);

-- CreateTable
CREATE TABLE "_SmoothieToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientToSmoothie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerk_id_key" ON "User"("clerk_id");

-- CreateIndex
CREATE UNIQUE INDEX "_SmoothieToUser_AB_unique" ON "_SmoothieToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SmoothieToUser_B_index" ON "_SmoothieToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToSmoothie_AB_unique" ON "_IngredientToSmoothie"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToSmoothie_B_index" ON "_IngredientToSmoothie"("B");

-- AddForeignKey
ALTER TABLE "Smoothie_Ingredient" ADD CONSTRAINT "Smoothie_Ingredient_smoothieId_fkey" FOREIGN KEY ("smoothieId") REFERENCES "Smoothie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Ingredient" ADD CONSTRAINT "Smoothie_Ingredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Vote" ADD CONSTRAINT "Smoothie_Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoothie_Vote" ADD CONSTRAINT "Smoothie_Vote_smoothieId_fkey" FOREIGN KEY ("smoothieId") REFERENCES "Smoothie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SmoothieToUser" ADD CONSTRAINT "_SmoothieToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Smoothie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SmoothieToUser" ADD CONSTRAINT "_SmoothieToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToSmoothie" ADD CONSTRAINT "_IngredientToSmoothie_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToSmoothie" ADD CONSTRAINT "_IngredientToSmoothie_B_fkey" FOREIGN KEY ("B") REFERENCES "Smoothie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
