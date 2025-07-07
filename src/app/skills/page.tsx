"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip/AnimatedTooltip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect/TextGenerateEffect";

export default function SkillsPage() {
  return (
    <section className="px-6 py-16 max-w-md mx-auto">
      <TextGenerateEffect
        words="Skills"
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <AnimatedTooltip />
    </section>
  );
}
