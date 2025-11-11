"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Meal } from "@/types/meal";
import StarIcon from "@/assets/star";
import TagIcon from "@/assets/tag-icon";
import EllipsisVerticalIcon from "@/assets/ellipsis-vertical";

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="w-full">
      {/* Image Section with Price Tag */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        {!imageError ? (
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
        
        {/* Price Tag with Icon */}
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-2 rounded-lg text-base font-bold flex items-center gap-2 shadow-lg">
          <TagIcon />
          <span>${meal.price.toFixed(2)}</span>
        </div>
      </div>

      {/* Restaurant Info Section */}
      <div className="flex items-start gap-3">
        {/* Restaurant Logo */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white">
          {!logoError ? (
            <Image
              src={meal.restaurant.logo}
              alt={meal.restaurant.name}
              fill
              className="object-contain p-2"
              sizes="64px"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-sm font-bold">
                {meal.restaurant.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Meal Info */}
        <div className="flex-1 min-w-0">
          {/* Meal Name and Menu */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {meal.name}
            </h3>
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 mt-1"
              aria-label="More options"
            >
              <EllipsisVerticalIcon />
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="text-yellow-500">
              <StarIcon />
            </div>
            <span className="text-lg font-medium text-gray-700">
              {meal.rating % 1 === 0 ? meal.rating : meal.rating.toFixed(1)}
            </span>
          </div>

          {/* Status Badge */}
          <div className="inline-block">
            <span
              className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${
                meal.status === "open"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              {meal.status === "open" ? "Open" : "Closed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;

