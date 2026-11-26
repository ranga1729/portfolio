interface ArticleCardBodyProps {
  title: string;
  description: string;
}

export default function ArticleCardBody({
  title,
  description,
}: ArticleCardBodyProps) {
  return (
    <div className="mt-1">
      <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-white sm:text-xl">
        {title}
      </h3>
      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground text-justify">
        {description}
      </p>
    </div>
  );
}