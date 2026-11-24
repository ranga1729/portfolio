import { EducationItem } from "@/types/general";
import EducationCardHeader from "./education-card-header";
import EducationHighlights from "./education-highlights";

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent">
      {/* Mobile Date Badge */}
      <span className="mb-2 block font-mono text-xs text-muted-foreground md:hidden">
        {item.period}
      </span>

      <EducationCardHeader
        title={item.title}
        institution={item.institution}
        icon={item.icon}
      />

      <EducationHighlights highlights={item.highlights} />
    </div>
  );
}