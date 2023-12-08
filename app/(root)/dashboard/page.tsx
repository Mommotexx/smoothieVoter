import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import SmoothieList from "@/components/SmoothieList";

const page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById({ userId });

  return (
    <section className="flex w-full flex-col gap-3 px-6 ">
      <h1 className="text-center text-3xl">
        Welcome to your dashboard{" "}
        <span className="font-bold">{user?.firstName}</span>!
      </h1>
      <p className="text-xl">Please vote for your favorite smoothie:</p>
      <SmoothieList />
    </section>
  );
};

export default page;
