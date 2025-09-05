export const fadeInOut = (t: number, m: number): number => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

export const lerp = (n1: number, n2: number, speed: number): number =>
  (1 - speed) * n1 + speed * n2;
