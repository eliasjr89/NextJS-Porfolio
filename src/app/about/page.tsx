"use client";

import dynamic from "next/dynamic";

// Utilizamos importación dinámica correctamente
const ExperienceSection = dynamic(
  () =>
    import("@/app/about/ExperienceSection").then(
      (mod) => mod.ExperienceSection
    ),
  {
    ssr: false,
  }
);

const EducationSection = dynamic(
  () =>
    import("@/app/about/EducationSection").then((mod) => mod.EducationSection),
  {
    ssr: false,
  }
);

export default function AboutPage() {
  return (
    <>
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
