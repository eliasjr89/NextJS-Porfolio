"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      className="btn btn-outline-secondary flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
      style={{ width: 40, height: 40, padding: 0 }}
    >
      {theme === "light" ? (
        <FiMoon aria-hidden="true" size={20} />
      ) : (
        <FiSun aria-hidden="true" size={20} />
      )}
    </button>
  );
}
