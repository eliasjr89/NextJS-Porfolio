"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Project {
  id: string;
  name: string;
  url: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 font-semibold">
                {project.name}
              </span>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold tracking-wide flex items-center gap-2">
                Try Project <HiOutlineExternalLink className="w-5 h-5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
