
import type { InstituteItem } from "@/types/general";
import InstituteInfo from "./institute-info";
import ScheduleDay from "./schedule-day";

interface InstituteCardProps {
  institute: InstituteItem;
  index: number;
}

export default function InstituteCard({
  institute,
  index,
}: InstituteCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/9 bg-[#101116]/90 shadow-[0_12px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-blue-400/25">
      {/* Top Accent */}
      <div className="h-0.5 w-full bg-linear-to-r from-blue-600 via-violet-500 to-cyan-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        {/* Institute Header */}
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-blue-400">
            INSTITUTE / 0{index + 1}
          </span>

          <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-[10px] tracking-wide text-zinc-400">
            ICT CLASSES
          </span>
        </div>

        <div className="mt-6">
          <InstituteInfo institute={institute} />
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/8" />

        {/* Schedule */}
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-heading text-sm font-semibold text-white">
            Weekly Schedule
          </h3>

          <span className="font-mono text-[10px] tracking-wide text-zinc-500">
            {institute.schedules.length} DAYS
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          {institute.schedules.map((schedule) => (
            <ScheduleDay
              key={schedule.day}
              schedule={schedule}
            />
          ))}
        </div>

        {/* Bottom Branding */}
        <div className="mt-8 flex items-center gap-2 border-t border-white/[0.07] pt-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="font-mono text-[10px] tracking-wide text-zinc-500">
            SCHEDULE AVAILABLE
          </span>
        </div>
      </div>
    </article>
  );
}
