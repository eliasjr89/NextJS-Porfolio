"use client";

import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { Timeline } from "@/components/timeline/Timeline";
import { useTranslation } from "@/hooks/useTranslations";

export function ExperienceSection() {
  const { t } = useTranslation();

  const experienceTimelineData = t.experienceTimeline.map((item) => ({
    title: item.year,
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {item.title}
        </h3>
        {item.company && (
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {item.company}
          </p>
        )}
        {item.responsibilities.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            {item.responsibilities.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        )}
      </>
    ),
  }));

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <TextGenerateEffect
        words={t.experienceTitle}
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <Timeline data={experienceTimelineData} />
    </section>
  );
}
