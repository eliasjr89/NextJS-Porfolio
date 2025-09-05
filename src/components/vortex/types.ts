import { ReactNode } from "react";

export interface VortexProps {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export type VortexPropsForHook = {
  particleCount: number;
  baseSpeed: number;
  rangeSpeed: number;
  baseRadius: number;
  rangeRadius: number;
  baseHue: number;
  rangeHue: number;
  rangeY: number;
  backgroundColor: string;
};
