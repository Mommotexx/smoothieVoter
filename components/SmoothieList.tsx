import React from "react";
import SmoothieCard from "./SmoothieCard";
import { getSmoothies } from "@/lib/actions/smoothie.action";
import { auth } from "@clerk/nextjs";

const SmoothieList = async () => {
  const smoothies = await getSmoothies();
  const { userId } = auth();

  return (
    <section className="flex flex-col flex-wrap gap-6 md:flex-row">
      {smoothies?.map((smoothie) => (
        <SmoothieCard
          title={smoothie.name}
          ingredients={smoothie.Smoothie_Ingredient}
          key={smoothie.id}
          id={JSON.stringify(smoothie.id)}
          userId={JSON.stringify(userId)}
          stars={smoothie.Smoothie_Vote}
        />
      ))}
    </section>
  );
};

export default SmoothieList;
