"use client";

import { AnimatedTooltip } from "@/components/animated-tooltip/AnimatedTooltip";
import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { useTranslation } from "@/hooks/useTranslations";

export default function SkillsPage() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 max-w-md mx-auto">
      <TextGenerateEffect
        words={t.skills}
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <AnimatedTooltip />
    </section>
  );
}
