import { FolderGit2 } from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export default function ProjectHeader({
  title,
  description,
}: ProjectHeaderProps) {
  return (
    <div className="flex items-start gap-2.5 mb-2">
      <FolderGit2 className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
      <div>
        <h4 className="font-heading text-base sm:text-lg font-medium text-foreground">
          {title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}