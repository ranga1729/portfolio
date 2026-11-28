import ClassScheduleHeader from "@/components/class/class-schedule-header";
import InstituteCard from "@/components/class/institute-card";
import { INSTITUTE_SCHEDULES } from "@/data/general";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O/L ICT Class Schedule (2027) — Homagama & Habarakada",
  description:
    "Weekly G.C.E. Ordinary Level (O/L) ICT class schedules by Ranga Mudunkotuwa for Grades 06–11 at Siyes Institute (Homagama) and Thakshila Institute (Habarakada). Call 0772123123 for inquiries.",
  alternates: {
    canonical: "/class",
  },
  openGraph: {
    title: "O/L ICT Class Schedule | Ranga Mudunkotuwa",
    description:
      "Grades 06–11 ICT class timetables at Siyes Institute (Homagama) and Thakshila Institute (Habarakada).",
    url: "/class",
  },
};

export default function ClassSchedulePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-6xl flex-1 flex-col border-x border-border bg-background px-6 py-20 sm:px-16 sm:py-24">
      <ClassScheduleHeader />

      <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        {INSTITUTE_SCHEDULES.map((institute, index) => (
          <InstituteCard
            key={institute.id}
            institute={institute}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}