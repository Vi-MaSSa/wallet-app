import { Link } from "react-router-dom";
import ArrowActionButton from "../widgets/icons/ArrowActionButton";

interface ActionCardProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export default function ActionCard({ icon, label, to }: ActionCardProps) {
  return (
    <Link to={to} className="block">
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-5 flex items-center justify-between border border-black/5 dark:border-white/10 hover:shadow-md transition">
        <div className="flex flex-col gap-2">
          {icon}
          <span className="text-xl font-semibold dark:text-white">{label}</span>
        </div>

        <ArrowActionButton />
      </div>
    </Link>
  );
}
