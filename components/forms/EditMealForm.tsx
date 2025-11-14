"use client";

import React, { useState } from "react";
import { Meal } from "@/types/meal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface EditMealFormProps {
  meal: Meal;
  onSubmit: (data: Partial<Meal>) => void;
  onCancel: () => void;
}

const EditMealForm: React.FC<EditMealFormProps> = ({ meal, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: meal.name,
    rating: meal.rating,
    image: meal.image || meal.avatar,
    logo: meal.logo || meal.avatar,
    open: meal.open,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "open" ? value === "true" : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Food name is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Edit Meal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Food name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Food rating"
          name="rating"
          type="number"
          value={formData.rating || ""}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />
        <Input
          label="Food image (link)"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <Input
          label="Restaurant logo (link)"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
        />
        <Select
          label="Restaurant status (open/close)"
          name="open"
          value={formData.open ? "true" : "false"}
          onChange={handleChange}
          options={[
            { value: "true", label: "open" },
            { value: "false", label: "closed" },
          ]}
        />
        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1">
            Save
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditMealForm;

