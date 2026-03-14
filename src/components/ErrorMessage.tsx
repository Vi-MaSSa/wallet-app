import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error?: FieldError;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <span className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 5a7 7 0 11-7 7 7 7 0 017-7z"
        />
      </svg>
      {error.message}
    </span>
  );
}
