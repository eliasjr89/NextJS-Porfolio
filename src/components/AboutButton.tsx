"use client";

import Link from "next/link";
import { FiUser } from "react-icons/fi";

export const AboutButton = () => {
  return (
    <Link href="/about">
      <button
        className="btn btn-outline-secondary flex items-center w-10 h-10 p-0 cursor-pointer"
        aria-label="About Me"
        title="About Me"
        type="button"
      >
        <FiUser size={20} />
      </button>
    </Link>
  );
};
