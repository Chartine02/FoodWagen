"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import AddMealForm, { MealFormData } from "@/components/forms/AddMealForm";
import EditMealForm from "@/components/forms/EditMealForm";
import DeleteMealDialog from "@/components/forms/DeleteMealDialog";
import { Meal } from "@/types/meal";

// Example usage component
const MealFormsExample = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const handleAddMeal = (data: MealFormData) => {
    console.log("Adding meal:", data);
    // Add API call here
    setShowAddModal(false);
  };

  const handleEditMeal = (data: Partial<Meal>) => {
    console.log("Editing meal:", data);
    // Add API call here
    setShowEditModal(false);
  };

  const handleDeleteMeal = () => {
    console.log("Deleting meal:", selectedMeal);
    // Add API call here
    setShowDeleteModal(false);
  };

  return (
    <>
      {/* Add Meal Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <AddMealForm
          onSubmit={handleAddMeal}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>

      {/* Edit Meal Modal */}
      {selectedMeal && (
        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
          <EditMealForm
            meal={selectedMeal}
            onSubmit={handleEditMeal}
            onCancel={() => setShowEditModal(false)}
          />
        </Modal>
      )}

      {/* Delete Meal Dialog */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <DeleteMealDialog
          mealName={selectedMeal?.name}
          onConfirm={handleDeleteMeal}
          onCancel={() => setShowDeleteModal(false)}
        />
      </Modal>
    </>
  );
};

export default MealFormsExample;

