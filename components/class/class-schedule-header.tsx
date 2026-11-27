
import { BookOpen, GraduationCap } from "lucide-react";

export default function ClassScheduleHeader() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2">
        <GraduationCap
          size={15}
          className="text-blue-400"
        />

        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-blue-300">
          Teaching & Education
        </span>
      </div>

      <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Class <span className="text-blue-400">Schedule.</span>
      </h1>

      <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
        Explore my weekly ICT classes for local O/L students.
        Find your grade, check the class timings, and visit
        the respective institute.
      </p>

      <div className="mt-7 flex items-center gap-2 text-xs text-zinc-500">
        <BookOpen size={14} className="text-blue-400" />

        <span className="font-mono tracking-wide">
          ICT / ORDINARY LEVEL
        </span>
      </div>
    </div>
  );
}
