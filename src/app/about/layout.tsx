import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Conoce mi experiencia profesional y formación académica como Full Stack Developer.',
  openGraph: {
    title: 'About Me | Elias Jiminián',
    description: 'Conoce mi experiencia profesional y formación académica como Full Stack Developer.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
