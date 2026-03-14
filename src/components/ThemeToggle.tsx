import { Moon, Sun, Monitor } from "lucide-react";
import { useDarkMode } from "../utils/useDarkMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white shadow hover:opacity-80 transition "
      title="Alternar tema"
    >
      {theme === "dark" && <Moon size={18} />}
      {theme === "light" && <Sun size={18} />}
      {theme === null && <Monitor size={18} />}
    </button>
  );
}
