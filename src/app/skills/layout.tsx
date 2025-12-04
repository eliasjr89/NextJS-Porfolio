import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Conoce las tecnologías y herramientas que domino como Full Stack Developer.',
  openGraph: {
    title: 'Skills | Elias Jiminián',
    description: 'Conoce las tecnologías y herramientas que domino como Full Stack Developer.',
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
