"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";

interface InstituteLogoProps {
  src?: string;
  name: string;
}

export default function InstituteLogo({ src, name }: InstituteLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 group-hover:border-accent">
      {src && !hasError ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-10 w-10 object-contain grayscale-25 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <GraduationCap
          className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
          aria-hidden="true"
        />
      )}
    </div>
  );
}