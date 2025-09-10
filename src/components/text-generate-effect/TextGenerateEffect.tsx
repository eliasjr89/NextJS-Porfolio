"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.3,
  staggerDelay = 0.2,
  ariaLive = "polite",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
  ariaLive?: "off" | "polite" | "assertive";
}) => {
  const wordsArray = words.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: filter ? "blur(10px)" : "none",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration },
    },
  };

  return (
    <motion.div
      key={words} // 👈 Clave dinámica para reiniciar animación al cambiar idioma
      className={cn("font-bold", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="mt-4">
        <div
          className="dark:text-white text-black leading-snug tracking-wide"
          aria-live={ariaLive}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              variants={child}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
