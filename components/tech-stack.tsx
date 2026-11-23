import { TECH_STACK } from "@/data/general";
import TechStackItem from "./tech-stack-item";

export default function TechStack() {
  return (
    <div className="border-t border-border pt-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <TechStackItem tech={tech} />
        ))}
      </div>
    </div>
  )
}