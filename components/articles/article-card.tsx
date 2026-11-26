
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import ArticleCardCover from "./article-card-cover";
import ArticleCardBody from "./article-card-body";
import { ArticleItem } from "@/types/general";

interface ArticleCardProps {
  article: ArticleItem;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      className="h-full"
    >
      <Link
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read "${article.title}" on Medium`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/70 transition-all duration-300 hover:border-accent focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {/* External Link Indicator */}
        <div
          aria-hidden="true"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/90 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <ArticleCardCover
          src={article.coverImage}
          alt={article.title}
        />

        <div className="flex flex-1 flex-col p-4">
          <ArticleCardBody
            title={article.title}
            description={article.description}
          />
        </div>
      </Link>
    </motion.div>
  );
}
