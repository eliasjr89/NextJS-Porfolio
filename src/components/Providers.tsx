"use client";

import { LanguageProvider } from "@/context/LanguageContex";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
