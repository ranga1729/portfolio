
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";
import type { InstituteItem } from "@/types/general";

interface InstituteInfoProps {
  institute: InstituteItem;
}

export default function InstituteInfo({
  institute,
}: InstituteInfoProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Institute Identity */}
      <div className="flex items-center gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {institute.logo ? (
            <Image
              src={institute.logo}
              alt={`${institute.name} logo`}
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
          ) : (
            <GraduationCap
              size={27}
              className="text-blue-400"
            />
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <h2 className="font-heading text-lg font-semibold tracking-tight text-white sm:text-xl">
            {institute.name}
          </h2>

          <p className="flex items-center gap-1.5 text-xs text-zinc-400">
            <MapPin size={13} className="text-blue-400" />
            {institute.location}
          </p>
        </div>
      </div>

      {/* Contact Actions */}
      <div className="flex flex-wrap items-center gap-2">
        {institute.mapUrl && (
          <Link
            href={institute.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300"
          >
            <MapPin size={14} />
            View Location
          </Link>
        )}

        {institute.phone && (
          <a
            href={`tel:${institute.phone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300"
          >
            <Phone size={14} />
            Call Institute
          </a>
        )}
      </div>
    </div>
  );
}
