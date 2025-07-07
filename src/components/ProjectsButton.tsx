"use client";

import Link from "next/link";
import { VscCode } from "react-icons/vsc";

export const ProjectsButton = () => {
  return (
    <Link href="/projects" passHref>
      <button
        className="btn btn-outline-secondary d-flex items-center justify-center w-10 h-10 p-0 cursor-pointer"
        aria-label="View Projects"
        title="Ver Proyectos"
        type="button"
      >
        <VscCode size={20} />
      </button>
    </Link>
  );
};
