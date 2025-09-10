"use client";

import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { SocialLinks } from "../components/buttons/SocialLinks";
import { useTranslation } from "@/hooks/useTranslations";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-start mt-20 py-6 px-6 text-center h-full text-[var(--foreground)] transition-colors duration-300 ease-in-out relative">
      <TextGenerateEffect
        words={t.greeting}
        className="text-4xl text-white md:text-6xl font-bold"
        duration={1.2}
      />

      <TextGenerateEffect
        words={t.description}
        className="text-lg md:text-2xl max-w-xl mt-6"
        duration={0.2}
      />

      <div className="mt-12">
        <SocialLinks />
      </div>
    </main>
  );
}
