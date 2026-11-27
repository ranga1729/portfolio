import Link from "next/link";
import type { SocialLinkItem } from "@/types/general";

export default function SocialIcon({ label, href, image }: SocialLinkItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Ranga Mudunkotuwa on ${label}`}
      className="group flex flex-col items-center gap-2.5 focus-visible:outline-none"
    >
      {/* White Circular Badge */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground shadow-[0_6px_20px_rgba(255,255,255,0.08)] ring-2 ring-transparent transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#F5F5F5] group-hover:shadow-[0_10px_28px_rgba(255,255,255,0.18)] group-hover:ring-accent/60 group-focus-visible:ring-ring">
        <img
          src={image}
          alt={`${label} logo`}
          className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Label Below Icon */}
      <span className="font-mono text-xs tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {label}
      </span>
    </Link>
  );
}