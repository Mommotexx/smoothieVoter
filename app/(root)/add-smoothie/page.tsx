import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SmoothieForm from "@/components/SmoothieForm";

const AddSmoothie = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <section className="flex w-full flex-col gap-3 px-6">
      <h1 className="text-center text-3xl">Add a smoothie!</h1>
      <SmoothieForm />
    </section>
  );
};

export default AddSmoothie;
