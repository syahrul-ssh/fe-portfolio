import type { LucideIcon } from "lucide-react";

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  category: "Fullstack" | "Backend";
  icon: LucideIcon;
  description: string;
  technologies: string;
  year: string;
};

export type Metric = {
  icon: LucideIcon;
  value: string;
  label: string;
};
