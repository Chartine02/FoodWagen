import React from "react";
import Button from "@/components/ui/Button";

interface DeleteMealDialogProps {
  mealName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteMealDialog: React.FC<DeleteMealDialogProps> = ({
  mealName,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-4">Delete Meal</h2>
      <p className="text-gray-600 text-center mb-8">
        Are you sure you want to delete this meal? Actions cannot be reversed.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" onClick={onConfirm} className="flex-1">
          Yes
        </Button>
        <Button variant="secondary" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteMealDialog;

