import { TECH_STACKS } from "@/data/general";
import SectionHeader from "../section-header";
import OrbitFlow from "./orbit-flow";

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <div className="flex flex-col gap-12">
        <SectionHeader subtitle="05 // Tech Stack" title="Technologies" />
        <OrbitFlow items={TECH_STACKS} />
      </div>
    </section>
  );
}