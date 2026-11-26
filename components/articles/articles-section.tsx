import { ARTICLES } from "@/data/general";
import SectionHeader from "../section-header";
import ArticlesGrid from "./articles-grid";

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <div className="flex flex-col gap-12">
        <SectionHeader title="Articles" />
        <ArticlesGrid articles={ARTICLES} />
      </div>
    </section>
  );
}