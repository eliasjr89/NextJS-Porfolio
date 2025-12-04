"use client";

import { NavButtonProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavButton = ({
  href,
  label,
  title,
  icon: Icon,
}: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <button
        className={cn(
          "flex items-center justify-center w-10 h-10 p-0 cursor-pointer bg-transparent border-0 rounded-lg transition-all duration-300 ease-in-out",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
          isActive && "bg-purple-100 dark:bg-purple-900/30 ring-2 ring-purple-500"
        )}
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        title={title || label}
        type="button"
      >
        <Icon
          size={20}
          className={cn(
            "transition-colors duration-300 ease-in-out",
            isActive 
              ? "text-purple-600 dark:text-purple-400" 
              : "text-gray-900 dark:text-gray-100"
          )}
        />
      </button>
    </Link>
  );
};
