import { ArticleItem } from "@/types/general";
import ArticleCard from "./article-card";

interface ArticlesGridProps {
  articles: ArticleItem[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {articles.map((article, index) => (
        <ArticleCard key={article.url} article={article} index={index} />
      ))}
    </div>
  );
}