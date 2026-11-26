import { ArrowUpRight, BookText } from "lucide-react";

interface ArticleCardHeaderProps {
  index: number;
}

export default function ArticleCardHeader({ index }: ArticleCardHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
          <BookText className="h-3.5 w-3.5" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
        <span>Medium</span>
        <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
          <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-3.5 group-hover:-translate-y-3.5 group-hover:opacity-0" />
          <ArrowUpRight className="absolute h-3.5 w-3.5 -translate-x-3.5 translate-y-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </span>
      </div>
    </div>
  );
}