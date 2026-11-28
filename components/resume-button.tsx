import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CV_LINK } from "@/data/general";

export default function ResumeButton() {
  return (
    <Button
      asChild
      variant="ghost"
      className="group h-auto p-0 bg-transparent hover:bg-transparent text-foreground hover:text-foreground font-normal text-sm tracking-tight"
    >
      <Link
        href={CV_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5"
      >
        <span className="border-b border-muted-foreground/60 pb-0.5 transition-colors duration-300 group-hover:border-foreground">
          Get Resume
        </span>

        <span className="relative inline-flex h-4 w-4 items-center justify-center overflow-hidden">
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-4 translate-y-4 text-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </span>
      </Link>
    </Button>
  );
}