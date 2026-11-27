
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SocialLinkItem } from "@/types/general";

export default function SocialIcon({
  label,
  href,
  icon: Icon,
}: SocialLinkItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Ranga Mudunkotuwa on ${label}`}
      className="
        group relative flex min-h-28 flex-col
        items-center justify-center gap-3
        rounded-xl border border-white/8
        bg-white/2.5 px-4 py-6
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-blue-400/40
        hover:bg-white/[0.07]
        hover:shadow-[0_12px_35px_rgba(37,99,235,0.10)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#08090D]
      "
    >
      {/* External Link Indicator */}
      <ArrowUpRight
        size={14}
        className="
          absolute right-3 top-3
          text-zinc-600 opacity-0
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-blue-400
          group-hover:opacity-100
        "
      />

      {/* Social Icon */}
      <Icon
        size={25}
        aria-hidden="true"
        className="
          text-zinc-400
          transition-all duration-300
          group-hover:scale-110
          group-hover:text-white
        "
      />

      {/* Social Name */}
      <span
        className="
          font-mono text-xs tracking-wide
          text-zinc-500
          transition-colors duration-300
          group-hover:text-zinc-200
        "
      >
        {label}
      </span>
    </Link>
  );
}
