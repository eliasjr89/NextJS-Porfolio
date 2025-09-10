"use client";

import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { Timeline } from "@/components/timeline/Timeline";
import { useTranslation } from "@/hooks/useTranslations";

export function EducationSection() {
  const { t } = useTranslation();

  const educationTimelineData = t.timeline.map((item) => ({
    title: item.year,
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          {item.institution}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </>
    ),
  }));

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <TextGenerateEffect
        words={t.education}
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <Timeline data={educationTimelineData} />
    </section>
  );
}
