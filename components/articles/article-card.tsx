"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ArticleCardCover from "./article-card-cover";
import ArticleCardHeader from "./article-card-header";
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
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/70 transition-colors duration-300 hover:border-accent focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArticleCardCover src={article.coverImage} alt={article.title} />

        <div className="flex flex-1 flex-col p-6">
          <ArticleCardHeader index={index} />
          <ArticleCardBody
            title={article.title}
            description={article.description}
          />
        </div>
      </Link>
    </motion.div>
  );
}