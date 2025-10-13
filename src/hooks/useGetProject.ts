// src/hooks/useGetProjects.js

import { useState, useEffect } from "react";
import { getProjects } from "../services/projects";
import { Project, UseGetProjectsReturn } from "@/types/types";

export function useGetProjects(): UseGetProjectsReturn {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [projectError, setProjectError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshProject = async () => {
    try {
      const loadedProjects = await getProjects();
      setProjects(loadedProjects);
      setProjectError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setProjectError(message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    refreshProject();
  }, []);
  return { projects, projectError, loading, refreshProject };
}
