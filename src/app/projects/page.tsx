"use client";
import Carousel from "@/components/carousel/carousel";
import { Project } from "@/types/types";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
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
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Projects
      </h1>

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
