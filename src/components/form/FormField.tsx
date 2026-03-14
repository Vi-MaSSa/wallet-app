import { FieldError } from "react-hook-form";
import { ReactNode } from "react";
import ErrorMessage from "../ErrorMessage";

interface FormFieldProps {
  label?: string;
  children: ReactNode;
  error?: FieldError;
  helperText?: string;
  className?: string;
}

export default function FormField({
  label,
  children,
  error,
  helperText,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      {label ? (
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {label}
        </label>
      ) : null}

      <div>{children}</div>

      {helperText ? (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {helperText}
        </span>
      ) : null}

      <ErrorMessage error={error} />
    </div>
  );
}
