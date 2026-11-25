import { ProjectItem } from "@/types/general";
import ProjectCard from "./project-card";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}