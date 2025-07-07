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
          className="relative flex items-center rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 p-4 border border-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaLinkedin size={24} />
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
          className="relative flex items-center rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 p-4 border border-gray-700 hover:bg-gray-900 hover:text-white hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaGithub size={24} />
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
          className="relative flex items-center rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 p-4 border border-gray-700 hover:bg-red-600 hover:text-white hover:shadow-lg dark:hover:shadow-white/35"
        >
          <SiGmail size={24} />
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
          className="relative flex items-center rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 p-4 border border-gray-700 hover:bg-green-600 hover:text-white hover:shadow-lg dark:hover:shadow-white/35"
        >
          <FaWhatsapp size={24} />
        </motion.div>
      </a>
    </div>
  );
}
