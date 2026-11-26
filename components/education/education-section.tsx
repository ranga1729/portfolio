'use client'

import { EDUCATION_HISTORY } from "@/data/general";
import SectionHeader from "../section-header";
import EducationTimeline from "./education-timeline";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <div className="flex flex-col gap-16">
        <SectionHeader title="Education" />
        <EducationTimeline items={EDUCATION_HISTORY} />
      </div>
    </section>
  );
}