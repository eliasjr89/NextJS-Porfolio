"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { HomeButton } from "../buttons/HomeButton";
import { ProjectsButton } from "../buttons/ProjectsButton";
import { ContactButton } from "../buttons/ContactButton";
import { AboutButton } from "../buttons/AboutButton";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import { SkillsButton } from "../buttons/SkillsButton";
import { motion, AnimatePresence } from "framer-motion";

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);

  if (!hasMounted) return null;

  return (
    <div className="w-full bg-gray-100/10 dark:bg-black/10 backdrop-blur-md border-b border-gray-700 sticky top-4 z-30 rounded-md mx-auto max-w-xl transition-colors duration-300 ease-in-out">
      <div className="flex justify-center py-2">
        <button
          onClick={handleToggle}
          className="text-black dark:text-white cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300 ease-in-out"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          title={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <FiChevronUp size={25} />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-wrap justify-center gap-4 p-2"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 160 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HomeButton />
            <AboutButton />
            <SkillsButton />
            <ProjectsButton />
            <ContactButton />
            <ToggleThemeButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
