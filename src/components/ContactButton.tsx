"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";

export const ContactButton = () => {
  return (
    <Link href="/contact" passHref>
      <button
        className="btn btn-outline-secondary flex items-center w-10 h-10 p-0 cursor-pointer"
        aria-label="Contact"
        title="Contact"
        type="button"
      >
        <FiMail size={20} />
      </button>
    </Link>
  );
};
