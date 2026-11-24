import ProjectHeader from "./project-header";
import ProjectTechStack from "./project-tech-stack";
import ProjectContributions from "./project-contributions";
import { WorkProject } from "@/types/general";

interface CompanyProjectsProps {
  projects: WorkProject[];
}

export default function CompanyProjects({ projects }: CompanyProjectsProps) {
  return (
    <div className="mt-6 flex flex-col gap-0 divide-y divide-border/60">
      {projects.map((project, projIndex) => (
        <div
          key={project.title}
          className={projIndex > 0 ? "pt-8" : "pb-8"}
        >
          <ProjectHeader
            title={project.title}
            description={project.description}
          />
          <ProjectTechStack techStack={project.techStack} />
          <ProjectContributions highlights={project.highlights} />
        </div>
      ))}
    </div>
  );
}