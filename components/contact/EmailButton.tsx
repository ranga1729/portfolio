
import { Mail, ArrowUpRight } from "lucide-react";

interface EmailButtonProps {
  email: string;
  subject?: string;
  body?: string;
}

export default function EmailButton({
  email,
  subject = "Let's Connect",
  body = "Hi Ranga,\n\nI'd like to get in touch with you.",
}: EmailButtonProps) {
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={emailUrl}
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/15">
        <Mail size={22} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">
          Email
        </p>
        <p className="mt-1 truncate text-xs text-zinc-500">
          Drop me an email
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
      />
    </a>
  );
}
