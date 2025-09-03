"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function SocialButtons() {
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const email = process.env.NEXT_PUBLIC_EMAIL || "#";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";

  return (
    <div className="flex gap-6 items-center mt-10">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        tabIndex={0}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center rounded-full backdrop-blur-md p-4 border border-gray-700 hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaLinkedin
            size={24}
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
          />
        </motion.div>
      </a>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        tabIndex={0}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center rounded-full backdrop-blur-md p-4 border border-gray-700 hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaGithub
            size={24}
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300 ease-in-out"
          />
        </motion.div>
      </a>

      <a
        href={`mailto:${email}`}
        target="_blank"
        aria-label="Send an email"
        tabIndex={0}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center rounded-full backdrop-blur-md p-4 border border-gray-700 hover:shadow-lg dark:hover:shadow-white/35"
        >
          <SiGmail
            size={24}
            className="text-gray-500 hover:text-red-600 transition-colors duration-300 ease-in-out"
          />
        </motion.div>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        tabIndex={0}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center rounded-full backdrop-blur-md p-4 border border-gray-700 hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaWhatsapp
            size={24}
            className="text-gray-500 hover:text-green-600  transition-colors duration-300 ease-in-out "
          />
        </motion.div>
      </a>
    </div>
  );
}
