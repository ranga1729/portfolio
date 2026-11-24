import TechStackItem from "../tech-stack-item";

interface ProjectTechStackProps {
  techStack: string[];
  className?: string;
}

export default function ProjectTechStack({
  techStack,
  className = "mt-4 mb-5 pl-6",
}: ProjectTechStackProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {techStack.map((tech) => (
        // <span
        //   key={tech}
        //   className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
        // >
        //   {tech}
        // </span>
        <TechStackItem tech={tech} key={tech} />
      ))}
    </div>
  );
}