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