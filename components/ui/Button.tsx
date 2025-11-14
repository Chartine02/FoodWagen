import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-gray-700 border border-gray-300",
    danger: "bg-red-600 text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
