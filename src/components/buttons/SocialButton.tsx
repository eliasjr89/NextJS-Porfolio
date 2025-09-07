"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: IconType;
  hoverColor: string;
}

export const SocialButton = ({
  href,
  label,
  icon: Icon,
  hoverColor,
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={0}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative flex items-center rounded-full backdrop-blur-md p-4 border border-gray-700 hover:shadow-lg dark:hover:shadow-white/35"
      >
        <Icon
          size={24}
          className={`text-gray-500 transition-colors duration-300 ease-in-out ${hoverColor}`}
        />
      </motion.div>
    </a>
  );
};
