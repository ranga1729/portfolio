import { Clock3 } from "lucide-react";
import type { ClassSessionItem } from "@/types/general";

interface ClassSessionProps {
  session: ClassSessionItem;
}

export default function ClassSession({ session }: ClassSessionProps) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-border/70 bg-background/80 px-4 py-3 transition-colors duration-200 hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        />
        <span className="text-sm font-medium text-foreground">
          {session.grade}
        </span>
      </div>

      <div className="flex items-center gap-2 pl-4.5 font-mono text-xs tracking-wide text-muted-foreground sm:pl-0">
        <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{session.time}</span>
      </div>
    </div>
  );
}