import React from "react";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  return (
    <>
      <section className="flex w-full flex-col gap-3">
        <h1 className="text-center text-3xl">
          Welcome to your dashboard{" "}
          <span className="font-bold">{user?.firstName}</span>!
        </h1>
        <p className="text-xl">Please vote for your favorite smoothie:</p>
      </section>
      <section></section>
    </>
  );
};

export default page;
