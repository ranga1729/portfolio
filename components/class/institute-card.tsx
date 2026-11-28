"use client";

import { motion } from "motion/react";
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
  const totalSessions = institute.schedules.reduce(
    (count, day) => count + day.sessions.length,
    0
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex h-full flex-col rounded-xl border border-border bg-card/70 p-6 sm:p-8 transition-colors duration-300 hover:border-accent"
    >
      {/* Institute Details */}
      <div className="mt-3">
        <InstituteInfo institute={institute} />
      </div>

      <div className="my-7 h-px bg-border/70" />

      {/* Weekly Schedule Header */}
      <div className="mb-5 flex items-center justify-center">
        <h3 className="font-heading text-sm font-semibold tracking-tight text-foreground">
          Weekly Timetable
        </h3>
      </div>

      {/* Day-by-Day Sessions */}
      <div className="flex flex-1 flex-col gap-6">
        {institute.schedules.map((schedule) => (
          <ScheduleDay key={schedule.day} schedule={schedule} />
        ))}
      </div>      
    </motion.article>
  );
}