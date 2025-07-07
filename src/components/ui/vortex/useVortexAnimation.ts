import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { fadeInOut, lerp } from "./helpers";
import type { VortexPropsForHook } from "./types";

export function useVortexAnimation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  props: VortexPropsForHook
) {
  const animationFrameId = useRef<number | null>(null);
  const tick = useRef(0);
  const particlePropCount = 9;
  const particlePropsLength = props.particleCount * particlePropCount;
  const particleProps = useRef(new Float32Array(particlePropsLength));
  const center = useRef<[number, number]>([0, 0]);

  const noise3D = createNoise3D();
  const TAU = 2 * Math.PI;

  useEffect(() => {
    const rand = (n: number): number => n * Math.random();
    const randRange = (n: number): number => n - rand(2 * n);

    const resize = (canvas: HTMLCanvasElement) => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      center.current[0] = 0.5 * canvas.width;
      center.current[1] = 0.5 * canvas.height;
    };

    const initParticle = (i: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const x = rand(canvas.width);
      const y = center.current[1] + randRange(props.rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = 50 + rand(1500);
      const speed = props.baseSpeed + rand(props.rangeSpeed);
      const radius = props.baseRadius + rand(props.rangeRadius);
      const hue = props.baseHue + rand(props.rangeHue);

      particleProps.current.set(
        [x, y, vx, vy, life, ttl, speed, radius, hue],
        i
      );
    };

    const initParticles = () => {
      tick.current = 0;
      particleProps.current = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) =>
      x > canvas.width || x < 0 || y > canvas.height || y < 0;

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    const renderGlow = (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.filter = "blur(8px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = "blur(4px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    };

    const renderToScreen = (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    };

    const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      tick.current++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = props.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        const i2 = 1 + i,
          i3 = 2 + i,
          i4 = 3 + i,
          i5 = 4 + i,
          i6 = 5 + i,
          i7 = 6 + i,
          i8 = 7 + i,
          i9 = 8 + i;

        const x = particleProps.current[i];
        const y = particleProps.current[i2];
        const n =
          noise3D(x * 0.00125, y * 0.00125, tick.current * 0.0005) * 3 * TAU;
        const vx = lerp(particleProps.current[i3], Math.cos(n), 0.5);
        const vy = lerp(particleProps.current[i4], Math.sin(n), 0.5);
        const life = particleProps.current[i5];
        const ttl = particleProps.current[i6];
        const speed = particleProps.current[i7];
        const x2 = x + vx * speed;
        const y2 = y + vy * speed;
        const radius = particleProps.current[i8];
        const hue = particleProps.current[i9];

        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

        particleProps.current[i5] = life + 1;
        particleProps.current[i] = x2;
        particleProps.current[i2] = y2;
        particleProps.current[i3] = vx;
        particleProps.current[i4] = vy;

        if (checkBounds(x, y, canvas) || life > ttl) {
          initParticle(i);
        }
      }

      renderGlow(canvas, ctx);
      renderToScreen(canvas, ctx);

      animationFrameId.current = window.requestAnimationFrame(() =>
        draw(canvas, ctx)
      );
    };

    const setup = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          resize(canvas);
          initParticles();
          draw(canvas, ctx);
        }
      }
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas);
      }
    };

    setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [
    props.backgroundColor,
    props.particleCount,
    props.baseSpeed,
    props.rangeSpeed,
    props.baseRadius,
    props.rangeRadius,
    props.baseHue,
    props.rangeHue,
    props.rangeY,
    TAU,
    canvasRef,
    containerRef,
    noise3D,
    particlePropsLength,
  ]);
}
