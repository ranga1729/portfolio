interface ProjectCardBodyProps {
  title: string;
  description: string;
}

export default function ProjectCardBody({
  title,
  description,
}: ProjectCardBodyProps) {
  return (
    <div className="mt-5">
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}