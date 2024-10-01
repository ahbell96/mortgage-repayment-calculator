import React from "react";
import { FieldError } from "react-hook-form";

interface CheckboxProps {
  label: string;
  name: string;
  error?: FieldError; // Comes from react-hook-form error handling
  register: any; // React Hook Form's register function
  required?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  error,
  register,
  required = false,
  className = "",
}) => {
  return (
    <div className={`form-control ${className}`}>
      <label className="cursor-pointer flex p-3 items-center">
        <input
          type="checkbox"
          id={name}
          {...register(name, { required })}
          className={`checkbox rounded-full border-[#79888A] ${
            error ? "checkbox-error" : ""
          }`}
          style={{ width: "1.25rem", height: "1.25rem", marginRight: "1em" }}
        />
        <span className="label-text text-xl font-bold">{label}</span>
      </label>
      {error && (
        <p className="text-error mt-1">
          {error.message || `${label} is required.`}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
