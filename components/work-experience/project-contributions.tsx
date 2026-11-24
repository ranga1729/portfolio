import { HighlightItem } from "@/types/general";

interface ProjectContributionsProps {
  highlights: HighlightItem[];
}

export default function ProjectContributions({
  highlights,
}: ProjectContributionsProps) {
  return (
    <ul className="space-y-2.5 pl-6 text-sm leading-relaxed text-muted-foreground">
      {highlights.map((item) => (
        <li key={item.lead} className="relative pl-4">
          <span aria-hidden="true" className="absolute left-0 top-2.25 h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-medium text-foreground">{item.lead}</span>{" "}
          {item.detail}
        </li>
      ))}
    </ul>
  );
}