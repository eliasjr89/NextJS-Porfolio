// src/services/projects.js

import { Project } from "@/types/types";
import { api } from "@/lib/axios";
import axios from "axios";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await api.get<Project[]>("/projects");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch projects"
      );
    } else {
      throw new Error("Unexpected error ocurred");
    }
  }
};