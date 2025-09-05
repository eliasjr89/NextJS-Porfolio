"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";

export const ContactButton = () => {
  return (
    <Link href="/contact" passHref>
      <button
        className="flex items-center justify-center w-10 h-10 p-0 cursor-pointer bg-transparent border-0"
        aria-label="Contact"
        title="Contact"
        type="button"
      >
        <FiMail
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      </button>
    </Link>
  );
};
