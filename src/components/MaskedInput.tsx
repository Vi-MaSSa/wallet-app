import { IMaskInput, IMaskInputProps } from "react-imask";
import { FieldError } from "react-hook-form";

type MaskedInputProps = IMaskInputProps<any> & {
  className?: string;
  error?: boolean | FieldError;
  mask?: any;
  signed?: boolean;
};

export default function MaskedInput({
  className = "",
  error,
  signed,
  ...props
}: MaskedInputProps) {
  return (
    <IMaskInput
      {...props}
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
    />
  );
}
