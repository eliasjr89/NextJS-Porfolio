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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
