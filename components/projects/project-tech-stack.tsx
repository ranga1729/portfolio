interface ProjectTechStackProps {
  techStack: string[];
}

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  if (techStack.length === 0) return null;

  return (
    <div className="mt-auto border-t border-border/70 pt-4">
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}