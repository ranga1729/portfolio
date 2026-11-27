"use client";

import { Heart } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function Footer() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="flex w-full items-center justify-center border-t border-border bg-background">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row sm:px-16">
        <p className="font-mono text-xs text-muted-foreground">
          © {year} Ranga Mudunkotuwa
        </p>

        <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <span>Designed &amp; built with care.</span>
          <Heart
            aria-hidden="true"
            className="h-3.5 w-3.5 fill-red-500 text-red-500"
          />
        </p>
      </div>
    </footer>
  );
}