import { PROJECTS } from "@/data/general";
import SectionHeader from "../section-header";
import ProjectsGrid from "./projects-grid";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <div className="flex flex-col gap-12">
        <SectionHeader title="Projects" />
        <ProjectsGrid projects={PROJECTS} />
      </div>
    </section>
  );
}