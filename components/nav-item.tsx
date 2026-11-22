import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavButtonProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}

export default function NavItem({
  href,
  children,
  isActive = false,
  className,
  ...props
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-1 text-sm transition-colors duration-200",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform after:duration-300",
        isActive
          ? "text-foreground after:scale-x-100"
          : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}