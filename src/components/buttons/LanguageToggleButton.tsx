"use client";

import { useLanguage } from "@/context/LanguageContex";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react"; // 👈 ícono moderno de idioma

export default function ToggleLanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      type="button"
      className="
        flex items-center justify-center w-10 h-10 p-0 
        bg-transparent border-0 rounded-full 
        cursor-pointer
        transition-colors duration-300 ease-in-out
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <Languages size={20} className="text-gray-900 dark:text-gray-100" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
