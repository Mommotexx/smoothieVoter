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
