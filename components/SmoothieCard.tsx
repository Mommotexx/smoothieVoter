"use client";
import { voteSmoothie } from "@/lib/actions/smoothie.action";
import { Ingredient } from "@prisma/client";
import React, { useState } from "react";

interface SmoothieCardProps {
  title: string;
  ingredients: Partial<Ingredient>[] | any;
  id: string;
  userId: string;
  stars?: any[];
}

const SmoothieCard = ({
  title,
  ingredients,
  id,
  userId,
  stars,
}: SmoothieCardProps) => {
  let averageRating;
  if (stars) {
    const sumOfStars = stars?.reduce((acc, curr) => acc + curr.stars, 0);
    averageRating = sumOfStars / stars?.length;
  }

  const [hoveredStar, setHoveredStar] = useState<number>(averageRating ?? 0);
  const [selectedRating, setSelectedRating] = useState<number>(
    averageRating ?? 0
  );

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleStarClick = async (rating: number) => {
    setSelectedRating(rating);
    await voteSmoothie({
      smoothieId: JSON.parse(id),
      userId: JSON.parse(userId),
      vote: rating,
    });
  };

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
      {averageRating! > 1 && <p>Average Rating: {averageRating?.toFixed(2)}</p>}
    </div>
  );
};

export default SmoothieCard;
