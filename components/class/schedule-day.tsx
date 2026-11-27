
import type { ClassDaySchedule } from "@/types/general";
import ClassSession from "./class-session";
import { CalendarDays } from "lucide-react";

interface ScheduleDayProps {
  schedule: ClassDaySchedule;
}

export default function ScheduleDay({
  schedule,
}: ScheduleDayProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5">
        <CalendarDays
          size={15}
          className="text-blue-400"
          aria-hidden="true"
        />

        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
          {schedule.day}
        </h3>

        <div className="h-px flex-1 bg-white/[0.07]" />
      </div>

      <div className="space-y-2">
        {schedule.sessions.map((session, index) => (
          <ClassSession
            key={`${schedule.day}-${session.grade}-${index}`}
            session={session}
          />
        ))}
      </div>
    </div>
  );
}
