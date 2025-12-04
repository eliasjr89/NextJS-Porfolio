"use client";
import Carousel from "@/components/carousel/carousel";
import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { useGetProjects } from "@/hooks/useGetProject";
import { useTranslation } from "@/hooks/useTranslations";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ProjectsPage() {
  const { projects, loading, projectError } = useGetProjects();
  const { t } = useTranslation();

  const slides =
    projects?.map((p) => ({
      title: p.name,
      button: "Try Project",
      src: p.screenshot,
      url: p.url,
    })) ?? [];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto overflow-hidden">
      <TextGenerateEffect
        key={t.myProjects}
        words={t.myProjects}
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />

      {loading ? (
        <div className="relative w-[70vmin] h-[70vmin] mx-auto">
          <Skeleton className="w-full h-full rounded-xl" variant="card" />
        </div>
      ) : projectError ? (
        <p className="text-center text-red-500 dark:text-red-400">
          {projectError}
        </p>
      ) : slides.length > 0 ? (
        <Carousel slides={slides} />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects found.
        </p>
      )}
    </section>
  );
}
