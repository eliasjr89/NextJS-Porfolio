import { NavButtonProps } from "@/types/types";
import Link from "next/link";

export const NavButton = ({
  href,
  label,
  title,
  icon: Icon,
}: NavButtonProps) => {
  return (
    <Link href={href} passHref>
      <button
        className="flex items-center justify-center w-10 h-10 p-0 cursor-pointer bg-transparent border-0"
        aria-label={label}
        title={title || label}
        type="button"
      >
        <Icon
          size={20}
          className="transition-colors duration-300 ease-in-out text-gray-900 dark:text-gray-100"
        />
      </button>
    </Link>
  );
};
