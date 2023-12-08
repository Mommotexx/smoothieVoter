"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
export async function getUserById(params: any) {
  const { userId } = params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        clerkId: userId,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    const { clerkId, updateData, path } = params;

    await prisma.user.update({
      where: {
        clerkId,
      },
      data: updateData,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;
    const user = await prisma.user.findFirst({
      where: {
        clerkId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete all smoothie votes for this user
    await prisma.smoothie_Vote.deleteMany({
      where: {
        userId: user.id,
      },
    });

    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
