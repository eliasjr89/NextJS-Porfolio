import { IconType } from "react-icons";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}
export interface NavButtonProps {
  href: string;
  label: string;
  title?: string;
  icon: IconType;
}

export type Language = "ES" | "EN";

export interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export interface UseGetProjectsReturn {
  projects: Project[] | null;
  projectError: string | null;
  loading: boolean;
  refreshProject: () => Promise<void>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export interface VercelApiProject {
  id: string;
  name: string;
}

export interface Deployment {
  uid: string;
  url: string;
}

export interface Domain {
  name: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  screenshot: string;
}
