"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      className="btn btn-outline-secondary flex items-center justify-center cursor-pointer 
                 w-10 h-10 p-0"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "light" ? (
        <FiMoon
          aria-hidden="true"
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      ) : (
        <FiSun
          aria-hidden="true"
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      )}
    </button>
  );
}
