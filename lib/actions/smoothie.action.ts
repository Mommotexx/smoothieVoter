"use server";

import { prisma } from "../prisma";
import { VoteSmoothie } from "./shared.types";

export async function getSmoothies() {
  try {
    // Get all smoothies, and the ingredients for the smoothies
    const smoothies = await prisma.smoothie.findMany({
      include: {
        Smoothie_Ingredient: {
          include: {
            ingredient: true,
          },
        },
        Smoothie_Vote: {
          select: {
            stars: true,
          },
        },
      },
    });
    await prisma.$disconnect();
    return smoothies;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addSmoothie(params: any) {
  try {
    const { name, ingredients } = params;

    const smoothieExists = await prisma.smoothie.findFirst({
      where: {
        name,
      },
    });

    if (smoothieExists) {
      return "Smoothie already exists";
    }

    const smoothie = await prisma.smoothie.create({
      data: {
        name,
      },
    });

    // Find ingredients or add if not exists
    for (const ingredient of ingredients) {
      const ingredientExists = await prisma.ingredient.findFirst({
        where: {
          name: ingredient,
        },
      });

      if (!ingredientExists) {
        const newIngredient = await prisma.ingredient.create({
          data: {
            name: ingredient,
          },
        });

        await prisma.smoothie_Ingredient.create({
          data: {
            ingredientId: newIngredient.id,
            amount: 1,
            smoothieId: smoothie.id,
          },
        });
      } else if (ingredientExists) {
        await prisma.smoothie_Ingredient.create({
          data: {
            ingredientId: ingredientExists.id,
            amount: 1,
            smoothieId: smoothie.id,
          },
        });
      }
    }

    await prisma.$disconnect();
    return smoothie;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function voteSmoothie(params: VoteSmoothie) {
  try {
    const { smoothieId, userId, vote } = params;
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    console.log(userId);
    console.table(user);

    if (!user) {
      throw new Error("User not found");
    }

    const voteSmoothie = await prisma.smoothie_Vote.create({
      data: {
        smoothieId,
        userId: user.id,
        stars: vote,
      },
    });

    await prisma.$disconnect();
    return voteSmoothie;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
