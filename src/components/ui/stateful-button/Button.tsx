/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useAnimate } from "motion/react";
import { ButtonProps } from "./types"; // Importamos las props
import { Loader } from "./Loader"; // Importamos el componente Loader
import { CheckIcon } from "./CheckIcon"; // Importamos el componente CheckIcon

export const Button = ({ className, children, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();

  // Función para animar el Loader
  const animateLoading = async () => {
    await animate(
      ".loader",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );
  };

  // Función para animar el éxito
  const animateSuccess = async () => {
    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.2 }
    );
    await animate(
      ".check",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.2 }
    );

    await animate(
      ".check",
      { width: "0px", scale: 0, display: "none" },
      { delay: 2, duration: 0.2 }
    );
  };

  // Maneja el evento onClick y ejecuta las animaciones
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await animateLoading();
    await props.onClick?.(event); // Llama al onClick original (si existe)
    await animateSuccess();
  };

  // Extraemos las props no relacionadas con onClick, onDrag, etc.
  const {
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    ...buttonProps
  } = props;

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      className={cn(
        "group/btn relative inline-flex items-center justify-center h-10 w-full rounded-md bg-gradient-to-br from-white/10 to-neutral-600/10 font-medium dark:text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800/10 dark:from-zinc-900/10 dark:to-zinc-900/10 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer backdrop-blur-md transition-all duration-300 ease-in-out focus:outline-none",
        className
      )}
      {...buttonProps} // Pasamos el resto de las props al botón
      onClick={handleClick} // Asociamos la función onClick personalizada
    >
      <motion.div
        layout
        className="flex items-center justify-center gap-2 relative"
      >
        <Loader /> {/* El componente Loader */}
        <CheckIcon /> {/* El componente CheckIcon */}
        <motion.span layout className="z-10">
          {children} {/* Los niños del botón, normalmente el texto */}
        </motion.span>
      </motion.div>

      {/* Estilos de animación del botón */}
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full opacity-0 transition duration-500 group-hover/btn:opacity-100"
        style={{
          background:
            "linear-gradient(to right, transparent, #ff00ff, transparent)",
        }}
      />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
        style={{
          background:
            "linear-gradient(to right, transparent, #ff00ff, transparent)",
        }}
      />
    </motion.button>
  );
};
