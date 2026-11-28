import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import type { InstituteItem } from "@/types/general";
import InstituteLogo from "./institute-logo";

interface InstituteInfoProps {
  institute: InstituteItem;
}

export default function InstituteInfo({ institute }: InstituteInfoProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Institute Identity */}
      <div className="flex items-center gap-4">
        <InstituteLogo src={institute.logo} name={institute.name} />

        <div className="min-w-0 flex-1 space-y-1">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {institute.name}
          </h2>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>{institute.location}</span>
          </p>
        </div>
      </div>

      {/* Contact & Location Actions */}
      {(institute.mapUrl || institute.phone) && (
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {institute.mapUrl && (
            <Link
              href={institute.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${institute.name} location on Google Maps`}
              className="group/link inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Google Maps</span>
              <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
                <ArrowUpRight className="h-3.5 w-3.5 transition-all duration-300 group-hover/link:translate-x-3.5 group-hover/link:-translate-y-3.5 group-hover/link:opacity-0" />
                <ArrowUpRight className="absolute h-3.5 w-3.5 -translate-x-3.5 translate-y-3.5 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100" />
              </span>
            </Link>
          )}

          {institute.phone && (
            <a
              href={`tel:${institute.phone}`}
              aria-label={`Call ${institute.name}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{institute.phone}</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}