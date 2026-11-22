import Link from "next/link";

export default function LogoButton() {
  return (
    <Link 
      href={"/"}
      className="inline-flex items-center justify-center border border-border px-3 py-2 -my-2 text-foreground font-medium hover:border-accent transition-colors"      
    >
      RM.
    </Link>
  )
}