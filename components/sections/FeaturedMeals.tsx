"use client";

import React, { useState } from "react";
import MealCard from "@/components/MealCard";
import { featuredMeals } from "@/data/meals";

const FeaturedMeals = () => {
  const [visibleMeals, setVisibleMeals] = useState(8);
  const mealsToShow = featuredMeals.slice(0, visibleMeals);
  const hasMore = visibleMeals < featuredMeals.length;

  const handleLoadMore = () => {
    setVisibleMeals((prev) => Math.min(prev + 8, featuredMeals.length));
  };

  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-32 xl:px-40">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Featured Meals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mealsToShow.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span>Load more</span>
            <span>&gt;</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedMeals;
