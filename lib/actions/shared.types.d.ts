import { User } from "@prisma/client";

export interface CreateUserParams {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<User>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}

export interface SmoothieIngredientParams {
  ingredientId: number;
  amount: number;
}

export interface AddIngredient {
  name: string;
}

export interface AddSmoothieParams {
  name: string;
  ingredients: string[];
}

export interface VoteSmoothie {
  smoothieId: number;
  userId: string;
  vote: number;
}
