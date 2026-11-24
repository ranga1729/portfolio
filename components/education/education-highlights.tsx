import { EducationHighlight } from "@/types/general";

interface EducationHighlightsProps {
  highlights: EducationHighlight[];
}

export default function EducationHighlights({
  highlights,
}: EducationHighlightsProps) {
  if (highlights.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4">
      {highlights.map((detail) => (
        <span
          key={detail.label}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
        >
          <span>{detail.label}:</span>
          <span className="font-medium text-foreground">{detail.value}</span>
        </span>
      ))}
    </div>
  );
}