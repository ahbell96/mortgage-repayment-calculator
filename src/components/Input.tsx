import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: FieldError; // This comes from react-hook-form error handling
  register: any; // React Hook Form's register function
  required?: boolean;
  className?: string;
  flexDirection: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  error,
  register,
  required = false,
  className = "",
  flexDirection = "",
}) => {
  return (
    <div className={`form-control ${className}`}>
      <label
        className={`input input-bordered border-[#A3B6BE] flex ${flexDirection} gap-2 px-0 my-auto`}
        htmlFor={name}
      >
        <div
          className="bg-[#E4F4FC] border flex items-center px-4 font-semibold text-xl"
          style={{
            borderRadius:
              flexDirection === "flex-row-reverse"
                ? "0 10px 10px 0"
                : "10px 0 0 10px",
          }}
        >
          <span className="text-[#A3B6BE]">{label}</span>
        </div>
        <input
          className="grow"
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required })}
        />
      </label>
      {error && (
        <p className="text-error mt-1">
          {error.message || `${label} is required.`}
        </p>
      )}
    </div>
  );
};

export default Input;
