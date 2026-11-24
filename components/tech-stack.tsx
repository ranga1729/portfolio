export interface TechCategory {
  category: string;
  items: string[];
}

export const TECH_STACK_GROUPS: TechCategory[] = [
  {
    category: "Backend & Cloud",
    items: ["ASP.NET Core", "C#", "Node.js", "PostgreSQL", "Redis", "Azure"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    category: "AI & Data",
    items: ["Gemini / OpenAI API", "RAG", "MCP", "Python", "Entity Framework"],
  },
];

export const TECH_STACK = TECH_STACK_GROUPS.flatMap((group) => group.items);

export default function TechStack() {
  return (
    <div className="border-t border-border pt-6">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Core Stack
      </p>

      <div className="flex flex-col gap-3.5">
        {TECH_STACK_GROUPS.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] text-muted-foreground/80">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground transition-colors duration-200 hover:border-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}