"use client";

import Link from "next/link";
import { Button } from "react-bootstrap";
import { FiHome } from "react-icons/fi";

export function HomeButton() {
  return (
    <Link href="/" passHref>
      <Button
        variant="outline-secondary"
        className="flex items-center w-10 h-10 p-0 cursor-pointer"
        aria-label="Inicio"
        title="Inicio"
        type="button"
      >
        <FiHome size={20} />
      </Button>
    </Link>
  );
}
