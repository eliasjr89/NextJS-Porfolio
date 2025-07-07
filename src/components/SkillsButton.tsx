"use client";

import Link from "next/link";
import { GiBrain } from "react-icons/gi";

export const SkillsButton = () => {
  return (
    <Link href="/skills" passHref>
      <button
        className="btn btn-outline-secondary d-flex items-center w-10 h-10 p-0 cursor-pointer"
        aria-label="View Skills"
        title="Ver Habilidades"
        type="button"
      >
        <GiBrain size={20} />
      </button>
    </Link>
  );
};
