import Link from "next/link";
import { VscCode } from "react-icons/vsc";

export const ProjectsButton = () => {
  return (
    <Link href="/projects" passHref>
      <button
        className="
          btn btn-outline-secondary flex items-center justify-center 
          w-10 h-10 p-0 cursor-pointer
          transition-colors duration-300 ease-in-out
          text-gray-900 dark:text-gray-100"
        aria-label="View Projects"
        title="Ver Proyectos"
        type="button"
      >
        <VscCode
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      </button>
    </Link>
  );
};
