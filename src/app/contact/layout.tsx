import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ponte en contacto conmigo. Estoy disponible para nuevos proyectos y oportunidades.',
  openGraph: {
    title: 'Contact | Elias Jiminián',
    description: 'Ponte en contacto conmigo. Estoy disponible para nuevos proyectos y oportunidades.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
