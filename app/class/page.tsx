
import LetterGlitch from "@/components/background/LetterGlitch";
import ClassScheduleHeader from "@/components/class/class-schedule-header";
import InstituteCard from "@/components/class/institute-card";

import { INSTITUTE_SCHEDULES } from "@/data/general";

export default function ClassSchedule() {
  return (
    <main className="relative isolate mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-6xl flex-1 flex-col overflow-hidden border-x border-white/8 bg-[#08090D]">

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <LetterGlitch
          glitchColors={["#2563EB", "#7C3AED", "#0EA5E9"]}
          glitchAmount={0.25}
          speed={0.6}
          flow={0.5}
          clickEffect="tear"
          baseColor="#08090D"
          fontSize={14}
          spacing={0.6}
          density={0.65}
          baseOpacity={0.10}
          smooth
          edgeFade={0}
          centerFade={0}
          interactive={false}
          cursorRadius={140}
          intro
          lightMode={false}
        />
      </div>

      {/* Background Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-[#08090D]/60 via-[#08090D]/75 to-[#08090D]/95"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">

        {/* Header */}
        <ClassScheduleHeader />

        {/* Institute Cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
          {INSTITUTE_SCHEDULES.map((institute, index) => (
            <InstituteCard
              key={institute.id}
              institute={institute}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[11px] tracking-wide text-zinc-500">
            FIND YOUR CLASS. START LEARNING.
          </p>
        </div>
      </div>
    </main>
  );
}
