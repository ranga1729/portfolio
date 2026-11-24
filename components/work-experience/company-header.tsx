import { Building2 } from "lucide-react";

interface CompanyHeaderProps {
  company: string;
  role: string;
  index: number;
}

export default function CompanyHeader({
  company,
  role,
  index,
}: CompanyHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-border/70">
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
          <Building2 className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            {company}
          </h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      <span className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}