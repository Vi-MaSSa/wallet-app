import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ArrowActionButton from "../../widgets/icons/ArrowActionButton";

interface ActionItemProps {
  to: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function ActionItem({
  to,
  title,
  description,
  icon,
}: ActionItemProps) {
  return (
    <li>
      <Link to={to} className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          {icon}

          <div className="flex flex-col">
            <span className="font-medium dark:text-white">{title}</span>

            {description && (
              <span className="text-sm text-zinc-500">{description}</span>
            )}
          </div>
        </div>

        <ArrowActionButton />
      </Link>
    </li>
  );
}
