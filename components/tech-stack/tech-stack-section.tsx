import { TECH_STACKS } from "@/data/general";
import OrbitFlow from "./orbit-flow";

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="w-full scroll-mt-20 border-t border-border"
    >
      <OrbitFlow items={TECH_STACKS} />
    </section>
  );
}