import { LucideIcon } from "lucide-react/types";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

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

export interface ArticleItem {
  title: string;
  description: string;
  coverImage: string;
  url: string;
}

export interface RoleItem {
  title: string;
  image: StaticImageData | string;
  tag?: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
  icon: IconType;
}

export interface ClassSessionItem {
  grade: string;
  time: string;
}

export interface ClassDaySchedule {
  day: string;
  sessions: ClassSessionItem[];
}

export interface InstituteItem {
  id: string;
  name: string;
  location: string;
  logo?: string;
  phone?: string;
  mapUrl?: string;
  schedules: ClassDaySchedule[];
}
