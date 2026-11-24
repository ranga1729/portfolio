import type { LucideIcon } from "lucide-react";

interface EducationCardHeaderProps {
  title: string;
  institution: string;
  icon: LucideIcon;
}

export default function EducationCardHeader({
  title,
  institution,
  icon: Icon,
}: EducationCardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{institution}</p>
      </div>

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
        <Icon className="h-4 w-4" />
      </div>
    </div>
  );
}