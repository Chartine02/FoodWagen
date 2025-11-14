"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Meal } from "@/types/meal";
import StarIcon from "@/assets/star";
import TagIcon from "@/assets/tag-icon";
import EllipsisVerticalIcon from "@/assets/ellipsis-vertical";
import Menu from "./ActionMenu";

interface MealCardProps {
  meal: Meal;
  onEdit?: (meal: Meal) => void;
  onDelete?: (meal: Meal) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onEdit, onDelete }) => {
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleEdit = () => {
    setShowMenu(false);
    if (onEdit) onEdit(meal);
  };

  const handleDelete = () => {
    setShowMenu(false);
    if (onDelete) onDelete(meal);
  };

  return (
    <div className="w-full">
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-4">
        {!imageError ? (
          <Image
            src={meal.image || meal.avatar}
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

        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-2 rounded-lg text-base font-bold flex items-center gap-2 shadow-lg">
          <TagIcon />
          <span>${meal.Price || meal.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white">
          {!logoError ? (
            <Image
              src={meal.logo || meal.avatar || meal.restaurant?.logo}
              alt={meal.name}
              fill
              className="object-contain p-2"
              sizes="64px"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-sm font-bold">
                {meal.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {meal.name}
            </h3>
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-black hover:text-gray-600 hover:cursor-pointer transition-colors shrink-0 mt-1"
                aria-label="More options"
              >
                <EllipsisVerticalIcon />
              </button>
              {showMenu && (
                <Menu handleEdit={handleEdit} handleDelete={handleDelete} />
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-primary">
              <StarIcon />
            </div>
            <span className="text-lg text-primary font-medium">
              {meal.rating % 1 === 0
                ? meal.rating
                : Number(meal.rating).toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <div>
        <span
          className={`inline-flex px-4 py-1.5 rounded-xl text-sm font-semibold ${
            meal.open
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {meal.open ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
};

export default MealCard;
