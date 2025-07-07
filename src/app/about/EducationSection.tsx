"use client";

import { Timeline } from "@/components/ui/timeline/Timeline";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect/TextGenerateEffect";

const educationTimelineData = [
  {
    title: "2024 - 2025",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Full Stack DEVELOPER Bootcamp
        </h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          4Geeks Academy
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Intensive training in frontend and backend development technologies,
          focusing on building modern web applications.
        </p>
      </>
    ),
  },
  {
    title: "2024 - 2026",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Vocational Training in Microcomputer Systems and Networks
        </h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Ilerna
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Focused on practical skills for managing microcomputer systems,
          network configurations, and troubleshooting.
        </p>
      </>
    ),
  },
  {
    title: "2006 - 2008",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Bachelor’s DEGREE
        </h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          IES Valdemorillo
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Completed foundational studies in various academic disciplines with a
          focus on technical and scientific subjects.
        </p>
      </>
    ),
  },
];

export function EducationSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <TextGenerateEffect
        words="Education"
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <Timeline data={educationTimelineData} />
    </section>
  );
}
