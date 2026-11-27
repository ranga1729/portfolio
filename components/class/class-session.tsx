
import type { ClassSessionItem } from "@/types/general";
import { Clock3 } from "lucide-react";

interface ClassSessionProps {
  session: ClassSessionItem;
}

export default function ClassSession({
  session,
}: ClassSessionProps) {
  return (
    <div className="group flex flex-col gap-2 rounded-lg border border-white/6 bg-white/2.5 px-4 py-3 transition-colors duration-300 hover:border-blue-400/20 hover:bg-white/4.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

        <span className="text-sm font-medium text-zinc-200">
          {session.grade}
        </span>
      </div>

      <div className="flex items-center gap-2 pl-4.5 text-xs font-mono tracking-wide text-zinc-400 sm:pl-0">
        <Clock3
          size={13}
          className="text-blue-400"
          aria-hidden="true"
        />

        <span>{session.time}</span>
      </div>
    </div>
  );
}
