import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background">
      <main className="flex w-full max-w-6xl flex-1 min-h-[calc(100dvh-5rem)] flex-col items-center justify-center border-x border-border px-6 text-center sm:px-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error // 404
        </p>

        <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground sm:text-8xl">
          404
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent"
        >
          <ArrowLeft className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-foreground" />
          <span>Back to Home</span>
        </Link>
      </main>
    </div>
  );
}