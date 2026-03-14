import { ReactNode } from "react";

interface WidgetCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function WidgetCard({ title, children }: WidgetCardProps) {
  return (
    <div>
      {title && (
        <h3 className="text-sm font-semibold mb-0 text-zinc-500">{title}</h3>
      )}

      {children}
    </div>
  );
}
