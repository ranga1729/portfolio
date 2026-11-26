import TechStackItem from "../tech-stack-item";

interface ProjectTechStackProps {
  techStack: string[];
}

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  if (techStack.length === 0) return null;

  return (
    <div className="mt-auto border-t border-border/70 pt-4">
      <div className="flex flex-wrap gap-2 justify-center-safe">
        {techStack.map((tech) => (
          <TechStackItem tech={tech} key={tech} />
        ))}
      </div>
    </div>
  );
}