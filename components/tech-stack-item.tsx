interface Props {
  tech: string;
}

export default function TechStackItem(props: Props) {
  return (
    <div
      key={props.tech}
      className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-foreground transition-colors hover:border-accent hover:bg-foreground hover:text-background hover:font-bold"
    >
      {props.tech}
    </div>
  )
}