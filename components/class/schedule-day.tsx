import { CalendarDays } from "lucide-react";
import type { ClassDaySchedule } from "@/types/general";
import ClassSession from "./class-session";

interface ScheduleDayProps {
  schedule: ClassDaySchedule;
}

export default function ScheduleDay({ schedule }: ScheduleDayProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5">
        <CalendarDays
          className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
        <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
          {schedule.day}
        </h3>
        <div className="h-px flex-1 bg-border/60" />
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