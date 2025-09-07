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
