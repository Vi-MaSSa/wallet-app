import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
}

export default function Button({ type = "button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className="
        btn-gradient
        w-full
        py-3
        mt-2
        rounded-lg
        cursor-pointer
        text-lg
        sm:text-xl
        font-inter-semibold
        tracking-wide
        transition
        hover:opacity-90
      "
    >
      {children}
    </button>
  );
}
