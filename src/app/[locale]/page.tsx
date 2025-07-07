"use client";

import { useTranslations } from "next-intl";
import { SocialButtons } from "@/components/SocialButtons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect/TextGenerateEffect";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex flex-col items-center justify-start mt-20 py-6 px-6 text-center h-full text-[var(--foreground)] transition-colors duration-300 ease-in-out relative">
      <TextGenerateEffect
        words={t("greeting")}
        className="text-4xl text-white md:text-6xl font-bold transition-colors duration-300 ease-in-out"
        duration={2.2}
        aria-live="polite"
      />

      <TextGenerateEffect
        words={t("description")}
        className="text-lg md:text-2xl max-w-xl mt-6 transition-colors duration-300 ease-in-out"
        duration={0.2}
        aria-live="polite"
      />

      <div className="mt-12">
        <SocialButtons />
      </div>
    </main>
  );
}
