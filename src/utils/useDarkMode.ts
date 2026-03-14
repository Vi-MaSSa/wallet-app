import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<string | null>(() => {
    return localStorage.getItem("theme");
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("dark");

    if (theme === "dark") {
      html.classList.add("dark");
    }

    if (theme === null) {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (systemDark) html.classList.add("dark");
    }

    if (theme) localStorage.setItem("theme", theme);
    else localStorage.removeItem("theme");
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return null;
      return "dark";
    });
  }

  return { theme, toggleTheme };
}
