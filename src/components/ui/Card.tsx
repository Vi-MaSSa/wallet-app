import { ReactNode } from "react";

export type CardVariant = "default" | "auth" | "widget" | "elevated";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  header?: ReactNode;
  footer?: ReactNode;
}

const VARIANT_STYLES: Record<CardVariant, string> = {
  default:
    "bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-xl shadow-sm",
  elevated:
    "bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-lg",
  auth: "bg-white dark:bg-zinc-900 ring-1 ring-black/5 dark:ring-white/10 rounded-lg shadow-xl",
  widget:
    "bg-zinc-100 dark:bg-zinc-900 rounded-xl shadow-sm border border-black/5 dark:border-white/10",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  header,
  footer,
}: CardProps) {
  return (
    <div className={`${VARIANT_STYLES[variant]} ${className}`.trim()}>
      {header && (
        <div className="p-4 border-b border-black/5 dark:border-white/10">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="p-4 border-t border-black/5 dark:border-white/10">
          {footer}
        </div>
      )}
    </div>
  );
}
