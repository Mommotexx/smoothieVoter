"use client";
import { Ingredient } from "@prisma/client";
import React, { useState } from "react";

interface SmoothieCardProps {
  title: string;
  ingredients: Partial<Ingredient>[] | any;
}

const SmoothieCard = ({ title, ingredients }: SmoothieCardProps) => {
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    console.log("Rating selected: ", rating);
  };

  console.log(ingredients);

  return (
    <div className="flex w-full flex-col rounded-md p-6 outline md:w-fit">
      <h2 className="text-2xl">{title}</h2>
      <h3 className="text-lg">Ingredients:</h3>
      <ul className="min-h-[100px]">
        {ingredients?.map((ingredient: any) => (
          <li key={ingredient.ingredient.id}>{ingredient.ingredient.name}</li>
        ))}
      </ul>
      <div className="flex self-center text-4xl">
        {[1, 2, 3, 4, 5].map((rating) => (
          <p
            key={rating}
            style={{
              cursor: "pointer",
              color:
                (hoveredStar || selectedRating) >= rating
                  ? "#fae500"
                  : "#4d4d4d",
            }}
            onMouseEnter={() => handleStarHover(rating)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => handleStarClick(rating)}
          >
            &#9733;
          </p>
        ))}
      </div>
    </div>
  );
};

export default SmoothieCard;
