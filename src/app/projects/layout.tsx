import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explora mis proyectos destacados desarrollados con React, Next.js y TypeScript.',
  openGraph: {
    title: 'Projects | Elias Jiminián',
    description: 'Explora mis proyectos destacados desarrollados con React, Next.js y TypeScript.',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
