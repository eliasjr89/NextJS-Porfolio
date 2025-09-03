"use client";

import React from "react";
import { motion } from "motion/react";

import { useVortexAnimation } from "./useVortexAnimation";
import type { VortexProps } from "./types";
import { cn } from "@/app/lib/utils";

export const Vortex = (props: VortexProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useVortexAnimation(canvasRef, containerRef, {
    particleCount: props.particleCount || 1400,
    baseSpeed: props.baseSpeed || 1,
    rangeSpeed: props.rangeSpeed || 2.5,
    baseRadius: props.baseRadius || 1,
    rangeRadius: props.rangeRadius || 2,
    baseHue: props.baseHue || 220,
    rangeHue: 100,
    rangeY: props.rangeY || 100,
    backgroundColor: props.backgroundColor || "#000000",
  });

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-screen -z-10",
        props.containerClassName
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
