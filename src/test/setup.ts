import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      return React.createElement('div', props, children);
    },
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      return React.createElement('button', props, children);
    },
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      return React.createElement('a', props, children);
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useSpring: (value: unknown) => value,
  useAnimate: () => [
    { current: null },
    vi.fn().mockResolvedValue(undefined)
  ],
  animate: vi.fn().mockResolvedValue(undefined),
}));
