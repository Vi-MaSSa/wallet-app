import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  rules?: RegisterOptions;
  error?: FieldError;
  required?: boolean;
  className?: string;
}

export default function Input({
  type,
  placeholder,
  register,
  name,
  rules,
  error,
  required = false,
  className = "",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`
        rounded
        p-3
        w-full
        border
        bg-white dark:bg-zinc-800
        text-zinc-900 dark:text-white
        text-base
        sm:text-lg
        focus:outline-none
        transition

        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-500"
            : "border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
        }
        ${className}
      `}
      {...register(name, rules)}
    />
  );
}
