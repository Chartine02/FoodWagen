"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

interface AddMealFormProps {
  onSubmit: (data: MealFormData) => void;
  onCancel: () => void;
}

export interface MealFormData {
  name: string;
  rating: number;
  image: string;
  restaurantName: string;
  logo: string;
  status: "open" | "closed";
}

const AddMealForm: React.FC<AddMealFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<MealFormData>({
    name: "",
    rating: 0,
    image: "",
    restaurantName: "",
    logo: "",
    status: "open",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Add a meal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Food name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          name="rating"
          type="number"
          placeholder="Food rating"
          value={formData.rating || ""}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />
        <Input
          name="image"
          placeholder="Food image (link)"
          value={formData.image}
          onChange={handleChange}
        />
        <Input
          name="restaurantName"
          placeholder="Restaurant name"
          value={formData.restaurantName}
          onChange={handleChange}
        />
        <Input
          name="logo"
          placeholder="Restaurant logo (link)"
          value={formData.logo}
          onChange={handleChange}
        />
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
          options={[
            { value: "open", label: "open" },
            { value: "closed", label: "closed" },
          ]}
        />
        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1">
            Add
          </Button>
          <Button type="button" variant="secondary" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMealForm;

