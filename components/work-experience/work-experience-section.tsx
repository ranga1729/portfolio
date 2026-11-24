import { WORK_EXPERIENCES } from "@/data/general";
import SectionHeader from "../section-header";
import ExperienceCard from "./experience-card";

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-20 border-t border-border px-6 sm:px-16 py-24"
    >
      <SectionHeader subtitle="02 // Experience" title="Experience" />

      <div className="flex flex-col gap-8 mt-8">
        {WORK_EXPERIENCES.map((experience, expIndex) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={expIndex}
          />
        ))}
      </div>
    </section>
  );
}