import { ArrowUpRight, FolderGit2, GitBranch } from "lucide-react";

interface ProjectCardHeaderProps {
  index: number;
}

export default function ProjectCardHeader({ index }: ProjectCardHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
          <FolderGit2 className="h-4 w-4" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
        <GitBranch className="h-3.5 w-3.5" />
        <span>Source</span>
        <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
          <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-3.5 group-hover:-translate-y-3.5 group-hover:opacity-0" />
          <ArrowUpRight className="absolute h-3.5 w-3.5 -translate-x-3.5 translate-y-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </span>
      </div>
    </div>
  );
}