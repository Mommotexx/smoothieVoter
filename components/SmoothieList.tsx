import React from "react";
import SmoothieCard from "./SmoothieCard";
import { getSmoothies } from "@/lib/actions/smoothie.action";

const SmoothieList = async () => {
  const smoothies = await getSmoothies();
  return (
    <section className="flex flex-col flex-wrap gap-6 md:flex-row">
      {smoothies?.map((smoothie) => (
        <SmoothieCard
          title={smoothie.name}
          ingredients={smoothie.Smoothie_Ingredient}
          key={smoothie.id}
        />
      ))}
    </section>
  );
};

export default SmoothieList;
