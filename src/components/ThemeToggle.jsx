"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved || "light";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {theme === "light" ? (
        <Moon
          size={20}
          className="text-gray-800 transition-transform duration-500 transform rotate-0 hover:rotate-12"
        />
      ) : (
        <Sun
          size={20}
          className="text-yellow-400 transition-transform duration-500 transform rotate-0 hover:rotate-12"
        />
      )}
    </button>
  );
}
