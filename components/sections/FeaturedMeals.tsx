"use client";

import { useEffect, useState } from "react";
import MealCard from "@/components/MealCard";
import Modal from "@/components/ui/Modal";
import EditMealForm from "@/components/forms/EditMealForm";
import DeleteMealDialog from "@/components/forms/DeleteMealDialog";
import { Meal } from "@/types/meal";

const FeaturedMeals = () => {
  const [visibleMeals, setVisibleMeals] = useState(8);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const mealsToShow = meals.slice(0, 8);
  const hasMore = visibleMeals < meals.length;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://6852821e0594059b23cdd834.mockapi.io/Food"
      );
      const meals = await res.json();
      setMeals(meals);
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleMeals((prev) => Math.min(prev + 8, meals.length));
  };

  const handleEdit = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (data: Partial<Meal>) => {
    if (!selectedMeal) return;
    
    // Update local state
    setMeals((prevMeals) =>
      prevMeals.map((m) => (m.id === selectedMeal.id ? { ...m, ...data } : m))
    );
    
    // Add API call here
    console.log("Updating meal:", { ...selectedMeal, ...data });
    
    setShowEditModal(false);
    setSelectedMeal(null);
  };

  const handleDelete = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedMeal) return;
    
    // Update local state
    setMeals((prevMeals) => prevMeals.filter((m) => m.id !== selectedMeal.id));
    
    // Add API call here
    console.log("Deleting meal:", selectedMeal);
    
    setShowDeleteModal(false);
    setSelectedMeal(null);
  };

  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-32 xl:px-40">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Featured Meals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mealsToShow.length &&
          meals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-white hover:cursor-pointer font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span>Load more</span>
            <span>&gt;</span>
          </button>
        </div>
      )}

      {/* Edit Meal Modal */}
      {selectedMeal && (
        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
          <EditMealForm
            meal={selectedMeal}
            onSubmit={handleEditSubmit}
            onCancel={() => setShowEditModal(false)}
          />
        </Modal>
      )}

      {/* Delete Meal Dialog */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <DeleteMealDialog
          mealName={selectedMeal?.name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowDeleteModal(false)}
        />
      </Modal>
    </section>
  );
};

export default FeaturedMeals;
