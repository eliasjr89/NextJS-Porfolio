"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconType } from "react-icons";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const toggleTheme = () => setTheme(isLight ? "dark" : "light");

  const Icon: IconType = isLight ? FiMoon : FiSun;

  return (
    <button
      className="flex items-center justify-center w-10 h-10 p-0 cursor-pointer 
                 bg-transparent border-0 rounded-full 
                 transition-colors duration-300 ease-in-out"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      <Icon
        size={20}
        aria-hidden="true"
        className="text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out"
      />
    </button>
  );
}
