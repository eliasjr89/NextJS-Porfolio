"use client";

import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { Timeline } from "@/components/timeline/Timeline";

const timelineData = [
  {
    title: "2024 - 2025",
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Front-end developer
        </h3>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Sipay
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>
            Development of dynamic interfaces and reusable components using
            JavaScript, HTML, CSS, and Vue.js, enhancing user experience and
            optimizing application performance.
          </li>
          <li>
            Integration of payment solutions via iframes, ensuring secure,
            seamless transactions compliant with security standards.
          </li>
          <li>
            Responsive design and layout implementation with CSS3 and Bootstrap,
            adapting interfaces to various devices and screen resolutions.
          </li>
          <li>
            Real-time validation implementation with v-validate, ensuring
            robust, intuitive, and error-free forms.
          </li>
          <li>
            Platform internationalization with i18n, enabling multilingual
            localization and expanding the product’s global reach.
          </li>
          <li>
            Coordination of front-end/back-end integrations, facilitating
            effective communication between services and improving overall
            system performance.
          </li>
          <li>
            Active collaboration with UX/UI teams from conceptualization to
            delivery, transforming prototypes into accessible, consistent, and
            user-centered interfaces.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2023",
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Sales Specialist
        </h3>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          European Institute of Positive Psychology
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>
            Advised clients and tailored solutions, strengthening communication
            and user focus thinking.
          </li>
          <li>
            Built strong client relationships, now applied to creating
            intuitive, user-friendly interfaces.
          </li>
          <li>
            Collaborated cross-functionally, enhancing teamwork in development
            environments.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Business Sales Executive
        </h3>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Atento
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>
            Advised businesses on energy solutions, enhancing communication and
            problem-solving skills.
          </li>
          <li>
            Managed client relationships and tailored proposals, skills
            transferable to software development.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2010 - 2022",
    content: (
      <>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Customer Service Roles
        </h3>
      </>
    ),
  },
];

export function ExperienceSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <TextGenerateEffect
        words="Professional Experience"
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />
      <Timeline data={timelineData} />
    </section>
  );
}
