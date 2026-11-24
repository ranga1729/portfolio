import { GraduationCap } from "lucide-react";

export interface HighlightItem {
  lead: string;
  detail: string;
}

export interface WorkProject {
  title: string;
  description: string;
  techStack: string[];
  highlights: HighlightItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  projects: WorkProject[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  icon: typeof GraduationCap;
  status?: string;
  highlights: { label: string; value: string }[];
}