import LogoButton from "./logo-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60 flex items-center justify-center">
      <div className="w-full max-w-6xl h-20 flex items-center justify-between">
        <LogoButton />
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}