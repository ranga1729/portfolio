import { NAV_ITEMS } from "@/data/general";
import LogoButton from "./logo-button";
import NavItem from "./nav-item";
import ResumeButton from "./resume-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 border-b border-border/60 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60 flex items-center justify-center">
      <div className="w-full max-w-6xl h-full grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <LogoButton />
        </div>

        <nav className="justify-self-center flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </nav>
        <div className="justify-self-end">
          <ResumeButton />
        </div>
      </div>
    </header>
  );
}