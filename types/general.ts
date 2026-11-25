import { LucideIcon } from "lucide-react/types";

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

export interface EducationHighlight {
  label: string;
  value: string;
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  icon: LucideIcon;
  status?: string;
  highlights: EducationHighlight[];
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}