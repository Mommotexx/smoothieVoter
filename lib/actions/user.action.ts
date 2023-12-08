"use server";

import { prisma } from "../prisma";

export async function getUserById(params: any) {
  const { userId } = params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        clerk_id: userId,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
