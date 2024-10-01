import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  backgroundColor = "",
}) => {
  const bc = backgroundColor ? backgroundColor : "";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${bc} btn btn-${variant} btn-${size} text-xl font-bold content-center rounded-full ${
        disabled ? "btn-disabled" : ""
      } ${className}`}
      style={{ maxWidth: "375px" }}
    >
      {label}
    </button>
  );
};

export default Button;
