import Link from "next/link";
import { GiBrain } from "react-icons/gi";

export const SkillsButton = () => {
  return (
    <Link href="/skills" passHref>
      <button
        className="
          btn btn-outline-secondary flex items-center justify-center 
          w-10 h-10 p-0 cursor-pointer
          transition-colors duration-300 ease-in-out
          text-gray-900 dark:text-gray-100"
        aria-label="View Skills"
        title="Ver Habilidades"
        type="button"
      >
        <GiBrain
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      </button>
    </Link>
  );
};
