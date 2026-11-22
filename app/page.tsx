import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between border-x">
        <HeroSection />
        <p className="text-muted-foreground h-100">
          Secondary descriptive text using #B0B0B0.
        </p>
      </main>
    </div>
  );
}