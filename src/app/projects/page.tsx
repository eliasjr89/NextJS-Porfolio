"use client";
import Carousel from "@/components/carousel/carousel";
import { TextGenerateEffect } from "@/components/text-generate-effect/TextGenerateEffect";
import { useTranslation } from "@/hooks/useTranslations";
import { Project } from "@/types/types";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const slides = projects.map((p) => ({
    title: p.name,
    button: "Try Project",
    src: p.screenshot,
    url: p.url,
  }));

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto overflow-hidden">
      <TextGenerateEffect
        key={t.myProjects}
        words={t.myProjects}
        className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading projects...
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
