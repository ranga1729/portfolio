"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

interface ArticleCardCoverProps {
  src: string;
  alt: string;
}

export default function ArticleCardCover({ src, alt }: ArticleCardCoverProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden border-b border-border/70 bg-background">
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover grayscale-35 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_center,rgba(224,224,224,0.06)_0%,transparent_70%)] text-muted-foreground">
          <BookOpen className="h-6 w-6 opacity-60" />
          <span className="font-mono text-[11px] uppercase tracking-widest opacity-60">
            Medium Article
          </span>
        </div>
      )}
    </div>
  );
}